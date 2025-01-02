import { useMemo } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

interface RichEditorProps {
  placeholder: string;
  onChange: (value: string) => void;
  value?: string;
}

const RichEditor = ({ placeholder, onChange, value }: RichEditorProps) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-[60%]"
    />
  );
};

export default RichEditor;
