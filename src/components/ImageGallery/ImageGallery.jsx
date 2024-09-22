import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'

export default function ImageGallery({items, onImageClick}) {
    return (
        <ul className={css.gallery}>
            {items.map((item) => (
                <ImageCard key={item.id} item={item}
                    imgSrc={item.urls.small}
                    imgAlt={item.alt_description} 
                    onClick={() => onImageClick(item.urls.regular, item.alt_description)}
                />
            ))}
        </ul>
    )
}