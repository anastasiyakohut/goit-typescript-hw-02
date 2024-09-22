import css from './ImageCard.module.css';
import { FC } from 'react';

interface ImageCardProps {
    imgSrc: string;
    imgAlt: string;
    onClick: () => void; 
}

const ImageCard: FC<ImageCardProps> = ({ imgSrc, imgAlt, onClick }) => {
    return (
        <div className={css.listItem} onClick={onClick}>
            <img src={imgSrc} alt={imgAlt} />
        </div>
    );
};

export default ImageCard;
