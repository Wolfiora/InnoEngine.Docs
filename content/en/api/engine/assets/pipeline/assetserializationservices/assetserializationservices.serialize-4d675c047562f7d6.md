---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4d675c047562f7d6469785483427b3f09a670ba3d1dbad98b26f9d57d391b638
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSerializationServices.Serialize``1(``0)
title: AssetSerializationServices.Serialize
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 9031be6391263d9060fe05d3486d2998eee7706902cd6f5d605c30059cea5cf8

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Type parameters

**Type parameter `TValue`:** The serializable value contract.

## Parameters

**Parameter `value`:** The value to serialize through the active converter generation.

## Returns

Deterministic structured bytes owned by the caller.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is `null`.
