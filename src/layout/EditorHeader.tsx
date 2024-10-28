import { ReactElement } from "react";
import EditorOption from "../components/ide/EditorOption";

const EditorHeader = (): ReactElement<HTMLDivElement> => {
  return (
    <>
      <div className="editor-header">
        <EditorOption option="close" />
        <EditorOption option="minimize" />
        <EditorOption option="maximize" />
      </div>
      <div className="editor-tabs">
        <div className="tab-active">
          <label>SoftwareEngineer.ts</label>
        </div>
      </div>
    </>
  );
};

export default EditorHeader;