import {
    CheckCheckIcon
} from "lucide-react";


interface FormSuccessProps{
    message?: string;


}

export const FormSuccess: React.FC<FormSuccessProps> = ({message}) => {
    if(!message) return null;

    return(
        <div className="bg-emerald-500/15 p-3 text-emerald-500 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <CheckCheckIcon className="h-4 w-4" />
            <span>{message}</span>
        </div>

    )
}