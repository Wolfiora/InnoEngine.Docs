---
title: "IPresentationBackendFactory"
description: "Reference for IPresentationBackendFactory in Inno.Adapter.Presentation."
uid: api.inno.adapter.presentation.8ad264f443bb4f1d
kind: api
owners:
  - Inno.Adapter.Presentation
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation
---
# `IPresentationBackendFactory`

This reference describes `IPresentationBackendFactory` in `Inno.Adapter.Presentation`. Read the [shared contract](../../../projects/inno-adapter-presentation.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CreateContext`](#api-ec7921f4b19a3a37) | Method |
| [`supportedBackends`](#api-f32691a1a5ad7695) | Property |

## Type declaration

<a id="api-8ad264f443bb4f1d"></a>
<!-- api: T:Inno.Adapter.Presentation.IPresentationBackendFactory c87c9e6657058dcb15b5dc4be5e92310d414d791b47ebb5c5fd6facc1fbaadc7 -->

```csharp
public interface Inno.Adapter.Presentation.IPresentationBackendFactory
```

Creates host presentation contexts from explicit backend selections.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/IPresentationBackendFactory.cs#L8).

## `CreateContext`

<a id="api-ec7921f4b19a3a37"></a>
<!-- api: M:Inno.Adapter.Presentation.IPresentationBackendFactory.CreateContext(Inno.Adapter.Presentation.PresentationBackendId,Inno.Adapter.Presentation.PresentationBackendOptions) 2ecffc70c3042396b76f6073ec0df941a35f97b60fca31233954e01de364ba8f -->

```csharp
Inno.Adapter.Presentation.IPresentationContext Inno.Adapter.Presentation.IPresentationBackendFactory.CreateContext(Inno.Adapter.Presentation.PresentationBackendId backend, Inno.Adapter.Presentation.PresentationBackendOptions options)
```

Creates a presentation context over compatible platform and rendering adapters.

**Parameter `backend`:** Stable presentation implementation selected by the composition root.

**Parameter `options`:** Host-owned resources and presentation policy.

**Returns:** A caller-owned backend-neutral presentation context.

**Throws `System.NotSupportedException`:** Thrown when the selected platform, rendering, and presentation backends are incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/IPresentationBackendFactory.cs#L30).

## `supportedBackends`

<a id="api-f32691a1a5ad7695"></a>
<!-- api: P:Inno.Adapter.Presentation.IPresentationBackendFactory.supportedBackends 1598260780e79215da8640053175bce0883e19c6c3275206ec8930b24c900ba0 -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Adapter.Presentation.PresentationBackendId> Inno.Adapter.Presentation.IPresentationBackendFactory.supportedBackends { get; }
```

Gets the implementation identities available in this immutable factory snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/IPresentationBackendFactory.cs#L13).
