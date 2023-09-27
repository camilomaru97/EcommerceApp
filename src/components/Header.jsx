import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';

export const Header = () => {
  const cart = useSelector((state) => state.cart);
  const { productos } = useProducts();
  const [searchValue, setSearchValue] = useState('');
  const [adminPage, setAdminPage] = useState(false);
  let locationPath = useLocation();
  const links = [
    { redirect: '/all', text: 'All' },
    { redirect: '/women', text: 'Women' },
    { redirect: '/men', text: 'Men' },
    { redirect: '/sport', text: 'Sport' },
  ];
  const handleSearchInput = ({ target }) => {
    setSearchValue(target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchValue('');
  };

  const handleAdminPage = () => {
    setAdminPage(!adminPage);
  };

  const numberProductsAdded = useMemo(() => {
    return cart ? cart.productos.length : 0;
  }, [cart]);

  return (
    <>
      <header className="home_header">
        <Link to="/">
          <h1>
            BR.<span style={{ color: '#d8d6d6' }}>F</span>
          </h1>
        </Link>
        <form className="search_input" onSubmit={handleSearchSubmit}>
          <input
            onChange={handleSearchInput}
            type="text"
            placeholder="Search"
            value={searchValue}
          />
          <span className="material-symbols-outlined search">search</span>
        </form>
        <section>
          <div className="cart">
            <Link style={{ color: 'black' }} to="/cart">
              <span className="material-symbols-outlined">shopping_cart</span>
              <p>Cart</p>
            </Link>
            <div className="cart_number">
              {numberProductsAdded ? <p>{numberProductsAdded}</p> : null}
            </div>
          </div>
          <div className="favorite">
            <span className="material-symbols-outlined">favorite</span>
            <p>Favorite</p>
          </div>
          <div className="user_profile">
            <span
              className="material-symbols-outlined acount"
              onClick={handleAdminPage}
            >
              account_circle
            </span>
            <Link to="/admin-products">
              {adminPage ? <div className="admin"> Administrar </div> : null}
            </Link>
          </div>
        </section>
      </header>
      <nav className="home_nav">
        {links.map((link) => (
          <Link
            className={locationPath.pathname === link.redirect ? 'active' : ''}
            key={link.text}
            to={link.redirect}
          >
            {link.text}
          </Link>
        ))}
      </nav>
      <hr />
    </>
  );
};
