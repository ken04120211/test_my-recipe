import React, { useState } from 'react';
import LoginScreen from 'pages/LoginScreen';
import MainScreen from 'pages/MainScreen';
import RecipeModal from 'components/RecipeModal';
import { InventoryItem, Recipe } from 'types';

const App: React.FC = () => {
  const isLoggedIn = true; // 仮のログイン状態（後で状態管理に置き換え可能）

  
  // ✅ 仮のデータ（最低限必要なもの）
  const user = {
    name: 'ゲストユーザー',
    avatar: '/defaultAvatar.png' // 仮の画像URL
  };

  
  const favorites: Recipe[] = [];
  const history: Recipe[] = [];
  const inventory: InventoryItem[] = [];
  const recommended: Recipe[] = [];

  const [activeTab, setActiveTab] = useState('home');

  const handleSelectRecipe = (recipe: Recipe) => {
    console.log('レシピ選択:', recipe);
  };

  const handleToggleFavorite = (recipeId: number) => {
    console.log('お気に入り切り替え:', recipeId);
  };

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="font-sans">
      {isLoggedIn ? (
        <MainScreen
          user={user}
          favorites={favorites}
          history={history}
          inventory={inventory}
          recommended={recommended}
          activeTab={activeTab}
          onSelectRecipe={handleSelectRecipe}
          onToggleFavorite={handleToggleFavorite}
          onChangeTab={handleChangeTab}
        />
      ) : (
        <LoginScreen onLogin={function (method: string): void {
            throw new Error('Function not implemented.');
          } } />
      )}
      <RecipeModal recipe={null} isOpen={false} onClose={function (): void {
        throw new Error('Function not implemented.');
      } } onToggleFavorite={function (recipeId: number): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
};

export default App;
