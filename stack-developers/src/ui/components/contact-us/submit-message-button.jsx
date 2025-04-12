import { FaPaperPlane } from "react-icons/fa";

const SubmitMessageButton = () => {
  const { pending } = false;

  return (
    <button
      className="bg-[#BAC095] hover:bg-[#636B2F] text-white font-bold py-2 px-4 rounded-full w-[300px] focus:outline-none focus:shadow-outline flex items-center justify-center"
      type="submit"
      disabled={pending}
    >
      <FaPaperPlane className="mr-2" />{" "}
      {pending ? "Надсилається..." : "Надіслати"}
    </button>
  );
};

export default SubmitMessageButton;
