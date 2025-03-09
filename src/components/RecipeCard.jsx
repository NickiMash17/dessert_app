import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faEllipsis, 
  faFolderOpen, 
  faEye, 
  faUserPlus 
} from '@fortawesome/free-solid-svg-icons';

const RecipeCard = ({ recipe, index }) => {
  // Make sure you're only using index as passed in through props
  // Do not redeclare index inside this component
  const [isActionsVisible, setIsActionsVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleActions = () => {
    setIsActionsVisible(!isActionsVisible);
  };

  const toggleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  // You can use index here if needed
  // For example: console.log(`Recipe at index ${index}`);

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
  index: PropTypes.number,
};

// Add default props in case index is not provided
RecipeCard.defaultProps = {
  index: 0,
};

export default RecipeCard;