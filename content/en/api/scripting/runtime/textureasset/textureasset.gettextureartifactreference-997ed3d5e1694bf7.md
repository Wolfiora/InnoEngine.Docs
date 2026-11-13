---
uid: api.997ed3d5e1694bf7afa0e9510d007aecdf5534b023d89005f117abc5e246e835
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.TextureAsset.GetTextureArtifactReference"
source: xml
reviewed: b415a3ab61f475f086567ade15dad52727557b249884ded855ee0682da488747
title: "TextureAsset.GetTextureArtifactReference"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Creates a stable reference to this texture's current imported content.

**Returns:** A reference suitable for target compilation and generation-scoped GPU resolution.

**Exception `T:System.InvalidOperationException`:** Thrown when this texture has not been assigned a persistent asset identity.
