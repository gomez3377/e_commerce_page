import React from 'react'
import productImg1 from '../assets/images/image-product-1.jpg'
import productImg2 from '../assets/images/image-product-2.jpg'
import productImg3 from '../assets/images/image-product-3.jpg'
import productImg4 from '../assets/images/image-product-4.jpg'
import productThumbnailImg1 from '../assets/images/image-product-1-thumbnail.jpg'
import productThumbnailImg2 from '../assets/images/image-product-2-thumbnail.jpg'
import productThumbnailImg3 from '../assets/images/image-product-3-thumbnail.jpg'
import productThumbnailImg4 from '../assets/images/image-product-4-thumbnail.jpg'


const ProductImg = () => {
    const [productImages, setProductImages] = React.useState([
        {
        id: 1,
        img: productImg1,
        thumbnailImg: productThumbnailImg1,
        currentlyDisplayed: true
    },
    {
        id: 2,
        img: productImg2,
        thumbnailImg: productThumbnailImg2,
        currentlyDisplayed: false
    },
    {
        id: 3,
        img: productImg3,
        thumbnailImg: productThumbnailImg3,
        currentlyDisplayed: false
    },
    {
        id: 4,
        img: productImg4,
        thumbnailImg: productThumbnailImg4,
        currentlyDisplayed: false
    },
   
    ])

    const [currentProductImg, setCurrentProductImg] = React.useState(findCurrentImg)

    function changeProductImg(currentId){
        setProductImages(prevImgData => prevImgData.map(img => {
            return img.id === currentId 
            ? {...img, currentlyDisplayed: true}
            : {...img, currentlyDisplayed: false}
        }
            ))
        setCurrentProductImg(findCurrentImg())

    }

    function findCurrentImg() {
        const [currentImg] = productImages.filter(img => img.currentlyDisplayed)

        const { img } = currentImg
        return img
    }


    const thumbnailImgs = productImages.map(img => <li key={img.id}>
        <button className='thumbnail-img' 
        onClick={() => changeProductImg(img.id)}>
            <img src={img.thumbnailImg} 
            className={img.currentlyDisplayed ?'active' : ''} />
            </button>
            </li>
            )
  return (
    <div className='product-display-img'>
        <div className="product-img">
        <img src={currentProductImg} />

        </div>

        <nav className='thumbnail-nav'>
            <ul>
                {thumbnailImgs}
            </ul>
        </nav>
    </div>
  )
}

export default ProductImg