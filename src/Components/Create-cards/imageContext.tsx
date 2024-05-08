// ImageContext.js

import { createContext, useContext, useState } from 'react';

const ImageContext = createContext('');

export type IFormInput= {
    name: string,
    email: string,
}
type IImage={
    image:string,
  setImage:(image:string)=>any
}
export const useImage = () => useContext(ImageContext);

export const ImageProvider = ({ children }: { children: React.ReactNode }) => {
    const [image, setImage] = useState<IImage>();
    const [user,setUser]=useState<IFormInput>();

    return (
        <ImageContext.Provider value={{ image, setImage,user,setUser }}>
            {children}
        </ImageContext.Provider>
    );
};
