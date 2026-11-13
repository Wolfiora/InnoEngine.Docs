---
uid: api.e856d7bf2cd0e69f5e56b7087fad18cfd4822c0aeabde1b365fc2cd331526251
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorShaderCompilation.RequestArtifact(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant)"
source: xml
reviewed: 5a5d12661bf6a8d1f1ea66fb35c3089bc80b27b9c467cda4798b5b7924fac24e
title: "RequestArtifact"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Reads the canonical Shader candidate for an isolated Material preview without modifying Material values.

**Parameter `shader`:** Current owner Shader reference.

**Parameter `variant`:** Exact Material keyword selection.

**Returns:** Compilation status and immutable last-good artifact when available.
