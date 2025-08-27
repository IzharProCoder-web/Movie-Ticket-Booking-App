import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRight } from "lucide-react";
import BlurCircle from "./BlurCircle";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DateSelect = ({ dateTime, id }) => {
  const [selected, isSelected] = useState(null);
  const navigate = useNavigate();

  const onBookHandler = () => {
    if (!selected) {
      return toast("Please select a date");
    }
    navigate(`/movies/${id}/${selected}`);
  };
  return (
    <div id="dateSelect" className="mt-20">
      <div className="bg-primary/5 border border-primary/10 py-6 px-6">
        <BlurCircle top="-100" left="10" />
        <BlurCircle top="100" right="0" />
        <div className="flex  max-md:flex-col max-md:items-center max-md:justify-center items-center justify-between">
          <div className="flex flex-col gap-4">
            <p className="font-semibold pb-5 max-md:text-center ">Choose Date</p>
            <div className=" flex items-center gap-3">
              <ChevronLeftIcon width={28} />
              <span className="flex items-center gap-6 ">
                {Object.keys(dateTime).map((date) => (
                  <button
                    onClick={() => isSelected(date)}
                    key={id}
                    className={`flex flex-col  px-4 py-3 cursor-pointer ${
                      selected === date
                        ? "bg-primary text-white"
                        : "border border-primary"
                    }`}
                  >
                    <span>{new Date(date).getDate()}</span>
                    <span>
                      {new Date(date).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </span>
                  </button>
                ))}
              </span>
              <ChevronRight width={28} />
            </div>
          </div>
          <button
            onClick={onBookHandler}
            className="bg-primary hover:bg-primary-dull py-3 px-20 rounded mt-12 mr-5 cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateSelect;
