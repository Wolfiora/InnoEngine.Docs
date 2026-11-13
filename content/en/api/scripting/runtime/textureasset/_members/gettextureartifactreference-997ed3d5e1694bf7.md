---
uid: api.997ed3d5e1694bf7afa0e9510d007aecdf5534b023d89005f117abc5e246e835
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.TextureAsset.GetTextureArtifactReference"
source: xml
reviewed: 5c26d43d1530d52928181ed13046ddf8d8b71f3439f64835028942194febf960
title: "GetTextureArtifactReference"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Creates a stable reference to this texture's current imported content.

**Returns:** A reference suitable for target compilation and generation-scoped GPU resolution.

**Exception `T:System.InvalidOperationException`:** Thrown when this texture has not been assigned a persistent asset identity.
