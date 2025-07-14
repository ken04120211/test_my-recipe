import React from 'react';
import { Recipe } from 'types';

interface Props {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
  onToggleFavorite: (recipeId: number) => void;
  isFavorite: boolean;
}

const RecipeCard: React.FC<Props> = ({ recipe, onClick, onToggleFavorite, isFavorite }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover object-top cursor-pointer"
          onClick={() => onClick(recipe)}
        />
        <div
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(recipe.id);
          }}
        >
          <i className={`fa ${isFavorite ? 'fa-heart text-red-500' : 'fa-heart-o text-gray-500'}`} />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{recipe.name}</h3>
        <p
          className="text-sm text-gray-600 mb-2 cursor-pointer hover:text-gray-800"
          onClick={() => onClick(recipe)}
        >
          {recipe.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-2">
          {recipe.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-xs px-2 py-1 rounded-full whitespace-nowrap">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <i className="fa fa-thumbs-up mr-1" />
            <span>{recipe.likes}</span>
          </div>
          <div className="flex items-center">
            <i className="fa fa-comment mr-1" />
            <span>{recipe.comments}</span>
          </div>
          <div className="flex items-center">
            <i className="fa fa-calendar mr-1" />
            <span>{recipe.dateCooked}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
