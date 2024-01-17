import starIcon from "../assets/star.svg";
export default function BookCard({ book, onFavorite }) {
  const { id, name, author, price, star, img, isFavorite } = book;
  const favColor = isFavorite ? "DC2954" : "1C4336";
  let className = `bg-[#${favColor}]/[14%] text-[#${favColor}] hover:bg-[#${favColor}]/[24%]`;
  return (
    <div className="flex flex-col justify-between space-y-3 min-h-full">
      <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4 h-80">
        <img className="max-w-[144px]" src={img} alt="book name" />
      </div>

      <div className="space-y-3">
        <h4 className="text-lg font-bold lg:text-xl">{name}</h4>
        <p className="text-xs lg:text-sm">
          By : <span>{author}</span>
        </p>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold lg:text-xl">${price}</h4>
          <div className="flex items-center space-x-1">
            {[...new Array(star)].map((_, i) => (
              <img key={i} src={starIcon} />
            ))}
            <span className="text-xs lg:text-sm">({star} Star)</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 text-xs lg:text-sm">
        <button
          className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          Add to Cart
        </button>
        <button
          onClick={() => onFavorite(id)}
          className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md py-1.5 transition-all  lg:py-1.5 ${className}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFavorite ? "#DC2954" : "none"}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          Favourite
        </button>
      </div>
    </div>
  );
}
