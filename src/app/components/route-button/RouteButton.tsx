import Link from 'next/link';
import React from 'react';

interface IGoBackProps {
  type: 'route' | 'back';
  route?: string;
  children?: React.ReactNode;
}

function RouteButton({ type, route, children }: IGoBackProps) {
  return (
    <Link
      href={{ pathname: type === 'back' ? './' : route }}
      className={`${
        type === 'route' ? 'bg-slate-800' : 'bg-red-700'
      } text-white px-4 py-2 rounded-lg me-3 my-3 inline-block`}>
      {type === 'back' ? 'Geri Dön' : children}
    </Link>
  );
}

export default RouteButton;
