'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-6">
      <h1 className="text-4xl font-bold uppercase text-red-700">404 Not Found</h1>
      <button
        type="button"
        className="px-4 py-2 rounded-md bg-gray-800 text-white font-bold shadow-md"
        onClick={() => router.back()}>
        Geri Dön
      </button>
    </div>
  );
}

export default NotFound;
