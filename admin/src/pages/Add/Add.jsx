import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
const Add = () => {
  return (
    <div className='add'>
      <form className="flex-col">
        <div className="add-img-upload">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id='image' hidden required/>
        </div>
        <div className="add-product-name">
          <p>Product name</p>
          <input type="text" name ='name' placeholder='Type here'/>
        </div>
        <div className="add-product-desription flex-col">
          <p>Product Description</p>
          <textarea name='description' rows='6' placeholder='Write description here' required />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col"></div>
        </div>
      </form>
      Add
    </div>
  ) 
}

export default Add
