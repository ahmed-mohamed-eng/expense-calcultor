import { ElementType } from "react";

interface IChildrenElements {
  LabelText: string;
  ForName: string;
  Options: Array<string>;
  hasOptions: boolean;
  Label: ElementType;
  Input: ElementType;
  UnitText: string;
  hasSelect: boolean;
  Select: ElementType;
  hasButton: boolean;
  Button: ElementType;
  ButtonText: string;
  revers: boolean;
}

export default function Container(props: IChildrenElements) {
  return (
    <div className="flex flex-col">
      <props.Label labelFor={props.ForName} text={props.LabelText} />
      <div className={`flex flex-${props.revers ? "row-reverse" : "row"}`}>
        {props.hasSelect ? (
          <props.Select Options={props.Options} InputName={props.ForName} />
        ) : null}
        {props.hasButton ? <props.Button text={props.ButtonText} /> : null}
        <props.Input Unit={props.UnitText} InputName={props.ForName} />
      </div>
    </div>
  );
}
