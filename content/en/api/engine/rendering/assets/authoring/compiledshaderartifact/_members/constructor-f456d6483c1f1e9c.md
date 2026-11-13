---
uid: api.f456d6483c1f1e9c54ecb115961760e7cfd0561085fd8199a864004fafec2129
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.CompiledShaderArtifact.#ctor(System.String,System.String,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.Authoring.CompiledShaderPass},System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 5039b3369b13f983d1b9a4520271dc8da72c930b5bea7c277bde796ebc1a3803
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Creates a compiled shader artifact.

**Parameter `shaderName`:** Artist-facing shader name.

**Parameter `targetKey`:** Stable target cache key.

**Parameter `variant`:** Static keyword variant.

**Parameter `shaderInterface`:** Manifest-derived binding contract.

**Parameter `passes`:** Compiled pass binaries.

**Parameter `definitionData`:** Native-serialized runtime definition captured before asynchronous compilation.
