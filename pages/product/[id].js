import { useRouter } from "next/router";
import React, { useState } from "react";
import Delete from "../../components/Delete";
import Modal from "../../components/Modal";
import baseUrl from "../../helpers/baseUrl";

const StoreProduct = ({ product }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const deleteProduct = async (id) => {
    const res = await fetch(`${baseUrl}/api/product/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    router.push("/");
  };
  return (
    <div className="container center-align">
      <h3>{product?.name}</h3>
      <img src={product?.mediaUrl} alt="" />
      <h5>{product?.price}</h5>
      <input type="number" min="0" placeholder="Quantity" />
      <button className="btn">add</button>
      <button
        className="btn #d50000 red accent-4"
        onClick={() => deleteProduct(product._id)}
      >
        Delate
      </button>
    </div>
  );
};

export default StoreProduct;

//যদি ইউজারের বিভিন্নতায় আমাকে ভিন্ন ডাটা দেখানো লাগে তবে আমি সার্ভার প্রপ করবো তা হলে পাথ প্রপ এর প্রয়োজন থাকবে না । এটা শুধু মাত্র সার্ভারের কল করলেই রেডি হয়ে আসবে ।
// export const getServerSideProps = async ({ params: { id } }) => {
//   const res = await fetch(`http://localhost:3000/api/product/${id}`);
//   const data = await res.json();
//   return {
//     props: {
//       product: data,
//     },
//   };
// };

//স্ট্যাটিক প্রপ হলো সবার জন্য নির্দিস্ট বিষয় কেই দেখানো । যেহেতু প্রডাক্ট এর বিষয় সবার জন্য সেম তাই এই খানে স্ট্যাটিক প্রপ করা হলো । মনে রাখতে হবে স্টায়টিক প্রপ এর জন্য অবশ্যই স্ট্যাটিক পাথ প্রপ্ করতে হবে ।
export async function getStaticProps({ params: { id } }) {
  const res = await fetch(`${baseUrl}/api/product/${id}`);
  const data = await res.json();
  return {
    props: { product: data },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/product`);
  const data = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = data.map((post) => ({
    params: { id: post._id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}
