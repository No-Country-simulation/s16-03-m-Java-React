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
  onConfirm: () => void;
};

// eslint-disable-next-line no-undef
const SuccessDialog: React.FC<SuccessDialogProps> = ({
  // eslint-disable-next-line react/prop-types
  isOpen,
  // eslint-disable-next-line react/prop-types
  onClose,
  // eslint-disable-next-line react/prop-types
  onConfirm,
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="bg-primary-background w-90 px-0 py-0">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-secondary pb-1 pt-4 text-center text-sm font-normal">
            ¿Deseas <strong>eliminar</strong> este grupo?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="bg-secondary flex flex-row px-20 py-6">
          <AlertDialogAction
            className="bg-primary-background rounded-full py-2 font-light"
            onClick={onConfirm}
          >
            Eliminar
          </AlertDialogAction>
          <AlertDialogAction
            className="rounded-full py-2 font-light"
            onClick={onClose}
          >
            Cancelar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SuccessDialog;
