import { createPortal } from "react-dom";
export default function Modal({
  children,
  className,
  isOpen = false,
  onClose = () => {},
  ...rest
}) {
  if (!isOpen) return null;
  return createPortal(
    <div
      title="click to close"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 font-poppins"
      onClick={onClose}
    >
      <div
        title="update note"
        onClick={(e) => e.stopPropagation()}
        className={`w-11/12 h-2/6 md:w-6/12 md:h-3/6 bg-white flex items-center justify-center ${className}`}
        {...rest}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
