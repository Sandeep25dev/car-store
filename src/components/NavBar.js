import { useState } from "react";

export function NavBar({ setData, MockData }) {
  const [searchInp, setSearchInp] = useState("");
  function handleChange(event) {
    event.preventDefault();
    const searchStr = event.target.value;
    setSearchInp(searchStr);
    console.log("searchStr....", searchStr);
    const filterData = MockData.filter((item) => item.car_name === searchStr);
    console.log(filterData);
    console.log(searchInp);
    setData(filterData);
  }
  return (
    <>
      <div className="nav-bar">
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary rounded"
          aria-label="Eleventh navbar example"
        >
          <form role="search" className="search-form">
            <input
              className="search-input"
              onChange={(event) => handleChange(event)}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          {/* <button>search</button> */}

          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample09">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="https://www.google.com/"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Relevance
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.google.com/"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.google.com/"
                      >
                        Another action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.google.com/"
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="https://www.google.com/"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All Brands
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.google.com/"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.google.com/"
                      >
                        Another action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.google.com/"
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
