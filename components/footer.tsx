import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <p className="text-xs text-center">
        © {new Date().getFullYear()} Abhishek Jatav. All rights reserved.
      </p>
    </footer>
  );
}
