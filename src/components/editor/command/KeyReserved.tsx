import { ReactElement } from "react";

type KeyReserved = {
  assert: "const" | "constructor" | "this" | "type" | "class";
  charSeparate?: ".";
};

const KeyReserved = (props: KeyReserved): ReactElement<HTMLSpanElement> => {
  const { assert, charSeparate } = props;

  return (
    <>
      <span className="reserved">{assert}</span>
      {charSeparate ? <span className="key">.</span> : <></>}
    </>
  );
};

export default KeyReserved;