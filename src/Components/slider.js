import React from "react";

const SliderPage = () => {
  return (
    <div className="my-5">
      <label htmlFor="customRange1">Dates BC to AD</label>
      <input type="range" className="custom-range" id="customRange1" />
    </div>
  );
}

export default SliderPage;