---
uid: api.inno.extensibility.types.839037fe9c97a082
symbol: "engine:Inno.Extensibility.Types:T:Inno.Extensibility.Types.TypeCacheSnapshot"
source: xml
reviewed: da9e5d375cb67a102842498aafc465a1d2d8d67dd7a7d7c8d7f8fbabb7395b13
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
