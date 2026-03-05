const ENTITY_MAP = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
};

const decodeHtmlEntities = (input = "") =>
  input.replace(/(&nbsp;|&amp;|&lt;|&gt;|&quot;|&#39;)/g, (entity) => ENTITY_MAP[entity] || entity);

export const htmlToPlainText = (input = "") => {
  const noTags = input.replace(/<[^>]*>/g, " ");
  const decoded = decodeHtmlEntities(noTags);
  return decoded.replace(/\s+/g, " ").trim();
};

const parseSchemaCandidate = (schemaCandidate) => {
  if (!schemaCandidate) return null;

  if (typeof schemaCandidate === "object") {
    return schemaCandidate;
  }

  if (typeof schemaCandidate === "string") {
    try {
      return JSON.parse(schemaCandidate);
    } catch (error) {
      return null;
    }
  }

  return null;
};

const normalizeFaqSchema = (schema) => {
  if (schema?.["@type"] !== "FAQPage" || !Array.isArray(schema?.mainEntity)) {
    return schema;
  }

  const mainEntity = schema.mainEntity
    .map((entity) => {
      const question = htmlToPlainText(entity?.name || "");
      const answerRaw =
        typeof entity?.acceptedAnswer === "string"
          ? entity.acceptedAnswer
          : entity?.acceptedAnswer?.text || "";
      const answer = htmlToPlainText(answerRaw);

      if (!question || !answer) {
        return null;
      }

      return {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      };
    })
    .filter(Boolean);

  if (!mainEntity.length) {
    return null;
  }

  return {
    ...schema,
    "@context": schema?.["@context"] || "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
};

const normalizeSchemaObject = (schema) => {
  if (!schema || typeof schema !== "object" || Array.isArray(schema)) {
    return null;
  }

  return normalizeFaqSchema(schema);
};

export const getStructuredDataScripts = (schemaCandidate) => {
  const parsed = parseSchemaCandidate(schemaCandidate);
  if (!parsed) return [];

  let candidates = [];
  if (Array.isArray(parsed)) {
    candidates = parsed;
  } else if (Array.isArray(parsed?.schemas)) {
    candidates = parsed.schemas;
  } else if (Array.isArray(parsed?.scripts)) {
    candidates = parsed.scripts;
  } else {
    candidates = [parsed];
  }

  return candidates.map(normalizeSchemaObject).filter(Boolean);
};

export const schemaToJsonLd = (schema) =>
  JSON.stringify(schema).replace(/</g, "\\u003c");

export const buildFaqSchemaFromStepSections = (faqSection = {}) => {
  const steps = Array.isArray(faqSection?.steps) ? faqSection.steps : [];

  const mainEntity = steps.flatMap((step) => {
    const questions = Array.isArray(step?.questions) ? step.questions : [];

    return questions
      .map((item) => {
        const question = htmlToPlainText(item?.question || "");
        const answer = htmlToPlainText(item?.answer || "");

        if (!question || !answer) {
          return null;
        }

        return {
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        };
      })
      .filter(Boolean);
  });

  if (!mainEntity.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
};

export const buildFaqSchemaFromQuestions = (questions = []) => {
  const safeQuestions = Array.isArray(questions) ? questions : [];

  const mainEntity = safeQuestions
    .map((item) => {
      const question = htmlToPlainText(item?.question || item?.name || "");
      const answerRaw = item?.answer || item?.acceptedAnswer?.text || "";
      const answer = htmlToPlainText(answerRaw);

      if (!question || !answer) {
        return null;
      }

      return {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      };
    })
    .filter(Boolean);

  if (!mainEntity.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
};
