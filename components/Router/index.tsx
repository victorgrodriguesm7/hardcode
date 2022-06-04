import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

interface Props {
    hash: string;
    Component: any;
}

const Router = ({ hash, Component }: Props) => {
    const { asPath } = useRouter();
    const ref = useRef<HTMLElement>(null);

    function scrollTo(){
        if (ref.current){
            ref.current.scrollIntoView({
                behavior: "smooth"
            })
        }
    }

    function getHash(){
        return asPath.split("#")[1];
    }

    useEffect(() => {
        const currentHash = getHash();

        if (hash === currentHash){
            scrollTo();
        }

        window.addEventListener("hashchange", () => {
            const currentHash = window.location.hash;

            if (currentHash === "#" + hash){
                scrollTo()
            }
        })
    }, [])

    return (
        <Component ref={ref}/>
    )
}

export default Router;