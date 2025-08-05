const { Image } = require("antd");

function MemberCard({ name, title, imgUrl, alt, linkedin, description, cardRef }) {
  return (
    <div className="max-w-[270px] [perspective:1000px] group" ref={cardRef}>
      <div className="relative w-full h-auto transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div>
          <div className="bg-[#F4F5F8] rounded-4xl relative w-full mx-auto overflow-hidden mb-3 pt-4">
            <div className="overflow-hidden rounded-xl w-full h-[310px]">
              <Image
                src={imgUrl}
                alt={alt}
                preview={false}
                width={270}
                height={310}
                className="w-full h-full object-cover transform group-hover:opacity-0 transition-opacity duration-1000"
              />
            </div>
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-[18px] right-4 transition-transform hover:scale-110 hover:rotate-6"
              >
                {/* LinkedIn SVG */}
                <svg width="24" height="24" fill="#0B63BD" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                </svg>
              </a>
            )}
          </div>
          <div className="text-start block group-hover:opacity-0 transition-opacity group-hover:duration-100 duration-1000">
            <div className="text-black font-bold text-[20px]">{name}</div>
            <div className="text-sm text-[#333333]">{title}</div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-[#F4F5F8] rounded-4xl px-5 py-[22px] [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
          <div>
            <div className="flex justify-end w-full mb-4">
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110 hover:rotate-6"
                >
                  <svg width="24" height="24" fill="#0B63BD" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                  </svg>
                </a>
              )}
            </div>
            <p className="text-sm text-[#00000087] font-normal leading-relaxed">
              {
               description && description?.length > 300
                  ? `${description.slice(0, 300)}...`
                  : description
              }
            </p>
          </div>
          <div className="flex items-center mt-auto">
            <div className="w-11 h-11 rounded-full overflow-hidden mr-3 bg-white shrink-0">
              <Image
                src={imgUrl}
                alt={alt}
                preview={false}
                width={44}
                height={44}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-black font-bold mb-[2px]">{name}</div>
              <div className="text-[#333333] text-[13px]">{title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;