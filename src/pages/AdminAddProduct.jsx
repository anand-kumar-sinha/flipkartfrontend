import React, { useState } from "react";
import product1 from "../Images/cloth4.webp";
import "../index.scss";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
import axios from "axios";

const AdminAddProduct = () => {
  const [productImg, setProductImg] = useState();
  const [loading, setLoading] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = async () => {
    try {
      setLoading(true);
      if (productImg) {
        const storageRef = ref(
          storage,
          `Products/ ${name} ${Math.round(Math.random() * 100000)}`
        );
        const uploadTask = uploadBytesResumable(storageRef, productImg);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
          },
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              dataSender(downloadURL);
            });
          }
        );
      } else {
        dataSender();
      }
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
    }
  };
  const dataSender = async (imgUrl) => {
    try {
      const { data } = await axios.post(
        "https://flipkartbackend.vercel.app/admin/product/add",
        { name, price, brand, category, imgUrl }
      );

      console.log(data);
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="adminAdd">
      <form>
        <p>Add Product</p>
        <img
          src={productImg ? URL.createObjectURL(productImg) : product1}
          alt=""
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProductImg(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input type="button" value="Add Product" onClick={submitHandler} />
      </form>
    </div>
  );
};

export default AdminAddProduct;
