import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { FC } from 'react';
import { Photo } from '../types';

interface ImageGalleryProps {
    items: Photo[];
    onImageClick: (imgSrc: string, imgAlt: string) => void; 
}

const ImageGallery: FC<ImageGalleryProps> = ({ items, onImageClick }) => {
    return (
        <ul className={css.gallery}>
            {items.map((item) => (
                <ImageCard
                    key={item.id}
                    imgSrc={item.urls.small}
                    imgAlt={item.alt_description}
                    onClick={() => onImageClick(item.urls.regular, item.alt_description)}
                />
            ))}
        </ul>
    );
};

export default ImageGallery;
