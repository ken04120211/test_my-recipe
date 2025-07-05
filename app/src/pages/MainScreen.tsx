import React from 'react';
import { Recipe, InventoryItem } from '../types';
import RecipeCard from '../components/RecipeCard.tsx';
import DetailedRecipeCard from '../components/DetailedRecipeCard.tsx';

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

const MainScreen: React.FC<Props> = ({
  user,
  favorites,
  history,
  inventory,
  recommended,
  activeTab,
  onSelectRecipe,
  onToggleFavorite,
  onChangeTab
}) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onChangeTab('home')}>
            <i className="fa fa-cutlery text-red-500 text-2xl mr-2" />
            <h1 className="text-xl font-bold text-gray-800">マイレシピ</h1>
          </div>
          <div className="flex items-center">
            <img src={user.avatar} alt="User" className="w-8 h-8 rounded-full mr-2" />
            <span className="text-sm font-medium">{user.name}</span>
          </div>
        </div>
        <div className="container mx-auto px-4 border-t">
          <div className="flex overflow-x-auto py-2">
            {['home', 'recommend', 'favorites', 'history', 'kitchen'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium whitespace-nowrap ${
                  activeTab === tab ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'
                }`}
                onClick={() => onChangeTab(tab)}
              >
                {tab === 'home' && <><i className="fa fa-home mr-1" /> ホーム</>}
                {tab === 'recommend' && <><i className="fa fa-star mr-1" /> 今日のおすすめ</>}
                {tab === 'favorites' && <><i className="fa fa-heart mr-1" /> お気に入り</>}
                {tab === 'history' && <><i className="fa fa-history mr-1" /> 履歴</>}
                {tab === 'kitchen' && <><i className="fa fa-shopping-basket mr-1" /> キッチン</>}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-6">
        {activeTab === 'home' && (
          <>
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">今日のおすすめ</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recommended.map((recipe, index) => (
                  <RecipeCard
                    key={index}
                    recipe={recipe}
                    onClick={onSelectRecipe}
                    onToggleFavorite={onToggleFavorite}
                    isFavorite={favorites.some((f) => f.id === recipe.id)}
                  />
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">最近作った料理</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {history.slice(0, 8).map((recipe, index) => (
                  <RecipeCard
                    key={index}
                    recipe={recipe}
                    onClick={onSelectRecipe}
                    onToggleFavorite={onToggleFavorite}
                    isFavorite={favorites.some((f) => f.id === recipe.id)}
                  />
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'recommend' && (
          <div className="space-y-8">
            {recommended.map((recipe, index) => (
              <DetailedRecipeCard
                key={index}
                recipe={recipe}
                index={index}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        )}

        {activeTab === 'favorites' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {favorites.map((recipe, index) => (
              <RecipeCard
                key={index}
                recipe={recipe}
                onClick={onSelectRecipe}
                onToggleFavorite={onToggleFavorite}
                isFavorite={true}
              />
            ))}
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-4">
            {history.map((recipe, index) => (
              <RecipeCard
                key={index}
                recipe={recipe}
                onClick={onSelectRecipe}
                onToggleFavorite={onToggleFavorite}
                isFavorite={favorites.some((f) => f.id === recipe.id)}
              />
            ))}
          </div>
        )}

        {activeTab === 'kitchen' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">キッチン管理</h2>
            <ul className="list-disc pl-5">
              {inventory.map((item) => (
                <li key={item.id}>
                  {item.name}（{item.category}）: {item.quantity} {item.unit}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

export default MainScreen;
