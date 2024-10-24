import { ReactElement } from "react";
import GridNumberLines from "../components/editor/GridNumberLines";
import EditorProgramming from "../components/editor/EditorProgramming";

const EditorBody = (): ReactElement<HTMLDivElement> => {
  return (
    <div className="editor-body">
      <GridNumberLines countLines={20} />
      <EditorProgramming />
    </div>
  );
};

export default EditorBody;