import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
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
          <p className="text-sm">Phone: (208) 555-1234</p>
          <p className="text-sm">Email: info@steelheadelectric.pro</p>
          <p className="text-sm">Hours: Mon–Fri 8am–5pm</p>
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
              href="https://www.instagram.com/steelhead_electric_7b?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              aria-label="Instagram page"
            >
              <CiInstagram size={24} />
            </Link>
            <Link
              href="mailto:info@steelheadelectric.pro"
              aria-label="Email us"
            >
              <MdEmail size={24} />
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
