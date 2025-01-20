import React from 'react';
import Link from 'next/link';

const ErrorPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bgcolour">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-textcolour">404</h1>
        <div className="mt-4">
          <h2 className="text-3xl font-semibold text-textcolour mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          
          {/* Animated working message */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <span className="text-gray-600">We&apos;re working on it</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-accentcolour rounded-full animate-bounce" 
                   style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-accentcolour rounded-full animate-bounce" 
                   style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-accentcolour rounded-full animate-bounce" 
                   style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>

          {/* Animated gear icon */}
          <div className="mb-8">
            <svg
              className="w-16 h-16 mx-auto text-textcolour animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <Link
            href="/"
            className="inline-block px-6 py-3 bg-cardcolour text-black rounded-lg
                     hover:bg-accentcolour hover:text-black transition-colors duration-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
