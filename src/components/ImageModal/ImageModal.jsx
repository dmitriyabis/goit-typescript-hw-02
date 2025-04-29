import Modal from "react-modal";
import "../../styles/ImageModal.css";

Modal.setAppElement("#root");

export default function ImageModal({ image, onClose }) {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay"
    >
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
        <h2>{image.description || "No description"}</h2>
        <p>Автор: {image.user.name}</p>
        <p>❤️ {image.likes} лайків</p>
        <button onClick={onClose}>Закрити</button>
      </div>
    </Modal>
  );
}
