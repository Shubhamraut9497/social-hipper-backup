// app/not-found.js
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"; // Assuming you're using ShadCN's button component
import { FaHome } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center px-6 md:px-12 lg:px-24 py-16 bg-white shadow-lg rounded-lg max-w-2xl text-gray-800">
        <h1 className="text-6xl font-bold text-purple-700">404</h1>
        <p className="text-2xl md:text-3xl font-medium mt-4">Page Not Found</p>
        <p className="mt-2 text-gray-600">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex items-center justify-center">
          <Link href="/" passHref>
            <Button className="px-6 py-3 font-medium flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 text-white rounded-md shadow-lg">
              <FaHome className="text-xl" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
