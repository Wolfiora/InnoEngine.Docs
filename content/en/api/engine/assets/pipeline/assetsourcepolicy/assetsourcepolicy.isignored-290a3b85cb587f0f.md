---
uid: api.290a3b85cb587f0fd55c321105a4e0a072b0ee07b459464ab15cda08c31b6ea5
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourcePolicy.IsIgnored(System.String,System.Boolean)"
source: xml
reviewed: 7ea3d990e2a14d8448f9e9d27ee220daf550454087aa331f5882f0622b368526
title: "AssetSourcePolicy.IsIgnored"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Determines whether an entry is excluded from the source database.

## Parameters

**Parameter `relativePath`:** The normalized path relative to its owning source mount.

**Parameter `isDirectory`:** Whether the source entry represents a directory.

## Returns

`true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
