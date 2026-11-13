---
uid: api.b02e2331696c46d41d3ec8a279657012b3d6839fe1c4a40cc520142246a781d6
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderTargetArtifactProvider.GetTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference,System.ReadOnlyMemory{System.Byte}@)"
source: xml
reviewed: e5b5006418dd61ca3068b713426af0ed7a6947cd84a02ca14679fcf6b1455cab
title: "GetTextureArtifact"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Resolves the portable KTX artifact for one imported runtime texture.

**Parameter `texture`:** Stable reference to the imported texture slot.

**Parameter `artifact`:** Receives immutable KTX bytes when the artifact exists and is non-empty.

**Returns:** The current artifact availability. `F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` guarantees that `artifact` is non-empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `texture` is invalid.
