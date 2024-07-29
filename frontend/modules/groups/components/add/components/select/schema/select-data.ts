import { z } from "zod";

const form = z.object({
  value: z.array(z.string()).nonempty("Please select at least one person"),
});
