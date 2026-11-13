---
uid: api.faeeb8eafd6aef3874b1798c48142bd78f434b3b173b5e70dac0ecab0b99419e
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderPassArtifact.#ctor(System.String,Inno.Rendering.ShaderProgramKind,Inno.Rendering.RenderRasterState,Inno.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.RenderShaderStageArtifact})"
source: xml
reviewed: 942addb19b0f1bced235c63454762af71ac846cca9a06448328954a810ef3e1f
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Creates a deployed shader pass.

**Parameter `name`:** The stable pass name within the owning shader.

**Parameter `programKind`:** The programmable stage combination used by the pass.

**Parameter `rasterState`:** The backend-neutral fixed-function state used by raster passes.

**Parameter `shaderInterface`:** The validated pass-local resource binding contract.

**Parameter `stages`:** The complete target stage binaries required by the pass.

**Exception `T:System.ArgumentException`:** Thrown when the name, stage set, or program kind is invalid.
