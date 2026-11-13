---
uid: api.inno.extensibility.types.9b8925da12eb170b
symbol: "engine:Inno.Extensibility.Types:T:Inno.Extensibility.Types.TypeRef"
source: xml
reviewed: 9ce7c3bb8e97db5dd2f6401ba1bb400fe2ddfa10783d71fc65377bbda56c452c
title: "TypeRef"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
contracts:
- project.inno-extensibility-types
aliases: []
---

Identifies one logical runtime type without retaining its assembly or load context.

## Remarks

Equality and persistence use `P:Inno.Extensibility.Types.TypeRef.stableId`. The `P:Inno.Extensibility.Types.TypeRef.runtimeId` is only a generation-local resolution hint and can become stale after an assembly reload.
