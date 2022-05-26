import { createContext, useContext, useState } from "react";

const gifContext = createContext({}); 

export const useGif = () => {
  const context = useContext(gifContext);
  return context;
};


export const GifProvider = ({ children }) => {
 const [gifs, setGifs] = useState([])

  return (
    <gifContext.Provider
    value={{gifs, setGifs}}
    >
      {children}
    </gifContext.Provider>
  );
};
