import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { IoMdArrowBack } from "react-icons/io";

import Icon from "../../../common/Icon";
import Button from "../../../common/Button";
import TimePicker from "../Features/TimePicker/TimePicker";

function ReminderToggleDateTimePicker({ className, goBack }) {
  const [time, setTime] = useState("");

  const handleGetTime = (time) => {
    setTime(time);
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  return (
    <div
      className={twMerge(
        "flex flex-col justify-center text-sm bg-white",
        className
      )}
    >
      <div className="relative py-[15px] pl-10 pr-[15px] text-sm border-b">
        <Icon
          onClick={goBack}
          icon={IoMdArrowBack}
          size="18"
          className="absolute p-1 m-0 top-3 left-3"
        />
        Pick date & time
      </div>

      <div className="flex flex-col px-[15px] pb-[15px] ">
        <div className="min-w-60 w-60 *:mt-[15px]">
          <input
            value={time}
            onChange={handleChangeTime}
            type="date"
            className="w-full border-b border-gray-300 focus:outline-none"
          />
          <TimePicker getTime={handleGetTime} />
        </div>
      </div>

      <div className="pb-[10px] px-[5px] pt-[5px]">
        <Button className="float-right px-6 py-2 font-sans text-sm font-semibold border-0 rounded-[4px] text-Icon-1 bg-inherit hover:bg-gray-100">
          Save
        </Button>
      </div>
    </div>
  );
}

export default ReminderToggleDateTimePicker;
