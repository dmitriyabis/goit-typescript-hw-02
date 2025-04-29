import ImageCard from "./ImageCard";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((img) => (
        <li key={img.id}>
          <ImageCard image={img} onClick={() => onImageClick(img)} />
        </li>
      ))}
    </ul>
  );
}
