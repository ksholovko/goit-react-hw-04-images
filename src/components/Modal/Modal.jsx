import { useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./modal.module.css"


const modalRoot = document.querySelector("#modal-root")

export function Modal ({onClick, image}) {
  


  useEffect(() => {

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
     onClick();
    }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
   document.removeEventListener("keydown", handleKeyDown);
  };
  }, [onClick] )


const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClick();
    }
  };

return createPortal(
            <div className={css.Overlay} onClick={handleBackdropClick}>
                <div className={css.Modal}>
                    <img src={image} alt="" onClick={onClick} />
                </div>
            </div>, modalRoot)

}