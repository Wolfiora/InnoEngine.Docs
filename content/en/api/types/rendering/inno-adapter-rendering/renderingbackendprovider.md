---
title: "RenderingBackendProvider"
description: "Reference for RenderingBackendProvider in Inno.Adapter.Rendering."
uid: api.inno.adapter.rendering.f84b936ef5d5d204
kind: api
owners:
  - Inno.Adapter.Rendering
apiSurface: source-clr
contracts:
  - project.inno-adapter-rendering
---
# `RenderingBackendProvider`

This reference describes `RenderingBackendProvider` in `Inno.Adapter.Rendering`. Read the [shared contract](../../../projects/inno-adapter-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ea6f036432e3746c) | Method |
| [`CreateCompositionProgramProvider`](#api-21bc8e9163f7a393) | Method |
| [`CreateDevice`](#api-7242b3e1587aafba) | Method |
| [`id`](#api-904d6b88b8ac6acf) | Property |

## Type declaration

<a id="api-f84b936ef5d5d204"></a>
<!-- api: T:Inno.Adapter.Rendering.RenderingBackendProvider 6e91c0670a808b6e3505e6c20143edbb91cf357480a8025999680ea406e3cc24 -->

```csharp
public abstract class Inno.Adapter.Rendering.RenderingBackendProvider
```

Supplies one rendering implementation registered by a composition owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendProvider.cs#L9).

## `#ctor`

<a id="api-ea6f036432e3746c"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingBackendProvider.#ctor(Inno.Adapter.Rendering.RenderingBackendId) 58679e0f1e0915c2902bacffde177764f35085e0d093df359c08d90274658aef -->

```csharp
protected Inno.Adapter.Rendering.RenderingBackendProvider.RenderingBackendProvider(Inno.Adapter.Rendering.RenderingBackendId id)
```

Captures the registration identity assigned by the composition owner.

**Parameter `id`:** The assigned implementation identity.

**Throws `System.ArgumentException`:** The identity is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendProvider.cs#L20).

## `CreateCompositionProgramProvider`

<a id="api-21bc8e9163f7a393"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingBackendProvider.CreateCompositionProgramProvider 0ddb6a7782ce28c07be18a9d18b20a849a733042a5404c7599448fef636f9567 -->

```csharp
public abstract Inno.Rendering.IRenderLayerCompositionProgramProvider Inno.Adapter.Rendering.RenderingBackendProvider.CreateCompositionProgramProvider()
```

Creates the backend-owned program provider used when the host composites render layers.

**Returns:** A provider compatible with devices created by this rendering implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendProvider.cs#L49).

## `CreateDevice`

<a id="api-7242b3e1587aafba"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingBackendProvider.CreateDevice(Inno.Adapter.Rendering.RenderingBackendOptions) de5b78208f8488a0cf3f8273ad2a50658c6180b024aadf05d13e6bf24cf65862 -->

```csharp
public abstract Inno.Rendering.IRenderDevice Inno.Adapter.Rendering.RenderingBackendProvider.CreateDevice(Inno.Adapter.Rendering.RenderingBackendOptions options)
```

Creates a caller-owned device using backend-neutral surface options.

**Parameter `options`:** Validated surface and device creation options.

**Returns:** A new device owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendProvider.cs#L41).

## `id`

<a id="api-904d6b88b8ac6acf"></a>
<!-- api: P:Inno.Adapter.Rendering.RenderingBackendProvider.id 9df046be77944489ffddf8d03f3c2b22408b171a45e38dfc7256d9529ab32277 -->

```csharp
public Inno.Adapter.Rendering.RenderingBackendId Inno.Adapter.Rendering.RenderingBackendProvider.id { get; }
```

Gets the stable implementation identity paired with its authoring tools.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendProvider.cs#L30).
