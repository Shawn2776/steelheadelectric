import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { MdEmail, MdPhone } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Company Info */}
        <div>
          <h4 className="text-xl font-bold mb-2">Steelhead Electric</h4>
          <p className="text-sm">
            Serving North Idaho with pride.
            <br />
            Licensed & Insured • Est. {new Date().getFullYear()}
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-2">Contact</h4>
          <p className="text-sm flex items-center gap-2">
            <MdPhone /> Zach Beck: <a href="tel:12087141672">(208) 714-1672</a>
          </p>
          <p className="text-sm flex items-center gap-2">
            <MdPhone /> Kyle Sweeney:{" "}
            <a href="tel:12087141649">(208) 714-1649</a>
          </p>
          <p className="text-sm flex items-center gap-2">
            <MdEmail />{" "}
            <a href="mailto:steelheadelectric25@gmail.com">
              steelheadelectric25@gmail.com
            </a>
          </p>
          <p className="text-sm">Hours: Mon through Fri, 8 a.m. to 5 p.m.</p>
          <p className="text-sm mt-2">Mailing Address:</p>
          <p className="text-sm">319 Aviator Ave.</p>
          <p className="text-sm">Sandpoint, ID 83864</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start md:items-end">
          <h4 className="text-xl font-bold mb-2">Follow Us</h4>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61576121917578"
              aria-label="Facebook page"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/steelhead_electric_7b"
              aria-label="Instagram page"
            >
              <CiInstagram size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-neutral-content opacity-70">
        © {new Date().getFullYear()} Steelhead Electric. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
