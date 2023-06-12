import { useEffect, useState } from "react";

const useClass = () => {
    //
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('classes.json')
         .then(res=> res.json())
         .then(data=>{
             setClasses(data.splice(0, 6));
             setLoading(false);
         })
    },[])
    return [classes, loading];
};

export default useClass;