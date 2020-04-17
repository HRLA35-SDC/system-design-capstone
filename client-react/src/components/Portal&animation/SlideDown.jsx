import React, { useEffect, useState } from "react";

const SlideDown = ({ show, children }) => {
  //set toggle based off props
  const [slideDown, setSlide] = useState(show)

  //
  useEffect(()=> {
    if(show) setSlide(true)
  }, [show])

  let onAnimationEnd = () => {
    if(!show) setSlide(false);
  }

  return (
    slideDown && (
      <div
        onAnimationEnd={onAnimationEnd}
        style={{ animation: `${show ? "slideDownAnim" : "slideUpAnim"} 500` }}
        id='sidebar_accordian_contents'
        className={`${slideDown ? "active_dropdown_nl" : "inactive_dropdown_nl"}`}
      >
        {children}
      </div>
    )
  );
};

export default SlideDown;