export default function Options(props: { text: string; optionName: string }) {
  return (
    <div className="flex justify-space-evenly items-center">
      <input type="radio" name="payment method" id={props.optionName} />
      <label htmlFor={props.optionName}>{props.text}</label>
    </div>
  );
}
