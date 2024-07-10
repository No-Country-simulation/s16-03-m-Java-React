'use client'

import { zodResolver } from '@hookform/resolvers/zod'

import { RegisterSchema } from '@/modules/auth/schemas/register-schema'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import SocialMediaButtons from './social-media-button'
import { Checkbox } from '@/components/ui/checkbox'

const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      terms: false,
    },
  })

  function onSubmit(data: z.infer<typeof RegisterSchema>) {
    console.log(data)
  }

  return (
    <div className="flex flex-col max-w-[424px] px-4 lg:px-0 items-center justify-center">
      <div className="mb-10 w-full">
        <h1 className="text-3xl font-bold ">Crear una cuenta</h1>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/2 space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre y apellido</FormLabel>
                <FormControl>
                  <Input
                    className="bg-muted "
                    placeholder="Escribe tu nombre y apellido"
                    type="name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    className="bg-muted"
                    placeholder="Escribe un e-mail"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input
                    className="bg-muted"
                    placeholder="Escribe una contraseña"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <p className=" text-xs font-light text-muted-foreground">
                  Debe tener mas de 8 carácteres
                </p>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-col space-x-3 ">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <div className="flex items-start space-x-2">
      <Checkbox id="terms2" />
      <label
        htmlFor="terms2"
        className="text-sm font-medium leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
       Al crear la cuenta se aceptan los{' '}
                    <strong>términos y condiciones</strong> y nuestra{' '}
                    <strong>política de privacidad</strong>.
      </label>
    </div>
                  </FormControl>

                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <Button type="submit" className="rounded-full mx-auto w-full">
              Registrarme
            </Button>
          </div>
        </form>
      </Form>
      <SocialMediaButtons />
      <p className="text-sm text-foreground mt-10">
        Ya tenes una cuenta?{' '}
        <strong className="text-secondary-foreground">Ingresa ahora</strong>.
      </p>
    </div>
  )
}

export default RegisterForm
