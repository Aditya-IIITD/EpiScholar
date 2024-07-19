import { GoDotFill } from "react-icons/go";
function Circle({ heading, about, style, iconSize }) {
  return (
    <div
      className={`${
        heading == "Income Proof"
          ? "w-[250px] h-[250px]"
          : "w-[200px] h-[200px]"
      } flex justify-center items-center flex-col gap-6  bg-[#FEF5FF] rounded-[50%] shadow-inner-pink text-[#02347D] ${style}`}
    >
      <p className="font-bold text-lg text-[#02347D]">{heading}</p>
      <ul className="">
        <li key={1} className="text-xs px-6 flex gap-1">
          <GoDotFill className={`text-[${iconSize || "20px"}]`} />
          <p>{about}</p>
        </li>
      </ul>
    </div>
  );
}
export default Circle;
