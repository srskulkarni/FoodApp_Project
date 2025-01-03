import React, {useState} from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';
const Add = ({url}) => {

    //const url = 'http://localhost:4000' ;
    const [image,setImage] = useState(false);
    const [data,setData] = useState({
      name:" ",
      description:" ",
      price:" ",
      category:'Salad',
    })

    const onChangeHandler = (instance) =>{
      const name = instance.target.name;
      const value = instance.target.value;
      setData(data =>({...data,[name]:value}))
    }

    const onSubmitHandler =async(instance) =>{
      instance.preventDefault();
      const formData = new FormData();
      formData.append('name',data.name)
      formData.append('description',data.description)
      formData.append('price',Number(data.price))
      formData.append('category',data.category)
      formData.append('image',image)
      const response = await axios.post(`${url}/api/food/add`,formData);
      if (response.data.success){
        setData({
          name:"",
          description:"",
          price:"",
          category:'Salad',
        })
        setImage(false)
        toast.success(response.data.message)
      } 
      else {
        toast.error(response.data.message)
      }
    }
    // useEffect(()=>{
    //   console.log(data);
    // },[data])
  return (
    <div className='add'>
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])}type="file" id='image' hidden />
        </div>
        <div className="add-product-name">
          <p>Product Name</p>
          <input onChange= {onChangeHandler} value ={data.name} type="text" name ='name' placeholder='Type here'/>
        </div>
        <div className="add-product-desription flex-col">
          <p>Product Description</p>
          <textarea onChange= {onChangeHandler} value ={data.description} name='description' rows='8' placeholder=' Write description here' required />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange= {onChangeHandler} name="category" >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Dessert">Dessert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Vegan">Vegan</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange= {onChangeHandler} value ={data.price} type="number" name='price' placeholder='$20' />
          </div>
        </div>
        <button type='submit' className='add-button' >ADD</button>
      </form>
    </div>
  );
};

export default Add
