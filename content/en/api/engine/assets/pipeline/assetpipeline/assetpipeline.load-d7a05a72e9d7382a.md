---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d7a05a72e9d7382aeab60f9389ff158754890b46afa9d18cc4f5e6e10469eac7
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.Load``1(System.Guid)
title: AssetPipeline.Load
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: e58dfb2153631daf8b572a5f3654e86adec0b24288ba0d8e86dbbe264a5e2c54

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Loads a canonical asset by persistent identity.

## Type parameters

**Type parameter `TAsset`:** The required asset type.

## Parameters

**Parameter `persistentId`:** The persistent asset identity.

## Returns

The canonical asset instance.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no compatible asset can be loaded.
