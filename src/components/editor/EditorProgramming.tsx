import { ReactElement } from "react";
import LineCode from "./LineCode";
import KeyReserved from "./command/KeyReserved";
import NameDefining from "./command/NameDefining";
import KeyImplements from "./command/KeyImplements";
import NameDefiningImplements from "./command/NameDefiningImplements";
import ArgumentType from "./command/ArgumentType";
import ArgumentName from "./command/ArgumentName";
import ArgumentTypeStatic from "./command/ArgumentTypeStatic";
import KeyAssignement from "./command/KeyAssignement";
import KeyScope from "./command/KeyScope";

const EditorProgramming = (): ReactElement<HTMLDivElement> => {
  return (
    <section className="editor-programming">
      <LineCode>
        <KeyReserved assert="type" />
        <NameDefining assert="Portfolio" />
        <KeyAssignement />
        <KeyScope assert="{" />
      </LineCode>
      <LineCode isLineBlank>
        <ArgumentName assert="fullName" charSeparate=":" />
        <ArgumentType assert="string" />
      </LineCode>
      <LineCode isLineBlank>
        <ArgumentName assert="phone" charSeparate=":" />
        <ArgumentType assert="number" />
      </LineCode>
      <LineCode isLineBlank>
        <ArgumentName assert="mail" charSeparate=":" />
        <ArgumentType assert="string" />
      </LineCode>
      <LineCode isLineBlank>
        <ArgumentName assert="programmingLanguages" charSeparate=":" />
        <ArgumentType assert="string[]" />
      </LineCode>
      <LineCode isLineBlank>
        <ArgumentName assert="national" charSeparate=":" isReadOnly />
        <ArgumentTypeStatic asserts={["Chilena", "Santiago", "Chile"]} />
      </LineCode>
      <LineCode>
        <KeyScope assert="}" />
      </LineCode>
      <LineCode isLineBreak />
      <LineCode>
        <KeyReserved assert="class" />
        <NameDefining assert="SoftwareEngineer" />
        <KeyImplements />
        <NameDefiningImplements assert="Portfolio" />
        <KeyScope assert="{" />
      </LineCode>
      <LineCode isLineBlank>
        <ArgumentName assert="fullName" />
        <KeyAssignement />
        <ArgumentName assert='""' behavior="value" />
      </LineCode>
      <LineCode isLineBlank>
        <ArgumentName assert="phone" />
        <KeyAssignement />
        <ArgumentName assert='""' behavior="value" />
      </LineCode>
      <LineCode isLineBlank>
        <ArgumentName assert="mail" />
        <KeyAssignement />
        <ArgumentName assert='""' behavior="value" />
      </LineCode>
      <LineCode isLineBlank>
        <ArgumentName assert="national" isReadOnly />
        <KeyAssignement />
        <ArgumentName assert='"Chile"' behavior="value" />
      </LineCode>
      <LineCode isLineBreak />
      <LineCode isLineBlank>
        <KeyReserved assert="constructor" />
        <KeyScope assert="(" />
        <ArgumentName assert="fullNameNew" charSeparate=":" />
        <ArgumentType assert="string" charSeparate="," />
        <ArgumentName assert="phoneNew" charSeparate=":" />
        <ArgumentType assert="number" charSeparate="," />
        <ArgumentName assert="mailNew" charSeparate=":" />
        <ArgumentType assert="string" />
        <KeyScope assert=")" charSeparate="{" />
      </LineCode>
      <LineCode isLineBlank sizeLineBlank="x2">
        <KeyReserved assert="this" charSeparate="." />
        <ArgumentName assert="fullName" />
        <KeyAssignement />
        <ArgumentName assert="fullNameNew" charSeparate=";" />
      </LineCode>
      <LineCode isLineBlank sizeLineBlank="x2">
        <KeyReserved assert="this" charSeparate="." />
        <ArgumentName assert="phone" />
        <KeyAssignement />
        <ArgumentName assert="phoneNew" charSeparate=";" />
      </LineCode>
      <LineCode isLineBlank sizeLineBlank="x2">
        <KeyReserved assert="this" charSeparate="." />
        <ArgumentName assert="mail" />
        <KeyAssignement />
        <ArgumentName assert="mailNew" charSeparate=";" />
      </LineCode>
      <LineCode isLineBlank>
        <KeyScope assert="}" />
      </LineCode>
      <LineCode>
        <KeyScope assert="}" />
      </LineCode>
    </section>
  );
}

export default EditorProgramming;