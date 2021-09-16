import Header from "./Header";
import Options from "./Options";

export default function OptionsContainer() {
  return (
    <div className="flex flex-col justify-flex-start items-flex-start">
      <Header text="Payment Method" />
      <Options text="Offline Branch" optionName="offline" />
      <Options text="DTS" optionName="dts" />
      <Options text="Massary" optionName="massary" />
    </div>
  );
}
