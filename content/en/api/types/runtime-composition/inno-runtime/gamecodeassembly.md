---
title: "GameCodeAssembly"
description: "Reference for GameCodeAssembly in Inno.Runtime."
uid: api.inno.runtime.992b8a56ea05d1a3
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `GameCodeAssembly`

This reference describes `GameCodeAssembly` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Runtime.GameCodeAssembly>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b329cff2b369d9e1) | Method |
| [`Equals`](#api-e7231b4556d45668) | Method |
| [`Equals`](#api-6abce00409773312) | Method |
| [`GetHashCode`](#api-78fa811f6f6e5c20) | Method |
| [`op_Equality`](#api-9b9460d601540076) | Method |
| [`op_Inequality`](#api-e75909ad8deb874b) | Method |
| [`ToString`](#api-481ac67e741f85de) | Method |
| [`contentFingerprint`](#api-495c5592d0aafdaf) | Property |
| [`name`](#api-6c307d6d57d9ccce) | Property |

## Type declaration

<a id="api-992b8a56ea05d1a3"></a>
<!-- api: T:Inno.Runtime.GameCodeAssembly c416822ab7b5a24833b2a7d911b6749bcab624d5cb002ff1106ed1a3a3e64abc -->

```csharp
public sealed record Inno.Runtime.GameCodeAssembly : System.IEquatable<Inno.Runtime.GameCodeAssembly>
```

Identifies one immutable code input independently of its physical deployment representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeAssembly.cs#L8).

## `#ctor`

<a id="api-b329cff2b369d9e1"></a>
<!-- api: M:Inno.Runtime.GameCodeAssembly.#ctor(System.String,System.String) 34775b0a4d3ca2dbe4cea3fb38dc319377d691e4e7911c0b393862d032834d83 -->

```csharp
public Inno.Runtime.GameCodeAssembly.GameCodeAssembly(string name, string contentFingerprint)
```

Validates and freezes one logical assembly identity.

**Parameter `name`:** The exact simple assembly name.

**Parameter `contentFingerprint`:** The lowercase SHA-256 fingerprint of the frozen compiler output.

**Throws `System.IO.InvalidDataException`:** The supplied code identity is malformed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeAssembly.cs#L22).

## `Equals`

<a id="api-e7231b4556d45668"></a>
<!-- api: M:Inno.Runtime.GameCodeAssembly.Equals(Inno.Runtime.GameCodeAssembly) 4facc2885481a2b77db2d3438c4e32b326140015f35837f7700c4d7fae494099 -->

```csharp
public bool Inno.Runtime.GameCodeAssembly.Equals(Inno.Runtime.GameCodeAssembly? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeAssembly.cs#L8).

## `Equals`

<a id="api-6abce00409773312"></a>
<!-- api: M:Inno.Runtime.GameCodeAssembly.Equals(System.Object) f6f4d722d82f8636ccf3d02e3aa2c547bd363262a4a7d9cac86b5eef02592197 -->

```csharp
public override bool Inno.Runtime.GameCodeAssembly.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeAssembly.cs#L8).

## `GetHashCode`

<a id="api-78fa811f6f6e5c20"></a>
<!-- api: M:Inno.Runtime.GameCodeAssembly.GetHashCode fdbf5945c5f83b6333c21af187f8d02d4f4bbf6f2f3c992e65de8eccd4d8a6cf -->

```csharp
public override int Inno.Runtime.GameCodeAssembly.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeAssembly.cs#L8).

## `op_Equality`

<a id="api-9b9460d601540076"></a>
<!-- api: M:Inno.Runtime.GameCodeAssembly.op_Equality(Inno.Runtime.GameCodeAssembly,Inno.Runtime.GameCodeAssembly) 3cd8797cf55fd90b22e59909befeb4d1f2845e65d2122538d8d2657c83010387 -->

```csharp
public static bool Inno.Runtime.GameCodeAssembly.operator ==(Inno.Runtime.GameCodeAssembly? left, Inno.Runtime.GameCodeAssembly? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeAssembly.cs#L8).

## `op_Inequality`

<a id="api-e75909ad8deb874b"></a>
<!-- api: M:Inno.Runtime.GameCodeAssembly.op_Inequality(Inno.Runtime.GameCodeAssembly,Inno.Runtime.GameCodeAssembly) a40ce82e12284ff1c82b743051c76bff2da9fcd90e6c191d8623f12bd8397637 -->

```csharp
public static bool Inno.Runtime.GameCodeAssembly.operator !=(Inno.Runtime.GameCodeAssembly? left, Inno.Runtime.GameCodeAssembly? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeAssembly.cs#L8).

## `ToString`

<a id="api-481ac67e741f85de"></a>
<!-- api: M:Inno.Runtime.GameCodeAssembly.ToString 23983d6cb5fd3092ae218cde7bb25f9f3921126eddc3c22d3a0b1c103a3185eb -->

```csharp
public override string Inno.Runtime.GameCodeAssembly.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeAssembly.cs#L8).

## `contentFingerprint`

<a id="api-495c5592d0aafdaf"></a>
<!-- api: P:Inno.Runtime.GameCodeAssembly.contentFingerprint e01b0a865985cae428551d38b2d608520b44cacc3a0ee8bc893893490d21ed7c -->

```csharp
public string Inno.Runtime.GameCodeAssembly.contentFingerprint { get; }
```

Gets the build input's content fingerprint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeAssembly.cs#L39).

## `name`

<a id="api-6c307d6d57d9ccce"></a>
<!-- api: P:Inno.Runtime.GameCodeAssembly.name 131c91bc4d7b049de37cb7a84ad509ccebe71f3d81fe8756b51d6e237d0ddfe7 -->

```csharp
public string Inno.Runtime.GameCodeAssembly.name { get; }
```

Gets the exact simple assembly name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeAssembly.cs#L34).
