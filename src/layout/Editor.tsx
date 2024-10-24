import { ReactElement } from "react";
import EditorHeader from "./EditorHeader";
import EditorBody from "./EditorBody";

const Editor = (): ReactElement<HTMLElement> => {
  return (
    <section className="editor-code">
      <EditorHeader />
      <EditorBody />
    </section>
  );
};

export default Editor;