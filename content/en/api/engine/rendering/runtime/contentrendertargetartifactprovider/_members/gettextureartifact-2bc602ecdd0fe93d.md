---
uid: api.2bc602ecdd0fe93d557013f65171df07618a7b4c164c1a296a2365784faec4ac
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider.GetTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference,System.ReadOnlyMemory{System.Byte}@)"
source: xml
reviewed: 735c25181d2e403b08c4bec85264365fdc3f97aef13503de6fab61f9f5f8ac63
title: "GetTextureArtifact"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Loads one packaged portable texture artifact when it exists.

**Parameter `texture`:** The imported texture description.

**Parameter `artifact`:** Receives immutable KTX bytes when present.

**Returns:** `F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` when the deployed artifact exists; otherwise, `F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Unavailable`.

**Exception `T:System.IO.InvalidDataException`:** Thrown when a deployed texture artifact is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `texture` is `null`.
