import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="relative bg-blue-500 h-screen max-h-screen w-64 hidden sm:block shadow-xl">
      <div className="p-6 h-auto">
        <Link
          className="text-3xl font-semibold uppercase hover:text-gray-300"
          href="/"
        >
          <span class="text-white ml-3 text-xl font-family-karla">
            Aviyel Invoicer
          </span>
        </Link>
        <button className="w-full text-blue-500 bg-white cta-btn font-semibold py-2 mt-10 shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
          <a href="#0" target="_blank" rel="noreferrer">
            <i className="fa fa-plus mr-3"></i>
            New Invoice
          </a>
        </button>
      </div>
      <nav className="text-white text-base font-semibold h-full max-h-80 md:max-h-96 xl:max-h-auto overflow-y-auto">
        <span className="flex items-center text-white py-4 pl-6 nav-item">
          Invoice Item 1
        </span>
        <span className="flex items-center text-white py-4 pl-6 nav-item">
          Invoice Item 1
        </span>
        <span className="flex items-center text-white py-4 pl-6 nav-item">
          Invoice Item 1
        </span>
        <span className="flex items-center text-white py-4 pl-6 nav-item">
          Invoice Item 1
        </span>
        <span className="flex items-center text-white py-4 pl-6 nav-item">
          Invoice Item 1
        </span>
        <span className="flex items-center text-white py-4 pl-6 nav-item">
          Invoice Item 1
        </span>
        <span className="flex items-center text-white py-4 pl-6 nav-item">
          Invoice Item 1
        </span>
        <span className="flex items-center text-white py-4 pl-6 nav-item">
          Invoice Item 1
        </span>
        <span className="flex items-center text-white py-4 pl-6 nav-item">
          Invoice Item 1
        </span>
        <span className="flex items-center text-white py-4 pl-6 nav-item">
          Invoice Item 1
        </span>
      </nav>
      <a
        href="https://aviyel.com/"
        target="_blank"
        rel="noreferrer"
        className="absolute w-full bg-blue-700 bottom-0 active-nav-link text-white flex items-center justify-center py-4"
      >
        <i className="fa fa-arrow-circle-up mr-3"></i>
        For Aviyel ❤️
      </a>
    </aside>
  );
}
