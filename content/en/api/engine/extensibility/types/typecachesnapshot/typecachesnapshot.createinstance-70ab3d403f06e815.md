---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.70ab3d403f06e8151b8d19ea39b2220bcc9bb7fc8b5c76fe622a6b080e650c54
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCacheSnapshot.CreateInstance(System.Type)
title: TypeCacheSnapshot.CreateInstance
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: 656e06bb5ab0c6092772154420eeb372237b8be7265641e078412b373ead9a0e

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Constructs a declared type through this generation's selected metadata source.

## Parameters

**Parameter `type`:** A declaration in this snapshot, or a closed construction of its registered generic declaration.

## Returns

The new instance owned by the caller.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The reference does not resolve or its deployment does not provide a factory.
