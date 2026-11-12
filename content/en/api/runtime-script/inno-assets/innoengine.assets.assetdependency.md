---
title: "AssetDependency"
description: "Reference for AssetDependency in Inno.Assets."
uid: api.inno.assets.runtime-script.4184612b9ecf9bf3
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetDependency`

This reference describes `AssetDependency` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Assets.AssetDependency>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-7f4d35c36bf736ce) | Method |
| [`Equals`](#api-90d175803ce4efaf) | Method |
| [`GetHashCode`](#api-40bb35f7cbd98599) | Method |
| [`op_Equality`](#api-18e6eb12c45d22b7) | Method |
| [`op_Inequality`](#api-b647fa5c92ccca63) | Method |
| [`lastKnownPath`](#api-319ed030f3c48bac) | Property |
| [`persistentId`](#api-bd3d4a3e49046412) | Property |

## Type declaration

<a id="api-4184612b9ecf9bf3"></a>
<!-- api: T:InnoEngine.Assets.AssetDependency 9e9167d655ae1fcdf4528ceed541d8516da403d1df66909ca15a158787ac152a -->

```csharp
public readonly struct InnoEngine.Assets.AssetDependency : System.IEquatable<InnoEngine.Assets.AssetDependency>
```

Describes a persistent direct dependency on another asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetDependency.cs#L11).

## `Equals`

<a id="api-7f4d35c36bf736ce"></a>
<!-- api: M:InnoEngine.Assets.AssetDependency.Equals(InnoEngine.Assets.AssetDependency) 191aea7c8698a0071c75a240bc0f46b1e79c836d921f61a7e48f153d6299d003 -->

```csharp
public bool InnoEngine.Assets.AssetDependency.Equals(InnoEngine.Assets.AssetDependency other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetDependency.cs#L66).

## `Equals`

<a id="api-90d175803ce4efaf"></a>
<!-- api: M:InnoEngine.Assets.AssetDependency.Equals(System.Object) 89768c17a9647ae55fce509ff8451a6b2d19fce53f6209524feb0470f971b1a8 -->

```csharp
public override bool InnoEngine.Assets.AssetDependency.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetDependency.cs#L77).

## `GetHashCode`

<a id="api-40bb35f7cbd98599"></a>
<!-- api: M:InnoEngine.Assets.AssetDependency.GetHashCode a45a531c0a06e330308827471a96688d6416b296a34444b1f3a7bf5470f1ba9f -->

```csharp
public override int InnoEngine.Assets.AssetDependency.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetDependency.cs#L85).

## `op_Equality`

<a id="api-18e6eb12c45d22b7"></a>
<!-- api: M:InnoEngine.Assets.AssetDependency.op_Equality(InnoEngine.Assets.AssetDependency,InnoEngine.Assets.AssetDependency) 738d7c4a3e8850ebbd402b855d6f4ab9d458972a6a9b25bbfc94fa3fa0aa6464 -->

```csharp
public static bool InnoEngine.Assets.AssetDependency.operator ==(InnoEngine.Assets.AssetDependency left, InnoEngine.Assets.AssetDependency right)
```

Determines whether two descriptors refer to the same persistent asset.

**Parameter `left`:** The first dependency descriptor to compare.

**Parameter `right`:** The second dependency descriptor to compare.

**Returns:** `true` when both descriptors reference the same persistent asset; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetDependency.cs#L99).

## `op_Inequality`

<a id="api-b647fa5c92ccca63"></a>
<!-- api: M:InnoEngine.Assets.AssetDependency.op_Inequality(InnoEngine.Assets.AssetDependency,InnoEngine.Assets.AssetDependency) 894f448bff092315a8e2219d64754274788bf339b41255c63e09a87db75447c4 -->

```csharp
public static bool InnoEngine.Assets.AssetDependency.operator !=(InnoEngine.Assets.AssetDependency left, InnoEngine.Assets.AssetDependency right)
```

Determines whether two descriptors refer to different persistent assets.

**Parameter `left`:** The first dependency descriptor to compare.

**Parameter `right`:** The second dependency descriptor to compare.

**Returns:** `true` when the descriptors reference different persistent assets; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetDependency.cs#L116).

## `lastKnownPath`

<a id="api-319ed030f3c48bac"></a>
<!-- api: P:InnoEngine.Assets.AssetDependency.lastKnownPath c29fe1782420352363809875c191140fbff2bb16d81ca4293b9174ee0609f29f -->

```csharp
public string InnoEngine.Assets.AssetDependency.lastKnownPath { get; }
```

Gets the last known source-relative path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetDependency.cs#L55).

## `persistentId`

<a id="api-bd3d4a3e49046412"></a>
<!-- api: P:InnoEngine.Assets.AssetDependency.persistentId f4f3d8dbfcd6dff57178fb37763b619662ddec4c9e576de10941f178e413f6c8 -->

```csharp
public System.Guid InnoEngine.Assets.AssetDependency.persistentId { get; }
```

Gets the persistent identity of the referenced asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetDependency.cs#L44).
