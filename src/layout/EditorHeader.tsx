import { ReactElement } from "react";
import EditorOption from "../components/editor/EditorOption";

const EditorHeader = (): ReactElement<HTMLDivElement> => {
  return (
    <div className="editor-header">
      <EditorOption option="close" />
      <EditorOption option="minimize" />
      <EditorOption option="maximize" />
    </div>
  );
};

export default EditorHeader;