import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const RecipeModal = ({ recipe, open, onClose }) => {
  const modalRef = useRef(null);

  // Focus trap and ESC to close
  useEffect(() => {
    if (open) {
      modalRef.current?.focus();
      const handleKey = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
    }
  }, [open, onClose]);

  if (!open || !recipe) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal glass-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        ref={modalRef}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
        <img src={recipe.img} alt={recipe.name} className="modal-img" />
        <h2 id="modal-title" className="modal-title">{recipe.name}</h2>
        <div className="modal-author">By {recipe.author}</div>
        {recipe.tags && recipe.tags.length > 0 && (
          <div className="modal-tags" aria-label="Tags">
            {recipe.tags.map((tag, i) => (
              <span className="modal-tag-chip" key={i}>{tag}</span>
            ))}
          </div>
        )}
        <div className="modal-section">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients && recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>
        <div className="modal-section">
          <h3>Instructions</h3>
          <ol>
            {recipe.steps && recipe.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

RecipeModal.propTypes = {
  recipe: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RecipeModal; 