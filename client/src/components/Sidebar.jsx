import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
    
      <aside
        id="default-sidebar"
        className="fixed border-r-2 bborder-gray-400 top-25 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto  dark:bg-gray-800 mt-2 relative top-14">
          <ul className="space-y-2 font-medium">
            <li>
            <input type="text" placeholder="Placeholder" class="placeholder:text-slate-400  pl-2  bg-white border rounded border-slate-300 w-56 h-10 mb-6"/>
            </li>
            <li>
              <Link
                to="/"
                className={`${
                  location.pathname == "/" ? "bg-gray-200" : ""
                } flex items-center p-2 text-gray-900 w-56 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  width="800px"
                  height="800px"
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  viewBox="0 0 512 512"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>product-catalog</title>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="icon"
                      fill="#000000"
                      transform="translate(42.666667, 41.600000)"
                    >
                      <path
                        d="M85.334,107.733 L85.335,150.399 L42.6666667,150.4 L42.6666667,342.4 L175.702784,342.4 L192,350.539 L192,250.91 L202.665434,256.831437 L213.331989,262.740708 L223.998544,256.831437 L234.666,250.909 L234.666,350.539 L250.963883,342.4 L384,342.4 L384,150.4 L341.332,150.399 L341.331,107.733 L426.666667,107.733333 L426.666667,385.066667 L261.013333,385.066667 L213.333333,408.918058 L165.632,385.066667 L3.55271368e-14,385.066667 L3.55271368e-14,107.733333 L85.334,107.733 Z M362.666667,278.4 L362.666667,310.4 L256,310.4 L256,278.4 L362.666667,278.4 Z M170.666667,278.4 L170.666667,310.4 L64,310.4 L64,278.4 L170.666667,278.4 Z M362.666667,214.4 L362.666667,246.4 L256,246.4 L256,239.065 L300.43,214.399 L362.666667,214.4 Z M126.237,214.399 L170.666,239.065 L170.666667,246.4 L64,246.4 L64,214.4 L126.237,214.399 Z M213.333333,7.10542736e-15 L320,59.2604278 L320,177.780929 L213.333333,237.041357 L106.666667,177.780929 L106.666667,59.2604278 L213.333333,7.10542736e-15 Z M170.666667,107.370667 L170.666667,188.928 L192,200.789333 L192,119.232 L170.666667,107.370667 Z M128,83.6693333 L128,165.226723 L149.333333,177.088 L149.333333,95.5306667 L128,83.6693333 Z M256.768,48.5333333 L182.037333,89.28 L202.346667,100.565333 L276.373333,59.4133333 L256.768,48.5333333 Z M213.333333,24.4053901 L139.306667,65.536 L159.957333,77.0133333 L234.688,36.2666667 L213.333333,24.4053901 Z"
                        id="Path-2"
                      ></path>
                    </g>
                  </g>
                </svg>
              
                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
              </Link>
            </li>
            <li>
              <Link
                to="/purchase"
                className={`${
                  location.pathname == "/purchase" ? "bg-gray-200" : ""
                } flex items-center p-2 text-gray-900 w-56 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Purchase</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
