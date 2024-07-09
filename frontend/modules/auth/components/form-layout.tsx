import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const FormLayout = ({ children }: Props) => {
  return <section>{children}</section>
}

export default FormLayout
