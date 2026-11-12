---
title: "AssetResidencyStatistics"
description: "Reference for AssetResidencyStatistics in Inno.Assets."
uid: api.inno.assets.runtime-script.ffba4c5e968aeaf1
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetResidencyStatistics`

This reference describes `AssetResidencyStatistics` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Assets.AssetResidencyStatistics>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-431648aa41077e10) | Method |
| [`Equals`](#api-9356c1463bde053d) | Method |
| [`Equals`](#api-da8353c9b825efd3) | Method |
| [`GetHashCode`](#api-f429f9bda4d42161) | Method |
| [`op_Equality`](#api-492bd66172791b65) | Method |
| [`op_Inequality`](#api-c17ba4280b1486a0) | Method |
| [`ToString`](#api-d8046837e4ea72e0) | Method |
| [`budgetBytes`](#api-9124e3890cfeb93c) | Property |
| [`residentAssetCount`](#api-35234a0ce314405c) | Property |
| [`residentBytes`](#api-d2bbaeb39f93e206) | Property |

## Type declaration

<a id="api-ffba4c5e968aeaf1"></a>
<!-- api: T:InnoEngine.Assets.AssetResidencyStatistics 37095fd43eea8a3d0d61b8af9282f7e5d407ca82a1bb555fc3a58d7f5aeef47b -->

```csharp
public readonly struct InnoEngine.Assets.AssetResidencyStatistics : System.IEquatable<InnoEngine.Assets.AssetResidencyStatistics>
```

Reports current explicit runtime asset residency accounting.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L293).

## `#ctor`

<a id="api-431648aa41077e10"></a>
<!-- api: M:InnoEngine.Assets.AssetResidencyStatistics.#ctor(System.Int32,System.Int64,System.Int64) a6e14faec7fc501a7fcbc59f15638e4fbeed5e248d4d8fbb582c3149c267457f -->

```csharp
public InnoEngine.Assets.AssetResidencyStatistics.AssetResidencyStatistics(int residentAssetCount, long residentBytes, long budgetBytes)
```

Creates one immutable residency snapshot.

**Parameter `residentAssetCount`:** Number of currently materialized canonical assets.

**Parameter `residentBytes`:** Runtime payload bytes retained by materialized assets.

**Parameter `budgetBytes`:** Configured runtime payload budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L307).

## `Equals`

<a id="api-9356c1463bde053d"></a>
<!-- api: M:InnoEngine.Assets.AssetResidencyStatistics.Equals(InnoEngine.Assets.AssetResidencyStatistics) e87c82618233874fa150fe47fd7523d45994ffd00b531b5ac7b3ba1a1202e972 -->

```csharp
public bool InnoEngine.Assets.AssetResidencyStatistics.Equals(InnoEngine.Assets.AssetResidencyStatistics other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L293).

## `Equals`

<a id="api-da8353c9b825efd3"></a>
<!-- api: M:InnoEngine.Assets.AssetResidencyStatistics.Equals(System.Object) f661d0601d89e42f45521662458aba61ebfab8d231b824c8c2935c6eafc11dd0 -->

```csharp
public override bool InnoEngine.Assets.AssetResidencyStatistics.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L293).

## `GetHashCode`

<a id="api-f429f9bda4d42161"></a>
<!-- api: M:InnoEngine.Assets.AssetResidencyStatistics.GetHashCode 9e8b5dcf52100aa4c8aa54a8265d50bf4069908bba7d69f9c53f12c4f25ff710 -->

```csharp
public override int InnoEngine.Assets.AssetResidencyStatistics.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L293).

## `op_Equality`

<a id="api-492bd66172791b65"></a>
<!-- api: M:InnoEngine.Assets.AssetResidencyStatistics.op_Equality(InnoEngine.Assets.AssetResidencyStatistics,InnoEngine.Assets.AssetResidencyStatistics) af8bac39bf0ac59c50591b31e182196588c368ada93e4799b2bbe417949c2b86 -->

```csharp
public static bool InnoEngine.Assets.AssetResidencyStatistics.operator ==(InnoEngine.Assets.AssetResidencyStatistics left, InnoEngine.Assets.AssetResidencyStatistics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L293).

## `op_Inequality`

<a id="api-c17ba4280b1486a0"></a>
<!-- api: M:InnoEngine.Assets.AssetResidencyStatistics.op_Inequality(InnoEngine.Assets.AssetResidencyStatistics,InnoEngine.Assets.AssetResidencyStatistics) 6dc697226f80898d5d780d45c99f29d02eb80911019ff0480d38f3dbb7feaedf -->

```csharp
public static bool InnoEngine.Assets.AssetResidencyStatistics.operator !=(InnoEngine.Assets.AssetResidencyStatistics left, InnoEngine.Assets.AssetResidencyStatistics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L293).

## `ToString`

<a id="api-d8046837e4ea72e0"></a>
<!-- api: M:InnoEngine.Assets.AssetResidencyStatistics.ToString c75cca607ba4c9a27b4cb51eb66b515acdf91242df9a9bf6a2d87d56e5187bea -->

```csharp
public override string InnoEngine.Assets.AssetResidencyStatistics.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L293).

## `budgetBytes`

<a id="api-9124e3890cfeb93c"></a>
<!-- api: P:InnoEngine.Assets.AssetResidencyStatistics.budgetBytes 0dc29da0b2052dc54d5974bd82201bb97492fe61b97bef01e43561491e7ba76f -->

```csharp
public long InnoEngine.Assets.AssetResidencyStatistics.budgetBytes { get; }
```

Gets the configured runtime payload budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L330).

## `residentAssetCount`

<a id="api-35234a0ce314405c"></a>
<!-- api: P:InnoEngine.Assets.AssetResidencyStatistics.residentAssetCount 4e294e508dae32ec9e620efd0c845290301917c4738b0878febe89df71154d1c -->

```csharp
public int InnoEngine.Assets.AssetResidencyStatistics.residentAssetCount { get; }
```

Gets the number of materialized canonical assets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L320).

## `residentBytes`

<a id="api-d2bbaeb39f93e206"></a>
<!-- api: P:InnoEngine.Assets.AssetResidencyStatistics.residentBytes bbdd9ff01841c944fcb9ea4fc0288276c222a44d248ee95b5e6a8a16a6561217 -->

```csharp
public long InnoEngine.Assets.AssetResidencyStatistics.residentBytes { get; }
```

Gets retained runtime payload bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L325).
