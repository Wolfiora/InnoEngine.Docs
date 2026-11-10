# Contributing to the documentation

Choose the reader's task before choosing a page. Use the pinned engine source and API manifests to confirm behavior, and keep public contracts separate from implementation details.

Read the [documentation rulebook](.agents/rulebook/README.md). It is the same authority used by agent contributors.

Use the Node version in `.node-version`, install with `npm ci`, and start the local site with `npm run dev`. Run the relevant checks and `npm run build` before submitting a PR. Preview output is not a certification of engine behavior.

Changes to public behavior use a paired engine/documentation PR. Include the exact engine and Docs identities, actual checks, and remaining limitations. Do not automatically merge or publish unverified candidates.
