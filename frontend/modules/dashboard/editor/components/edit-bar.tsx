import React, { useState } from "react";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");

  const handleChange = (value: string) => {
    setContent(value);
  };

  return (
    <div className="editor">
      <ReactQuill value={content} onChange={handleChange} />
    </div>
  );
};

export default RichTextEditor;
