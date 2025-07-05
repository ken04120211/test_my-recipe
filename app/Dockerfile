# ベースイメージ
FROM node:18

# 作業ディレクトリ
WORKDIR /app

# 依存ファイルを先にコピーしてキャッシュを活用
COPY package*.json ./

# 依存パッケージをインストール
RUN npm install

# アプリケーションの全ファイルをコピー
COPY . .

# ポートを公開
EXPOSE 3000

# 開発サーバーを起動
CMD ["npm", "start"]
