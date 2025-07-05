import React from 'react';

interface Props {
  onLogin: (method: string) => void;
}

const LoginScreen: React.FC<Props> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-red-500">マイレシピ</h1>
          <p className="text-gray-600 mt-2">あなたの料理をもっと楽しく、簡単に</p>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => onLogin('email')}
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
          >
            <i className="fa fa-envelope mr-2" />
            メールアドレスでログイン
          </button>
          <button
            onClick={() => onLogin('google')}
            className="w-full bg-white text-gray-700 py-3 rounded-lg border hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            <i className="fa fa-google mr-2 text-red-500" />
            Googleでログイン
          </button>
          <button
            onClick={() => onLogin('twitter')}
            className="w-full bg-blue-400 text-white py-3 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center"
          >
            <i className="fa fa-twitter mr-2" />
            Xでログイン
          </button>
          <button
            onClick={() => onLogin('apple')}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center"
          >
            <i className="fa fa-apple mr-2" />
            Appleでログイン
          </button>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            アカウントをお持ちでない方は{' '}
            https://readdy.ai
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
