---
uid: api.52c9bc3e2c91d87f01c9baafdff884fe675062ae34cb8e935ea9b91e84c4fd92
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderShaderStageArtifact.#ctor(InnoEngine.Rendering.ShaderStage,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: a0594c5f85a33ab16483f7ef3d86a92218573caab937b7521c1fd50536ffdc23
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Creates a deployed shader stage.

**Parameter `stage`:** The single programmable stage represented by the target binary.

**Parameter `bytes`:** The non-empty target backend program bytes.

**Exception `T:System.ArgumentException`:** Thrown when `stage` is not a single stage or `bytes` is empty.
