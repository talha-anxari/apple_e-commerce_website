import { useContext, useState } from "react";
import {
  RiHeart2Line,
  RiSearch2Line,
  RiShoppingCart2Line,
  RiUser2Line,
  RiMenu3Line,
  RiCloseLine,
  RiMenu2Line,
  RiLogoutCircleLine,
} from "@remixicon/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { RiUser3Fill, RiUserAddFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { FaOpencart, FaRegCircleUser } from "react-icons/fa6";
import myContext from "../../context/myContext";

// const searchData = [
//   {
//     name: "iPhone",
//     image:
//       "https://th.bing.com/th/id/OIP.sJLFhaJCytrOCaKlElT12QHaEK?rs=1&pid=ImgDetMain",
//   },
//   {
//     name: "MacBook",
//     image:
//       "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png",
//   },
//   {
//     name: "Apple Watch",
//     image:
//       "https://th.bing.com/th/id/R.21f6dcdb3fd3b3045d9a24f66db892ec?rik=TRpfbXyp9Qos7g&pid=ImgRaw&r=0",
//   },
//   {
//     name: "iPad",
//     image:
//       "https://th.bing.com/th/id/R.cb84de436590c475b47e5a0d1e5943a1?rik=UsVZNiWoxVFBkg&pid=ImgRaw&r=0",
//   },
//   {
//     name: "AirPods",
//     image:
//       "https://th.bing.com/th/id/OIP.JpfrE6XaNggC6UzixZIffQHaF6?rs=1&pid=ImgDetMain",
//   },
//   {
//     name: "AirTag",
//     image:
//       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-single-select-202104?wid=890&hei=890&fmt=jpeg&qlt=95&.v=1617761671000",
//   },
//   {
//     name: "Apple Vision Pro",
//     image:
//       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/vision-pro-card-66-vision-pro-202401?wid=1172&hei=588&fmt=p-jpg&qlt=95&.v=1702510799485",
//   },
//   {
//     name: "Apple TV 4k",
//     image: "https://m.media-amazon.com/images/I/51Y-Dulc3bL._AC_SL1024_.jpg",
//   },
//   {
//     name: "HomePod",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Z1ikuZnoQnJ-lclK8MRa0k8H8UDr0cTDfw&s",
//   },
//   {
//     name: "Accessories",
//     image:
//       "https://img.freepik.com/premium-photo/tech-gadgets-devices-arranged-organized-manner-generative-ai_546192-1947.jpg",
//   },
// ];

const Header = () => {
  const context = useContext(myContext);
  const {getAllProduct} = context;
  const user = JSON.parse(localStorage.getItem("users"));
  // console.log(user)

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("users");
    navigate('/signIn');
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // For mobile navigation

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Filter For Search
  const [search, setSearch] = useState("");

  const filteredSearchData = getAllProduct.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  ).slice(0, 8); // Apply slice after filtering

  const cartItems = useSelector((state) => state.cart);
  return (
    <header
      className="sticky top-0 flex justify-between items-center py-4 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-32 shadow-md z-50"
      style={{
        backdropFilter: "blur(30px)",
        boxShadow: "0px 0px 30px rgba(277, 228, 237, 0.37)",
        border: "2px solid rgba(255, 255, 255, 0.20)",
      }}
    >
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button onClick={handleNavClick} className="text-gray-600">
          {isNavOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
        </button>
      </div>

      {/* Logo */}
      <div className="xl:text-2xl md:text-lg sm:text-base text-sm font-bold flex items-center">
        <Link to={"/"}>
          <span className="text-orange-500">Apple</span>
          {/* <img src="apple-100.png" className="w-12" alt="Apple Logo" /> */}
          <span className="text-gray-900">Store.</span>
        </Link>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* Navigation */}
        <nav
          className={`md:flex md:space-x-6 ${
            isNavOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 z-10 mr-5`}
        >
          <Link
            to={"/"}
            className="text-gray-600 hover:text-orange-500 block py-2 md:py-0"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-gray-600 hover:text-orange-500 block py-2 md:py-0"
          >
            About
          </Link>
          {/* admin */}
          {user?.role === "admin" && (
            <Link
              to={"/adminDashboard"}
              className="text-gray-600 hover:text-orange-500 block py-2 md:py-0"
            >
              {user?.name}
            </Link>
          )}

          <Link
            to={"/shop"}
            className="text-gray-600 hover:text-orange-500 block py-2 md:py-0"
          >
            Shop
          </Link>
          <Link
            to={"/blog"}
            className="text-gray-600 hover:text-orange-500 block py-2 md:py-0"
          >
            Blogs
          </Link>
          {/* user */}
          {user?.role === "user" && (
            <Link
              to={"/userDashboard"}
              className="text-gray-600 hover:text-orange-500 block py-2 md:py-0"
            >
              {user?.name}
            </Link>
          )}
          <Link
            to={"/contact"}
            className="text-gray-600 hover:text-orange-500 block py-2 md:py-0"
          >
            Contact
          </Link>
        </nav>
        {/* Search Icon */}
        {/* <div className="relative">
          <button onClick={handleSearchClick} className="text-gray-600">
            <RiSearch2Line size={20} />
          </button>
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              className="absolute top-full right-0 sm:-right-10 mt-2 p-2 w-64 border border-gray-300 rounded shadow-md z-10"
            />
          )}
        </div> */}
        <div className="relative">
          <button onClick={handleSearchClick} className="text-gray-600">
            <RiSearch2Line size={20} />
          </button>
          {isSearchOpen && (
            <input
              type="text"
              value={search}
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              className="absolute top-full right-0 mt-2 p-2 w-48 sm:w-64 border border-gray-300 rounded shadow-md z-10"
            />
          )}
        </div>
        {/* Search Drop-Down */}

        <div className="flex items-center absolute top-24 right-4 sm:right-8 justify-center w-full sm:w-auto">
          {search && (
            <div className="block bg-gray-200 w-72 sm:w-96 z-50 my-1 rounded-lg px-2 py-2 max-h-96 overflow-y-auto">
              {filteredSearchData.length > 0 ? (
                <>
                  {filteredSearchData.map((item, index) => {
                    return (
                      <div key={index}
                      onClick={() => navigate(`/productDetails/${item.id}`)} className="py-2 px-2 ">
                        <div className="flex items-center gap-2 cursor-pointer">
                          <img
                            src={item.productImageURL}
                            alt={item.title}
                            className="w-10"
                          />
                          {item.title}
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <div className="flex justify-center">
                    <img
                      className=" w-20"
                      src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                      alt="img"
                    />
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* sign Up  */}
        {/* {!user ? (
          <Link to={"/signUp"}>
            <RiUserAddFill size={20} className="text-gray-600" />
          </Link>
        ) : (
          ""
        )} */}

        {/* sign In  */}
        {!user ? (
          <Link to={"/signIn"}>
            <FaRegCircleUser className="text-gray-600" />
            {/* <RiUser2Line size={20} className="text-gray-600" /> */}
          </Link>
        ) : (
          ""
        )}

        {/* sign out */}
        {user && (
          <button
            onClick={handleSignOut}
            title="Sign Out"
            className="text-gray-600 hover:text-orange-500 block py-2 md:py-0"
          >
            <RiLogoutCircleLine size={20} className="text-gray-600" />
          </button>
        ) }
        <Link to={"/favorite"}>
          <RiHeart2Line size={20} className="text-gray-600" />
        </Link>
        <Link to="/cartPage" className="relative">
  {/* <RiShoppingCart2Line size={20} className="text-gray-600" /> */}
  <FaOpencart className='text-lg text-gray-600' />
  {cartItems.length > 0 && (
    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
      {cartItems.length}
    </span>
  )}
</Link>


      </div>
    </header>
  );
};

export default Header;
