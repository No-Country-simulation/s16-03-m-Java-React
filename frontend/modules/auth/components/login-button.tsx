import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

export function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button aria-disabled={pending} type="submit" className="mt-4 w-full">
      {pending ? "Ingresando..." : "Ingresar"}
    </Button>
  );
}
