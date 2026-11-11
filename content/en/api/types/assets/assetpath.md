---
title: "AssetPath"
description: "Reference for AssetPath in Inno.Assets."
uid: api.inno.assets.3e2b94dc3a1cc757
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetPath`

This reference describes `AssetPath` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Assets.AssetPath>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-08b3f61330cc137a) | Method |
| [`Equals`](#api-cb9315e63bc44cd9) | Method |
| [`Equals`](#api-74b594f3aa2d1761) | Method |
| [`GetHashCode`](#api-511d0aa8bec31d10) | Method |
| [`op_Equality`](#api-dcabbeeb2dbb898b) | Method |
| [`op_Inequality`](#api-c5815e1f56d12d9e) | Method |
| [`Parse`](#api-0bfc6942994d1913) | Method |
| [`Project`](#api-eb1948a2973fbd5d) | Method |
| [`ToString`](#api-7f8b60f15108c93e) | Method |
| [`isValid`](#api-694e7713504f5606) | Property |
| [`localPath`](#api-17fd7a179cf42c2b) | Property |
| [`source`](#api-cd92be5da659bf4f) | Property |

## Type declaration

<a id="api-3e2b94dc3a1cc757"></a>
<!-- api: T:Inno.Assets.AssetPath f1a9c916908c653a551e40435c56f1ad5a230776fac994f8e4f22012768a3b41 -->

```csharp
public record struct Inno.Assets.AssetPath : System.IEquatable<Inno.Assets.AssetPath>
```

Addresses one asset without conflating isolated source mounts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L61).

## `#ctor`

<a id="api-08b3f61330cc137a"></a>
<!-- api: M:Inno.Assets.AssetPath.#ctor(Inno.Assets.AssetSourceId,System.String) 0fdb23aad180361d04d76c192bc116f6b3583ec0339fed9c224a737dabd3f3c2 -->

```csharp
public Inno.Assets.AssetPath.AssetPath(Inno.Assets.AssetSourceId source, string localPath)
```

Creates an asset path.

**Parameter `source`:** Owning source mount.

**Parameter `localPath`:** Source-local path using forward slashes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L74).

## `Equals`

<a id="api-cb9315e63bc44cd9"></a>
<!-- api: M:Inno.Assets.AssetPath.Equals(Inno.Assets.AssetPath) 1ed64562a1e46705f9ce0305fcaa3d89136d8be3ab1f3757d86c448e45af665e -->

```csharp
public readonly bool Inno.Assets.AssetPath.Equals(Inno.Assets.AssetPath other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L61).

## `Equals`

<a id="api-74b594f3aa2d1761"></a>
<!-- api: M:Inno.Assets.AssetPath.Equals(System.Object) 986cdf2ecf4acb6d9e544f251a428a6499d80056921234977970de3ed09439de -->

```csharp
public override readonly bool Inno.Assets.AssetPath.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L61).

## `GetHashCode`

<a id="api-511d0aa8bec31d10"></a>
<!-- api: M:Inno.Assets.AssetPath.GetHashCode 53a4d2a628f428c33dd82f0fdaa80ed27a1490cbc2a0fe036acf2fdda387e02e -->

```csharp
public override readonly int Inno.Assets.AssetPath.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L61).

## `op_Equality`

<a id="api-dcabbeeb2dbb898b"></a>
<!-- api: M:Inno.Assets.AssetPath.op_Equality(Inno.Assets.AssetPath,Inno.Assets.AssetPath) 19c8403db8703d34e5fecbe25501614c2c6ab5669734f552ecba5cd65f8f9227 -->

```csharp
public static bool Inno.Assets.AssetPath.operator ==(Inno.Assets.AssetPath left, Inno.Assets.AssetPath right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L61).

## `op_Inequality`

<a id="api-c5815e1f56d12d9e"></a>
<!-- api: M:Inno.Assets.AssetPath.op_Inequality(Inno.Assets.AssetPath,Inno.Assets.AssetPath) f12a29cd912bb67635ba3874e0e2290b73c7d33a29da49e0a68e0fdb7931afbf -->

```csharp
public static bool Inno.Assets.AssetPath.operator !=(Inno.Assets.AssetPath left, Inno.Assets.AssetPath right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L61).

## `Parse`

<a id="api-0bfc6942994d1913"></a>
<!-- api: M:Inno.Assets.AssetPath.Parse(System.String) 0eff86c381eeafb29465ba43d53209b6b00fb5f0c4bc2429d29e1b31cfa1b3d3 -->

```csharp
public static Inno.Assets.AssetPath Inno.Assets.AssetPath.Parse(string value)
```

Parses a canonical path, treating an unqualified value as project-owned.

**Parameter `value`:** Canonical or project-local path.

**Returns:** The isolated asset path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L119).

## `Project`

<a id="api-eb1948a2973fbd5d"></a>
<!-- api: M:Inno.Assets.AssetPath.Project(System.String) 5b1584f808369bbe654445cbb0e495aeb1091ec97e0416a7f0261a48c20daf9c -->

```csharp
public static Inno.Assets.AssetPath Inno.Assets.AssetPath.Project(string localPath)
```

Creates a path in the writable project source.

**Returns:** A project-owned asset path.

**Parameter `localPath`:** The local path text validated by the project operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L108).

## `ToString`

<a id="api-7f8b60f15108c93e"></a>
<!-- api: M:Inno.Assets.AssetPath.ToString f5c9fbaf8f0422ddb1177c708daad0fe22e7cdc40ac120ff8257ecb64c7385ad -->

```csharp
public override readonly string Inno.Assets.AssetPath.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L134).

## `isValid`

<a id="api-694e7713504f5606"></a>
<!-- api: P:Inno.Assets.AssetPath.isValid 67df81d3f3340016597c3bd21821885891c6e274f77e62d56298221849ab63b5 -->

```csharp
public readonly bool Inno.Assets.AssetPath.isValid { get; }
```

Gets whether the source and local path are valid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L97).

## `localPath`

<a id="api-17fd7a179cf42c2b"></a>
<!-- api: P:Inno.Assets.AssetPath.localPath d1478ae44a82a6161c8694ca80552a8f1ec4e0f331318c2723e7f38a58a063c0 -->

```csharp
public string Inno.Assets.AssetPath.localPath { get; set; }
```

Gets or sets the source-local path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L92).

## `source`

<a id="api-cd92be5da659bf4f"></a>
<!-- api: P:Inno.Assets.AssetPath.source c50e600835faabda63e4ec2ca7ff77de4e0091041420802af3ab64c03d2f2213 -->

```csharp
public Inno.Assets.AssetSourceId Inno.Assets.AssetPath.source { get; set; }
```

Gets or sets the owning source mount.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L87).
