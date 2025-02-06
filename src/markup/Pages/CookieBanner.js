import React, { useState, useEffect } from "react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null; // Hide if cookies are accepted

  return (
    <div
      className="text-white py-3 px-4"
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        zIndex: "9999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1c2957",
      }}
    >
      <span className="cookie-banner-text">
        We use cookies to improve your experience. By continuing to browse the
        site, you agree to our&nbsp;
        <a href="/employer/privacy-rights" className="text-warning">
          Privacy Policy
        </a>{" "}
        &amp;
        <a href="/employer/term-of-use-nova-jobs" className="text-warning">
          Term & Condition
        </a>{" "}
        &amp;
        <a
          href="/employer/cookies-digital-advertising"
          className="text-warning"
        >
          {" "}
          Cookie Policy.
        </a>
      </span>
      <button
        onClick={handleAccept}
        className="btn btn-warning btn-sm ml-3"
        style={{ marginLeft: "15px" }}
      >
        Got it
      </button>
    </div>
  );
};

export default CookieBanner;
