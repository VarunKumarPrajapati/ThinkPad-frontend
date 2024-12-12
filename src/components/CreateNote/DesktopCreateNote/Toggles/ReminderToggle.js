import React, { useState } from "react";
import { MdOutlineWatchLater } from "react-icons/md";

import ReminderToggleDateTimePicker from "./ReminderToggleDateTimePicker";

function ReminderToggle() {
  const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false);

  const handleDateTimePicker = (e) => {
    e.stopPropagation();
    setDateTimePickerVisible(!isDateTimePickerVisible);
  };

  return (
    <div className="absolute z-50 bg-white rounded-[4px] top-8 left-2 min-w-72 shadow-2 select-none">
      {isDateTimePickerVisible ? (
        <ReminderToggleDateTimePicker goBack={handleDateTimePicker} />
      ) : (
        <div className="py-1.5 top-8">
          <h4 className="p-3.5 text-sm text-black">Remind me later</h4>

          <p className="px-3.5 pb-3.5 text-[0.8125rem]">
            Allow the Browser Notification
          </p>

          <div className="*:cursor-pointer *:px-3.5 *:py-2.5 *:my-1 *:text-[0.8125rem] flex items-start justify-center flex-col *:flex *:items-center *:justify-between *:w-full">
            <div className="hover:bg-gray-200">
              Later today <div>8:00 PM</div>
            </div>

            <div className="hover:bg-gray-200">
              Tomorrow <div>8:00 AM</div>
            </div>

            <div className="hover:bg-gray-200">
              Next week <div>Mon, 8:00 AM</div>
            </div>

            <div
              onClick={handleDateTimePicker}
              className="flex !justify-start items-center w-full hover:bg-gray-200 gap-x-2"
            >
              <MdOutlineWatchLater color="black" />
              Pick date & time
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReminderToggle;
