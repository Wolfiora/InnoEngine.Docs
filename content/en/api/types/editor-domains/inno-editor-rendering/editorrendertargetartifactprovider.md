---
title: "EditorRenderTargetArtifactProvider"
description: "Reference for EditorRenderTargetArtifactProvider in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.04e9a72e956db869
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorRenderTargetArtifactProvider`

This reference describes `EditorRenderTargetArtifactProvider` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Runtime.IRenderTargetArtifactProvider`, `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ee52dbfa5c77c54f) | Method |
| [`Dispose`](#api-3165ff2088de142c) | Method |
| [`GetShaderArtifact`](#api-51997c046a74c9e3) | Method |
| [`GetTextureArtifact`](#api-b6b628b97eb53b79) | Method |
| [`ReadShaderDefinition`](#api-97a5d73f2545f8e9) | Method |
| [`RequestShaderCompilation`](#api-4c82f87d8b9dcc01) | Method |

## Type declaration

<a id="api-04e9a72e956db869"></a>
<!-- api: T:Inno.Editor.Rendering.EditorRenderTargetArtifactProvider b6ee4b41b3ac816121c56215db93a3cdc68f5f792f4bd8f821577948a76f579d -->

```csharp
public sealed class Inno.Editor.Rendering.EditorRenderTargetArtifactProvider : Inno.Rendering.Runtime.IRenderTargetArtifactProvider, System.IDisposable
```

Produces target-specific render artifacts from imported authoring assets without exposing source access
to the backend-neutral render runtime.

Stages Editor shader artifacts for device validation and preview.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorRenderTargetArtifactProvider.cs#L23).

## `#ctor`

<a id="api-ee52dbfa5c77c54f"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.#ctor(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Types.TypeCatalog,Inno.Rendering.Assets.Authoring.ShaderCompiler,Inno.Rendering.Assets.Authoring.ITextureTargetCompiler,Inno.Core.Diagnostics.IDiagnosticReporter) 5aaae3e56f8257f2a5b2e45a24a04eaed43b44f4d98a50b7295c955fc84c3d04 -->

```csharp
public Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.EditorRenderTargetArtifactProvider(Inno.Assets.Pipeline.AssetPipeline assets, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Extensibility.Types.TypeCatalog types, Inno.Rendering.Assets.Authoring.ShaderCompiler shaderCompiler, Inno.Rendering.Assets.Authoring.ITextureTargetCompiler textureCompiler, Inno.Core.Diagnostics.IDiagnosticReporter diagnostics)
```

Creates an Editor artifact provider backed by explicit shader and texture toolchains.

**Parameter `shaderCompiler`:** The compiler that turns backend-neutral shader IR into device target programs.

**Parameter `assets`:** The authoring asset pipeline that owns source mounts.

**Parameter `serialization`:** The serialization registry that owns active Shader contracts.

**Parameter `textureCompiler`:** The compiler that turns artist texture sources into portable KTX artifacts.

**Parameter `diagnostics`:** The sink that receives compilation and last-good fallback diagnostics.

**Throws `System.ArgumentNullException`:** Thrown when any required service is null.

**Parameter `types`:** The shared authoring type generation owner for graph and source extensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorRenderTargetArtifactProvider.cs#L63).

## `Dispose`

<a id="api-3165ff2088de142c"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.Dispose d5fb5bced4945b3f60064747d263b8573caba3b114f14f56df382fc608fbd040 -->

```csharp
public void Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.Dispose()
```

Cancels pending toolchain work and releases every cached authoring artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorRenderTargetArtifactProvider.cs#L240).

## `GetShaderArtifact`

<a id="api-51997c046a74c9e3"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.GetShaderArtifact(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.GraphicsCapabilities,Inno.Rendering.Assets.RenderShaderArtifact@) a4a34826e32f0762e542324082b415ee372c281185df0d4d51c30d5fbbd5dd65 -->

```csharp
public Inno.Rendering.Runtime.RenderTargetArtifactStatus Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.GetShaderArtifact(Inno.Rendering.Assets.ShaderAsset shader, Inno.Rendering.Assets.RenderShaderVariant variant, Inno.Rendering.GraphicsCapabilities capabilities, out Inno.Rendering.Assets.RenderShaderArtifact? artifact)
```

Returns a matching compiled shader when available and schedules a new candidate when source state changed.

**Parameter `shader`:** The imported backend-neutral shader asset.

**Parameter `variant`:** The exact material keyword selection.

**Parameter `capabilities`:** The active device capability snapshot used to select the target compiler profile.

**Parameter `artifact`:** Receives the current candidate or the last-good artifact while a replacement is compiling.

**Returns:** `Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` when a current or last-good artifact is usable;
    otherwise, the exact pending or failed state of the first candidate.

**Throws `System.ObjectDisposedException`:** Thrown when this provider has been disposed.

**Throws `System.ArgumentNullException`:** Thrown when `shader` or `capabilities` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorRenderTargetArtifactProvider.cs#L104).

## `GetTextureArtifact`

<a id="api-b6b628b97eb53b79"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.GetTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference,System.ReadOnlyMemory{System.Byte}@) 2aeabc174de044b04cd6a3fc1598e968b859a400aec3f51c34b40c204cb5be62 -->

```csharp
public Inno.Rendering.Runtime.RenderTargetArtifactStatus Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.GetTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference texture, out System.ReadOnlyMemory<byte> artifact)
```

Returns a matching compiled texture when available and schedules a replacement when source state changed.

**Parameter `texture`:** The imported texture asset whose authoring source is compiled.

**Parameter `artifact`:** Receives the current candidate or the last-good KTX artifact while a replacement is compiling.

**Returns:** `Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` when a current or last-good KTX artifact is usable;
    otherwise, the exact pending or failed state of the first candidate.

**Throws `System.ObjectDisposedException`:** Thrown when this provider has been disposed.

**Throws `System.ArgumentNullException`:** Thrown when `texture` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorRenderTargetArtifactProvider.cs#L212).

## `ReadShaderDefinition`

<a id="api-97a5d73f2545f8e9"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.ReadShaderDefinition(Inno.Rendering.Assets.RenderShaderArtifact) 6a1c96d58e048357c9611b6f0595cb69c7f4003074901ccc54ab3223d4789732 -->

```csharp
public Inno.Rendering.Assets.ShaderDefinition Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.ReadShaderDefinition(Inno.Rendering.Assets.RenderShaderArtifact artifact)
```

Reads and validates the shader definition value from its authoritative source.

**Parameter `artifact`:** The resolved immutable artifact payload returned to the caller.

**Returns:** The validated shader definition that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorRenderTargetArtifactProvider.cs#L154).

## `RequestShaderCompilation`

<a id="api-4c82f87d8b9dcc01"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.RequestShaderCompilation(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.GraphicsCapabilities) 2d3ed225dad7552ebd78c3aee634bd36434ac0ec57a42fdc1a4450f433de0ec7 -->

```csharp
public Inno.Editor.Rendering.EditorShaderCompilationSnapshot Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.RequestShaderCompilation(Inno.Rendering.Assets.ShaderAsset shader, Inno.Rendering.Assets.RenderShaderVariant variant, Inno.Rendering.GraphicsCapabilities capabilities)
```

Schedules compilation if required and reports saving-independent state for the exact shader, variant and device target.

**Parameter `shader`:** Current imported shader.

**Parameter `variant`:** Selected keyword variant.

**Parameter `capabilities`:** Current device capabilities.

**Returns:** A detached status and diagnostic snapshot; last-good is explicit and never implies current-source success.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorRenderTargetArtifactProvider.cs#L177).
