import { ReactElement } from "react";

type Behavior = "value" | "defined";

type ArgumentName = {
  assert: string;
  charSeparate?: ";" | ":" | ",";
  isReadOnly?: boolean;
  behavior?: Behavior
};

const ArgumentName = (props: ArgumentName): ReactElement<HTMLSpanElement> => {
  const { assert, charSeparate, isReadOnly, behavior = "defined" } = props;

  return (
    <span className="argument">
      {isReadOnly ? <span className="reserved-readonly">readonly</span> : <></>}
      <span className={`argument-${behavior}`}>{assert}</span>
      {charSeparate ? <span className="separate">{charSeparate}</span> : <></>}
    </span>
  );
};

export default ArgumentName;