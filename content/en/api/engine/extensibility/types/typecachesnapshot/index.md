---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.extensibility.types.839037fe9c97a082
symbol: engine:Inno.Extensibility.Types:T:Inno.Extensibility.Types.TypeCacheSnapshot
title: TypeCacheSnapshot
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
sourceFingerprint: b74a330d8cb66d6032b0febeb87ee5ab91e4e951617214478bf16afd4bfbca05
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
