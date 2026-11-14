# InnoEngine Documentation

English manuals, architecture explanations, extension guides, and API reference for [InnoEngine](https://github.com/Wolfiora/InnoEngine).

This repository owns the documentation website and its readable Markdown sources. Engine source, API extraction, validation tooling, and engine development rules remain in the engine repository.

Work on `draft`, pass **Documentation validation**, then manually merge `draft` into `main`. GitHub Actions verifies the documentation and examples; Vercel Git integration builds and publishes main. Other branches do not deploy. API synchronization remains independent of website hosting.

Run `npm ci` and `npm run build` for a complete site build. The build explicitly prepares the pinned managed documentation tool when necessary; it never prepares Native or engine products. See the [contribution guide](CONTRIBUTING.md) and [web-only Vercel setup](content/en/contributing/publish-documentation.md#connect-vercel-once).

Documentation follows the engine's Apache-2.0 license unless an individual asset states otherwise. InnoEngine branding retains its separate license and attribution.
