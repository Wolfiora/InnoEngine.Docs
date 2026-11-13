---
uid: api.731b5a6a8d78df9453510134b6415c3b058018e82ba842bfe7de874c01f8161d
symbol: "engine:Inno.Assets:M:Inno.Assets.IAssetArtifactLookup.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: d7cc131d08763c04724fa9a204cbd709104d7e12f3600a10d0a7395901d4c2d1
title: "AcquireArtifact"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Retains one verified output so cache collection cannot remove an active generation.

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `outputName`:** The required output protocol.

**Returns:** A caller-owned immutable artifact lease.

**Exception `T:System.InvalidOperationException`:** The requested output is unavailable or invalid.
