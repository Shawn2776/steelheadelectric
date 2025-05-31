"use client";

import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { MdEmail, MdPhone } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
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
              <MdPhone /> Zach Beck:{" "}
              <a href="tel:12087141672">(208) 714-1672</a>
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
            <p className="text-sm">
              Hours: Mon through Fri, 7:30 a.m. to 5 p.m.
            </p>
            <p className="text-sm mt-2">Mailing Address:</p>
            <p className="text-sm">319 Aviator Ave.</p>
            <p className="text-sm">Sandpoint, ID 83864</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-xl font-bold mb-2">Follow Us</h4>
            <div className="flex gap-4 mb-2">
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
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-xs underline hover:text-white"
            >
              Privacy Policy
            </button>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-neutral-content opacity-70">
          © {new Date().getFullYear()} Steelhead Electric. All rights reserved.
        </div>
      </footer>

      {/* Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6">
          <div className="bg-white max-w-2xl w-full rounded-lg shadow-lg overflow-y-auto max-h-[90vh] p-6 relative text-black">
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-2 right-4 text-2xl font-bold hover:text-red-500"
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <div className="text-sm space-y-4 overflow-y-auto">
              <p>
                <strong>Effective Date:</strong> May 31, 2025
              </p>
              <p>
                Steelhead Electric ("we", "our", or "us") respects your privacy.
                This Privacy Policy explains how we collect and use personal
                information through our website:{" "}
                <strong>www.steelheadelectric.pro</strong>.
              </p>
              <p>
                <strong>Information We Collect:</strong> When you use our
                contact form, we collect your name, email, phone number, and
                message. We also use Google Analytics to collect anonymized
                usage data.
              </p>
              <p>
                <strong>How We Use It:</strong> To respond to inquiries and
                improve our website. We do not sell or share your data.
              </p>
              <p>
                <strong>Cookies:</strong> Our site uses cookies through Google
                Analytics (including Advertising Features like Demographics and
                Interest Reports). You can opt out using Google’s browser add-on
                or manage your activity via{" "}
                <a
                  href="https://myactivity.google.com"
                  className="underline text-blue-600"
                  target="_blank"
                >
                  My Activity
                </a>
                .
              </p>
              <p>
                <strong>Your Rights:</strong> You can request to view or delete
                your submitted information by contacting us at{" "}
                <a
                  href="mailto:steelheadelectric25@gmail.com"
                  className="underline"
                >
                  steelheadelectric25@gmail.com
                </a>
                .
              </p>
              <p>
                <strong>Security:</strong> We take reasonable steps to protect
                your data but cannot guarantee 100% security online.
              </p>
              <p>
                <strong>Updates:</strong> This policy may be updated
                periodically. Changes will be posted here with a new date.
              </p>
              <p>
                <strong>Contact:</strong> Questions? Reach out by email or call
                us at (208) 714-1672 or (208) 714-1649.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
