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
            ¡<strong>El grupo de productos</strong> fue agregado con éxito!
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="bg-secondary p-8">
          <Link href="groups/add">
            <AlertDialogAction
              className="bg-primary-background rounded-full font-light"
              onClick={onClose}
            >
              Agregar otro grupo
            </AlertDialogAction>
          </Link>
          <Link href="groups">
            <AlertDialogAction
              className="rounded-full font-light"
              onClick={onClose}
            >
              Volver
            </AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SuccessDialog;
