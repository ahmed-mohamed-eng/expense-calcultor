export default function Label({ labelFor = "", text = "" }) {
  return (
    <label
      className="font-bold text-xl text-gray-700 mb-1.5 ml-2"
      htmlFor={labelFor}
    >
      {text} :
    </label>
  );
}
