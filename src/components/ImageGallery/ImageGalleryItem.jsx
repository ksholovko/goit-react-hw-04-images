import { useState } from "react";
import css from "./imageGalleryItem.module.css"
import { Modal } from "components/Modal/Modal";

export function ImageGalleryItem( {smallImage, largeImage}) {
  
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  }

return (
    <>
    <li className={css.ImageGalleryItem}>
            <img src={smallImage} onClick={toggleModal} alt="" className={css.ImageGalleryItemImage} />
          </li>
     
        {showModal && <Modal onClick={toggleModal} image={largeImage} /> }
       </>
    )

}



