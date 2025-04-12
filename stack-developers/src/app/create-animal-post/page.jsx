import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const CarAddForm = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col bg-[#BAC095] h-auto max-lg:w-[1031px] mt-[80px] mb-[80px] pt-[30px] pb-[30px] rounded-[10px] px-[100px] max-sm:px-0 !max-sm:w-full">
        <form action="">
          <div className="h-[56px] w-[479px] max-sm:w-[280px] mx-auto">
            <p className="text-white font-medium !text-[50px] max-sm:!text-[25px]">
              Додати оголошення
            </p>
          </div>

          <div className="flex flex-col items-center mx-auto mt-[50px] max-sm:mt-0 w-max">
            <Accordion type="single" collapsible>
              {/* Item 1 */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white">
                  <div className="flex items-center flex-row">
                    <div className="flex justify-center align-center w-[50px] h-auto bg-white rounded-full max-sm:w-[30px] max-sm:h-[30px]">
                      <p className="text-black font-normal text-[30px] max-sm:text-[20px]">
                        1
                      </p>
                    </div>
                    <p className="text-white font-medium text-[40px] mx-[15px] max-sm:text-[20px]">
                      Додайте фотографії тваринки
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid max-w-sm items-center gap-1.5 mt-[10px] rounded-[8px]">
                    <Input
                      id="picture"
                      type="file"
                      accept="image/png, image/jpeg, image/jpg, image/webp"
                      className="bg-white max-sm:w-[280px] max-sm:ml-[20px]"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* Item 2 */}
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-white">
                  <div className="flex items-center flex-row">
                    <div className="flex justify-center align-center w-[50px] h-auto bg-white rounded-full max-sm:w-[30px] max-sm:h-[30px]">
                      <p className="text-black font-normal text-[30px] max-sm:text-[20px]">
                        2
                      </p>
                    </div>
                    <p className="text-white font-medium text-[40px] mx-[15px] max-sm:text-[20px]">
                      Основна інформація
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mb-[20px] grid grid-cols-2 gap-x-[50px] gap-y-[20px] max-sm:grid max-sm:grid-cols-1 max-sm:ml-[20px]">
                    <Input
                      type="text"
                      placeholder="Тип тварини"
                      className="w-[263px] bg-white"
                    />
                    <Input
                      type="number"
                      placeholder="Вік"
                      className="w-[263px] bg-white"
                    />
                  </div>
                  <Input
                    type="text"
                    placeholder="Місцезнаходження"
                    className="w-full bg-white max-sm:w-[280px] max-sm:ml-[20px]"
                  />
                </AccordionContent>
              </AccordionItem>
              {/* Item 3 */}
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-white">
                  <div className="flex items-center flex-row">
                    <div className="flex justify-center align-center w-[50px] h-auto bg-white rounded-full max-sm:w-[30px] max-sm:h-[30px]">
                      <p className="text-black font-normal text-[30px] max-sm:text-[20px]">
                        3
                      </p>
                    </div>
                    <p className="text-white font-medium text-[40px] mx-[15px] max-sm:text-[20px]">
                      Здоров'я тварини
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Textarea
                    placeholder="Опис здоров'я"
                    className="bg-white max-sm:mx-[20px] max-sm:w-[300px]"
                  />
                </AccordionContent>
              </AccordionItem>
              {/* Item 4 */}
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-white">
                  <div className="flex items-center flex-row">
                    <div className="flex justify-center align-center w-[50px] h-auto bg-white rounded-full max-sm:w-[30px] max-sm:h-[30px]">
                      <p className="text-black font-normal text-[30px] max-sm:text-[20px]">
                        4
                      </p>
                    </div>
                    <p className="text-white font-medium text-[40px] mx-[15px] max-sm:text-[20px]">
                      Опис тварини
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Textarea
                    placeholder="Опис тварини"
                    className="bg-white max-sm:mx-[20px] max-sm:w-[300px]"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button className="bg-white w-[468px] h-[67px] mt-[60px] font-medium text-black text-[30px] hover:bg-[#636B2F] hover:text-white max-sm:text-[20px] max-sm:h-[40px] max-sm:w-[300px] max-sm:mt-[30px]">
              Розмістити оголошення
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarAddForm;
