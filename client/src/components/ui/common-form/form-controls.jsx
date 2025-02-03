import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";
import { Textarea } from "../textarea";
import { Input } from "../input";


import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
  } from "@/components/ui/dropdown-menu"; // Adjust the path to Shadcn's dropdown component
  
  import { Button } from "@/components/ui/button"; // For the trigger button

function FormControls({ formControls = [], formData = {}, setFormData }) {
    function renderComponentByType(getControlItem) {
        if (!getControlItem.componentType) {
            console.error("Missing componentType for control:", getControlItem);
            return null;
        }

        const currentControlItemValue = formData[getControlItem.name] || "";

        switch (getControlItem.componentType) {
            case "input":
                return (
                    <Input
                        id={getControlItem.name}
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        type={getControlItem.type}
                        value={currentControlItemValue}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [getControlItem.name]: event.target.value,
                            })
                        }
                    />
                );

          //       case "select":
          //         return (
          //             <Select
          //                 onValueChange={(value) =>
          //                     setFormData({
          //                         ...formData,
          //                         [getControlItem.name]: value,
          //                     })
          //                 }
          //                 value={currentControlItemValue}
          //             >
          //                 <SelectTrigger className="w-full">
          //                     <SelectValue placeholder={getControlItem.label} />
          //                 </SelectTrigger>
          //                 <SelectContent>
          //                     {Array.isArray(getControlItem.options) &&
          //                         getControlItem.options.map((optionItem) => (
          //                             <SelectItem key={optionItem.id} value={optionItem.id}>
          //                                 {optionItem.label}
          //                             </SelectItem>
          //                         ))}
          //                 </SelectContent>
          //             </Select>
          //         );

           case "select":
                return (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="w-full justify-start" variant="outline">
                        {currentControlItemValue
                          ? getControlItem.options.find((item) => item.id === currentControlItemValue)
                              ?.label
                          : getControlItem.label || "Select an option"}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      {Array.isArray(getControlItem.options) &&
                        getControlItem.options.map((optionItem) => (
                          <DropdownMenuItem
                            key={optionItem.id}
                            onSelect={() =>
                              setFormData({
                                ...formData,
                                [getControlItem.name]: optionItem.id,
                              })
                            }
                          >
                            {optionItem.label}
                          </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );

            case "textarea":
                return (
                    <Textarea
                        id={getControlItem.name}
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        value={currentControlItemValue}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [getControlItem.name]: event.target.value,
                            })
                        }
                    />
                );

            default:
                return <div>Unsupported component type: {getControlItem.componentType}</div>;
        }
    }

    return (
        <div className="flex flex-col gap-3">
            {formControls.map((getControlItem) => (
                <div key={getControlItem.name}>
                    <label htmlFor={getControlItem.name}>{getControlItem.label}</label>
                    {renderComponentByType(getControlItem)}
                </div>
            ))}
        </div>
    );
}

export default FormControls;
