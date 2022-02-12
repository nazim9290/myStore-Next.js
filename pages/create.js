import React, { useState } from "react";
import baseUrl from "../helpers/baseUrl";

const Create = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [media, setMedia] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const mediaUrl = await imageUpload();
    const res = await fetch(`${baseUrl}/api/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        mediaUrl,
        description,
      }),
    });
    const data = await res.json();
    if (data.error) {
      M.toast({ html: data.error, classes: "red" });
    } else {
      M.toast({ html: "Product Save", classes: "green" });
    }
  };
  const imageUpload = async () => {
    const data = new FormData();
    data.append("file", media);
    data.append("upload_preset", "product");
    data.append("cloud_name", "dpakfnqvn");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dpakfnqvn/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const res2 = await res.json();
    return res2.url;
  };
  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          name="media"
          placeholder="media"
          onChange={(e) => setMedia(e.target.files[0])}
        />
        <img
          src={media ? URL.createObjectURL(media) : ""}
          alt=""
          className="responsive-img"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
<h1>create page</h1>;
