---
title: "NativeArtifact"
description: "Reference for NativeArtifact in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.2a5d22da9eaae92f
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeArtifact`

This reference describes `NativeArtifact` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Build.Toolchains.NativeArtifact>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a35a12ffd06e85e0) | Method |
| [`Equals`](#api-b494f6054f0ea2e2) | Method |
| [`Equals`](#api-e516f448bd5edfae) | Method |
| [`GetHashCode`](#api-b3ec75cf606a5c28) | Method |
| [`op_Equality`](#api-98af90f19bbbb72d) | Method |
| [`op_Inequality`](#api-afebab8555d0599e) | Method |
| [`ToString`](#api-4449f2d9873bcca4) | Method |
| [`file`](#api-95d2904e7b1766b8) | Property |
| [`logicalId`](#api-53f1f91a4e50a94d) | Property |
| [`role`](#api-e0344e6ef1d8eb2f) | Property |

## Type declaration

<a id="api-2a5d22da9eaae92f"></a>
<!-- api: T:Inno.Build.Toolchains.NativeArtifact 8b376ba859616d4dde9672934759d669ae2f175c54c902dcac5e95b1ca8eff71 -->

```csharp
public sealed record Inno.Build.Toolchains.NativeArtifact : System.IEquatable<Inno.Build.Toolchains.NativeArtifact>
```

Identifies one exact output and its producer-declared role.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifact.cs#L36).

## `#ctor`

<a id="api-a35a12ffd06e85e0"></a>
<!-- api: M:Inno.Build.Toolchains.NativeArtifact.#ctor(System.String,System.String,Inno.Build.Toolchains.NativeArtifactRole) 20394ba96bf09ccc5f7ef3e433b8fc0f01c1bac7cc2ec9c2dff892870ed6b524 -->

```csharp
public Inno.Build.Toolchains.NativeArtifact.NativeArtifact(string logicalId, string file, Inno.Build.Toolchains.NativeArtifactRole role)
```

Captures an output independently of platform suffix conventions.

**Parameter `logicalId`:** The unique producer-owned output identity.

**Parameter `file`:** The absolute output path retained by the product's reading ownership.

**Parameter `role`:** The explicitly declared link or deployment role.

**Throws `System.ArgumentException`:** The identity, path or role is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifact.cs#L53).

## `Equals`

<a id="api-b494f6054f0ea2e2"></a>
<!-- api: M:Inno.Build.Toolchains.NativeArtifact.Equals(Inno.Build.Toolchains.NativeArtifact) 4d9b075f602c55c9fea0641aa33c4c1700de20fcfdbb15814378ba9f7b5adbfb -->

```csharp
public bool Inno.Build.Toolchains.NativeArtifact.Equals(Inno.Build.Toolchains.NativeArtifact? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifact.cs#L36).

## `Equals`

<a id="api-e516f448bd5edfae"></a>
<!-- api: M:Inno.Build.Toolchains.NativeArtifact.Equals(System.Object) 6e930dc007f47f73eaebf81b4fe8c74b20addc134f682aea15465dacaf9dc1c1 -->

```csharp
public override bool Inno.Build.Toolchains.NativeArtifact.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifact.cs#L36).

## `GetHashCode`

<a id="api-b3ec75cf606a5c28"></a>
<!-- api: M:Inno.Build.Toolchains.NativeArtifact.GetHashCode f4cc065ee82762282d92189ca813dc3f329d56f281c2ae0ec4df91f31fcd6c7b -->

```csharp
public override int Inno.Build.Toolchains.NativeArtifact.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifact.cs#L36).

## `op_Equality`

<a id="api-98af90f19bbbb72d"></a>
<!-- api: M:Inno.Build.Toolchains.NativeArtifact.op_Equality(Inno.Build.Toolchains.NativeArtifact,Inno.Build.Toolchains.NativeArtifact) 521026914c60e78410a0fc745f922568f598af42d8675bd7364a3500586d941a -->

```csharp
public static bool Inno.Build.Toolchains.NativeArtifact.operator ==(Inno.Build.Toolchains.NativeArtifact? left, Inno.Build.Toolchains.NativeArtifact? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifact.cs#L36).

## `op_Inequality`

<a id="api-afebab8555d0599e"></a>
<!-- api: M:Inno.Build.Toolchains.NativeArtifact.op_Inequality(Inno.Build.Toolchains.NativeArtifact,Inno.Build.Toolchains.NativeArtifact) 035208af15bf4979dc9998693cff2a561fab4cf560e9132fe24145cbd97d1007 -->

```csharp
public static bool Inno.Build.Toolchains.NativeArtifact.operator !=(Inno.Build.Toolchains.NativeArtifact? left, Inno.Build.Toolchains.NativeArtifact? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifact.cs#L36).

## `ToString`

<a id="api-4449f2d9873bcca4"></a>
<!-- api: M:Inno.Build.Toolchains.NativeArtifact.ToString 641878bc7c70a5f6f94a5f31e62ae14269790bac3dd8343a7f0517be0c333a1f -->

```csharp
public override string Inno.Build.Toolchains.NativeArtifact.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifact.cs#L36).

## `file`

<a id="api-95d2904e7b1766b8"></a>
<!-- api: P:Inno.Build.Toolchains.NativeArtifact.file 26d3367f8d76e56f05a91611fcf91f768bc9d38c1f0aad82945bb39e44c7594d -->

```csharp
public string Inno.Build.Toolchains.NativeArtifact.file { get; }
```

Gets the exact absolute output path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifact.cs#L73).

## `logicalId`

<a id="api-53f1f91a4e50a94d"></a>
<!-- api: P:Inno.Build.Toolchains.NativeArtifact.logicalId 02b8b4d21c9841d1f89e9b7e3fa8907df2b671ece55ef0bcdf4e68cff25961d9 -->

```csharp
public string Inno.Build.Toolchains.NativeArtifact.logicalId { get; }
```

Gets the producer-owned output identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifact.cs#L69).

## `role`

<a id="api-e0344e6ef1d8eb2f"></a>
<!-- api: P:Inno.Build.Toolchains.NativeArtifact.role dea7c34b6f56089433a3e1a6b1b28259dfc73762775fb4a3ee1ee73c88a0b70d -->

```csharp
public Inno.Build.Toolchains.NativeArtifactRole Inno.Build.Toolchains.NativeArtifact.role { get; }
```

Gets the explicit link or deployment role.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifact.cs#L77).
