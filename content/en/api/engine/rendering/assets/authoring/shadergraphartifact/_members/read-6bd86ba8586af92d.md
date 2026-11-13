---
uid: api.6bd86ba8586af92d7cff6208509581de57befb51f118735ba6cfdd261ee04109
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Read(Inno.Rendering.Assets.ShaderAsset,Inno.Assets.IAssetArtifactLookup)"
source: xml
reviewed: 0c415ce9745bb9de378e778033f744228b15ab26e6a433070f2eb4c23b6190e0
title: "Read"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Reads a retained immutable authoring snapshot through its explicit artifact owner.

**Parameter `shader`:** Stable Shader asset identity.

**Parameter `artifacts`:** Current authoring artifact lookup.

**Returns:** Detached graph bytes; absent authoring data is an error, never a runtime fallback.
