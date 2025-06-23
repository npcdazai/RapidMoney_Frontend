import "./globals.scss";
import "./app.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loading() {
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 38 }} spin />} />
    </div>
  );
}
