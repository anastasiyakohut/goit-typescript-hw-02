import css from './LoadMoreBtn.module.css';
import { FC } from 'react';

interface LoadMoreBtnProps {
    onClick: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
    return (
        <div className={css.container}>
            <button className={css.loadMoreBtn} onClick={onClick}>
                Load more
            </button>
        </div>
    );
};

export default LoadMoreBtn;
