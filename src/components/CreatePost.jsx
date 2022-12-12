import React, { useState } from "react";


const CreatePost = ({ handleFormSubmit }) => {
    // const [newPost, setNewPost] = useState({});
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }
    const handleWillDeliverChange = (event) => {
        setWillDeliver(event.target.checked);
    }

    /*post: {
      title: "My favorite stuffed animal",
      description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
      price: "$480.00",
      willDeliver: true
    } */
    return (<form onSubmit={(ev) => ev.preventDefault()}>
        <h3>Create a New Post</h3>
        <input name="title" type='text' placeholder="Item Title"
            value={title} onChange={handleTitleChange} />
        <input name='description' type='text' placeholder="Item Description"
            value={description} onChange={handleDescriptionChange} />
        <input name='price' type='text' placeholder='Item Price'
            value={price} onChange={handlePriceChange} />
        <label>
            Will deliver?
            <input name='will-deliver' type='checkbox'
                checked={willDeliver} onChange={handleWillDeliverChange} />
        </label>
        <input type="submit" value='createPost' onClick={handleFormSubmit} />
    </form>);
}

export default CreatePost;