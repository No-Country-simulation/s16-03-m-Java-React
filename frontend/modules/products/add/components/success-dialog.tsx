import Link from "next/link";
import {
AlertDialog,
AlertDialogAction,
AlertDialogContent,
AlertDialogFooter,
AlertDialogHeader,
AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type SuccessDialogProps = {
isOpen: boolean;
onClose: () => void;
};

const SuccessDialog = ({ isOpen, onClose }: SuccessDialogProps) => {
return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
    <AlertDialogContent className="bg-primary-background px-0 py-0 w-90">
        <AlertDialogHeader>
        <AlertDialogTitle className="text-center text-secondary text-sm font-normal pt-4 pb-1">¡<strong>Su Producto</strong> fue agregado con éxito!</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="bg-secondary p-8">
        <Link href="add">
        <AlertDialogAction className="bg-primary-background rounded-full font-light" onClick={onClose}>Agregar otro producto</AlertDialogAction>
        </Link>
        <Link href="published">
        <AlertDialogAction className="rounded-full font-light" onClick={onClose}>Ver mis productos</AlertDialogAction>
        </Link>
        </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>
);
};

export default SuccessDialog;
