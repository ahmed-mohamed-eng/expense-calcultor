export default function Button(props: { text: string }) {
  return (
    <button className="flex items-center justify-center p-2 mx-2 h-10 border-2 border-gray-700 rounded-md">
      {props.text}
    </button>
  );
}
