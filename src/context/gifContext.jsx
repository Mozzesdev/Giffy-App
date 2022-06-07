import { createContext, useContext, useState } from "react";

const gifContext = createContext({}); 

export const useGif = () => {
  const context = useContext(gifContext);
  return context;
};


export const GifProvider = ({ children }) => {
 const [gifs, setGifs] = useState({data: [], pagination: {}});
 const [autoComplete, setAutoComplete] = useState([]);
 
 const controller = new AbortController();
 const {signal} = controller;

  return (
    <gifContext.Provider
    value={{gifs, setGifs, autoComplete, setAutoComplete, signal, controller}}
    >
      {children}
    </gifContext.Provider>
  );
};
