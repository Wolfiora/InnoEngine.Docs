---
uid: api.de465efd311900909e460f32b0b5f9e0404628e86960776344e89229a879b2bd
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderShaderArtifact.#ctor(System.String,System.String,InnoEngine.Rendering.RenderShaderVariant,InnoEngine.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderShaderPassArtifact},System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: ed92bd46d5c2c459e48cb180a13b77f119417dff1dc781e4e8de680e2437d4aa
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Creates a complete deployed shader artifact.

**Parameter `shaderName`:** The stable shader name expected by the runtime asset definition.

**Parameter `targetKey`:** The target compiler profile and policy identity.

**Parameter `variant`:** The canonical static keyword selection.

**Parameter `shaderInterface`:** The complete validated shader resource binding contract.

**Parameter `passes`:** Every source-free pass available to the runtime shader definition.

**Exception `T:System.ArgumentException`:** Thrown when a required identity is empty, no pass exists, or pass names are duplicated.

**Parameter `definitionData`:** Native-serialized material, keyword, technique and pass contract captured with these programs; contains stable asset references only.
