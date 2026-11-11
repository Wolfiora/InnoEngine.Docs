---
title: "IRenderingBackendFactory"
description: "Reference for IRenderingBackendFactory in Inno.Adapter.Rendering."
uid: api.inno.adapter.rendering.aac2c58b4a6be123
kind: api
owners:
  - Inno.Adapter.Rendering
apiSurface: source-clr
contracts:
  - project.inno-adapter-rendering
---
# `IRenderingBackendFactory`

This reference describes `IRenderingBackendFactory` in `Inno.Adapter.Rendering`. Read the [shared contract](../../../projects/inno-adapter-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CreateCompositionProgramProvider`](#api-afab209b07481d1b) | Method |
| [`CreateDevice`](#api-42e542903cbe0bd6) | Method |
| [`supportedBackends`](#api-8a5156033efd487f) | Property |

## Type declaration

<a id="api-aac2c58b4a6be123"></a>
<!-- api: T:Inno.Adapter.Rendering.IRenderingBackendFactory 715922ad75e07f88ffbcf0a4f4cc0d6b46b30622af0b178a831bcd4d5f41ef15 -->

```csharp
public interface Inno.Adapter.Rendering.IRenderingBackendFactory
```

Creates runtime rendering devices from one backend selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/IRenderingBackendFactory.cs#L10).

## `CreateCompositionProgramProvider`

<a id="api-afab209b07481d1b"></a>
<!-- api: M:Inno.Adapter.Rendering.IRenderingBackendFactory.CreateCompositionProgramProvider(Inno.Adapter.Rendering.RenderingBackendId) a39225c78bcb3d21c5283b8c206e940b06a30e6999afd72741d86b5ffe563890 -->

```csharp
Inno.Rendering.IRenderLayerCompositionProgramProvider Inno.Adapter.Rendering.IRenderingBackendFactory.CreateCompositionProgramProvider(Inno.Adapter.Rendering.RenderingBackendId backend)
```

Creates the composition program provider owned by the selected rendering backend.

**Parameter `backend`:** Stable identity of the selected rendering backend.

**Returns:** A provider whose target programs are compatible with that backend.

**Throws `System.NotSupportedException`:** No provider is registered for the requested backend identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/IRenderingBackendFactory.cs#L46).

## `CreateDevice`

<a id="api-42e542903cbe0bd6"></a>
<!-- api: M:Inno.Adapter.Rendering.IRenderingBackendFactory.CreateDevice(Inno.Adapter.Rendering.RenderingBackendId,Inno.Adapter.Rendering.RenderingBackendOptions) 5dd5b7d75051e9d03908f25d71be8116fd3d6e245182874d207068230f7af2e2 -->

```csharp
Inno.Rendering.IRenderDevice Inno.Adapter.Rendering.IRenderingBackendFactory.CreateDevice(Inno.Adapter.Rendering.RenderingBackendId backend, Inno.Adapter.Rendering.RenderingBackendOptions options)
```

Creates a rendering device for the supplied primary presentation surface.

**Parameter `backend`:** Stable rendering backend selected by the composition root.

**Parameter `options`:** Backend-neutral rendering options.

**Returns:** A caller-owned backend-neutral rendering device.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/IRenderingBackendFactory.cs#L29).

## `supportedBackends`

<a id="api-8a5156033efd487f"></a>
<!-- api: P:Inno.Adapter.Rendering.IRenderingBackendFactory.supportedBackends f9695ad97d5237dcf7f4be410854ebcc42368284a9dc9792f9e5cb9a07452f62 -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Adapter.Rendering.RenderingBackendId> Inno.Adapter.Rendering.IRenderingBackendFactory.supportedBackends { get; }
```

Gets the exact runtime backend identities available in this composition generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/IRenderingBackendFactory.cs#L15).
