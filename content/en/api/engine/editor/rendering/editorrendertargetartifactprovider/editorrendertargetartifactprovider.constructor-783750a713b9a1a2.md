---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.783750a713b9a1a20497f1d20fa522bb7b0b6ba88322088f0d21c6e4ea22e273
symbol: engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.#ctor(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Types.TypeCatalog,Inno.Rendering.Assets.Authoring.ShaderCompiler,Inno.Rendering.Assets.Authoring.ITextureTargetCompiler,Inno.Core.Diagnostics.IDiagnosticReporter)
title: EditorRenderTargetArtifactProvider.Constructor
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: source-clr
sourceFingerprint: 9d68e6a36ef06baee08412673979bcc2f5b457d02f1188acbf810323da2da5a4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `assets`:** The authoring asset pipeline that owns source mounts.

**Parameter `serialization`:** The serialization registry that owns active Shader contracts.

**Parameter `types`:** The shared authoring type generation owner for graph and source extensions.

**Parameter `shaderCompiler`:** The compiler that turns backend-neutral shader IR into device target programs.

**Parameter `textureCompiler`:** The compiler that turns artist texture sources into portable KTX artifacts.

**Parameter `diagnostics`:** The sink that receives compilation and last-good fallback diagnostics.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when any required service is null.
