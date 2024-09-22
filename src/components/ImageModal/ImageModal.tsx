import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { FC } from 'react';

interface ImageModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    imgSrc: string; 
    imgAlt: string; 
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, onRequestClose, imgSrc, imgAlt }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={css.modal}
            overlayClassName={css.overlay}
        >
            <div className={css.content}>
                <img src={imgSrc} alt={imgAlt} className={css.image} />
            </div>
        </Modal>
    );
};

Modal.setAppElement('#root');

export default ImageModal;
