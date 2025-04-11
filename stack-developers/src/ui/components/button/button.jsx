
export default function Button({ children, className='', ...props }) {
  return (
    <button
      className={`bg-[#636B2F] font-[nunito] font-bold text-[20px] rounded-[10px] px-1.5 py-1 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

//bg-[#D4DE95] а текст c
