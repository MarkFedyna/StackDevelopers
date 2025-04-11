
export default function Button({ children, className='', ...props }) {
  return (
    <button
      className={`bg-[#6a994e] font-[nunito] font-bold text-[20px] rounded-full px-1.5 py-1 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
