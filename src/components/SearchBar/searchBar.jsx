import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import css from "./searchBar.module.css"

export function SearchBar ({onSubmit}) {
  
  const [isHovered, setIsHovered] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleHover = () => {
    setIsHovered(true);
  }


  const handleInputChange = event => {
    
    const { value } = event.target;
    setSearchInput(value.toLowerCase());

    }

  
  const handleSubmit = event => {
    
      event.preventDefault();
      
      if (searchInput.trim() === "") {
     toast.warn('Please, enter something.',
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              theme: "dark",
       });

        return;
      }
      
    onSubmit(searchInput);
    setSearchInput('');
    }
  
  
return (
        <div className={css.box} >
        <form name="search-form" onSubmit={handleSubmit}>
          <input type="text" name="search" onMouseOver={handleHover} onChange={handleInputChange}
            value={searchInput} placeholder="Search images..."
                    className={`${css.input} ${isHovered ? css.inputHovered : ""}`}/>
        <button onMouseOver={handleHover} className={`${css.searchbtn} ${isHovered ? css.searchbtnHovered : ""}`} type='submit'>
        <FaSearch fill='#ffd52d' /></button>
        </form>
      </div>
    );

}
