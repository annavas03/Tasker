import type {FC, ReactNode} from 'react';
import '../styles/modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode; // Тут ми кажемо: "Всередину модалки можна покласти що завгодно"
    title: string;
}

const Modal:FC<ModalProps> = ({isOpen,onClose, children,title}) =>{

    if(!isOpen)return null;

    /*e.stopPropagation() зупиняє закриття вікна якщо користувач натискає безпосередньо на вікно модалки*/
    return(
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-container' onClick={(e)=>{e.stopPropagation()}}>
                <div className='modal-header'>
                    <h1>{title}</h1>
                    <button className='close-btn' onClick={onClose}>
                        <img src={'/assets/close-btn.svg'} alt={'close-btn'}/>
                    </button>
                </div>
                <div className='modal-body'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;