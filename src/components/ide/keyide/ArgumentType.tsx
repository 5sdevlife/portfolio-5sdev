import { ReactElement } from "react";

type ArgumentType = {
  assert: "string" | "number" | "boolean" | "string[]";
  charSeparate?: "," | ";"
};

const ArgumentType = (props: ArgumentType): ReactElement<HTMLSpanElement> => {
  const { assert, charSeparate } = props;

  return (
    <span className="argument-type">
      {assert}
      {charSeparate ? <span className="separate">{charSeparate}</span> : <></>}
    </span>
  );
};

export default ArgumentType;