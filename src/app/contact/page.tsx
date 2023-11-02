import React from 'react';
import RouteButton from '../components/route-button/RouteButton';

export default function Page() {
  return (
    <React.Fragment>
      <div className="w-1/2 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nulla
        voluptatum ut praesentium corporis unde rerum fugit error quo quia maxime quaerat,
        enim iure placeat nam id eveniet neque dolorem sequi sed eaque asperiores eum
        odio? Nostrum totam ducimus, veritatis unde sunt quod quasi amet, ipsum eaque
        recusandae illo facere.
      </div>
      <div className="w-1/2 ">
        {[1, 2, 3, 4, 5].map((nbr, index) => (
          <RouteButton key={index} type="route" route={`contact/detail-${nbr}`}>
            {nbr} Detay
          </RouteButton>
        ))}

        <RouteButton type="back" />
      </div>
    </React.Fragment>
  );
}
