export default function Header(props: { text: string }) {
  return (
    <h1 className="font-bold text-xl text-gray-700 mb-1.5">{props.text} :</h1>
  );
}
