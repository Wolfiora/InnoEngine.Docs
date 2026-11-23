---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cd5015fe5e428d8c9826bb3984db68cd5a6debf309ca4ec7899f0870c6fe8f63
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderArtifact.#ctor(System.String,System.String,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.RenderShaderPassArtifact},System.ReadOnlySpan{System.Byte})
title: RenderShaderArtifact.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
sourceFingerprint: 6765be18faceec81bb0799c3ebdb46969d5c90ab714b6ad8dc09f3a201237f9d
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
