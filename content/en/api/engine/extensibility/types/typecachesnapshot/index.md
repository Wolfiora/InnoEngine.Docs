---
uid: api.inno.extensibility.types.839037fe9c97a082
symbol: "engine:Inno.Extensibility.Types:T:Inno.Extensibility.Types.TypeCacheSnapshot"
source: xml
reviewed: 3e9503a08cd206dfa1f21f3d8d5039354de91f8acbeb520cad3be37cee21eb46
title: "TypeCacheSnapshot"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
contracts:
- project.inno-extensibility-types
aliases: []
---

Represents an immutable, internally consistent view of discoverable runtime types.

## Remarks

A snapshot strongly retains its discovered `T:System.Type` instances. Callers must not cache an obsolete snapshot or one of its type lists beyond the operation that needs generation consistency, because doing so delays unloading the corresponding collectible assembly load context.
