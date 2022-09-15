import axios from "axios"

axios.defaults.baseURL = "https://pixabay.com/api/?key=29943402-7b214b60182b7d41669576685&image_type=photo&orientation=horizontal"

export const getImages = async (page = 1, query = '') => {
  const response = await axios.get(`&q=${query}&page=${page}&per_page=12`)
  const images = response.data.hits
  const total = response.data.totalHits
  return ({
    imagesData: images.map(({ id, webformatURL, largeImageURL }) => ({ id, webformatURL, largeImageURL })),
    totalImages: total
  })
}