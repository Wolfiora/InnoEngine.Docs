---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4d675c047562f7d6469785483427b3f09a670ba3d1dbad98b26f9d57d391b638
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSerializationServices.Serialize``1(``0)
title: AssetSerializationServices.Serialize
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 6c59e517248a2e58432cc70316a87bf878c64a68960bef0b875fe50c33e2b175
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
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
