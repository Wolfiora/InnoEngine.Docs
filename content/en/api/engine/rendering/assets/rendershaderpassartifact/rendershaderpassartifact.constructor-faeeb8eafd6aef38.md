---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.faeeb8eafd6aef3874b1798c48142bd78f434b3b173b5e70dac0ecab0b99419e
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderPassArtifact.#ctor(System.String,Inno.Rendering.ShaderProgramKind,Inno.Rendering.RenderRasterState,Inno.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.RenderShaderStageArtifact})
title: RenderShaderPassArtifact.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
sourceFingerprint: 31430a3ff10671766c129d92b005c328a34523b75039bf8d7a6db88d3f73d441
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `name`:** The stable pass name within the owning shader.

**Parameter `programKind`:** The programmable stage combination used by the pass.

**Parameter `rasterState`:** The backend-neutral fixed-function state used by raster passes.

**Parameter `shaderInterface`:** The validated pass-local resource binding contract.

**Parameter `stages`:** The complete target stage binaries required by the pass.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when the name, stage set, or program kind is invalid.
