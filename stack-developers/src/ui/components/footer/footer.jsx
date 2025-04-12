function Footer() {
  return (
    <footer
      className={
        'bg-[#636B2F] h-13.5 flex justify-between items-center px-12 font-bold font-[Roboto] text-base text-[#BAC095]'
      }
    >
      <p> &copy; {new Date().getFullYear()} Дай в лапу</p>
      <p>Made by StackDevelopers </p>
    </footer>
  );
}

export default Footer;
