---
title: "AssetPropertySnapshot"
description: "Reference for AssetPropertySnapshot in Inno.Assets."
uid: api.inno.assets.runtime-script.5129ec365a4afb48
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetPropertySnapshot`

This reference describes `AssetPropertySnapshot` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7b2f9a75ce87373a) | Method |
| [`data`](#api-0e7f6ec7c4cc9602) | Property |
| [`dependencies`](#api-5c33b3efffccde03) | Property |
| [`stableTypeId`](#api-0f0ae730d8ba2019) | Property |

## Type declaration

<a id="api-5129ec365a4afb48"></a>
<!-- api: T:InnoEngine.Assets.AssetPropertySnapshot 714759ff4571c5523944c2283ee9cd66f894f8d282a64dc3f17894e93c5156f9 -->

```csharp
public sealed class InnoEngine.Assets.AssetPropertySnapshot
```

Contains native properties and automatically captured asset dependencies without retaining their owner or typed object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Serialization/AssetPropertySnapshot.cs#L10).

## `#ctor`

<a id="api-7b2f9a75ce87373a"></a>
<!-- api: M:InnoEngine.Assets.AssetPropertySnapshot.#ctor(System.Guid,System.ReadOnlySpan{System.Byte},System.Collections.Generic.IEnumerable{InnoEngine.Assets.AssetDependency}) 70cee7dba38fccf1afd6e88c25aca5b4bdf5a0f4aea9460e2d80912f1349d607 -->

```csharp
public InnoEngine.Assets.AssetPropertySnapshot.AssetPropertySnapshot(System.Guid stableTypeId, System.ReadOnlySpan<byte> data, System.Collections.Generic.IEnumerable<InnoEngine.Assets.AssetDependency> dependencies)
```

Freezes a complete owner-produced property value.

**Parameter `stableTypeId`:** Persistent identity of the exact serialized settings type.

**Parameter `data`:** Native property payload, copied before returning.

**Parameter `dependencies`:** Direct dependencies collected during the same serialization operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Serialization/AssetPropertySnapshot.cs#L25).

## `data`

<a id="api-0e7f6ec7c4cc9602"></a>
<!-- api: P:InnoEngine.Assets.AssetPropertySnapshot.data 82fd33186857be468147a1e9c21c7d45a08b555f4aa6821d9c52ee8a5e8dbf86 -->

```csharp
public System.ReadOnlyMemory<byte> InnoEngine.Assets.AssetPropertySnapshot.data { get; }
```

Gets the frozen native property bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Serialization/AssetPropertySnapshot.cs#L44).

## `dependencies`

<a id="api-5c33b3efffccde03"></a>
<!-- api: P:InnoEngine.Assets.AssetPropertySnapshot.dependencies 162d13a8e3b7f1d1612df6a0223a7b4a801794371402679509041bd32b4e1ca4 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Assets.AssetDependency> InnoEngine.Assets.AssetPropertySnapshot.dependencies { get; }
```

Gets the frozen direct dependency declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Serialization/AssetPropertySnapshot.cs#L48).

## `stableTypeId`

<a id="api-0f0ae730d8ba2019"></a>
<!-- api: P:InnoEngine.Assets.AssetPropertySnapshot.stableTypeId d0b1f4f9f934c271d3a2d16ed223b0255457acf04f8f3de6eb94559920126901 -->

```csharp
public System.Guid InnoEngine.Assets.AssetPropertySnapshot.stableTypeId { get; }
```

Gets the persistent settings type identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Serialization/AssetPropertySnapshot.cs#L40).
