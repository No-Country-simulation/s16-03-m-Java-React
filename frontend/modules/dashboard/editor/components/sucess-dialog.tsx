import Link from "next/link";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type SuccessDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SuccessDialog1 = ({ isOpen, onClose }: SuccessDialogProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="bg-primary-background w-90 px-0 py-0">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-secondary pb-1 pt-4 text-center text-sm font-normal">
            ¡<strong>Su Página</strong> fue publicada con éxito!
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="bg-secondary p-8">
          <Link href="dashboard">
            <AlertDialogAction
              className="bg-primary-background rounded-full font-light"
              onClick={onClose}
            >
              Volver al inicio
            </AlertDialogAction>
          </Link>
          <Link href="editor">
            <AlertDialogCancel
              className="rounded-full font-light"
              onClick={onClose}
            >
              Continuar editando
            </AlertDialogCancel>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SuccessDialog1;
