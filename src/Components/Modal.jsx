import { createPortal } from "react-dom";

function Modal({ product, closeModal }) {
  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot) return null;

  return createPortal(
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content shadow">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">{product.name}</h5>
            <button className="btn-close" onClick={closeModal}></button>
          </div>

          <div className="modal-body text-center">
            <p>ProductName:{product.name}</p>
            <p>Price: ₹{product.price}</p>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={closeModal}>
              Close
            </button>
          </div>

        </div>
      </div>
    </div>,
    portalRoot
  );
}

export default Modal;