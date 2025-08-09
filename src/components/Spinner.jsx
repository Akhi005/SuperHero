import React from "react";
import { FidgetSpinner } from "react-loader-spinner";

export const Spinner = () => {
  return (
    <div className="flex justify-center bg-[#0A0F2C] items-center min-h-screen w-full">
      <FidgetSpinner
        visible={true}
        height={80}
        width={80}
        ariaLabel="fidget-loading"
      />
    </div>
  );
};
