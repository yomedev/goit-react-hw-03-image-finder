import { useFetch } from 'hooks/useFetch';
import { useState, useEffect } from 'react';
import { getImages } from 'services/ImageService';
import '../styles.css'
import Button from './Button';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Loader from './Loader';

export const App = () => {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [canChangePage, setCanChangePage] = useState(true)

  const [fetchImages, areImagesLoading, imagesError] = useFetch(async () => {
    const { imagesData, totalImages } = await getImages(page, searchQuery)
    const totalImagesOnPage = page === 1
      ? imagesData
      : images.concat(imagesData)
    setImages(totalImagesOnPage)
    setCanChangePage(totalImages > page * 12)
  })

  useEffect(() => {
    fetchImages()
  }, [page, searchQuery])

  const updateSearchQuery = query => {
    setSearchQuery(query)
    setPage(1)
  }

  return (
    <div className='App'>
      <Searchbar onSubmit={updateSearchQuery} />
      <ImageGallery images={images} />
      {areImagesLoading && <Loader />}
      {canChangePage && <Button changePage={() => setPage(page + 1)} />}
    </div>
  );
};
