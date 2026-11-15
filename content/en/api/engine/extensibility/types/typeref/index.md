---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.extensibility.types.9b8925da12eb170b
symbol: engine:Inno.Extensibility.Types:T:Inno.Extensibility.Types.TypeRef
title: TypeRef
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: 079fc13d6b2561b9ad3cf26e094cb8d718f3a9e4c4d4699c81d674210ed57eb3

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-extensibility-types
aliases: []
---

Identifies one logical runtime type without retaining its assembly or load context.

## Remarks

Equality and persistence use `P:Inno.Extensibility.Types.TypeRef.stableId`. The `P:Inno.Extensibility.Types.TypeRef.runtimeId` is only a generation-local resolution hint and can become stale after an assembly reload.
