'use client';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

interface IGoBackProps {
  type: 'route' | 'back';
  route?: string;
  children?: React.ReactNode;
}

function RouteButton({ type, route, children }: IGoBackProps) {
  const router = useRouter();

  if (type === 'back') {
    return (
      <button
        className="text-white bg-red-700 px-4 py-2 rounded-lg me-3 my-3 inline-block`"
        type="button"
        onClick={() => router.back()}>
        Go Back
      </button>
    );
  } else if (type === 'route' && route) {
    return (
      <Link
        href={route}
        className="bg-slate-800 text-white px-4 py-2 rounded-lg me-3 my-3 inline-block">
        {children}
      </Link>
    );
  }
}

export default RouteButton;
