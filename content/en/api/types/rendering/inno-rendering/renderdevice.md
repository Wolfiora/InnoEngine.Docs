---
title: "RenderDevice"
description: "Reference for RenderDevice in Inno.Rendering."
uid: api.inno.rendering.2055e89f022237d3
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderDevice`

This reference describes `RenderDevice` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Nested types

- [`RenderDevice.DeviceHandleIdentity`](renderdevice.devicehandleidentity.md)
- [`RenderDevice.GraphHandleIdentity`](renderdevice.graphhandleidentity.md)

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b55ee88d5990c7a4) | Method |
| [`CreateComputePipelineHandle`](#api-731a1f837a03d959) | Method |
| [`CreateGraphicsPipelineHandle`](#api-ffd5eeeda87a358f) | Method |
| [`CreatePersistentBufferHandle`](#api-ef3179c348c7d0e7) | Method |
| [`CreatePersistentTextureHandle`](#api-0639e2111c810d09) | Method |
| [`CreateRenderSurfaceHandle`](#api-45e0dcdafec17db6) | Method |
| [`CreateRenderTextureReadbackHandle`](#api-f54692960808e003) | Method |
| [`GetHandleIdentity`](#api-73680677dd4463fc) | Method |
| [`GetHandleIdentity`](#api-b5a078fba714b827) | Method |
| [`GetHandleIdentity`](#api-d205a0a73de28770) | Method |
| [`GetHandleIdentity`](#api-ee83545d96839426) | Method |
| [`GetHandleIdentity`](#api-276fabb0de0c1ace) | Method |
| [`GetHandleIdentity`](#api-4fa172aedb53f2d5) | Method |
| [`GetHandleIdentity`](#api-1cf6fccc58cd195d) | Method |
| [`GetHandleIdentity`](#api-05fd8aa6e91cc3d2) | Method |

## Type declaration

<a id="api-2055e89f022237d3"></a>
<!-- api: T:Inno.Rendering.RenderDevice 3a2a10f124b551a385795414a1cfb5b8d4db395cbab060b43370ff09b66fcb44 -->

```csharp
public abstract class Inno.Rendering.RenderDevice
```

Provides the protected opaque-handle boundary required by replaceable render-device backends.

**Constraints:** Backend implementations derive from this type so they can encode and validate backend-neutral
handles without exposing raw backend identities to application or scripting code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L10).

## `#ctor`

<a id="api-b55ee88d5990c7a4"></a>
<!-- api: M:Inno.Rendering.RenderDevice.#ctor 535ffb732b4a4a14e35e197ef556dd6b6fd47109a9b6ca459eea7606c91b0c70 -->

```csharp
protected Inno.Rendering.RenderDevice.RenderDevice()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L10).

## `CreateComputePipelineHandle`

<a id="api-731a1f837a03d959"></a>
<!-- api: M:Inno.Rendering.RenderDevice.CreateComputePipelineHandle(System.UInt64,System.UInt32) 0f61bf72761c758bac185987157b5d42947e2894a28eb387ebf6d25de356ee75 -->

```csharp
protected static Inno.Rendering.ComputePipelineHandle Inno.Rendering.RenderDevice.CreateComputePipelineHandle(ulong value, uint generation)
```

Encodes a compute pipeline identity into a backend-neutral handle.

**Parameter `value`:** The backend-owned non-zero pipeline identity.

**Parameter `generation`:** The device generation that owns the pipeline.

**Returns:** An opaque compute pipeline handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L103).

## `CreateGraphicsPipelineHandle`

<a id="api-ffd5eeeda87a358f"></a>
<!-- api: M:Inno.Rendering.RenderDevice.CreateGraphicsPipelineHandle(System.UInt64,System.UInt32) 7f73f3a430bebd0707ef97e80a62f597e331e1ce3f086c6b9d86603f81ae1e22 -->

```csharp
protected static Inno.Rendering.GraphicsPipelineHandle Inno.Rendering.RenderDevice.CreateGraphicsPipelineHandle(ulong value, uint generation)
```

Encodes a graphics pipeline identity into a backend-neutral handle.

**Parameter `value`:** The backend-owned non-zero pipeline identity.

**Parameter `generation`:** The device generation that owns the pipeline.

**Returns:** An opaque graphics pipeline handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L86).

## `CreatePersistentBufferHandle`

<a id="api-ef3179c348c7d0e7"></a>
<!-- api: M:Inno.Rendering.RenderDevice.CreatePersistentBufferHandle(System.UInt64,System.UInt32) 1ca43ceade569a29108deea35497d3d8156e68cf718b5d220e387c738a318870 -->

```csharp
protected static Inno.Rendering.PersistentBufferHandle Inno.Rendering.RenderDevice.CreatePersistentBufferHandle(ulong value, uint generation)
```

Encodes a persistent buffer identity into a backend-neutral handle.

**Parameter `value`:** The backend-owned non-zero buffer identity.

**Parameter `generation`:** The device generation that owns the buffer.

**Returns:** An opaque buffer handle suitable for the public render-device contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L69).

## `CreatePersistentTextureHandle`

<a id="api-0639e2111c810d09"></a>
<!-- api: M:Inno.Rendering.RenderDevice.CreatePersistentTextureHandle(System.UInt64,System.UInt32) 712b1396f5804f6e75a6d1b4344ad9be1b40c4890cfde7bacdccfb4934601c4e -->

```csharp
protected static Inno.Rendering.PersistentTextureHandle Inno.Rendering.RenderDevice.CreatePersistentTextureHandle(ulong value, uint generation)
```

Encodes a persistent texture identity into a backend-neutral handle.

**Parameter `value`:** The backend-owned non-zero texture identity.

**Parameter `generation`:** The device generation that owns the texture.

**Returns:** An opaque texture handle suitable for the public render-device contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L52).

## `CreateRenderSurfaceHandle`

<a id="api-45e0dcdafec17db6"></a>
<!-- api: M:Inno.Rendering.RenderDevice.CreateRenderSurfaceHandle(System.UInt64,System.UInt32) 628b6ad13a9ef4188ac1248e94687a05f1f2715226b75646af8a3611b511e26c -->

```csharp
protected static Inno.Rendering.RenderSurfaceHandle Inno.Rendering.RenderDevice.CreateRenderSurfaceHandle(ulong value, uint generation)
```

Encodes a presentation-surface identity into a backend-neutral handle.

**Parameter `value`:** The backend-owned non-zero surface identity.

**Parameter `generation`:** The device generation that owns the surface.

**Returns:** An opaque presentation-surface handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L120).

## `CreateRenderTextureReadbackHandle`

<a id="api-f54692960808e003"></a>
<!-- api: M:Inno.Rendering.RenderDevice.CreateRenderTextureReadbackHandle(System.UInt64,System.UInt32) f6f1582d58a58276a1acf07ee4aa4425da2ea90eb2afe6edd24846a4b6ab7e00 -->

```csharp
protected static Inno.Rendering.RenderTextureReadbackHandle Inno.Rendering.RenderDevice.CreateRenderTextureReadbackHandle(ulong value, uint generation)
```

Encodes a texture-readback identity into a backend-neutral handle.

**Parameter `value`:** The backend-owned non-zero readback identity.

**Parameter `generation`:** The device generation that owns the readback.

**Returns:** An opaque texture-readback handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L137).

## `GetHandleIdentity`

<a id="api-73680677dd4463fc"></a>
<!-- api: M:Inno.Rendering.RenderDevice.GetHandleIdentity(Inno.Rendering.ComputePipelineHandle) 848392ffb2b10277de5495de3b722713386ad961deb8d22dc0764e0dec2b2dde -->

```csharp
protected static Inno.Rendering.RenderDevice.DeviceHandleIdentity Inno.Rendering.RenderDevice.GetHandleIdentity(Inno.Rendering.ComputePipelineHandle handle)
```

Decodes a compute pipeline handle for backend lookup and generation validation.

**Parameter `handle`:** The backend-neutral compute pipeline handle.

**Returns:** The backend resource identity and owning device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L184).

## `GetHandleIdentity`

<a id="api-b5a078fba714b827"></a>
<!-- api: M:Inno.Rendering.RenderDevice.GetHandleIdentity(Inno.Rendering.GraphicsPipelineHandle) 841f614567117c29c9c4f1210093658270497569662a0e85b8c6f2ee94ea8665 -->

```csharp
protected static Inno.Rendering.RenderDevice.DeviceHandleIdentity Inno.Rendering.RenderDevice.GetHandleIdentity(Inno.Rendering.GraphicsPipelineHandle handle)
```

Decodes a graphics pipeline handle for backend lookup and generation validation.

**Parameter `handle`:** The backend-neutral graphics pipeline handle.

**Returns:** The backend resource identity and owning device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L173).

## `GetHandleIdentity`

<a id="api-d205a0a73de28770"></a>
<!-- api: M:Inno.Rendering.RenderDevice.GetHandleIdentity(Inno.Rendering.PersistentBufferHandle) b1059cfb7da32f1ec7fc365096ce7b646924cdfff497dec5b64dfe2142c85ca3 -->

```csharp
protected static Inno.Rendering.RenderDevice.DeviceHandleIdentity Inno.Rendering.RenderDevice.GetHandleIdentity(Inno.Rendering.PersistentBufferHandle handle)
```

Decodes a persistent buffer handle for backend lookup and generation validation.

**Parameter `handle`:** The backend-neutral buffer handle.

**Returns:** The backend resource identity and owning device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L162).

## `GetHandleIdentity`

<a id="api-ee83545d96839426"></a>
<!-- api: M:Inno.Rendering.RenderDevice.GetHandleIdentity(Inno.Rendering.PersistentTextureHandle) 9d756d983642b96c59a6881afd7734d216466f8e15e52eea953ef698f6d29e6b -->

```csharp
protected static Inno.Rendering.RenderDevice.DeviceHandleIdentity Inno.Rendering.RenderDevice.GetHandleIdentity(Inno.Rendering.PersistentTextureHandle handle)
```

Decodes a persistent texture handle for backend lookup and generation validation.

**Parameter `handle`:** The backend-neutral texture handle.

**Returns:** The backend resource identity and owning device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L151).

## `GetHandleIdentity`

<a id="api-276fabb0de0c1ace"></a>
<!-- api: M:Inno.Rendering.RenderDevice.GetHandleIdentity(Inno.Rendering.RenderBufferHandle) 0b65477e41e742261dfdb83b4a8a0c13e5bb7debc51fc949fdb4fb2f13c65cd2 -->

```csharp
protected static Inno.Rendering.RenderDevice.GraphHandleIdentity Inno.Rendering.RenderDevice.GetHandleIdentity(Inno.Rendering.RenderBufferHandle handle)
```

Decodes a frame-scoped buffer handle for graph resource lookup.

**Parameter `handle`:** The backend-neutral graph buffer handle.

**Returns:** The graph resource index and owning graph generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L229).

## `GetHandleIdentity`

<a id="api-4fa172aedb53f2d5"></a>
<!-- api: M:Inno.Rendering.RenderDevice.GetHandleIdentity(Inno.Rendering.RenderSurfaceHandle) da6af7f869f2dd8d258980e1ba4574cde78b6293264d57b512a4f519a38bd43e -->

```csharp
protected static Inno.Rendering.RenderDevice.DeviceHandleIdentity Inno.Rendering.RenderDevice.GetHandleIdentity(Inno.Rendering.RenderSurfaceHandle handle)
```

Decodes a presentation-surface handle for backend lookup and generation validation.

**Parameter `handle`:** The backend-neutral presentation-surface handle.

**Returns:** The backend resource identity and owning device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L195).

## `GetHandleIdentity`

<a id="api-1cf6fccc58cd195d"></a>
<!-- api: M:Inno.Rendering.RenderDevice.GetHandleIdentity(Inno.Rendering.RenderTextureHandle) 9fd31e60a46f16a226c2bd7343ce089e24a91e285c822fd99c9c0ae371e7d159 -->

```csharp
protected static Inno.Rendering.RenderDevice.GraphHandleIdentity Inno.Rendering.RenderDevice.GetHandleIdentity(Inno.Rendering.RenderTextureHandle handle)
```

Decodes a frame-scoped texture handle for graph resource lookup.

**Parameter `handle`:** The backend-neutral graph texture handle.

**Returns:** The graph resource index and owning graph generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L218).

## `GetHandleIdentity`

<a id="api-05fd8aa6e91cc3d2"></a>
<!-- api: M:Inno.Rendering.RenderDevice.GetHandleIdentity(Inno.Rendering.RenderTextureReadbackHandle) f1747495b20b3e2b1974f88d9174dc6db664fb0d4b1bf1d23876c235d6d7136a -->

```csharp
protected static Inno.Rendering.RenderDevice.DeviceHandleIdentity Inno.Rendering.RenderDevice.GetHandleIdentity(Inno.Rendering.RenderTextureReadbackHandle handle)
```

Decodes a texture-readback handle for backend lookup and generation validation.

**Parameter `handle`:** The backend-neutral texture-readback handle.

**Returns:** The backend resource identity and owning device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L206).
