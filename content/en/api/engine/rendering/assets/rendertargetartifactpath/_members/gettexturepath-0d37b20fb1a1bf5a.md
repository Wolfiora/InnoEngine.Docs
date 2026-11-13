---
uid: api.0d37b20fb1a1bf5aa826dfbb551f808e00e23c56c622211388d78b7d1feab4e0
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderTargetArtifactPath.GetTexturePath(Inno.Rendering.Assets.RenderTextureArtifactReference)"
source: xml
reviewed: d7c3ad5720694bb8f63bbcec4e752af48c66a3724799d36cdc4f8d10ffeda811
title: "GetTexturePath"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Gets the relative deployment path for one portable texture artifact.

**Parameter `texture`:** Stable texture artifact reference.

**Returns:** A platform-neutral path beneath the runtime content root.

**Exception `T:System.ArgumentException`:** Thrown when `texture` is invalid.
