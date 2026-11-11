---
title: "AssetSourceId"
description: "Reference for AssetSourceId in Inno.Assets."
uid: api.inno.assets.7e3015e65759be9b
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetSourceId`

This reference describes `AssetSourceId` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Assets.AssetSourceId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ce975e898e5af2cf) | Method |
| [`Equals`](#api-7c924072e9bacc55) | Method |
| [`Equals`](#api-e09221fbf1b89964) | Method |
| [`GetHashCode`](#api-35d9c080ab84ff97) | Method |
| [`op_Equality`](#api-1bd6597781422e13) | Method |
| [`op_Inequality`](#api-7c111845281895d9) | Method |
| [`ToString`](#api-000eb67bc446d871) | Method |
| [`isValid`](#api-c877589ed840ea9c) | Property |
| [`project`](#api-8fdc071598820923) | Property |
| [`value`](#api-5e149022feca4181) | Property |

## Type declaration

<a id="api-7e3015e65759be9b"></a>
<!-- api: T:Inno.Assets.AssetSourceId aa2f8adb642cb30ef2b5e0a9afaec52b82150663eef82c0332e300539a774ba5 -->

```csharp
public record struct Inno.Assets.AssetSourceId : System.IEquatable<Inno.Assets.AssetSourceId>
```

Identifies one isolated asset source mount.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L10).

## `#ctor`

<a id="api-ce975e898e5af2cf"></a>
<!-- api: M:Inno.Assets.AssetSourceId.#ctor(System.String) 9ad6d0bdeb01afdcd5bc9cc828693952ef4f2d8abc43669de8be9e5216731f9c -->

```csharp
public Inno.Assets.AssetSourceId.AssetSourceId(string value)
```

Creates a globally stable source identifier.

**Parameter `value`:** Lowercase project or Plugin source identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L23).

## `Equals`

<a id="api-7c924072e9bacc55"></a>
<!-- api: M:Inno.Assets.AssetSourceId.Equals(Inno.Assets.AssetSourceId) 68c7669c2f280fdbe067f701d01c46fd22303c681330b5cf123429d0c8ded2e9 -->

```csharp
public readonly bool Inno.Assets.AssetSourceId.Equals(Inno.Assets.AssetSourceId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L10).

## `Equals`

<a id="api-e09221fbf1b89964"></a>
<!-- api: M:Inno.Assets.AssetSourceId.Equals(System.Object) 83b7cbbf3ab05b632f81938ed51eaa03d1ae5cc3a8e2afb8da8983cf5bb19c68 -->

```csharp
public override readonly bool Inno.Assets.AssetSourceId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L10).

## `GetHashCode`

<a id="api-35d9c080ab84ff97"></a>
<!-- api: M:Inno.Assets.AssetSourceId.GetHashCode 70e2c50421b014e8cf3e4e2b4ea4d9b1fdc95b9b49e5010d075e2340493158d8 -->

```csharp
public override readonly int Inno.Assets.AssetSourceId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L10).

## `op_Equality`

<a id="api-1bd6597781422e13"></a>
<!-- api: M:Inno.Assets.AssetSourceId.op_Equality(Inno.Assets.AssetSourceId,Inno.Assets.AssetSourceId) 3c2feed3b62d6c9400a773db7ac506a66e6efaaf1626d4a5a125aac96b74b49a -->

```csharp
public static bool Inno.Assets.AssetSourceId.operator ==(Inno.Assets.AssetSourceId left, Inno.Assets.AssetSourceId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L10).

## `op_Inequality`

<a id="api-7c111845281895d9"></a>
<!-- api: M:Inno.Assets.AssetSourceId.op_Inequality(Inno.Assets.AssetSourceId,Inno.Assets.AssetSourceId) 11933b9a1bacce5b89564c44b1e757498c66fa475b5afa8130faee5b54eab509 -->

```csharp
public static bool Inno.Assets.AssetSourceId.operator !=(Inno.Assets.AssetSourceId left, Inno.Assets.AssetSourceId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L10).

## `ToString`

<a id="api-000eb67bc446d871"></a>
<!-- api: M:Inno.Assets.AssetSourceId.ToString f8f33b9820b0408ba47389fe0319aea88dfc32b09c5f4f29272ad86872dd4f6d -->

```csharp
public override readonly string Inno.Assets.AssetSourceId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L55).

## `isValid`

<a id="api-c877589ed840ea9c"></a>
<!-- api: P:Inno.Assets.AssetSourceId.isValid 32a612c12e5a9a3369a4d58f0dafb075d076f19c0309d395e98411d773fa0e68 -->

```csharp
public readonly bool Inno.Assets.AssetSourceId.isValid { get; }
```

Gets whether the source identity has a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L47).

## `project`

<a id="api-8fdc071598820923"></a>
<!-- api: P:Inno.Assets.AssetSourceId.project e5e573c1f3467d139275096684a4b31a350f0ae0b364fda0ab07ea3851bba6e8 -->

```csharp
public static Inno.Assets.AssetSourceId Inno.Assets.AssetSourceId.project { get; }
```

Gets the writable project source identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L15).

## `value`

<a id="api-5e149022feca4181"></a>
<!-- api: P:Inno.Assets.AssetSourceId.value e7d558ece4134bb5ea401d88ffb990a573fef6c6258225f55b65b221a62fb1a1 -->

```csharp
public string Inno.Assets.AssetSourceId.value { get; set; }
```

Gets or sets the globally stable source value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetPath.cs#L42).
