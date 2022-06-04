const HamburguerIcon = (props: React.SVGProps<SVGSVGElement>) =>{
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M35 16.6667H5" stroke="#E73634" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M35 10H5" stroke="#E73634" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M35 23.3333H5" stroke="#E73634" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M35 30H5" stroke="#E73634" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default HamburguerIcon
