---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.extensibility.types.839037fe9c97a082
symbol: engine:Inno.Extensibility.Types:T:Inno.Extensibility.Types.TypeCacheSnapshot
title: TypeCacheSnapshot
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: 6f1b6f379949e2e5c9d40f52d0de170392828b3349af1c6410d7255f07760820
contracts:
- project.inno-extensibility-types

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

A snapshot strongly retains its discovered `T:System.Type` instances. Callers must not cache an obsolete snapshot or one of its type lists beyond the operation that needs generation consistency, because doing so delays unloading the corresponding collectible assembly load context.
