function Circle({ heading, about, style }) {
  return (
    <div
      className={`${
        heading == "Income Proof"
          ? "w-[250px] h-[250px]"
          : "w-[200px] h-[200px]"
      } flex justify-center items-center flex-col gap-6  bg-[#FEF5FF] rounded-[50%] shadow-inner-pink text-[#02347D] ${style}`}
    >
      <p className="font-bold text-lg text-[#02347D]">{heading}</p>
      <ul className=" list-disc list-inside">
        <li key={1} className="text-xs px-5 flex gap-1 list-item">
          {about}
        </li>
      </ul>
    </div>
  );
}
export default Circle;
