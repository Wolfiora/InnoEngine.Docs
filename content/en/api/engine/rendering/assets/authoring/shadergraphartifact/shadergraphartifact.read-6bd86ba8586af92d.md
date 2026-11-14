---
uid: api.6bd86ba8586af92d7cff6208509581de57befb51f118735ba6cfdd261ee04109
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Read(Inno.Rendering.Assets.ShaderAsset,Inno.Assets.IAssetArtifactLookup)"
source: xml
reviewed: ca3839a779284dd84c5b3b80921a50bab84b4204910008d5aa484499e8697ab6
title: "ShaderGraphArtifact.Read"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Reads a retained immutable authoring snapshot through its explicit artifact owner.

## Parameters

**Parameter `shader`:** Stable Shader asset identity.

**Parameter `artifacts`:** Current authoring artifact lookup.

## Returns

Detached graph bytes; absent authoring data is an error, never a runtime fallback.
