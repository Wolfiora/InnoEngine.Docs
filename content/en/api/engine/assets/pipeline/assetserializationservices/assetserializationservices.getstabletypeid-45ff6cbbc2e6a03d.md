---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.45ff6cbbc2e6a03d2530fd588770b25a6fb052f7c681d591496a48955b04bd64
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSerializationServices.GetStableTypeID``1
title: AssetSerializationServices.GetStableTypeID
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 948ff10c0f69636a54d7ae0e6e5f9694edc93aebab3cd78ffa96c7df432ab93a
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
