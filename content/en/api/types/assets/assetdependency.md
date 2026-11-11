---
title: "AssetDependency"
description: "Reference for AssetDependency in Inno.Assets."
uid: api.inno.assets.53b4a6a7aaa45fd7
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetDependency`

This reference describes `AssetDependency` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Assets.AssetDependency>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-841449d8a9bad8de) | Method |
| [`Equals`](#api-b658d2b0c9983238) | Method |
| [`Equals`](#api-40cdef2d883d6f0b) | Method |
| [`GetHashCode`](#api-d3b702ec3449accb) | Method |
| [`op_Equality`](#api-7cd53397435dd163) | Method |
| [`op_Inequality`](#api-ec26e7d0e38b7b5f) | Method |
| [`lastKnownPath`](#api-daa71cd2edafaf0b) | Property |
| [`persistentId`](#api-3399a41e7f08be3c) | Property |
| [`type`](#api-902b56681f73eccd) | Property |

## Type declaration

<a id="api-53b4a6a7aaa45fd7"></a>
<!-- api: T:Inno.Assets.AssetDependency 3cef3c15af060bee7a7cd5af8d6cc0d4f50a8dc12361e2b47b4606c620d57fc9 -->

```csharp
public readonly struct Inno.Assets.AssetDependency : System.IEquatable<Inno.Assets.AssetDependency>
```

Describes a persistent direct dependency on another asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetDependency.cs#L11).

## `#ctor`

<a id="api-841449d8a9bad8de"></a>
<!-- api: M:Inno.Assets.AssetDependency.#ctor(System.Guid,Inno.Extensibility.Types.TypeRef,System.String) bbd8fd0d6d4bae67e03b860b663a40e29bf35c119a4b1bcf391c3bb8ddee9512 -->

```csharp
public Inno.Assets.AssetDependency.AssetDependency(System.Guid persistentId, Inno.Extensibility.Types.TypeRef type, string lastKnownPath)
```

Creates an asset dependency descriptor.

**Parameter `persistentId`:** The persistent identity of the referenced asset.

**Parameter `type`:** The reload-safe identity of the expected asset type.

**Parameter `lastKnownPath`:** The last known source-relative path.

**Throws `System.ArgumentException`:** Thrown when `persistentId` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetDependency.cs#L29).

## `Equals`

<a id="api-b658d2b0c9983238"></a>
<!-- api: M:Inno.Assets.AssetDependency.Equals(Inno.Assets.AssetDependency) 25444972d699e1b857cc93a4a003d4a24b0b917a4edd7381e787877870f527ab -->

```csharp
public bool Inno.Assets.AssetDependency.Equals(Inno.Assets.AssetDependency other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetDependency.cs#L66).

## `Equals`

<a id="api-40cdef2d883d6f0b"></a>
<!-- api: M:Inno.Assets.AssetDependency.Equals(System.Object) 86f150ce7f74e1312f6fe89b05afb8e51f1339a3885001da36e0cfeeb263cf65 -->

```csharp
public override bool Inno.Assets.AssetDependency.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetDependency.cs#L77).

## `GetHashCode`

<a id="api-d3b702ec3449accb"></a>
<!-- api: M:Inno.Assets.AssetDependency.GetHashCode 290b977ec4ed2b8ba0efe49f8a026c897ed7acc3d3df83e3e7bb93248bf9feeb -->

```csharp
public override int Inno.Assets.AssetDependency.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetDependency.cs#L85).

## `op_Equality`

<a id="api-7cd53397435dd163"></a>
<!-- api: M:Inno.Assets.AssetDependency.op_Equality(Inno.Assets.AssetDependency,Inno.Assets.AssetDependency) 0674db8cee09c2725646a397731e780b55baf73df5ad378f35097aa47eb56410 -->

```csharp
public static bool Inno.Assets.AssetDependency.operator ==(Inno.Assets.AssetDependency left, Inno.Assets.AssetDependency right)
```

Determines whether two descriptors refer to the same persistent asset.

**Parameter `left`:** The first dependency descriptor to compare.

**Parameter `right`:** The second dependency descriptor to compare.

**Returns:** `true` when both descriptors reference the same persistent asset; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetDependency.cs#L99).

## `op_Inequality`

<a id="api-ec26e7d0e38b7b5f"></a>
<!-- api: M:Inno.Assets.AssetDependency.op_Inequality(Inno.Assets.AssetDependency,Inno.Assets.AssetDependency) 1e2a31567b66ea8a1bd76632e7265173a532211ab22cf3d185526a7b58ab93ef -->

```csharp
public static bool Inno.Assets.AssetDependency.operator !=(Inno.Assets.AssetDependency left, Inno.Assets.AssetDependency right)
```

Determines whether two descriptors refer to different persistent assets.

**Parameter `left`:** The first dependency descriptor to compare.

**Parameter `right`:** The second dependency descriptor to compare.

**Returns:** `true` when the descriptors reference different persistent assets; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetDependency.cs#L116).

## `lastKnownPath`

<a id="api-daa71cd2edafaf0b"></a>
<!-- api: P:Inno.Assets.AssetDependency.lastKnownPath 3378541a7c082e017b5ad1f7962a83ad777cfba901c3082ab2c9aaa30618cc7f -->

```csharp
public string Inno.Assets.AssetDependency.lastKnownPath { get; }
```

Gets the last known source-relative path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetDependency.cs#L55).

## `persistentId`

<a id="api-3399a41e7f08be3c"></a>
<!-- api: P:Inno.Assets.AssetDependency.persistentId 8dbb5ea684434ee52457f20b4601ad20d58062f6c02ea48cc1b9f64f64301183 -->

```csharp
public System.Guid Inno.Assets.AssetDependency.persistentId { get; }
```

Gets the persistent identity of the referenced asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetDependency.cs#L44).

## `type`

<a id="api-902b56681f73eccd"></a>
<!-- api: P:Inno.Assets.AssetDependency.type ef9daf424ac75ad69a3879de72574b3118e30e35c82da27f67c0802237d1f0e2 -->

```csharp
public Inno.Extensibility.Types.TypeRef Inno.Assets.AssetDependency.type { get; }
```

Gets the reload-safe identity of the expected asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetDependency.cs#L50).
