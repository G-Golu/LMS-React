import { Label } from "@radix-ui/react-label";
import { SelectContent, SelectItem, SelectTrigger, SelectValue, Value } from "@radix-ui/react-select";
import { Textarea } from "../ui/textarea";
import { Switch } from "@radix-ui/react-switch";


function FormControls({formControls = [], formData, setFormData}){
    
    function renderComponentByType(getControlItem){
       let element = null;
        
        switch (getControlItem.componentType){
            case "input":
                element = (
                <Input
                id={getControlItem.name}
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                type={getControlItem.type}
                />
                );
                break;
                case "select":
                    element = <select>
                        <SelectTrigger className="w-full"> 
                            <SelectValue placeholder={getControlItem.label}/>
                        </SelectTrigger>
                        <SelectContent>
                            {
                                getControlItem.options && getControlItem.options.length >0 ?
                                getControlItem.options.map(optionItem => <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>) : null
                            }
                        </SelectContent>
                    </select>
                    break;
                    case "textarea":
                        element = <Textarea
                        id={getControlItem.name}
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        />;
                        break;
                
                default:
                    element = <Input
                    id={getControlItem.name}
                    name={getControlItem.name}
                    placeholder={getControlItem.placeholder}
                    type={getControlItem.type}
                    />;
                
                    break;
        }
        
        return element;
    }
    
    return (
        <div className="flex flex-col gap-3">
        
            {
                FormControls.map(controleItem=>(
                    <div key={controleItem.name}>
                        <Label htmlFor={controleItem.name}>{controleItem.label}</Label>
                        {
                            renderComponentByType(controleItem)
                        }
                        
                    </div>
                )
                )
            }
        </div>
    );
}

export default FormControls;