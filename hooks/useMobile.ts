import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 800;

function useMobile(customBreakpoint?: number){
    const [isMobile, setMobile ] = useState<boolean>(false);
    const breakpoint = customBreakpoint ?? MOBILE_BREAKPOINT;

    function handleResize() {
        setMobile(window.innerWidth < breakpoint);
    }
    
    useEffect(() => {
        setMobile(window.innerWidth < breakpoint);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return {
        isMobile
    };
}

export default useMobile;