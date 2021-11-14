import React from "react";

const isInProgress = (percentage) => percentage < 100;

const isCompleted = (status) => status === "Complete";

export const Progress = ({ status, percentage }) => {
  if (!isInProgress(percentage) || isCompleted(status)) return <></>;

  return (
    <div className="relative pt-1">
      <div className="overflow-hidden h-2 mt-2 mb-2 text-xs flex rounded bg-yellow-200">
        <div
          style={{ width: `${percentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
        ></div>
      </div>
      <div className="flex mb-2 items-center justify-between">
        {status && (
          <div className="text-right">
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200">
              {status}
            </span>
          </div>
        )}
        {percentage && (
          <div>
            <span className="text-xs font-semibold inline-block text-yellow-600">
              {percentage}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
