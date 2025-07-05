import React from 'react';
import LoginScreen from './pages/LoginScreen.tsx';
import MainScreen from './pages/MainScreen.tsx';
import RecipeModal from './components/RecipeModal.tsx';

const App: React.FC = () => {
  const isLoggedIn = true; // 仮のログイン状態（後で状態管理に置き換え可能）

  return (
    <div className="font-sans">
      {isLoggedIn ? <MainScreen /> : <LoginScreen />}
      <RecipeModal />
    </div>
  );
};

export default App;
