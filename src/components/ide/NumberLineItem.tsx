import { ReactElement } from "react";

type LineItem = {
  line: number;
};

const NumberLineItem = (props: LineItem): ReactElement<HTMLDivElement> => {
  const { line } = props;

  return <div className="lines">{line}</div>;
};

export default NumberLineItem;