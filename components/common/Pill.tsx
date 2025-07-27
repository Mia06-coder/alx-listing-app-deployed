import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title, icon, selected, onClick }) => {
  return (
    <button
      className={`text-[13px]/[1.5] md:text-[15px] lg:text-[19px] px-6 py-2.5 rounded-4xl border  font-semibold transition flex flex-row gap-2.5 items-center text-nowrap${
        selected
          ? "bg-[#F0FFFB] text-[#34967C] border-[#34967C]"
          : " text-[#161117] border-[#e9e9e9]  "
      }`}
      onClick={() => onClick(title)}
    >
      {title}
      {icon && <span className="w-5 h-5">{icon}</span>}
    </button>
  );
};

export default Pill;
