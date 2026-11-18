---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d7a05a72e9d7382aeab60f9389ff158754890b46afa9d18cc4f5e6e10469eac7
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.Load``1(System.Guid)
title: AssetPipeline.Load
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 5ed074ec16bc713336032ef9c246406bfaab419b1680b18191838e529b0c0c99
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** The required asset type.

## Parameters

**Parameter `persistentId`:** The persistent asset identity.

## Returns

The canonical asset instance.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no compatible asset can be loaded.
