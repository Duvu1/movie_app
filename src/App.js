import React from 'react';

function Food({ name, picture }){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    if:1,
    name: "Ramen",
    image:
    "https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg"
  },
  {
    id:2,
    name: "Banh Mi",
    image:
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20200205-bahn-mi-delish-ehg-9647-jpg-1582818279.jpg?crop=0.676xw:0.507xh;0.308xw,0.293xh&resize=1200:*"
  },
  {
    id:3,
    name: "Chicken",
    image:
    "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/270679.jpg"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => 
      <Food key={dish.id} name={dish.name} picture={dish.image} />
      )}
    </div>
  );
}

export default App;
