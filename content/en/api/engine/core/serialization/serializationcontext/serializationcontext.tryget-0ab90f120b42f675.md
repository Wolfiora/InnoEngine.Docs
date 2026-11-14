---
uid: api.0ab90f120b42f675e247830c0b01760c92c0a899e73ad16eac2ba8031f0f50ce
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationContext.TryGet\u0060\u00601(\u0060\u00600@)"
source: xml
reviewed: 8debb9e67cc1f3519b428734a1e0e9a9a45cfc0e567eafd1be08bc44ce10b44d
title: "SerializationContext.TryGet"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Attempts to resolve a value registered under the exact context contract type.

## Type parameters

**Type parameter `TContext`:** The exact context contract type.

## Parameters

**Parameter `value`:** The registered value when available.

## Returns

`true` when a value is registered; otherwise, `false`.
