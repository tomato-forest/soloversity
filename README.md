# soloversity

## アーキテクチャ
### バックエンド
 - Ruby on Rails 6 (APIモード)
   - Ruby 3.1.2 
   - PostgreSQL
   - Redis (ActionCable用)

### フロントエンド
 - NextJS v12
   - TypeScript 
   - ESLint
   - Prettier


## 開発
### ライブラリインストール
```bash
docker compose run --rm api bundle install
docker compose run --rm web yarn install
```

### 起動手順
#### 初回起動
```bash
docker compose run --rm api rails db:create
docker compose up
```

#### 通常起動
```bash
docker compose up
```

### 各種コマンドの実行
#### バックエンド
```bash
docker compose run --rm api [コマンド]
```

#### フロントエンド
```bash
docker compose run --rm web [コマンド]
```

## DockerURL
- [Backend : http://127.0.0.1:3000/](http://127.0.0.1:3000/)
- [Frontend : http://127.0.0.1:3030/](http://127.0.0.1:3030/)
