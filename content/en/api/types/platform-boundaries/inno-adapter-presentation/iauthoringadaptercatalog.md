---
title: "IAuthoringAdapterCatalog"
description: "Reference for IAuthoringAdapterCatalog in Inno.Adapter.Presentation."
uid: api.inno.adapter.presentation.201f881f920dd4b4
kind: api
owners:
  - Inno.Adapter.Presentation
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation
---
# `IAuthoringAdapterCatalog`

This reference describes `IAuthoringAdapterCatalog` in `Inno.Adapter.Presentation`. Read the [shared contract](../../../projects/inno-adapter-presentation.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `Inno.Adapter.IAdapterCatalog`.

## Members

| Member | Kind |
| --- | --- |
| [`presentation`](#api-8b2f73a6f11693dd) | Property |
| [`renderingAuthoring`](#api-9f08c3218d3829bd) | Property |

## Type declaration

<a id="api-201f881f920dd4b4"></a>
<!-- api: T:Inno.Adapter.Presentation.IAuthoringAdapterCatalog f8a256584ddcba75456025440be40263fb9e44a523604eef54d5120a19714d9e -->

```csharp
public interface Inno.Adapter.Presentation.IAuthoringAdapterCatalog : Inno.Adapter.IAdapterCatalog
```

Extends the runtime adapter catalog with tooling and presentation factories required by authoring products.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/IAuthoringAdapterCatalog.cs#L8).

## `presentation`

<a id="api-8b2f73a6f11693dd"></a>
<!-- api: P:Inno.Adapter.Presentation.IAuthoringAdapterCatalog.presentation ed48266f2f7906c4cb6bbc84ad552e339d9e91110a264eba43b15cd5c1493ef0 -->

```csharp
Inno.Adapter.Presentation.IPresentationBackendFactory Inno.Adapter.Presentation.IAuthoringAdapterCatalog.presentation { get; }
```

Gets the graphical host-presentation factory used by authoring products.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/IAuthoringAdapterCatalog.cs#L18).

## `renderingAuthoring`

<a id="api-9f08c3218d3829bd"></a>
<!-- api: P:Inno.Adapter.Presentation.IAuthoringAdapterCatalog.renderingAuthoring a706e2dacf5d714fb65d0f590845b671b015744f8fb578e8679cd346ed4ca230 -->

```csharp
Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory Inno.Adapter.Presentation.IAuthoringAdapterCatalog.renderingAuthoring { get; }
```

Gets the rendering toolchain factory used to compile authoring artifacts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/IAuthoringAdapterCatalog.cs#L13).
