---
uid: api.52971e43aacae56e6f624d86015b3558a33ff6eed2c98bcfb4df55def73c8b7d
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSerializationServices.GetStableTypeId\u0060\u00601"
source: xml
reviewed: d67f37a596295de816de3e7bc0992e4a30b3635c16397a5e148c35496e9e2183
title: "AssetSerializationServices.GetStableTypeId"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Resolves the stable persistent type identity of a registered serializable type.

## Type parameters

**Type parameter `TValue`:** The registered type whose stable identity is required.

## Returns

The stable type identifier owned by the active extension generation.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when `TValue` has no stable type registration.
