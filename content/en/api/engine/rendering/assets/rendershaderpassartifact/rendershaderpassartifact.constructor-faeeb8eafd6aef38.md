---
uid: api.faeeb8eafd6aef3874b1798c48142bd78f434b3b173b5e70dac0ecab0b99419e
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderPassArtifact.#ctor(System.String,Inno.Rendering.ShaderProgramKind,Inno.Rendering.RenderRasterState,Inno.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.RenderShaderStageArtifact})"
source: xml
reviewed: 0a0128e2fe5247108d8473292ffdc200e93e8822d981af011a96aaad37fc9221
title: "RenderShaderPassArtifact.Constructor"
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
