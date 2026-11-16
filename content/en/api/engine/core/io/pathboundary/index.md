---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.io.6cedee446ec53227
symbol: engine:Inno.Core.IO:T:Inno.Core.IO.PathBoundary
title: PathBoundary
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
reviewed: ec45dd19f55e619e7e124f4111e4094544df535e35d047c91b8e4bdc2b89b642
contracts:
- project.inno-core-io#publication-and-ownership-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

Ownership uses ordinal spelling on every filesystem, including case-insensitive volumes. Callers must retain the root's spelling when constructing child paths. Case aliases are deliberately rejected: operating-system identity does not determine volume case semantics.
