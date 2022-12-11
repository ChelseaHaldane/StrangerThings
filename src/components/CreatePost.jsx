import React, { useState } from "react";

const CreatePost = () => {
// const [newPost, setNewPost] = useState({});
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [delivery, setDelivery] = useState(false);
const handleTitleChange = (event) => {
    setTitle(event.target.value);
}
const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
}
const handlePriceChange = (event) => {
    setPrice(event.target.value);
}
const handleDeliveryChange = (event) => {
    setDelivery(event.target.checked);
}
return (<form>
        <h3>Create a New Post</h3>
        <input name="title" type='text' placeholder="Item Title" 
            value={title} onChange={handleTitleChange}/>
        <input name='description' type='text' placeholder="Item Description" 
            value={description} onChange={handleDescriptionChange}/>
        <input name='price' type='text' placeholder='Item Price' 
            value={price} onChange={handlePriceChange}/>
        <input name='will-deliver' type='checkbox' 
            checked={delivery} onChange={handleDeliveryChange}/>
    </form>);
}

export default CreatePost;