import { ReactElement } from "react";
import NumberLineItem from "./NumberLineItem";

type Grid = {
  countLines: number;
};

const GridNumberLines = (props: Grid): ReactElement<HTMLDivElement> => {
  const { countLines } = props;

  return (
    <div className="editor-lines">
      {Array(countLines ?? 1)
        .fill(0)
        .map((_, index) => (
          <NumberLineItem key={index} line={index + 1} />
        ))}
    </div>
  );
};

export default GridNumberLines;