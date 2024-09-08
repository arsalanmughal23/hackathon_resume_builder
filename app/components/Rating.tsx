import FilledStar, { FillType } from "./ui/HalfFilledStar";

type RatingType = {
    rating: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    className?: string,
}

export default function Rating({rating, className}:RatingType) 
{
    const starsArray = [1,2,3,4,5];
    const ratingOutOfTen = rating / 2;

    return (
        <div className="Rating" data-rating={rating}>
            {
                starsArray.map((item) => {
                    let filled: FillType = "empty"; // Explicitly define the type
                    if(ratingOutOfTen >= item)
                        filled = "full";
                    else if(Math.ceil(ratingOutOfTen) == item && Math.floor(ratingOutOfTen) < item && rating % 2 > 0)
                        filled = "half";

                    return <FilledStar 
                                key={item} 
                                fill={filled} 
                                className={className}
                            />
                })
            }
        </div>
    )
}