---
uid: api.005916ddfe86b498cfdf9cc4980bf9f66f7f4b6a11baea23d3b4463067795885
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.TextureAsset.GetTextureArtifactReference"
source: xml
reviewed: ebb61b5b33dcc0605d0408487d03216d7c0e8696be71b9dbea778f435003945e
title: "GetTextureArtifactReference"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Creates a stable reference to this texture's current imported content.

**Returns:** A reference suitable for target compilation and generation-scoped GPU resolution.

**Exception `T:System.InvalidOperationException`:** Thrown when this texture has not been assigned a persistent asset identity.
