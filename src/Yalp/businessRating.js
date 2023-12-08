import { Rating } from "@mui/material";

function BusinessRating() {
  return (
    <div className="rating">
      <Rating
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        fractions={2}
        readonly
        initialRating={3}
      />
      <p>{reviewCount} Reviews</p>
    </div>
  );
}

export default BusinessRating;
