import { useEffect, useState } from "react";

const useInstructor = () => {
    const [instructores, setInstructores] = useState([]);
    const [loading, setLoading] = useState(true);
    ///// 
    useEffect(()=>{
        fetch('instructor.json')
         .then(res=> res.json())
         .then(data=>{
             setInstructores(data.splice(1, 6));
             setLoading(false);
         })
    },[])
    return [instructores, loading];
};

export default useInstructor;