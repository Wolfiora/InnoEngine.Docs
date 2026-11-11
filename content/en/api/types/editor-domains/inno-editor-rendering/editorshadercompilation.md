---
title: "EditorShaderCompilation"
description: "Reference for EditorShaderCompilation in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.b4eb178b4b05a5ed
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorShaderCompilation`

This reference describes `EditorShaderCompilation` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-df9fa57e8e93b799) | Method |
| [`#ctor`](#api-fc79512c5117c7c9) | Method |
| [`ReadDefinition`](#api-614a1cbe9554f18a) | Method |
| [`ReleaseDraft`](#api-c74d32980d5829d4) | Method |
| [`Request`](#api-44010dadd78df49f) | Method |
| [`RequestArtifact`](#api-5be8762f3047d456) | Method |
| [`RequestDraft`](#api-d8382548e02014b4) | Method |

## Type declaration

<a id="api-b4eb178b4b05a5ed"></a>
<!-- api: T:Inno.Editor.Rendering.EditorShaderCompilation c19e28b88698a5e713bbc24ca631cc5e478e378e99183cc7e85a0a5936ffb495 -->

```csharp
public sealed class Inno.Editor.Rendering.EditorShaderCompilation
```

Schedules Editor shader compilation for the active device without exposing native handles to authoring panels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L72).

## `#ctor`

<a id="api-df9fa57e8e93b799"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderCompilation.#ctor(Inno.Editor.Rendering.EditorRenderTargetArtifactProvider,Inno.Editor.Rendering.IEditorShaderArtifactValidator) b3b23b757e3be6a20c103adcbcbab02ee7ed2eae5350c7fe15c2cfea19732ca5 -->

```csharp
public Inno.Editor.Rendering.EditorShaderCompilation.EditorShaderCompilation(Inno.Editor.Rendering.EditorRenderTargetArtifactProvider provider, Inno.Editor.Rendering.IEditorShaderArtifactValidator validator)
```

Pairs the authoring artifact owner with active-device validation at frame safety points.

**Parameter `provider`:** Host-owned shader compilation service.

**Parameter `validator`:** Host-owned active-device artifact validator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L103).

## `#ctor`

<a id="api-fc79512c5117c7c9"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderCompilation.#ctor(Inno.Editor.Rendering.EditorRenderTargetArtifactProvider,Inno.Rendering.GraphicsCapabilities) d485a8d43f0e4ce04819b52e55880782d4eaa58b944d9a29dcd28367acdceb4a -->

```csharp
public Inno.Editor.Rendering.EditorShaderCompilation.EditorShaderCompilation(Inno.Editor.Rendering.EditorRenderTargetArtifactProvider provider, Inno.Rendering.GraphicsCapabilities capabilities)
```

Pairs the authoring artifact owner with the active device's immutable capability snapshot.

**Parameter `provider`:** Host-owned shader compilation service.

**Parameter `capabilities`:** Current device capability snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L86).

## `ReadDefinition`

<a id="api-614a1cbe9554f18a"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderCompilation.ReadDefinition(Inno.Rendering.Assets.RenderShaderArtifact) 5df2950d6c72c753daea8c37cf244cb84ddce9429ce1cd839b316e2112415f00 -->

```csharp
public Inno.Rendering.Assets.ShaderDefinition Inno.Editor.Rendering.EditorShaderCompilation.ReadDefinition(Inno.Rendering.Assets.RenderShaderArtifact artifact)
```

Decodes the exact contract captured with a candidate using the current owner's references.

**Parameter `artifact`:** Complete candidate, not the latest uncompiled asset definition.

**Returns:** A detached current-generation definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L159).

## `ReleaseDraft`

<a id="api-c74d32980d5829d4"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderCompilation.ReleaseDraft(System.Guid) edb49139954c9fcb4f2277be9a19e650cf4c1b2ee5278e945e1bcca3efc3f4c6 -->

```csharp
public void Inno.Editor.Rendering.EditorShaderCompilation.ReleaseDraft(System.Guid documentId)
```

Cancels a document's preview work and retires its cached candidate without touching canonical artifacts.

**Parameter `documentId`:** Closing preview owner identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L216).

## `Request`

<a id="api-44010dadd78df49f"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderCompilation.Request(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant) ddc87472c679e3e3f1ba7ccaa1b59a753bfcc017c6d27b7774ef3a77cc93eea2 -->

```csharp
public Inno.Editor.Rendering.EditorShaderCompilationSnapshot Inno.Editor.Rendering.EditorShaderCompilation.Request(Inno.Rendering.Assets.ShaderAsset shader, Inno.Rendering.Assets.RenderShaderVariant variant)
```

Requests current compilation and reads its explicit last-good status.

**Parameter `shader`:** Current generation shader asset, not retained by the service.

**Parameter `variant`:** Exact static keyword selection.

**Returns:** A detached status snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L123).

## `RequestArtifact`

<a id="api-5be8762f3047d456"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderCompilation.RequestArtifact(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant) a700aeedbeb1aa2e5bde53fa7c96b9cb06a09be57cf88bdbbab3af47a0cd334a -->

```csharp
public Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot Inno.Editor.Rendering.EditorShaderCompilation.RequestArtifact(Inno.Rendering.Assets.ShaderAsset shader, Inno.Rendering.Assets.RenderShaderVariant variant)
```

Reads the canonical Shader candidate for an isolated Material preview without modifying Material values.

**Parameter `shader`:** Current owner Shader reference.

**Parameter `variant`:** Exact Material keyword selection.

**Returns:** Compilation status and immutable last-good artifact when available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L141).

## `RequestDraft`

<a id="api-d8382548e02014b4"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderCompilation.RequestDraft(System.Guid,Inno.Core.Graphs.GraphDocument,System.UInt64,Inno.Rendering.Assets.RenderShaderVariant) e473b6ec723032d4a23711a8510f676456fbfe7357bb7ca46617e7c0e986f742 -->

```csharp
public Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot Inno.Editor.Rendering.EditorShaderCompilation.RequestDraft(System.Guid documentId, Inno.Core.Graphs.GraphDocument graph, ulong revision, Inno.Rendering.Assets.RenderShaderVariant variant)
```

Compiles a detached document through the same graph toolchain in an isolated preview cache.

**Parameter `documentId`:** Preview owner identity, independent of canonical artifact lookup.

**Parameter `graph`:** Current draft, never modified or retained.

**Parameter `revision`:** Monotonic draft revision, including Undo/Redo.

**Parameter `variant`:** Exact static keyword selection.

**Returns:** Preview-only state and artifact; calling this method cannot publish to Scene/Game.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L179).
