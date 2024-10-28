import { ReactElement } from "react";

type ArgumentTypeStatic = {
    asserts: string[];    
}

const ArgumentTypeStatic = (
  props: ArgumentTypeStatic
): ReactElement<HTMLSpanElement> => {
  const { asserts } = props;

  return (
    <>
      {asserts?.map((assert, index) => (
        <>
          <span className="argument-type-static">"{`${assert}`}"</span>
          {index < asserts.length - 1 ? (
            <span className="separation-or">|</span>
          ) : (
            <></>
          )}
        </>
      ))}
    </>
  );
};

export default ArgumentTypeStatic;