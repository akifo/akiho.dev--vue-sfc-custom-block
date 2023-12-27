# scaffold-vite-vue-tailwind

```sh
# 現在のディレクトリにコピー
npx degit akifo/scaffold-vite-vue-tailwind .

# my-project ディレクトリを生成し、そこにコピー
npx degit akifo/scaffold-vite-vue-tailwind my-project
```

## prepare

```sh
nr prepare
```

## deploy


### GitHub Pages
.github/workflows/gh-pages.yml を削除すれば、GitHub Pages への Deploy を削除できます。

https://github.com/akifo/scaffold-vite-vue-tailwind/settings/pages で Build and deployment
 を GitHub Actions に変更すると GitHub Actions で自動デプロイが動きます。

https://github.com/akifo/scaffold-vite-vue-tailwind/blob/main/vite.config.ts の base をリポジトリ名に変更してください。

```json
{
-  base: "scaffold-vite-vue-tailwind/",
+  base: "my-project/",
}
```

GitHub Pages が不要な場合は、この設定を削除してください。

### Vervel
手動で連携してください。
