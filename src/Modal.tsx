import type { FC } from "react";
import "./Modal.css";

type ModalProps = {
  title?: string;
  text?: string;
  onClose?: () => void;
  onConfirm?: () => void;
};

const Modal: FC<ModalProps> = ({
  title = "Modal",
  text = "Are you sure?",
  onClose = () => {},
  onConfirm = () => {},
}) => {
  return (
    <div className="Modal">
      <div className="Modal-content">
        <button className="Modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="Modal-actions">
          <button aria-label="Ok" onClick={onConfirm} className="primary">
            Ok
          </button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
