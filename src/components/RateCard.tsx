import React, { useState } from "react";
import Swal from "sweetalert2";
import Rating from "react-simple-star-rating";

interface RateCardProps {
  name: string;
  uid: string;
  imageUrl: string;
}

export const RateCard: React.FC<RateCardProps> = (props) => {
  const [rating, setRating] = useState(0);
  const [rateEmitted, setRateEmitted] = useState(false);

  const rateProduct = async (_0: React.MouseEvent, rate: number) => {
    const data = { rate };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/${props.uid}/rate`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.status === 204) {
        setRateEmitted(true);
        return Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thanks for your feedback",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div className="card">
      <div className="card-body my-4">
        <h5 className="card-title">{props.name}</h5>
        <div className="row">
          <div className="col-7">
            <img src={props.imageUrl} alt={props.name} height="130px" />
          </div>
          <div className="col-5">
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={20}
              label
              transition
              fillColor="orange"
              emptyColor="gray"
              className="foo" // Will remove the inline style if applied
            />
            <br />
            <button
              onClick={(e) => rateProduct(e, rating)}
              className="btn btn-outline-primary mt-3"
              disabled={rateEmitted}
            >
              Rate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
