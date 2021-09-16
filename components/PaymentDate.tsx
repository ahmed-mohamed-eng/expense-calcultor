export default function PaymentDate(props: { amount: number; date: Date }) {
  return (
    <div className="last:mb-0 mb-2 ">
      <span className="font-bold  text-gray-700">{props.date.getDate()}/</span>
      <span className="font-bold  text-gray-700">
        {props.date.getMonth() + 1}/
      </span>
      <span className="font-bold  text-gray-700">
        {props.date.getFullYear()}
      </span>{" "}
      : <span className="font-semibold text-gray-700">{props.amount} EGP</span>
    </div>
  );
}
