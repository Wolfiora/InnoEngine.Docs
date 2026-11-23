---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.de465efd311900909e460f32b0b5f9e0404628e86960776344e89229a879b2bd
symbol: scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderShaderArtifact.#ctor(System.String,System.String,InnoEngine.Rendering.RenderShaderVariant,InnoEngine.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderShaderPassArtifact},System.ReadOnlySpan{System.Byte})
title: RenderShaderArtifact.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: editor-script
sourceFingerprint: e7ead04f28d29f3e23245618efb20220c9690efb36c1370cba4e0d7908da7c47
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `shaderName`:** The stable shader name expected by the runtime asset definition.

**Parameter `targetKey`:** The target compiler profile and policy identity.

**Parameter `variant`:** The canonical static keyword selection.

**Parameter `shaderInterface`:** The complete validated shader resource binding contract.

**Parameter `passes`:** Every source-free pass available to the runtime shader definition.

**Parameter `definitionData`:** Native-serialized material, keyword, technique and pass contract captured with these programs; contains stable asset references only.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when a required identity is empty, no pass exists, or pass names are duplicated.
