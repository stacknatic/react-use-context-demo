import { createContext } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {

    return(
        <GlobalContext.Provider value={"TEST ABC"}>
            {props.children}
        </GlobalContext.Provider>

    )
}

export default GlobalContextProvider;