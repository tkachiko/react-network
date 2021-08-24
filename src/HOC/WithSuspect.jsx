  
import React, { Suspense } from "react";
import Preloader from "../components/common/Preloader/Preloader";

export default (Component) => (props) => {
    return <Suspense fallback={<Preloader />}>
        <Component {...props} />
    </Suspense>
}