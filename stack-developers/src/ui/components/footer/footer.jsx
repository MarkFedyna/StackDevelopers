function Footer() {
  return (
    <footer className='bg-[#636B2F] py-4 px-6 sm:px-12 text-base text-[#BAC095] font-bold flex justify-between items-center'>
      <p className='font-[Alegreya] text-sm sm:text-base'>
        &copy; {new Date().getFullYear()} Дай Лапу
      </p>
      <p className='text-sm sm:text-base'>Made by StackDevelopers</p>
    </footer>
  );
}

export default Footer;
