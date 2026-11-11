---
title: "AssetResidencyStatistics"
description: "Reference for AssetResidencyStatistics in Inno.Assets."
uid: api.inno.assets.51901cc220016d08
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetResidencyStatistics`

This reference describes `AssetResidencyStatistics` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Assets.AssetResidencyStatistics>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-75469d171fb2cc1d) | Method |
| [`Equals`](#api-7cd7b57e0e4f8ef0) | Method |
| [`Equals`](#api-d08c8f72ff72b0a1) | Method |
| [`GetHashCode`](#api-d29bf78e8e9c49c8) | Method |
| [`op_Equality`](#api-5ff0ef6817a2e95e) | Method |
| [`op_Inequality`](#api-eb685e461137aaa5) | Method |
| [`ToString`](#api-2f276d36b943b0be) | Method |
| [`budgetBytes`](#api-8f17bdfa3d0955e0) | Property |
| [`residentAssetCount`](#api-aa8a00386b146b03) | Property |
| [`residentBytes`](#api-94c25a794f21ec5a) | Property |

## Type declaration

<a id="api-51901cc220016d08"></a>
<!-- api: T:Inno.Assets.AssetResidencyStatistics 64ea2f93ed4e4660612454d769b58da863287ffd3b05421e591b97bb9fc87fe7 -->

```csharp
public readonly record struct Inno.Assets.AssetResidencyStatistics : System.IEquatable<Inno.Assets.AssetResidencyStatistics>
```

Reports current explicit runtime asset residency accounting.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L293).

## `#ctor`

<a id="api-75469d171fb2cc1d"></a>
<!-- api: M:Inno.Assets.AssetResidencyStatistics.#ctor(System.Int32,System.Int64,System.Int64) 9469da029b6f899abeab1900449a4886f1080d8fb3d19c419110600f18e19111 -->

```csharp
public Inno.Assets.AssetResidencyStatistics.AssetResidencyStatistics(int residentAssetCount, long residentBytes, long budgetBytes)
```

Creates one immutable residency snapshot.

**Parameter `residentAssetCount`:** Number of currently materialized canonical assets.

**Parameter `residentBytes`:** Runtime payload bytes retained by materialized assets.

**Parameter `budgetBytes`:** Configured runtime payload budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L307).

## `Equals`

<a id="api-7cd7b57e0e4f8ef0"></a>
<!-- api: M:Inno.Assets.AssetResidencyStatistics.Equals(Inno.Assets.AssetResidencyStatistics) 8e90489caf9bdd774ee2b65eb5f80e1cac8c8eeae373fc60c84041f971b65261 -->

```csharp
public bool Inno.Assets.AssetResidencyStatistics.Equals(Inno.Assets.AssetResidencyStatistics other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L293).

## `Equals`

<a id="api-d08c8f72ff72b0a1"></a>
<!-- api: M:Inno.Assets.AssetResidencyStatistics.Equals(System.Object) 33e1dd3e9b2edea35450fd689e7257f0eb9f70a131ff86a005c8839e0cb8dd48 -->

```csharp
public override bool Inno.Assets.AssetResidencyStatistics.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L293).

## `GetHashCode`

<a id="api-d29bf78e8e9c49c8"></a>
<!-- api: M:Inno.Assets.AssetResidencyStatistics.GetHashCode 2e20e91101f84144e584a83af5d9ec6dc5cefa67b845296e647ab9b8878ed630 -->

```csharp
public override int Inno.Assets.AssetResidencyStatistics.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L293).

## `op_Equality`

<a id="api-5ff0ef6817a2e95e"></a>
<!-- api: M:Inno.Assets.AssetResidencyStatistics.op_Equality(Inno.Assets.AssetResidencyStatistics,Inno.Assets.AssetResidencyStatistics) 6967e00e3cc6f0a30d9a33faea4537198061760c1a92908721f83abb9a31bfa3 -->

```csharp
public static bool Inno.Assets.AssetResidencyStatistics.operator ==(Inno.Assets.AssetResidencyStatistics left, Inno.Assets.AssetResidencyStatistics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L293).

## `op_Inequality`

<a id="api-eb685e461137aaa5"></a>
<!-- api: M:Inno.Assets.AssetResidencyStatistics.op_Inequality(Inno.Assets.AssetResidencyStatistics,Inno.Assets.AssetResidencyStatistics) 02b63cd675fa636474dbbafa353b4c7cc76622b0878e9aa6d92da9673c130cb7 -->

```csharp
public static bool Inno.Assets.AssetResidencyStatistics.operator !=(Inno.Assets.AssetResidencyStatistics left, Inno.Assets.AssetResidencyStatistics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L293).

## `ToString`

<a id="api-2f276d36b943b0be"></a>
<!-- api: M:Inno.Assets.AssetResidencyStatistics.ToString 30c2ccd0c888361dc6b4ced6a846d7c3085ddeb849628f043962a52f13b292c0 -->

```csharp
public override string Inno.Assets.AssetResidencyStatistics.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L293).

## `budgetBytes`

<a id="api-8f17bdfa3d0955e0"></a>
<!-- api: P:Inno.Assets.AssetResidencyStatistics.budgetBytes c3bb303cfa82d7438573fef7b71e07e7ccd24cf94a2554a498394cf0d61122d0 -->

```csharp
public long Inno.Assets.AssetResidencyStatistics.budgetBytes { get; }
```

Gets the configured runtime payload budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L330).

## `residentAssetCount`

<a id="api-aa8a00386b146b03"></a>
<!-- api: P:Inno.Assets.AssetResidencyStatistics.residentAssetCount fc2b38435947cd0ea136df973dade49dd8d19dfc3e51c4878bc8b1bf6f88e26b -->

```csharp
public int Inno.Assets.AssetResidencyStatistics.residentAssetCount { get; }
```

Gets the number of materialized canonical assets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L320).

## `residentBytes`

<a id="api-94c25a794f21ec5a"></a>
<!-- api: P:Inno.Assets.AssetResidencyStatistics.residentBytes 135945cc61227604fe2967bd3f0df0bb3c2327b90bea903e2be8956b791be4e9 -->

```csharp
public long Inno.Assets.AssetResidencyStatistics.residentBytes { get; }
```

Gets retained runtime payload bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L325).
