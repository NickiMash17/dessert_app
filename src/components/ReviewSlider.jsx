import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    name: 'Sophia Lee',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
    text: 'Absolutely love this app! The desserts are mouthwatering and the design is stunning. Highly recommended for all sweet lovers!'
  },
  {
    name: 'James Carter',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
    text: 'A beautiful and easy-to-use app. The recipe details and search features make it a joy to use. My family loves the cheesecake!'
  },
  {
    name: 'Emily Chen',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'The glassmorphism design is so modern! I found my new favorite dessert thanks to this app.'
  },
  {
    name: 'Liam Smith',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    rating: 5,
    text: 'Sleek, fast, and full of delicious ideas. The modal for recipe details is a great touch!'
  },
  {
    name: 'Ava Patel',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 4,
    text: 'I love the category chips and the interactive slider. Everything feels so premium!'
  }
];

const StarRating = ({ rating }) => (
  <span className="review-stars" aria-label={`Rated ${rating} out of 5`}>
    {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
  </span>
);

const ReviewSlider = () => (
  <section className="section">
    <h2 className="review-slider-title">What Our Users Say</h2>
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="review-swiper"
    >
      {reviews.map((review, idx) => (
        <SwiperSlide key={idx}>
          <div className="review-card glass-card">
            <img src={review.avatar} alt={review.name} className="review-avatar" />
            <div className="review-name">{review.name}</div>
            <StarRating rating={review.rating} />
            <div className="review-text">{review.text}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default ReviewSlider; 