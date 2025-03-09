import React from 'react';
import RecipeCard from './RecipeCard';
// Updated Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

const RecipeSlider = () => {
  // Recipe data
  const recipes = [
    {
      id: 1,
      name: "Homemade Ice Cream",
      author: "Evelyn Taylor",
      img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/defebc72-ea17-41c7-9bb6-70b3974a93b7",
      avatar: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/f9d29d0e-f03b-4990-9bc5-ade57a276b41"
    },
    {
      id: 2,
      name: "Pancake",
      author: "Ethan Wilson",
      img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7443d18f-26b6-47eb-bfca-541fb72cee65",
      avatar: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3c7b6ef9-cd2d-4d70-819a-2aa9c2309083"
    },
    {
      id: 3,
      name: "Macaron",
      author: "Bella Smith",
      img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/24566dbf-61a2-4bd0-bb29-ef1773364eba",
      avatar: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/01332597-5aeb-483b-b682-9379c6ed8f14"
    },
    {
      id: 4,
      name: "Cheesecake",
      author: "Mia Dixon",
      img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a208eb17-a847-4e04-be2c-d7ec2071ae45",
      avatar: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b9f5ef94-c2c9-4792-b7a3-593d393f2c84"
    },
    {
      id: 5,
      name: "Donuts",
      author: "Olivia Martinez",
      img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/208fe8f5-9d7f-4b83-9249-43601bb4c500",
      avatar: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/58f9319c-78cf-444b-ba71-701c506c2dd3"
    },
    {
      id: 6,
      name: "Rolo Cheesecake",
      author: "Benjamin Clark",
      img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e4f91d6d-ee11-4ff7-9e6f-0fb3f9a78598",
      avatar: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/24ca2eec-a5ba-4c32-907c-ffffca203e1c"
    }
  ];

  return (
    <section>
      <div className="recipe-container">
        <h1>The Dessert Recipes</h1>
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={30}
          slidesPerView={1}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="swiper"
        >
          {recipes.map((recipe, index) => (
            <SwiperSlide key={recipe.id}>
              <RecipeCard recipe={recipe} index={index + 1} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecipeSlider;