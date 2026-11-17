---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.52971e43aacae56e6f624d86015b3558a33ff6eed2c98bcfb4df55def73c8b7d
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSerializationServices.GetStableTypeId``1
title: AssetSerializationServices.GetStableTypeId
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 729e1a9ebc45161fbe27f5f0a5ee3d088ac2258de4b53a66688061d0a20a4c1f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TValue`:** The registered type whose stable identity is required.

## Returns

The stable type identifier owned by the active extension generation.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when `TValue` has no stable type registration.
