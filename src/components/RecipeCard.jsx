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

const RecipeCard = ({ recipe, index, onShowRecipe }) => {
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

  return (
    <div className={"swiper-slide post glass-card recipe-card-animate"}>
      <img
        className="post-img"
        src={recipe.img}
        alt={recipe.name}
        style={{ borderRadius: '1.5rem', marginBottom: '1rem', width: '100%', objectFit: 'cover', height: '180px', boxShadow: '0 2px 12px rgba(255,107,107,0.08)' }}
      />
      <div className="post-body" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.5rem 0' }}>
        <img
          className="post-avatar"
          src={recipe.avatar}
          alt={recipe.author}
          style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid var(--accent-color)', boxShadow: '0 2px 8px rgba(255,107,107,0.10)' }}
        />
        <div className="post-detail" style={{ flex: 1, textAlign: 'left' }}>
          <h2 className="post-name" style={{ fontWeight: 700, fontSize: '1.2rem', margin: 0 }}>{recipe.name}</h2>
          <p className="post-author" style={{ fontSize: '0.95rem', margin: 0 }}>{recipe.author}</p>
        </div>
        <div className="post-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <a 
            className={`post-like heart-animate ${isLiked ? 'active' : ''}`} 
            href="#" 
            onClick={toggleLike}
            aria-label={isLiked ? 'Unlike' : 'Like'}
            style={{ color: isLiked ? 'var(--accent-color)' : 'var(--text-secondary)', fontSize: '1.3rem', transition: 'color 0.2s' }}
            data-tooltip={isLiked ? 'Unlike' : 'Like'}
          >
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <button
            className="post-actions-controller"
            aria-controls="post-actions-content"
            aria-expanded={isActionsVisible}
            onClick={toggleActions}
            type="button"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', fontSize: '1.1rem' }}
            data-tooltip="More actions"
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
                  <button
                    className="post-actions-link"
                    type="button"
                    onClick={onShowRecipe}
                    style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5em' }}
                    data-tooltip="Show the Recipe"
                  >
                    <FontAwesomeIcon icon={faEye} />
                    <span>Show the Recipe</span>
                  </button>
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
  onShowRecipe: PropTypes.func,
};

RecipeCard.defaultProps = {
  index: 0,
  onShowRecipe: undefined,
};

export default RecipeCard;

// Add animation styles in App.css or a new CSS file:
// .recipe-card-animate { transition: transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s; }
// .recipe-card-animate:hover { transform: translateY(-8px) scale(1.03); box-shadow: 0 12px 32px 0 rgba(255,107,107,0.18); }
// .heart-animate.active { animation: pop-heart 0.3s; }
// @keyframes pop-heart { 0% { transform: scale(1); } 50% { transform: scale(1.4); } 100% { transform: scale(1); } }