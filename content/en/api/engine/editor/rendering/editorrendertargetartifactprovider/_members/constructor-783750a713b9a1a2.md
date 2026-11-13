---
uid: api.783750a713b9a1a20497f1d20fa522bb7b0b6ba88322088f0d21c6e4ea22e273
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.#ctor(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Types.TypeCatalog,Inno.Rendering.Assets.Authoring.ShaderCompiler,Inno.Rendering.Assets.Authoring.ITextureTargetCompiler,Inno.Core.Diagnostics.IDiagnosticReporter)"
source: xml
reviewed: 1c16edd511902f5e4bd986ffdc692aaa2cceffa48a3d68dcf17c635382043c16
title: "Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Creates an Editor artifact provider backed by explicit shader and texture toolchains.

**Parameter `shaderCompiler`:** The compiler that turns backend-neutral shader IR into device target programs.

**Parameter `assets`:** The authoring asset pipeline that owns source mounts.

**Parameter `serialization`:** The serialization registry that owns active Shader contracts.

**Parameter `textureCompiler`:** The compiler that turns artist texture sources into portable KTX artifacts.

**Parameter `diagnostics`:** The sink that receives compilation and last-good fallback diagnostics.

**Exception `T:System.ArgumentNullException`:** Thrown when any required service is null.

**Parameter `types`:** The shared authoring type generation owner for graph and source extensions.
