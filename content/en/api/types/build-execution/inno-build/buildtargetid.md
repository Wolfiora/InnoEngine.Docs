---
title: "BuildTargetId"
description: "Reference for BuildTargetId in Inno.Build."
uid: api.inno.build.6224264580047209
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `BuildTargetId`

This reference describes `BuildTargetId` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Build.BuildTargetId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-de498c980ec9970c) | Method |
| [`Equals`](#api-dfd9a4532eb3a2d0) | Method |
| [`Equals`](#api-12d9a3a12b03e605) | Method |
| [`GetHashCode`](#api-f6095c5c11cf64fd) | Method |
| [`op_Equality`](#api-fc99ce8fc4e4e745) | Method |
| [`op_Inequality`](#api-5b3a2a5458737f1e) | Method |
| [`ToString`](#api-c71dc3127ac279d5) | Method |
| [`value`](#api-d5ae613ca8c8200c) | Property |

## Type declaration

<a id="api-6224264580047209"></a>
<!-- api: T:Inno.Build.BuildTargetId d345f47a5166ccb2ce43117d52964ee74cd8ae7f2bfd8d4d5fd145808b8ba255 -->

```csharp
public readonly record struct Inno.Build.BuildTargetId : System.IEquatable<Inno.Build.BuildTargetId>
```

Identifies one stable platform and architecture combination supported by the game build pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildTargetId.cs#L8).

## `#ctor`

<a id="api-de498c980ec9970c"></a>
<!-- api: M:Inno.Build.BuildTargetId.#ctor(System.String) 6f8e223586a699f64eb708afa97491aaa6701b16af20542b23ba4a3bcfb6199c -->

```csharp
public Inno.Build.BuildTargetId.BuildTargetId(string value)
```

Creates a stable target identity.

**Parameter `value`:** A lowercase portable identifier composed of letters, numbers, and hyphens.

**Throws `System.ArgumentException`:** Thrown when `value` is not a portable target identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildTargetId.cs#L19).

## `Equals`

<a id="api-dfd9a4532eb3a2d0"></a>
<!-- api: M:Inno.Build.BuildTargetId.Equals(Inno.Build.BuildTargetId) 71fd5d0c64693d83172a6aa6cf05246662bc29d1362d7c3036e14dc7f737364d -->

```csharp
public bool Inno.Build.BuildTargetId.Equals(Inno.Build.BuildTargetId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildTargetId.cs#L8).

## `Equals`

<a id="api-12d9a3a12b03e605"></a>
<!-- api: M:Inno.Build.BuildTargetId.Equals(System.Object) ff47f653fb9e95e251255ea6f7bbf8498163629fcf08fac3b55c83ccc01043af -->

```csharp
public override bool Inno.Build.BuildTargetId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildTargetId.cs#L8).

## `GetHashCode`

<a id="api-f6095c5c11cf64fd"></a>
<!-- api: M:Inno.Build.BuildTargetId.GetHashCode a1ce41ab3243fb0f1027550b813bf29e9cbf74597fd47bc493d0789f1b1c9294 -->

```csharp
public override int Inno.Build.BuildTargetId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildTargetId.cs#L8).

## `op_Equality`

<a id="api-fc99ce8fc4e4e745"></a>
<!-- api: M:Inno.Build.BuildTargetId.op_Equality(Inno.Build.BuildTargetId,Inno.Build.BuildTargetId) d9b5c62623de9eb551723c457ed45b74fb49616eee60e2ed47ad987cad11232c -->

```csharp
public static bool Inno.Build.BuildTargetId.operator ==(Inno.Build.BuildTargetId left, Inno.Build.BuildTargetId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildTargetId.cs#L8).

## `op_Inequality`

<a id="api-5b3a2a5458737f1e"></a>
<!-- api: M:Inno.Build.BuildTargetId.op_Inequality(Inno.Build.BuildTargetId,Inno.Build.BuildTargetId) 8adb83037b94ad7f0f661d06c5bf6376bd95e1934d1bed513375b58a9fd983f0 -->

```csharp
public static bool Inno.Build.BuildTargetId.operator !=(Inno.Build.BuildTargetId left, Inno.Build.BuildTargetId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildTargetId.cs#L8).

## `ToString`

<a id="api-c71dc3127ac279d5"></a>
<!-- api: M:Inno.Build.BuildTargetId.ToString 6e9df431fcd728e544ff29682b7e74b87ee778b600bd320be197319f345a36a5 -->

```csharp
public override string Inno.Build.BuildTargetId.ToString()
```

Formats the portable target identity.

**Returns:** The exact stable target identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildTargetId.cs#L41).

## `value`

<a id="api-d5ae613ca8c8200c"></a>
<!-- api: P:Inno.Build.BuildTargetId.value b5aa307d967767592a7eca6cdb9d600cdb819113e631cebf2407619cc52570b2 -->

```csharp
public string Inno.Build.BuildTargetId.value { get; }
```

Gets the portable target identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildTargetId.cs#L33).
