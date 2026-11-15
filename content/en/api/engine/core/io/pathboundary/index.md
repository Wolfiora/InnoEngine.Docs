---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.io.6cedee446ec53227
symbol: engine:Inno.Core.IO:T:Inno.Core.IO.PathBoundary
title: PathBoundary
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
reviewed: 602b2a2f6e4fe3d4a52891612a622f4d61a33b853ca37f50347c175d2a5c03b2

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-core-io#publication-and-ownership-contract
aliases: []
---

## Remarks

Ownership uses ordinal spelling on every filesystem, including case-insensitive volumes. Callers must retain the root's spelling when constructing child paths. Case aliases are deliberately rejected: operating-system identity does not determine volume case semantics.
