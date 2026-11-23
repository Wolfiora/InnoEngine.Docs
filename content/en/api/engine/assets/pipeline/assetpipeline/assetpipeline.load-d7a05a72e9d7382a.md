---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d7a05a72e9d7382aeab60f9389ff158754890b46afa9d18cc4f5e6e10469eac7
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.Load``1(System.Guid)
title: AssetPipeline.Load
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: fa6bdc26f34a330a8a35072d8238387368ec6c81eeb92bf0712a1102556f26b0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** The required asset type.

## Parameters

**Parameter `persistentID`:** The persistent asset identity.

## Returns

The canonical asset instance.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no compatible asset can be loaded.
