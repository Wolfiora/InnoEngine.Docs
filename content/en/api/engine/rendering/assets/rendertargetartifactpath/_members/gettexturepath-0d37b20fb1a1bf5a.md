---
uid: api.0d37b20fb1a1bf5aa826dfbb551f808e00e23c56c622211388d78b7d1feab4e0
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderTargetArtifactPath.GetTexturePath(Inno.Rendering.Assets.RenderTextureArtifactReference)"
source: xml
reviewed: d2799bf9c2c73f049b8ed074f289a4772173773cddef06fb57d3e30923d3bff9
title: "GetTexturePath"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Gets the relative deployment path for one portable texture artifact.

**Parameter `texture`:** Stable texture artifact reference.

**Returns:** A platform-neutral path beneath the runtime content root.

**Exception `T:System.ArgumentException`:** Thrown when `texture` is invalid.
