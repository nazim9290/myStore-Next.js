import Link from "next/link";
import Navbar from "../components/Navbar";
import baseUrl from "../helpers/baseUrl";

const Home = ({ products }) => {
  const productList = products.map((product) => {
    return (
      <div className="card" key={product._id}>
        <div className="card-image">
          <img src={product.mediaUrl} />
          <span className="card-title black-text">{product.name}</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons">add</i>
          </a>
        </div>
        <div className="card-content">
          <p>{product.description}</p>
          <h4>{product.price}</h4>
          <Link href="/product/[id]" as={`/product/${product._id}`}>
            <button className="btn">
              <a className="white-text">view product details</a>
            </button>
          </Link>
        </div>
      </div>
    );
  });
  // console.log(products);
  return <div className="rootcard">{productList}</div>;
};

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/api/product`);
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
}

export default Home;
