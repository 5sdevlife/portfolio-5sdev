import { ReactElement } from "react";

type Options = {
  option: "close" | "minimize" | "maximize";
};

const EditorOption = (props: Options): ReactElement<HTMLSpanElement> => {
  const { option } = props;

  return <span className={`editor-${option}`}></span>;
}

export default EditorOption;