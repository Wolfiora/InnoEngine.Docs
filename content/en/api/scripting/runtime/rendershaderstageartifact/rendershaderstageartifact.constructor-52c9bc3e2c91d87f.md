---
uid: api.52c9bc3e2c91d87f01c9baafdff884fe675062ae34cb8e935ea9b91e84c4fd92
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderShaderStageArtifact.#ctor(InnoEngine.Rendering.ShaderStage,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: e7201dd7a8aaa7ed34a38f534fe732a1bd5e16dedd02d3b0c4432d5a851df048
title: "RenderShaderStageArtifact.Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Creates a deployed shader stage.

## Parameters

**Parameter `stage`:** The single programmable stage represented by the target binary.

**Parameter `bytes`:** The non-empty target backend program bytes.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `stage` is not a single stage or `bytes` is empty.
