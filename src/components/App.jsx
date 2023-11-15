import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { fetchPictures }  from "./API"; 
import { SearchBar } from "./SearchBar/searchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export function App() {
  
  const [searchInput, setSearchInput] = useState("");
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [totalHits, setTotalHits] = useState("");




  useEffect(() => {

    if (searchInput === "") {
      return;
    }

  
    const getPictures = async () => {
    
    try {

      const result = await fetchPictures(searchInput, page);

      setPictures(prevPictures => [...prevPictures, ...result.data.hits]);
      setStatus('ready');
      setTotalHits(result.data.totalHits);

    } catch (error) {

      console.log(error);
      toast.warn('Something went wrong. Try reloading the page.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        theme: "dark",
      })
    }
    }
    
getPictures();
  
  }, [searchInput, page]);


  const onSubmitHandle = (searchInputValue) => {
    
    if (searchInputValue === searchInput) {
      return;
    }

    setSearchInput(searchInputValue);
    setPictures([]);
    setPage(1);
    setStatus("pending");
  };

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
    setStatus("loading more");
  };


  return (
    <>
      <SearchBar onSubmit={onSubmitHandle} />
      <ImageGallery
        searchInput={searchInput}
        status={status}
        pictures={pictures}
        totalHits={totalHits}
        page={page}
        loadMoreImages={loadMoreImages}
      />
      <ToastContainer />
    </>
  );
}