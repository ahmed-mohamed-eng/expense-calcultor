import uniqid from "uniqid";
import capitalize from "capitalize";

export default function Select({
  Options,
  InputName,
}: {
  Options: Array<string>;
  InputName: string;
}) {
  return (
    <select
      className="w-min inline-block px-2 py-1 mx-2 outline-none border-2 rounded-md border-gray-700"
      id={InputName}
    >
      {Options.map((option) => {
        return (
          <option key={uniqid()} value={option}>
            {capitalize(option)}
          </option>
        );
      })}
    </select>
  );
}
