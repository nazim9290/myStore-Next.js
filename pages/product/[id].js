const product = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export default product;

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
export const getStaticProps = async ({ params: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/product/${id}`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/product");
  const details = await res.json();
  // Get the paths we want to pre-render based on posts
  const paths = details.map((dt) => ({
    params: { id: dt._id },
  }));
  return {
    paths,
    fallback: false,
  };
};
