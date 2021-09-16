import PaymentDate from "./PaymentDate";

export default function PaymentList() {
  return (
    <div className="flex flex-col border-2 rounded-md justify-flex-start items-flex-start p-3 w-max overflow-y-auto h-40 scrollbar">
      <PaymentDate amount={3000} date={new Date()} />
      <PaymentDate amount={3000} date={new Date()} />
      <PaymentDate amount={3000} date={new Date()} />
      <PaymentDate amount={3000} date={new Date()} />
      <PaymentDate amount={3000} date={new Date()} />
      <PaymentDate amount={3000} date={new Date()} />
    </div>
  );
}
