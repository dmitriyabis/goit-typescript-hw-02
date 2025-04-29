export default function ImageCard({ image, onClick }) {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="rounded shadow"
      />
    </div>
  );
}
