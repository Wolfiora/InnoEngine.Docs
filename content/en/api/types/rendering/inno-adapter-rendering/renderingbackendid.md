---
title: "RenderingBackendId"
description: "Reference for RenderingBackendId in Inno.Adapter.Rendering."
uid: api.inno.adapter.rendering.5bdd65f0b8886bb4
kind: api
owners:
  - Inno.Adapter.Rendering
apiSurface: source-clr
contracts:
  - project.inno-adapter-rendering
---
# `RenderingBackendId`

This reference describes `RenderingBackendId` in `Inno.Adapter.Rendering`. Read the [shared contract](../../../projects/inno-adapter-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Adapter.Rendering.RenderingBackendId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-98e85f6f737968c1) | Method |
| [`Equals`](#api-44c3acdf6ee7d764) | Method |
| [`Equals`](#api-ff547f478a6d32bb) | Method |
| [`GetHashCode`](#api-d7037aca422a7956) | Method |
| [`op_Equality`](#api-807edebc97bd5e46) | Method |
| [`op_Inequality`](#api-811268bf1b1aca8e) | Method |
| [`ToString`](#api-880fa2ed786a8e3e) | Method |
| [`bgfx`](#api-f257f920e71781b5) | Property |
| [`isValid`](#api-e9486481728c86b4) | Property |
| [`value`](#api-b73d789803951084) | Property |

## Type declaration

<a id="api-5bdd65f0b8886bb4"></a>
<!-- api: T:Inno.Adapter.Rendering.RenderingBackendId fb36ca12fb600fc048ea2667f90ab8fff392cbcb0ff4fcef6943c645d76b90b5 -->

```csharp
public readonly record struct Inno.Adapter.Rendering.RenderingBackendId : System.IEquatable<Inno.Adapter.Rendering.RenderingBackendId>
```

Identifies a rendering implementation independently from its graphics API and compiler language.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendId.cs#L8).

## `#ctor`

<a id="api-98e85f6f737968c1"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingBackendId.#ctor(System.String) f9bcfe266b686251e208af1d4ae55029982850ac032ffd5981b4a9a7bfd9199b -->

```csharp
public Inno.Adapter.Rendering.RenderingBackendId.RenderingBackendId(string value)
```

Creates an ordinal, case-sensitive backend identifier.

**Parameter `value`:** Stable nonempty implementation identifier.

**Throws `System.ArgumentException`:** The identifier is empty or contains whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendId.cs#L19).

## `Equals`

<a id="api-44c3acdf6ee7d764"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingBackendId.Equals(Inno.Adapter.Rendering.RenderingBackendId) c79d9ac7e9ad7462a21a5afc729b1b82538d8bc2e73940111e50bdef930c9510 -->

```csharp
public bool Inno.Adapter.Rendering.RenderingBackendId.Equals(Inno.Adapter.Rendering.RenderingBackendId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendId.cs#L8).

## `Equals`

<a id="api-ff547f478a6d32bb"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingBackendId.Equals(System.Object) bee109a90ccfb64abe38696f2ee5f1c47ddf6b4489a06398ebf927ea10fc3d16 -->

```csharp
public override bool Inno.Adapter.Rendering.RenderingBackendId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendId.cs#L8).

## `GetHashCode`

<a id="api-d7037aca422a7956"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingBackendId.GetHashCode d7967f7cdb0e85b2339c963f6ed8dc68fee7e4d2af971fdcb2dbdeb1d2cc6e1a -->

```csharp
public override int Inno.Adapter.Rendering.RenderingBackendId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendId.cs#L8).

## `op_Equality`

<a id="api-807edebc97bd5e46"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingBackendId.op_Equality(Inno.Adapter.Rendering.RenderingBackendId,Inno.Adapter.Rendering.RenderingBackendId) 4079824a3dc48dcb974430279006199abd2b306e8da31e0bd2f6253a29e900cc -->

```csharp
public static bool Inno.Adapter.Rendering.RenderingBackendId.operator ==(Inno.Adapter.Rendering.RenderingBackendId left, Inno.Adapter.Rendering.RenderingBackendId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendId.cs#L8).

## `op_Inequality`

<a id="api-811268bf1b1aca8e"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingBackendId.op_Inequality(Inno.Adapter.Rendering.RenderingBackendId,Inno.Adapter.Rendering.RenderingBackendId) b562fcd857d993394aecd4e724484a841f3347a263e319b337a306ca404e470e -->

```csharp
public static bool Inno.Adapter.Rendering.RenderingBackendId.operator !=(Inno.Adapter.Rendering.RenderingBackendId left, Inno.Adapter.Rendering.RenderingBackendId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendId.cs#L8).

## `ToString`

<a id="api-880fa2ed786a8e3e"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingBackendId.ToString 231eec5d452a3b05485c6e4188ae96a08f2ce9b84f40981cce124d6c15cf1106 -->

```csharp
public override string Inno.Adapter.Rendering.RenderingBackendId.ToString()
```

Returns the identifier without resolving or creating a device.

**Returns:** The stable identifier, or an empty string when unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendId.cs#L49).

## `bgfx`

<a id="api-f257f920e71781b5"></a>
<!-- api: P:Inno.Adapter.Rendering.RenderingBackendId.bgfx dacffb2ce760fff34ed1c617011f390e8737c55c67c9fcf42ef5d1706763afb4 -->

```csharp
public static Inno.Adapter.Rendering.RenderingBackendId Inno.Adapter.Rendering.RenderingBackendId.bgfx { get; }
```

Gets the identifier of the bundled BGFX implementation, not a whitelist of supported backends.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendId.cs#L31).

## `isValid`

<a id="api-e9486481728c86b4"></a>
<!-- api: P:Inno.Adapter.Rendering.RenderingBackendId.isValid afb20095321cd64b828ea2312f5ac415948686329551e8339159edc6e1c3f90c -->

```csharp
public bool Inno.Adapter.Rendering.RenderingBackendId.isValid { get; }
```

Gets whether this value identifies an implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendId.cs#L41).

## `value`

<a id="api-b73d789803951084"></a>
<!-- api: P:Inno.Adapter.Rendering.RenderingBackendId.value 1febb70c71648745494a3121301d8419043bb48da215aebd8f22ad1dc7a2a8d9 -->

```csharp
public string Inno.Adapter.Rendering.RenderingBackendId.value { get; }
```

Gets the stable implementation identifier; the default value is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendId.cs#L36).
