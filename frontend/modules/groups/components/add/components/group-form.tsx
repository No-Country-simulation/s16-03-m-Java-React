"use client";

import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ButtonsAdd from "@/modules/groups/components/add/components/buttons-add";
import MultiSelect from "@/modules/groups/components/add/components/select/multi-select";
import { GroupSchema } from "@/modules/groups/components/add/schema/data-group";

const GroupForm: React.FC = () => {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const form = useForm<z.infer<typeof GroupSchema>>({
    resolver: zodResolver(GroupSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = (data: z.infer<typeof GroupSchema>) => {
    setShowSuccessDialog(true);
    setTimeout(() => {
      setShowSuccessDialog(false);
    }, 3000);
    form.reset();
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex-1 space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-primary border bg-transparent text-base font-light"
                        placeholder="Nombre"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="border-primary border text-base"
                    placeholder="Descripción del grupo"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <MultiSelect />
          <ButtonsAdd onClick={form.handleSubmit(onSubmit)} />
        </form>
      </Form>
    </>
  );
};

export default GroupForm;
