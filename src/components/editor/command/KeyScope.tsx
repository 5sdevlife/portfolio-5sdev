import { ReactElement } from "react";

type KeyScope = {
  assert: "(" | "{" | ")" | "}";
  charSeparate?: "{" | ")";
};

const KeyScope = (props: KeyScope): ReactElement<HTMLSpanElement> => {
  const { assert, charSeparate } = props;

  return <span className="key">{assert}{charSeparate}</span>;
};

export default KeyScope;