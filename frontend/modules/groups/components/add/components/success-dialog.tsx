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
      <AlertDialogContent className="bg-primary-background px-0 py-0">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-secondary pb-1 pt-4 text-center text-sm font-normal">
            ¡<strong>El grupo de productos</strong> fue agregado con éxito!
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="bg-secondary flex items-center justify-center rounded-b-lg">
          <AlertDialogFooter className="bg-secondary py-8">
            <Link href="add">
              <AlertDialogAction
                className="bg-primary-background rounded-full font-light"
                onClick={onClose}
              >
                Agregar otro grupo
              </AlertDialogAction>
            </Link>
            <Link href="/dashboard/groups">
              <AlertDialogAction
                className="rounded-full font-light"
                onClick={onClose}
              >
                Volver
              </AlertDialogAction>
            </Link>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SuccessDialog;
