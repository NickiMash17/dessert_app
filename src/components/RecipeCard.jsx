import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Update FontAwesome imports to use individual imports instead of the whole library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faEllipsis, 
  faFolderOpen, 
  faEye, 
  faUserPlus 
} from '@fortawesome/free-solid-svg-icons';

const RecipeCard = ({ recipe, index }) => {
  const [isActionsVisible, setIsActionsVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleActions = () => {
    setIsActionsVisible(!isActionsVisible);
  };

  const toggleLike = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    setIsLiked(!isLiked);
  };

  return (
    <div className="swiper-slide post">
      <img
        className="post-img"
        src={recipe.img}
        alt={recipe.name}
      />

      <div className="post-body">
        <img
          className="post-avatar"
          src={recipe.avatar}
          alt={recipe.author}
        />
        <div className="post-detail">
          <h2 className="post-name">{recipe.name}</h2>
          <p className="post-author">{recipe.author}</p>
        </div>

        <div className="post-actions">
          <a 
            className={`post-like ${isLiked ? 'active' : ''}`} 
            href="#" 
            onClick={toggleLike}
          >
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <button
            className="post-actions-controller"
            aria-controls="post-actions-content"
            aria-expanded={isActionsVisible}
            onClick={toggleActions}
            type="button"
          >
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
          {isActionsVisible && (
            <div
              className="post-actions-content"
              data-visible={isActionsVisible}
              aria-hidden={!isActionsVisible}
            >
              <ul role="list" className="grid-flow">
                <li>
                  <a className="post-actions-link" href="#">
                    <FontAwesomeIcon icon={faFolderOpen} />
                    <span>Add to Collection</span>
                  </a>
                </li>
                <li>
                  <a className="post-actions-link" href="#">
                    <FontAwesomeIcon icon={faEye} />
                    <span>Show the Recipe</span>
                  </a>
                </li>
                <li>
                  <a className="post-actions-link" href="#">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Follow the User</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;