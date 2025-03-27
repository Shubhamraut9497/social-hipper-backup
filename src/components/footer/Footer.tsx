import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-gray-700 md:px-20 dark:text-white border-t border-gray-200 py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* Product Section */}
        <div className="col-span-1 flex flex-col space-y-4">
          <img
            src="/images/logo-original.png"
            alt="Social Hipper Logo"
            className="h-10 w-auto object-contain"
          />
          <p className="mt-4  md:mx-6">
            Lift Media is a digital agency specializing in revolutionizing how
            companies engage with their clients and their team. Our goal is to
            translate the positive effects from revolutionizing how companies
            engage with their clients and their team.
          </p>
        </div>

        {/* Company Section */}
        <div className="col-span-1 flex flex-col items-center justify-start space-y-2">
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="col-span-1 bg-gray-100 dark:bg-[#493e3e] p-4 rounded-lg flex flex-col space-y-4">
          <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-r-lg"
            >
              →
            </button>
          </form>
          <p className="text-sm mt-4">
            Hello, we are Lift Media. Our goal is to translate the positive
            effects from revolutionizing how companies engage with their clients
            & their team.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 mt-10 pt-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <span className="text-red-500 font-bold text-xl">SOCIAL HIPPER</span>
          <ul className="flex space-x-6 text-sm mt-4 md:mt-0">
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin
                size={20}
                className="text-gray-500 hover:text-gray-700"
              />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook
                size={20}
                className="text-gray-500 hover:text-gray-700"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter
                size={20}
                className="text-gray-500 hover:text-gray-700"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
