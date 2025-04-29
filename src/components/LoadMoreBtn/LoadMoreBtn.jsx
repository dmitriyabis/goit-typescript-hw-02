export default function LoadMoreBtn({ onClick }) {
  return (
    <div className="flex justify-center my-4">
      <button
        onClick={onClick}
        className="bg-green-500 text-white px-6 py-2 rounded"
      >
        Load More
      </button>
    </div>
  );
}
