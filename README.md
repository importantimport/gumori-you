# 🖼️ Gumori You [WIP]

> Bringing Material Design 3 to the Astro Blog.

## 👥 Contributing

If you're interested in contributing to **Gumori You**, pls read the following contributing docs before submitting a pull request:

1. Ask before adding important features.
2. git messages follow [gitmoji](https://gitmoji.dev/) and [Conventional Commits](https://www.conventionalcommits.org/).
3. Follow the [Material 3 Guidelines](https://m3.material.io/) wherever possible.

## 🧱 Project Structure

You'll see the following folders and files:

```bash
/
├── gumori/
│   └── elements.md # example.com/elements
├── src/
│   └── gumori.ts # config
└── package.json
```

Astro looks for `.md` files in the `gumori` directory. Each page is exposed as a route based on its filename.

Also you can put any static assets (like images) in the same location!

## 🖥️ Commands

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm i`       | Installs dependencies                        |
| `pnpm dev`     | Starts local dev server at `localhost:3000`  |
| `pnpm build`   | Build your production site to `./dist/`      |
| `pnpm preview` | Preview your build locally, before deploying |

## 📝 License

This work is free, it comes without any warranty. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the [COPYING](COPYING) file for more details.
