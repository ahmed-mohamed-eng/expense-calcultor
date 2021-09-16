import PaymentList from "./PaymentList";
import Header from "./Header";

export default function PaymentDetails() {
  return (
    <div className="flex flex-col justify-flex-start items-flex-start">
      <Header text="payment history" />
      <PaymentList />
    </div>
  );
}
