type NameDefiningImplements = {
  assert: string;
};

const NameDefiningImplements = (props: NameDefiningImplements) => {
  const { assert } = props;

  return <span className="defined-implements">{assert}</span>;
};

export default NameDefiningImplements;