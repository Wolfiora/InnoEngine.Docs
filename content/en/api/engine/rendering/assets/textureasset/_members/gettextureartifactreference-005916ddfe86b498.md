---
uid: api.005916ddfe86b498cfdf9cc4980bf9f66f7f4b6a11baea23d3b4463067795885
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.TextureAsset.GetTextureArtifactReference"
source: xml
reviewed: 121108177adcd9cdf3904d48b079c56fa539532a00505e3b793d50612f3e511d
title: "GetTextureArtifactReference"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Creates a stable reference to this texture's current imported content.

**Returns:** A reference suitable for target compilation and generation-scoped GPU resolution.

**Exception `T:System.InvalidOperationException`:** Thrown when this texture has not been assigned a persistent asset identity.
