const Pill: React.FC<{ label: string; onClick?: () => void }> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gray-200 rounded-full hover:bg-blue-500 hover:text-white transition"
    >
      {label}
    </button>
  );
};

export default Pill;
