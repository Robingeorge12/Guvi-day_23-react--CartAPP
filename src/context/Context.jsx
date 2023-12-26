import React,{ createContext} from "react";
import App from "../App"


export const AppContext = createContext(null)



function Context() {

  return (
    <AppContext.Provider value={"red"}>
      <App />
    </AppContext.Provider>
  )
}

// export default Context
