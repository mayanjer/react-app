import type { ReactNode } from "react"

interface Props {
    children: ReactNode;
}

function Alert({ children }: Props) {
    return <h1 className = "alert alert-primary">{children}</h1>
}

export default Alert