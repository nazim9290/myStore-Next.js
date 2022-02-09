import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const isActive = (route) => {
    if (route == router.pathname) {
      return "active";
    } else {
      return "";
    }
  };
  return (
    <nav>
      <div className="nav-wrapper #1565c0 blue darken-3">
        <a href="#" className="brand-logo left">
          Logo
        </a>
        <ul id="nav-mobile" className="right">
          <li className={isActive("/")}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={isActive("/product")}>
            <Link href="/product">
              <a>Product</a>
            </Link>
          </li>
          <li className={isActive("/login")}>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li className={isActive("/signup")}>
            <Link href="/signup">
              <a>Signup</a>
            </Link>
          </li>
          <li className={isActive("/create")}>
            <Link href="/create">
              <a>Create</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
