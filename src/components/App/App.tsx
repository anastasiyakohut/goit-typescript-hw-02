import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Photo } from '../types';
import css from './App.module.css';

interface UnsplashApiResponse {
  total_pages: number;
  results: Photo[];
}

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(999);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImgSrc, setModalImgSrc] = useState<string>('');
  const [modalImgAlt, setModalImgAlt] = useState<string>('');

  const handleSearch = (newDescription: string): void => {
    setPhotos([]);
    setPage(1);
    setDescription(newDescription);
  };

  const handleLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (imgSrc: string, imgAlt: string): void => {
    setModalImgSrc(imgSrc);
    setModalImgAlt(imgAlt);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (description === '') return;

    const fetchPhoto = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(false);

        const response = await axios.get<UnsplashApiResponse>(
          `https://api.unsplash.com/search/photos/?query=${description}&page=${page}&per_page=16&client_id=2idXO51974LO3lFXGKiJTOTCo3WzG-IdNTwia3Ehph0`
        );

        setTotalPages(response.data.total_pages);
        setPhotos((prevPhotos) => [...prevPhotos, ...response.data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPhoto();
  }, [description, page]);

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {error ? (
        <ErrorMessage />
          ) : (
                  
        photos.length > 0 && (
          <ImageGallery items={photos} onImageClick={handleImageClick} />
        )
      )}
      {photos.length > 0 && !loading && page < totalPages && !error && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {loading && <p className={css.loader}>Loading photos, please wait...</p>}
      {page >= totalPages && <p className={css.lastPage}>THIS IS THE END!</p>}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        imgSrc={modalImgSrc}
        imgAlt={modalImgAlt}
      />
      <Toaster />
    </div>
  );
}
