import { createPortal } from 'react-dom';
import { useState } from "react";
import HamburguerIcon from '../Icons/HamburguerIcon';
import styles from '../../styles/components/Drawer.module.css';

interface DrawerProps {
    close: () => void;
    children: React.ReactNode;
}

const Drawer = ({ close,  children }: DrawerProps) => {
    close;

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.container} onClick={close}>
                <button
                    type='button'
                    onClick={close}
                    className={styles.closeButton}
                    >
                    X
                </button>
                { children }
            </div>
        </div>,
        document.body
    );
}


interface DrawerTriggerProps {
    children: React.ReactNode;
}

const DrawerTrigger = ({ children }: DrawerTriggerProps) => {
    const [ open, setOpen ] = useState<boolean>(false);
    
    const handleClick = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <button
                type="button"
                onClick={handleClick}
                className={styles.button}>
                <HamburguerIcon/>
            </button>
            { open && (
                <Drawer
                    close={handleClose}>
                    {children}
                </Drawer>
            )}
        </>
    )
}

export default DrawerTrigger;