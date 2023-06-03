# QinSalon レシピアプリ開発　チーム 06

チーム 06 のリポジトリです。

| コマンド | 処理                      |
| -------- | ------------------------- |
| dev      | 開発モードでの起動        |
| build    | ビルド                    |
| start    | ビルドファイルの起動      |
| lint     | ESLint を使用した解析処理 |
| test     | Jest を使用したテスト実行 |

## リポジトリディレクトリ解説

### アプリケーション全体

| ディレクトリ | 役割                                                             |
| ------------ | ---------------------------------------------------------------- |
| .vscode/     | VSCode の設定ファイルを格納するディレクトリ                      |
| app/         | アプリケーションのソースコードを格納するディレクトリ(Colocation) |
| docs/        | ドキュメント関係を格納するディレクトリ ※ 基本は Wiki             |
| public/      | アセット系を格納するディレクトリ                                 |
| specs/       | API 仕様書関係を格納するディレクトリ                             |
| tests/       | アプリケーションのテストコードを格納するディレクトリ             |

### アプリケーションソース(app/配下)

| ディレクトリ      | 役割                                                                 |
| ----------------- | -------------------------------------------------------------------- |
| api/              | API 機能を定義するファイルを格納するディレクトリ                     |
| \_common/         | 複数ルートでファイルを格納するディレクトリ                           |
| \*\*/\_constants/ | 定数ファイルを格納するディレクトリ                                   |
| \*\*/\_features/  | 機能を定義するファイルを格納するディレクトリ                         |
| \*\*/\_hooks/     | カスタムフックを定義するファイルを格納するディレクトリ               |
| \*\*/\_libs/      | npm パッケージのラッパー処理を定義するファイルを格納するディレクトリ |
| \*\*/\_stores/    | 状態を管理するファイルを格納するディレクトリ                         |
| \*\*/\_styles/    | スタイルシートを格納するディレクトリ                                 |
| \*\*/\_types/     | type の定義ファイルを格納するディレクトリ                            |

#### 特記事項

- ルーティングしないディレクトリはプライベート（ex.`_foo/`）にすること

## 技術スタック

### 言語・フレームワーク

| 項目           | 内容                                 |
| -------------- | ------------------------------------ |
| フロントエンド | TypeScript / Next.js(App Router)     |
| バックエンド   | TypeScript / Next.js(Route Handlers) |
| ※ Runtime      | Edge Runtime                         |

### Paas / Saas

| 項目         | 内容                        |
| ------------ | --------------------------- |
| ホスティング | Vercel Serverless Functions |
| データベース | PlanetScale                 |

## 使用パッケージ・ライブラリ

| 項目                       | 内容         |
| -------------------------- | ------------ |
| 状態管理                   | Jotai        |
| テスティングフレームワーク | Jest         |
| CSS フレームワーク         | Tailwind CSS |

## REFERENCE

- [アプリ環境構築](https://github.com/qin-team-recipe/06-recipe-app/wiki/Next.js-%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89%E6%96%B9%E6%B3%95)
- [API 仕様書環境構築](https://github.com/qin-team-recipe/06-recipe-app/wiki/Swagger-%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89%E6%96%B9%E6%B3%95)
- [ER 図](https://github.com/qin-team-recipe/06-recipe-app/blob/main/docs/ER.md)
  - VisualStudioCode 拡張機能インストールの必要あり
  - ※ `.vscode/extensions.json`に記載あり
    - Markdown Preview Mermaid Support
    - Markdown Preview Enhanced
    - Mermaid Markdown Syntax Highlighting ※ 推奨
- [命名規則](https://github.com/qin-team-recipe/06-recipe-app/wiki/%E5%91%BD%E5%90%8D%E8%A6%8F%E5%89%87)
