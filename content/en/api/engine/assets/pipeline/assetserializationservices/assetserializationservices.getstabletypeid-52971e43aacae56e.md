---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.52971e43aacae56e6f624d86015b3558a33ff6eed2c98bcfb4df55def73c8b7d
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSerializationServices.GetStableTypeId``1
title: AssetSerializationServices.GetStableTypeId
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 59a3fa600b38268bef0e2de1a6165fd2832e293711bf5320b8d1991ca482bfe8
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
