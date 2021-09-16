export default function Input(props: { InputName: string; Unit: string }) {
  return (
    <div className=" flex items-center justify-center h-10 relative">
      <input
        id={props.InputName}
        className="inline-block h-full px-2 py-1 outline-none border-2 rounded-md border-gray-700"
        type="text"
      />
      <span className="absolute right-2.5 top-2">{props.Unit}</span>
    </div>
  );
}
