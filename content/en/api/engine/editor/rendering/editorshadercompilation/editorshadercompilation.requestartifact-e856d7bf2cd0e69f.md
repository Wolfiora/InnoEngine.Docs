---
uid: api.e856d7bf2cd0e69f5e56b7087fad18cfd4822c0aeabde1b365fc2cd331526251
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorShaderCompilation.RequestArtifact(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant)"
source: xml
reviewed: 5d22030e1ee2516c4abd30814fc5583e537057d28849977c13b015f8433e69b0
title: "EditorShaderCompilation.RequestArtifact"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Reads the canonical Shader candidate for an isolated Material preview without modifying Material values.

**Parameter `shader`:** Current owner Shader reference.

**Parameter `variant`:** Exact Material keyword selection.

**Returns:** Compilation status and immutable last-good artifact when available.
