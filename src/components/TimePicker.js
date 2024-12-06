import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

function TimePicker({ getTime }) {
  const [time, setTime] = useState("");
  const [isExpanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  const handleChange = (e) => {
    setTime(e.target.value);
    getTime(time);
  };

  const handleSetTimeClick = (time) => {
    setTime(time);
  };

  const handleCustomTimeClick = (e) => {
    e.stopPropagation();
    setTime("");
    setExpanded(false);
  };

  return (
    <div className="relative text-[0.8125rem]">
      <div
        className="flex items-center justify-between w-full border-b border-gray-300 cursor-pointer "
        onClick={handleClick}
      >
        <input
          placeholder="Add time"
          id="time"
          className="focus:outline-0"
          value={time}
          onChange={handleChange}
        />
        <MdOutlineArrowDropDown size="16" />
      </div>

      {isExpanded && (
        <div className="absolute top-6 bg-white w-full shadow-2 py-1.5 *:px-3.5 *:py-2 *:cursor-pointer ">
          <div
            className="hover:bg-gray-200"
            onClick={() => handleSetTimeClick("8:00 AM")}
          >
            Morning <span className="float-right">8:00 AM</span>
          </div>

          <div
            className="hover:bg-gray-200"
            onClick={() => handleSetTimeClick("1:00 PM")}
          >
            Afternoon <span className="float-right">1:00 PM</span>
          </div>

          <div
            className="hover:bg-gray-200"
            onClick={() => handleSetTimeClick("6:00 PM")}
          >
            Evening <span className="float-right">6:00 PM</span>
          </div>

          <div
            className="hover:bg-gray-200"
            onClick={() => handleSetTimeClick("8:00 PM")}
          >
            Night <span className="float-right">8:00 PM</span>
          </div>

          <div className="hover:bg-gray-200" onClick={handleCustomTimeClick}>
            <label htmlFor="time">Custom</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default TimePicker;
