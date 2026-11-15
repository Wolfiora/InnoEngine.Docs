---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6e90f83f7810538185d76e4c9094bed2ed95d2962487d9b47f29d91a02cde92b
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.Clear
title: TypeRegistry<TSnapshot>.Clear
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: 080d43267f2b75940b37214d2c3908ace175e0f3073a68c3ce714611f8b06e30

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Releases the active snapshot while keeping the registry reusable.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Generation work could not retire safely. The snapshot remains owned and this registry cannot be reused.
