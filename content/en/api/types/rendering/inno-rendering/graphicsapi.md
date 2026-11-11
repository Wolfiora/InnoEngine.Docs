---
title: "GraphicsApi"
description: "Reference for GraphicsApi in Inno.Rendering."
uid: api.inno.rendering.06ab30df5061802e
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `GraphicsApi`

This reference describes `GraphicsApi` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IComparable<Inno.Rendering.GraphicsApi>`, `System.IEquatable<Inno.Rendering.GraphicsApi>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b5c6f0a0a79c02dc) | Method |
| [`CompareTo`](#api-6704cf5864208ecf) | Method |
| [`Equals`](#api-e33548035c364635) | Method |
| [`Equals`](#api-8d294b7f3a57c89c) | Method |
| [`GetHashCode`](#api-86c6c1ade442a81b) | Method |
| [`op_Equality`](#api-4d8b258db79adadb) | Method |
| [`op_Inequality`](#api-9e44293604b016d0) | Method |
| [`ToString`](#api-8900e9005c56b5a7) | Method |
| [`TryParse`](#api-90c431547cae690c) | Method |
| [`Direct3D11`](#api-1c6f7140631a62a6) | Property |
| [`Direct3D12`](#api-6912d0aaf1f2c989) | Property |
| [`isValid`](#api-c1b5e3d93a5ca225) | Property |
| [`Metal`](#api-8ad99b3346fec833) | Property |
| [`Noop`](#api-67ac63e4a757a727) | Property |
| [`OpenGL`](#api-93ed4d5e9f405d92) | Property |
| [`OpenGLES`](#api-762a4ac0af87c857) | Property |
| [`value`](#api-33711c77b8e93ce7) | Property |
| [`Vulkan`](#api-6b017a4c6b1c6bcf) | Property |
| [`WebGPU`](#api-2a52337a811dacac) | Property |

## Type declaration

<a id="api-06ab30df5061802e"></a>
<!-- api: T:Inno.Rendering.GraphicsApi 888f020cd1d8392520d0dec26299fca851f572524fa96170f644b1383177e5db -->

```csharp
public readonly record struct Inno.Rendering.GraphicsApi : System.IComparable<Inno.Rendering.GraphicsApi>, System.IEquatable<Inno.Rendering.GraphicsApi>
```

Identifies the graphics API family selected by the host without exposing a backend-native enum.
Pipelines use this value only for capability-aware choices and target artifact selection;
it does not require separate pipeline or shader source implementations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L11).

## `#ctor`

<a id="api-b5c6f0a0a79c02dc"></a>
<!-- api: M:Inno.Rendering.GraphicsApi.#ctor(System.String) 654355bbe3ad56fbcb432dd893101719b32a201ce47da5f0642e3186a0a9f613 -->

```csharp
public Inno.Rendering.GraphicsApi.GraphicsApi(string value)
```

Creates an open, stable backend identity without registering a backend implementation.

**Parameter `value`:** A portable case-sensitive identifier used in target artifact paths.

**Throws `System.ArgumentException`:** The identifier is empty or contains nonportable characters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L55).

## `CompareTo`

<a id="api-6704cf5864208ecf"></a>
<!-- api: M:Inno.Rendering.GraphicsApi.CompareTo(Inno.Rendering.GraphicsApi) 6a07c9602215e064f1f4d68d7cd9a9d31c8deabe7a99ef44b356e95e04100acd -->

```csharp
public int Inno.Rendering.GraphicsApi.CompareTo(Inno.Rendering.GraphicsApi other)
```

Compares two backend identities using stable ordinal ordering.

**Parameter `other`:** The other backend identity.

**Returns:** A negative, zero, or positive value according to ordinal identifier order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L106).

## `Equals`

<a id="api-e33548035c364635"></a>
<!-- api: M:Inno.Rendering.GraphicsApi.Equals(Inno.Rendering.GraphicsApi) 139449d03d0d55da885ed479184ac51ecafc4f7fd1081902fa00bb039154b486 -->

```csharp
public bool Inno.Rendering.GraphicsApi.Equals(Inno.Rendering.GraphicsApi other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L11).

## `Equals`

<a id="api-8d294b7f3a57c89c"></a>
<!-- api: M:Inno.Rendering.GraphicsApi.Equals(System.Object) 3d8d1ba1d51a0af6eec3cfd4799c9c2d7bc9eab6986cc062652457b1028bef55 -->

```csharp
public override bool Inno.Rendering.GraphicsApi.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L11).

## `GetHashCode`

<a id="api-86c6c1ade442a81b"></a>
<!-- api: M:Inno.Rendering.GraphicsApi.GetHashCode 5761563f79d7ee13860f931dbbe9ad46bb947c8fbf3c01cff858f8bb42c857a9 -->

```csharp
public override int Inno.Rendering.GraphicsApi.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L11).

## `op_Equality`

<a id="api-4d8b258db79adadb"></a>
<!-- api: M:Inno.Rendering.GraphicsApi.op_Equality(Inno.Rendering.GraphicsApi,Inno.Rendering.GraphicsApi) acdd4edce195740067dd47fd85f0a22c14ad2eeef10f7707d4439244fdb4c0ce -->

```csharp
public static bool Inno.Rendering.GraphicsApi.operator ==(Inno.Rendering.GraphicsApi left, Inno.Rendering.GraphicsApi right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L11).

## `op_Inequality`

<a id="api-9e44293604b016d0"></a>
<!-- api: M:Inno.Rendering.GraphicsApi.op_Inequality(Inno.Rendering.GraphicsApi,Inno.Rendering.GraphicsApi) f3bf0bbe674af44634def6111c6cb0974c13c490864b846a2004beee32208282 -->

```csharp
public static bool Inno.Rendering.GraphicsApi.operator !=(Inno.Rendering.GraphicsApi left, Inno.Rendering.GraphicsApi right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L11).

## `ToString`

<a id="api-8900e9005c56b5a7"></a>
<!-- api: M:Inno.Rendering.GraphicsApi.ToString b5284b6c1485ae651d4c966b2e8b7d32bd0a44b7d90547de9f8515c5d7d14a0f -->

```csharp
public override string Inno.Rendering.GraphicsApi.ToString()
```

Formats the exact stable backend identity.

**Returns:** The identity, or an empty string for an uninitialized value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L114).

## `TryParse`

<a id="api-90c431547cae690c"></a>
<!-- api: M:Inno.Rendering.GraphicsApi.TryParse(System.String,Inno.Rendering.GraphicsApi@) 9c0219bc6cffdfa7888d48f0373a044d78178fc28656f00834ae53adf8973394 -->

```csharp
public static bool Inno.Rendering.GraphicsApi.TryParse(string? value, out Inno.Rendering.GraphicsApi api)
```

Parses an open backend identity without consulting a closed engine-side backend list.

**Parameter `value`:** The exact stable backend identity.

**Parameter `api`:** The parsed value, or default when parsing fails.

**Returns:** True when the identifier is portable and nonempty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L86).

## `Direct3D11`

<a id="api-1c6f7140631a62a6"></a>
<!-- api: P:Inno.Rendering.GraphicsApi.Direct3D11 3221d107732e10e7dfbc8d02fc7644f08626bfd6c4dd62b4dfe2c136bbeffa4b -->

```csharp
public static Inno.Rendering.GraphicsApi Inno.Rendering.GraphicsApi.Direct3D11 { get; }
```

Direct3D 11 renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L20).

## `Direct3D12`

<a id="api-6912d0aaf1f2c989"></a>
<!-- api: P:Inno.Rendering.GraphicsApi.Direct3D12 708623e09e0a07bd63952b0482066fc228db79790ea47ddb0102dbdae06b4700 -->

```csharp
public static Inno.Rendering.GraphicsApi Inno.Rendering.GraphicsApi.Direct3D12 { get; }
```

Direct3D 12 renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L24).

## `isValid`

<a id="api-c1b5e3d93a5ca225"></a>
<!-- api: P:Inno.Rendering.GraphicsApi.isValid d24327807322b4875b5c02d8b6f68bf1f5e3030785e3c9f29c5c355325d78ab1 -->

```csharp
public bool Inno.Rendering.GraphicsApi.isValid { get; }
```

Gets whether this value contains an initialized backend identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L72).

## `Metal`

<a id="api-8ad99b3346fec833"></a>
<!-- api: P:Inno.Rendering.GraphicsApi.Metal 1840fd96ae4d1f892946353d454483115e3573f4cc70276194e0a2e792247d95 -->

```csharp
public static Inno.Rendering.GraphicsApi Inno.Rendering.GraphicsApi.Metal { get; }
```

Apple Metal renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L28).

## `Noop`

<a id="api-67ac63e4a757a727"></a>
<!-- api: P:Inno.Rendering.GraphicsApi.Noop 7aa13dd8f7ae7a38c4fd97e65dd42984db23088c2ba070911f81ec75984a1894 -->

```csharp
public static Inno.Rendering.GraphicsApi Inno.Rendering.GraphicsApi.Noop { get; }
```

Headless validation backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L16).

## `OpenGL`

<a id="api-93ed4d5e9f405d92"></a>
<!-- api: P:Inno.Rendering.GraphicsApi.OpenGL 3337e241d96ae9575279be3fe25263bc6d1bfe9942e383ed383f2285695ed36f -->

```csharp
public static Inno.Rendering.GraphicsApi Inno.Rendering.GraphicsApi.OpenGL { get; }
```

Desktop OpenGL renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L36).

## `OpenGLES`

<a id="api-762a4ac0af87c857"></a>
<!-- api: P:Inno.Rendering.GraphicsApi.OpenGLES fee1087678098a424512842ba9a84e8373feee2f77bd7d3d3493e53b41ae9ead -->

```csharp
public static Inno.Rendering.GraphicsApi Inno.Rendering.GraphicsApi.OpenGLES { get; }
```

OpenGL ES renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L40).

## `value`

<a id="api-33711c77b8e93ce7"></a>
<!-- api: P:Inno.Rendering.GraphicsApi.value fbfc602ea000eed7b12d3cb62be29bb203e7b43394885333221f6eb6224967bc -->

```csharp
public string Inno.Rendering.GraphicsApi.value { get; }
```

Gets the stable backend identity used by target artifacts and provider selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L67).

## `Vulkan`

<a id="api-6b017a4c6b1c6bcf"></a>
<!-- api: P:Inno.Rendering.GraphicsApi.Vulkan 818ca50678a6bf4dd7be7a2b86512ef70522f71e22febfca763e3dbc033d0069 -->

```csharp
public static Inno.Rendering.GraphicsApi Inno.Rendering.GraphicsApi.Vulkan { get; }
```

Khronos Vulkan renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L32).

## `WebGPU`

<a id="api-2a52337a811dacac"></a>
<!-- api: P:Inno.Rendering.GraphicsApi.WebGPU 198c92ed49ec3b6ed1b062f27eff3e712b2ae172ea419de5171a6fab289607cc -->

```csharp
public static Inno.Rendering.GraphicsApi Inno.Rendering.GraphicsApi.WebGPU { get; }
```

WebGPU renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L44).
