import { useState } from "react";
import { Link } from "react-router-dom";

interface MobileSidebarProps {
  isSearch: boolean;
  setIsSearch: (isSearch: boolean) => void;
}

const HeaderSearch = ({ isSearch, setIsSearch }: MobileSidebarProps) => {

  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchValue('');
    setIsSearch(false);
  };

  return (
    <>
      <div className={`df-search-area ${isSearch ? "opened" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="df-search-form">
                <div className="df-search-close text-center mb-20">
                  <button onClick={() => setIsSearch(false)} className="df-search-close-btn df-search-close-btn"></button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="df-search-input mb-10">
                    <input
                      type="text"
                      placeholder="Search here..."
                      value={searchValue}
                      onChange={handleSearchChange}
                    />
                    <button type="submit"><i className="icon-search"></i></button>
                  </div>
                  <div className="df-search-category">
                    <span>Search by : </span>
                    <Link to="#">Modified Roofing , </Link>
                    <Link to="#">Roof Installation, </Link>
                    <Link to="#">Roof Cornering, </Link>
                    <Link to="#">Roof Renovation </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => setIsSearch(false)} className={`body-overlay ${isSearch ? "opened" : ""}`}></div>
    </>
  )
}

export default HeaderSearch