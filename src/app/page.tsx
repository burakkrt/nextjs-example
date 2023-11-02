import Link from 'next/link';
import RouteButton from './components/route-button/RouteButton';

export default function Home() {
  return (
    <main className="p-4 h-[calc(100vh-32px)] border-2 inline-block rounded-lg bg-yellow-500 m-4 transition-all duration-200 cursor-pointer ">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quos ipsa
        soluta amet? Ratione. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Optio aperiam est voluptatem consequuntur explicabo officiis corrupti dolore,
        quaerat facilis deleniti? Porro reprehenderit assumenda dolore corporis nulla sed
        quas deserunt voluptate possimus beatae odit sunt voluptatibus, dolor illum ex
        temporibus ea accusantium est officiis amet rem cumque id esse. Similique,
        dolorum.
      </p>
      <RouteButton type="route" route="/contact">
        Contact
      </RouteButton>
    </main>
  );
}
