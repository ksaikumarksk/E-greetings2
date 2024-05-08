// // ImageContext.js

// import { createContext, useContext, useState } from 'react';

// const UserContext = createContext('');

// export type IFormInput= {
//     name: string,
//     email: string,
// }

// export const useUser = () => useContext(UserContext);

// export const UserProvider = ({ children }: { children: React.ReactNode }) => {
//     // const [image, setImage] = useState<IImage>();
//     const [user,setUser]=useState<IFormInput>();

//     return (
//         <UserContext.Provider value={{user,setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };
