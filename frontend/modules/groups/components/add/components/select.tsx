import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/modules/groups/components/add/components/select/select-oficial";

const form = z.object({
  value: z.array(z.string()).nonempty("Please select at least one person"),
});

const users = [
  {
    name: "ThePrimeagen",
  },
  {
    name: "Shadcn",
  },
  {
    name: "Theo",
  },
];

const MultiSelectZod = () => {
  const multiForm = useForm<z.infer<typeof form>>({
    resolver: zodResolver(form),
    defaultValues: form.parse({ value: [users[0].name] }),
  });

  const onSubmit = (data: z.infer<typeof form>) => {
    toast.success("Form submitted : " + JSON.stringify(data, null, 2));
  };

  return (
    <Form {...multiForm}>
      <form
        onSubmit={multiForm.handleSubmit(onSubmit)}
        className="grid w-full gap-3 space-y-3"
      >
        <FormField
          control={multiForm.control}
          name="value"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Invite people</FormLabel>
              <MultiSelector
                onValuesChange={field.onChange}
                values={field.value}
              >
                <MultiSelectorTrigger>
                  <MultiSelectorInput placeholder="Select people to invite" />
                </MultiSelectorTrigger>
                <MultiSelectorContent>
                  <MultiSelectorList>
                    {users.map((user) => (
                      <MultiSelectorItem key={user.name} value={user.name}>
                        <div className="flex items-center space-x-2">
                          <Image
                            src={user.picture}
                            alt={user.name}
                            width={32}
                            height={32}
                            className="h-8 w-8 rounded-full"
                          />
                          <span>{user.name}</span>
                        </div>
                      </MultiSelectorItem>
                    ))}
                  </MultiSelectorList>
                </MultiSelectorContent>
              </MultiSelector>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default MultiSelectZod;
