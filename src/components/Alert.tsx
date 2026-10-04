import type { ReactNode } from "react"

interface Props {
    children: ReactNode;
    onClose: () => void
    isVisible: boolean;
}

function Alert({ children, onClose, isVisible }: Props) {
    
    return (
      isVisible && <h1 className="alert alert-primary alert-dismissible fade show">
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
                aria-label="Close"
                onClick = {onClose}
        ></button>
      </h1>
    );
}

export default Alert