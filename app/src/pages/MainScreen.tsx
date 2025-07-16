import React from 'react';
import { Recipe, InventoryItem } from 'types';
import RecipeCard from 'components/RecipeCard';
import DetailedRecipeCard from 'components/DetailedRecipeCard';



interface Props {
  user: {
    name: string;
    avatar: string;
  };
  favorites: Recipe[];
  history: Recipe[];
  inventory: InventoryItem[];
  recommended: Recipe[];
  activeTab: string;
  onSelectRecipe: (recipe: Recipe) => void;
  onToggleFavorite: (recipeId: number) => void;
  onChangeTab: (tab: string) => void;
}

const tabs = [
  { key: 'home', label: 'ホーム', icon: 'fa-home' },
  { key: 'recommend', label: '今日のおすすめ', icon: 'fa-star' },
  { key: 'favorites', label: 'お気に入り', icon: 'fa-heart' },
  { key: 'history', label: '履歴', icon: 'fa-history' },
  { key: 'kitchen', label: 'キッチン', icon: 'fa-shopping-basket' },
];

const MainScreen: React.FC<Props> = ({
  user,
  favorites,
  history,
  inventory,
  recommended,
  activeTab,
  onSelectRecipe,
  onToggleFavorite,
  onChangeTab,
}) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <button
            className="flex items-center cursor-pointer"
            onClick={() => onChangeTab('home')}
          >
            <img src="/topIcon.png" alt="Logo" className="w-6 h-6 mr-2 object-contain" />
            <i className="fa fa-cutlery text-red-500 text-2xl mr-2" />
            <h1 className="text-xl font-bold text-gray-800">マイレシピ</h1>
          </button>

          <div id="user-dropdown-trigger" className="flex items-center cursor-pointer">
            <img src={user.avatar} alt="User" className="w-8 h-8 rounded-full mr-2" />
            <span className="text-sm font-medium">{user.name}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 border-t">
          <div className="flex space-x-6 overflow-x-auto py-2">
            {tabs.map(({ key, label, icon }) => (
              <button
                key={key}
                className={`relative pb-2 text-sm font-medium transition-colors duration-300 focus:outline-none ${
                  activeTab === key
                    ? 'text-red-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600'
                    : 'text-gray-500 hover:text-red-500'
                }`}
                onClick={() => onChangeTab(key)}
              >
                <i className={`fa ${icon} mr-1`} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* メインコンテンツ（省略） */}
    </div>
  );
};

export default MainScreen;

