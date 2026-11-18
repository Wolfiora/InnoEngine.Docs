---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1564c001762e15a1e91aabe25ef0368b2cd714c24022b7ceec5288ba61c0ff93
symbol: scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderShaderPassArtifact.#ctor(System.String,InnoEngine.Rendering.ShaderProgramKind,InnoEngine.Rendering.RenderRasterState,InnoEngine.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderShaderStageArtifact})
title: RenderShaderPassArtifact.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: editor-script
sourceFingerprint: 9e30465ef9b275eb3617deda4504b1a64049faf4c54921f54f0b216d09adbcc5
apiScope: Runtime
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
