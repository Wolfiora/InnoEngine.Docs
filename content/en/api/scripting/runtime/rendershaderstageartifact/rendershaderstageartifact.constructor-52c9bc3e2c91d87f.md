---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.52c9bc3e2c91d87f01c9baafdff884fe675062ae34cb8e935ea9b91e84c4fd92
symbol: scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderShaderStageArtifact.#ctor(InnoEngine.Rendering.ShaderStage,System.ReadOnlySpan{System.Byte})
title: RenderShaderStageArtifact.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: editor-script
reviewed: 37346f4c75a2180427bfaa6c71fd771a762a2cb7f460e1bac655faffab240b7c
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `stage`:** The single programmable stage represented by the target binary.

**Parameter `bytes`:** The non-empty target backend program bytes.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `stage` is not a single stage or `bytes` is empty.
