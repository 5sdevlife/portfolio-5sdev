import { ReactElement } from "react";
import GridNumberLines from "../components/ide/GridNumberLines";
import EditorProgramming from "../components/ide/EditorProgramming";

const EditorBody = (): ReactElement<HTMLDivElement> => {
  return (
    <div className="editor-body">
      <GridNumberLines countLines={60} />
      <EditorProgramming />
    </div>
  );
};

export default EditorBody;