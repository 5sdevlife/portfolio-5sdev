import { ReactElement } from "react";

type NameDefining = {
  assert: string;
};

const NameDefining = (props: NameDefining): ReactElement<HTMLSpanElement> => {
  const { assert } = props;

  return <span className="defined-name">{assert}</span>;
};

export default NameDefining;