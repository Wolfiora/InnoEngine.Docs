---
uid: api.cefd02c1dae86673be17990fb8cb67b66e68b34db6dbc92b22e18aeb74261d2b
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourceMountTransaction.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: 535f331c42b336e951616dd3f4ae4072ee2cc6564bfc7fdaaf2a8149bbad88b0
title: "AssetSourceMountTransaction.AcquireArtifact"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Retains one verified output so cache collection cannot remove an active generation.

## Parameters

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `outputName`:** The required output protocol.

## Returns

A caller-owned immutable artifact lease.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The requested output is unavailable or invalid.
