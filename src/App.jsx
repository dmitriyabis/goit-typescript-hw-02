import { useState, useEffect } from "react";
import { fetchImages } from "./services/unsplashApi";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMassage/ErrorMassage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

export default function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function loadImages() {
      try {
        setIsLoading(true);
        setError(null);
        const { results } = await fetchImages(query, page);
        setImages((prev) => [...prev, ...results]);
      } catch (err) {
        setError("Не вдалося завантажити зображення!");
      } finally {
        setIsLoading(false);
      }
    }
    loadImages();
  }, [query, page]);

  function handleSearch(newQuery) {
    if (newQuery !== query) {
      setQuery(newQuery);
      setImages([]);
      setPage(1);
    }
  }

  function openModal(image) {
    setSelectedImage(image);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
      {showModal && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
}
