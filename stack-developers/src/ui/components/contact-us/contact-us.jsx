import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import ContactUsForm from "./contact-us-form";

const ContactUsModal = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="flex items-center bg-[#BAC095] w-[325px] h-[68px] font-semibold text-[30px] hover:bg-[#636B2F] rounded-[8px] px-7 m-0 text-white 
              max-sm:font-medium max-sm:text-[25px] max-sm:py-1 max-sm:px-8 max-sm:w-[280px] hover:text-white"
      >
        Зв'язатися з нами
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex justify-between items-center">
          <AlertDialogTitle className="w-[260px] font-medium text-[30px] ml-[110px] max-sm:ml-[40px]">
            Зв'язатися з нами
          </AlertDialogTitle>
          <AlertDialogCancel className="px-3 rounded-full hover:bg-gray-200 transition">
            <X className="w-5 h-5" />
          </AlertDialogCancel>
        </div>
        <ContactUsForm />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ContactUsModal;
