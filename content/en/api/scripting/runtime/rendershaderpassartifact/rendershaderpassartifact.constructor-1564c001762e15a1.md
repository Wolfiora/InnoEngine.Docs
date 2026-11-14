---
uid: api.1564c001762e15a1e91aabe25ef0368b2cd714c24022b7ceec5288ba61c0ff93
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderShaderPassArtifact.#ctor(System.String,InnoEngine.Rendering.ShaderProgramKind,InnoEngine.Rendering.RenderRasterState,InnoEngine.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderShaderStageArtifact})"
source: xml
reviewed: 2ebfb036e8d6933e33d0d1d71df6df5d77518ab2b396a45ea544470fa30a4f0f
title: "RenderShaderPassArtifact.Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Creates a deployed shader pass.

**Parameter `name`:** The stable pass name within the owning shader.

**Parameter `programKind`:** The programmable stage combination used by the pass.

**Parameter `rasterState`:** The backend-neutral fixed-function state used by raster passes.

**Parameter `shaderInterface`:** The validated pass-local resource binding contract.

**Parameter `stages`:** The complete target stage binaries required by the pass.

**Exception `T:System.ArgumentException`:** Thrown when the name, stage set, or program kind is invalid.
