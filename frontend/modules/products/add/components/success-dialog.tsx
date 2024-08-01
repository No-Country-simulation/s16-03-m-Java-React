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
      <AlertDialogContent className="bg-primary-background w-90 px-0 py-0">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-secondary pb-1 pt-4 text-center text-sm font-normal">
            ¡<strong>Su Producto</strong> fue agregado con éxito!
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="bg-secondary p-8">
          <Link href="add">
            <AlertDialogAction
              className="bg-primary-background rounded-full font-light"
              onClick={onClose}
            >
              Agregar otro producto
            </AlertDialogAction>
          </Link>
          <Link href="published">
            <AlertDialogAction
              className="rounded-full font-light"
              onClick={onClose}
            >
              Ver mis productos
            </AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SuccessDialog;
