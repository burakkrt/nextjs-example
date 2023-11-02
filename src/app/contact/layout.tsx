import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Page',
};

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-yellow-400 min-h-screen p-10">
      <h1 className="font-bold text-2xl border-b-2 pb-2 border-b-slate-700">Home Page</h1>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default HomeLayout;
