"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full mx-auto bg-black text-white p-4 rounded shadow-lg z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <p className="text-sm mb-2">
          We use cookies to ensure you get the best experience on our website.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded text-sm"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
