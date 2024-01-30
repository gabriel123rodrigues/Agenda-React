// import React, { useContext } from "react";
// import { Route, redirect } from "react-router-dom";
// import storeContext from "../../../context/auth";



// const RoutePrivate = ({Component: Componet, ...rest}) => {

//     const {token} = useContext(storeContext);

//     return (
//         <Route
//         {...rest}
//         render={()=> token 
//             ? <Component {...rest}/>
//             : redirect("/cadastro")
//         }
//         />
//     )

// }
// export default RoutePrivate