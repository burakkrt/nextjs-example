import React from 'react';
import Image from 'next/image';

export function generateMetadata({ params }: { params: { id: [] } }) {
  let id: string = params.id.join();
  id = (id.charAt(0).toUpperCase() + id.slice(1)).replaceAll('-', ' ');

  return {
    title: `Blog | ${id}`,
  };
}

function DetailLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const detailId = params.id.join();
  const imageSizes = {
    width: 1000,
    height: 400,
  };

  return (
    <div>
      <h1 className="font-bold text-xl mb-4 border-b-2 border-b-slate-600 inline-block pb-2">
        {detailId.toUpperCase().replaceAll('-', ' ')} <br />
      </h1>
      <Image
        src={`https://picsum.photos/id/${
          detailId.slice(detailId.indexOf('-') + 1) * 10
        }/${imageSizes.width}/${imageSizes.height}`}
        alt="test"
        className="rounded-md mb-5 border-4 border-slate-300"
        width={imageSizes.width}
        height={imageSizes.height}
      />
      <div>{children}</div>
    </div>
  );
}

export default DetailLayout;
