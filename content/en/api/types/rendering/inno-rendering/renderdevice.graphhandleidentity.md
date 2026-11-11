---
title: "RenderDevice.GraphHandleIdentity"
description: "Reference for RenderDevice.GraphHandleIdentity in Inno.Rendering."
uid: api.inno.rendering.696466663ee6d01f
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderDevice.GraphHandleIdentity`

This reference describes `RenderDevice.GraphHandleIdentity` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderDevice.GraphHandleIdentity>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c12a52880639f490) | Method |
| [`Deconstruct`](#api-9b9608a4e179f5ba) | Method |
| [`Equals`](#api-edf8ffe0638faf98) | Method |
| [`Equals`](#api-0dd5e8fe35f36f28) | Method |
| [`GetHashCode`](#api-1e0fb9bf9b829b9e) | Method |
| [`op_Equality`](#api-cf4f7437d0b30719) | Method |
| [`op_Inequality`](#api-b3b86c40beee8031) | Method |
| [`ToString`](#api-fffd566a890c6d5a) | Method |
| [`generation`](#api-6ef76f8bdda8a40c) | Property |
| [`index`](#api-db53e22931d5dd87) | Property |

## Type declaration

<a id="api-696466663ee6d01f"></a>
<!-- api: T:Inno.Rendering.RenderDevice.GraphHandleIdentity 98d7eb7677a3db7356f2832f82849d8fe02f3383709ed332be041e77a32d18bc -->

```csharp
protected readonly record struct Inno.Rendering.RenderDevice.GraphHandleIdentity : System.IEquatable<Inno.Rendering.RenderDevice.GraphHandleIdentity>
```

Stores one decoded frame-scoped graph identity for use inside a concrete backend.

**Parameter `index`:** The zero-based logical resource index.

**Parameter `generation`:** The render-graph generation that owns the resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L35).

## `#ctor`

<a id="api-c12a52880639f490"></a>
<!-- api: M:Inno.Rendering.RenderDevice.GraphHandleIdentity.#ctor(System.Int32,System.UInt32) c3fa488f87989499413f3a17a9e5bcd1fc46ca23f4d7c37ce3bf5e55cc83b610 -->

```csharp
public Inno.Rendering.RenderDevice.GraphHandleIdentity.GraphHandleIdentity(int index, uint generation)
```

Stores one decoded frame-scoped graph identity for use inside a concrete backend.

**Parameter `index`:** The zero-based logical resource index.

**Parameter `generation`:** The render-graph generation that owns the resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L35).

## `Deconstruct`

<a id="api-9b9608a4e179f5ba"></a>
<!-- api: M:Inno.Rendering.RenderDevice.GraphHandleIdentity.Deconstruct(System.Int32@,System.UInt32@) edf02b8754d294980871bf83ca430b68af25cddad5ee19fdbb7013e0ac631e7d -->

```csharp
public void Inno.Rendering.RenderDevice.GraphHandleIdentity.Deconstruct(out int index, out uint generation)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L35).

## `Equals`

<a id="api-edf8ffe0638faf98"></a>
<!-- api: M:Inno.Rendering.RenderDevice.GraphHandleIdentity.Equals(Inno.Rendering.RenderDevice.GraphHandleIdentity) 3bbc62aba8645d3bd29f3dd3df37b43d021c0403520b56aa762df6cd04376981 -->

```csharp
public bool Inno.Rendering.RenderDevice.GraphHandleIdentity.Equals(Inno.Rendering.RenderDevice.GraphHandleIdentity other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L35).

## `Equals`

<a id="api-0dd5e8fe35f36f28"></a>
<!-- api: M:Inno.Rendering.RenderDevice.GraphHandleIdentity.Equals(System.Object) 3747be2208544c0daa0a7758792e08c5b4cd15e59d6e4a8f2d9cf6ba04d010db -->

```csharp
public override bool Inno.Rendering.RenderDevice.GraphHandleIdentity.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L35).

## `GetHashCode`

<a id="api-1e0fb9bf9b829b9e"></a>
<!-- api: M:Inno.Rendering.RenderDevice.GraphHandleIdentity.GetHashCode bf6d5dacfcdd67b3430fbf79b446fb0bfadd9425b4a96b25f11c1e556fb619ea -->

```csharp
public override int Inno.Rendering.RenderDevice.GraphHandleIdentity.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L35).

## `op_Equality`

<a id="api-cf4f7437d0b30719"></a>
<!-- api: M:Inno.Rendering.RenderDevice.GraphHandleIdentity.op_Equality(Inno.Rendering.RenderDevice.GraphHandleIdentity,Inno.Rendering.RenderDevice.GraphHandleIdentity) 0f38faddbf432df482275787fbc33a2fadb6c125a9d9cdb14652799fffad40ef -->

```csharp
public static bool Inno.Rendering.RenderDevice.GraphHandleIdentity.operator ==(Inno.Rendering.RenderDevice.GraphHandleIdentity left, Inno.Rendering.RenderDevice.GraphHandleIdentity right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L35).

## `op_Inequality`

<a id="api-b3b86c40beee8031"></a>
<!-- api: M:Inno.Rendering.RenderDevice.GraphHandleIdentity.op_Inequality(Inno.Rendering.RenderDevice.GraphHandleIdentity,Inno.Rendering.RenderDevice.GraphHandleIdentity) 49bd063259ddcf58b25d839a6b63a9d091d2d0756dce3887fefb9d0b53934a55 -->

```csharp
public static bool Inno.Rendering.RenderDevice.GraphHandleIdentity.operator !=(Inno.Rendering.RenderDevice.GraphHandleIdentity left, Inno.Rendering.RenderDevice.GraphHandleIdentity right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L35).

## `ToString`

<a id="api-fffd566a890c6d5a"></a>
<!-- api: M:Inno.Rendering.RenderDevice.GraphHandleIdentity.ToString e433fbe58f4881be5e4984c61ffdd3490886f07a666623d5441c9748d72eb720 -->

```csharp
public override string Inno.Rendering.RenderDevice.GraphHandleIdentity.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L35).

## `generation`

<a id="api-6ef76f8bdda8a40c"></a>
<!-- api: P:Inno.Rendering.RenderDevice.GraphHandleIdentity.generation 01e87e46d4a2c801bf60b9102721af332b47aad704abbde64199a043f9ee3b84 -->

```csharp
public uint Inno.Rendering.RenderDevice.GraphHandleIdentity.generation { get; init; }
```

The render-graph generation that owns the resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L37).

## `index`

<a id="api-db53e22931d5dd87"></a>
<!-- api: P:Inno.Rendering.RenderDevice.GraphHandleIdentity.index cc9b933c5a5b6c13cf9ff24ccb7dbc6d70d8ca0ba2e768d64f8fa48ed331247c -->

```csharp
public int Inno.Rendering.RenderDevice.GraphHandleIdentity.index { get; init; }
```

The zero-based logical resource index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L36).
