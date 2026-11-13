---
uid: api.inno.core.io.6cedee446ec53227
symbol: "engine:Inno.Core.IO:T:Inno.Core.IO.PathBoundary"
source: xml
reviewed: aa80ed016ee7b4f3e657db8165bb4bb320b392a74d059c6e25ad94d399c200eb
title: "PathBoundary"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
contracts:
- project.inno-core-io#publication-and-ownership-contract
aliases: []
---

Resolves paths while enforcing an explicit filesystem ownership boundary.

## Remarks

Ownership uses ordinal spelling on every filesystem, including case-insensitive volumes. Callers must retain the root's spelling when constructing child paths. Case aliases are deliberately rejected: operating-system identity does not determine volume case semantics.
