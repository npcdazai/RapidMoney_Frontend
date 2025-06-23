import { Button } from "antd";
import React from "react";
import requests from "./api";
import endpoints from "@/constants/endpoints";

let UploadUtils = {};

const upload = function ({
  data,
  file,
  filename,
  onError,
  onProgress,
  onSuccess,
}) {
  const formData = new FormData();
  if (data) {
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
  }
  formData.append("attachment[0]", file);
  const api = requests();
  api
    .post(
      endpoints.ATTACHMENT,
      formData,
      true,
      {},
      {
        onUploadProgress: ({ total, loaded }) => {
          onProgress(
            { percent: Math.round((loaded / total) * 100).toFixed(2) },
            file
          );
        },
      }
    )
    .then((response) => {
      onSuccess(response.data, file);
    })
    .catch((error) => {
      onError(error);
    });
};

class DraggerContent extends React.Component {
  render() {
    return (
      <div style={{ padding: 30 }}>
        <div>
          <i className='ri-upload-cloud-2-fill f-s-24 text-muted'></i>
        </div>
        <div>
          <div>
            <strong className='text-primary'>Upload an Image</strong>
          </div>
          <div className='text-muted'>or drag and drop JPEG or PNG</div>
        </div>
      </div>
    );
  }
}

UploadUtils.Content = DraggerContent;

UploadUtils.props = {
  action: "",
  listType: "picture-card",
  showUploadList: { showPreviewIcon: false },
  customRequest: upload,
  accept: "image/jpeg, image/png, image/webp, image/heic, image/heif",
  maxCount: 1,
};

UploadUtils.multipleProps = {
  action: "",
  listType: "picture-card",
  showUploadList: { showPreviewIcon: false },
  customRequest: upload,
  accept: "image/jpeg, image/png, image/webp, image/heic, image/heif",
  multiple: true,
};

UploadUtils.multiplePropsThree = {
  action: "",
  listType: "picture-card",
  showUploadList: { showPreviewIcon: false },
  customRequest: upload,
  accept: "image/jpeg, image/png, image/webp, image/heic, image/heif",
  multiple: true,
  maxCount: 3,
};

UploadUtils.formItemProps = {
  valuePropName: "fileList",
  getValueFromEvent: (e) => {
    return Array.isArray(e) ? e : e && e.fileList;
  },
};

UploadUtils.CardContent = function ({ padding = 30 }) {
  return (
    <>
      <div style={{ padding: padding }}>
        <div>
          <i className='ri-upload-cloud-2-fill f-s-24 text-muted'></i>
        </div>
        <div>
          <strong className='text-primary'>Upload</strong>
        </div>
      </div>
    </>
  );
};

UploadUtils.buttonContent = class extends React.Component {
  render() {
    return (
      <Button className='d-flex align-items-center text-muted'>
        <i className='ri-upload-line'></i>
        <span>Upload</span>
      </Button>
    );
  }
};

UploadUtils.processUploadImage = (x, is_multiple = false) => {
  // console.log(x)
  if (is_multiple === true) {
    if (Array.isArray(x)) {
      return x.map((y) => y?.response?.[0] ?? y);
    } else {
      return [];
    }
  }
  if (
    ![null, undefined, ""].includes(x?.[0]?.response)
    // ![null, undefined, ""].includes(x.response)
  ) {
    return x[0].response;
  } else {
    return x;
  }
};

UploadUtils.buttonTypeProps = {
  action: "",
  customRequest: upload,
  accept: "image/jpeg, image/png, image/webp, image/heic, image/heif",
  maxCount: 1,
  showUploadList: false,
};

export default UploadUtils;
