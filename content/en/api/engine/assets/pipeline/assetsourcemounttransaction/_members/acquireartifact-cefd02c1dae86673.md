---
uid: api.cefd02c1dae86673be17990fb8cb67b66e68b34db6dbc92b22e18aeb74261d2b
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourceMountTransaction.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: 902903b8fccfbc42f981fb99469509c50708a272b1d323fb686bc5a807ace1d0
title: "AcquireArtifact"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Retains one verified output so cache collection cannot remove an active generation.

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `outputName`:** The required output protocol.

**Returns:** A caller-owned immutable artifact lease.

**Exception `T:System.InvalidOperationException`:** The requested output is unavailable or invalid.
