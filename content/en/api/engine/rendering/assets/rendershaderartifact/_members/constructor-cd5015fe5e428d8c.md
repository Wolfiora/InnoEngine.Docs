---
uid: api.cd5015fe5e428d8c9826bb3984db68cd5a6debf309ca4ec7899f0870c6fe8f63
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderArtifact.#ctor(System.String,System.String,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.RenderShaderPassArtifact},System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 7efab0c01b8ccf5818e24e711148925f47bfcb1c9820178e105f3dafe7525c6e
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Creates a complete deployed shader artifact.

**Parameter `shaderName`:** The stable shader name expected by the runtime asset definition.

**Parameter `targetKey`:** The target compiler profile and policy identity.

**Parameter `variant`:** The canonical static keyword selection.

**Parameter `shaderInterface`:** The complete validated shader resource binding contract.

**Parameter `passes`:** Every source-free pass available to the runtime shader definition.

**Exception `T:System.ArgumentException`:** Thrown when a required identity is empty, no pass exists, or pass names are duplicated.

**Parameter `definitionData`:** Native-serialized material, keyword, technique and pass contract captured with these programs; contains stable asset references only.
