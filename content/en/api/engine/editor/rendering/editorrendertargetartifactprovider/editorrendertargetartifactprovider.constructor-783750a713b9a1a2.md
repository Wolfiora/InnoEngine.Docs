---
uid: api.783750a713b9a1a20497f1d20fa522bb7b0b6ba88322088f0d21c6e4ea22e273
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.#ctor(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Types.TypeCatalog,Inno.Rendering.Assets.Authoring.ShaderCompiler,Inno.Rendering.Assets.Authoring.ITextureTargetCompiler,Inno.Core.Diagnostics.IDiagnosticReporter)"
source: xml
reviewed: 7195d842103db6a328eb711b3bf1f7310e47adb254eee0d4f58aa67e1372a2ca
title: "EditorRenderTargetArtifactProvider.Constructor"
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
