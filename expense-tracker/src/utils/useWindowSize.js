import { useEffect, useState } from "react"



export const  useWindowSize =()=>{
    const [size, setSize] = useState([0,0])

    useEffect(()=>{
        const updateSize = () =>{
            setSize([window.innerWidth, window.innerHeight])
        }

        window.addEventListener('resize', updateSize);

        //clean up remove event lsitener 
        return () => window.removeEventListener('resize', updateSize);
    }, [])

    return {
        width : size[0],
        height: size[1],
    }
}