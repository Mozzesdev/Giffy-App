import { createContext, useContext, useState } from "react";

const gifContext = createContext({}); 

export const useGif = () => {
  const context = useContext(gifContext);
  return context;
};


export const GifProvider = ({ children }) => {
 const [gifs, setGifs] = useState([])
 const [autoComplete, setAutoComplete] = useState([]);

  return (
    <gifContext.Provider
    value={{gifs, setGifs, autoComplete, setAutoComplete}}
    >
      {children}
    </gifContext.Provider>
  );
};
