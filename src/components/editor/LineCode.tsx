import { ReactElement } from "react";

type LineCode = {
  children?: ReactElement<HTMLSpanElement>[] | ReactElement<HTMLSpanElement>;
  isLineBreak?: boolean;
  isLineBlank?: boolean;
  sizeLineBlank?: "" | "x2";
};

const isTypeLineBreak = (isLineBreak: boolean) => isLineBreak ? "line-break" : "";

const isTypeLineBlank = (isLineBlank: boolean, sizeLineBlank?: "" | "x2") => {
  if (!isLineBlank) {
    return "";
  }

  return `left-blank${sizeLineBlank === "x2" ? "-x2" : ""}`;
}; 

const LineCode = (props: LineCode): ReactElement<HTMLDivElement> => {
  const { children, isLineBreak, isLineBlank, sizeLineBlank } = props;
  
  return (
    <div
      className={`line-code ${isTypeLineBreak(!!isLineBreak)} ${isTypeLineBlank(
        !!isLineBlank,
        sizeLineBlank
      )}`}
    >
      {children}
    </div>
  );
};

export default LineCode;