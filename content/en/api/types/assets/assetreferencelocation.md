---
title: "AssetReferenceLocation"
description: "Reference for AssetReferenceLocation in Inno.Assets."
uid: api.inno.assets.18c8a4deceef6c44
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetReferenceLocation`

This reference describes `AssetReferenceLocation` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5eeb54f6d0db4677) | Method |
| [`kind`](#api-074917eaeaa193c8) | Property |
| [`ownerId`](#api-bc396645e145d2b3) | Property |
| [`ownerName`](#api-2107c635d5693f74) | Property |
| [`propertyPath`](#api-6a7ed4270fc49d51) | Property |

## Type declaration

<a id="api-18c8a4deceef6c44"></a>
<!-- api: T:Inno.Assets.AssetReferenceLocation 7e0588b3dbb80aa919fe94451596cb57d66b2a192ef0c464f324ea002c346bf0 -->

```csharp
public sealed class Inno.Assets.AssetReferenceLocation
```

Describes one engine-known reference location for an asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceLocation.cs#L8).

## `#ctor`

<a id="api-5eeb54f6d0db4677"></a>
<!-- api: M:Inno.Assets.AssetReferenceLocation.#ctor(Inno.Assets.AssetReferenceKind,System.Guid,System.String,System.String) cf3a7f7c1929b271407c8daa19a21bd62ee02701a985a7391dd6f5e41fe655fa -->

```csharp
public Inno.Assets.AssetReferenceLocation.AssetReferenceLocation(Inno.Assets.AssetReferenceKind kind, System.Guid ownerId, string ownerName, string propertyPath)
```

Describes a neutral, persistent location without retaining its live owner.

**Parameter `kind`:** The category of reference owner.

**Parameter `ownerId`:** The owner's persistent identity.

**Parameter `ownerName`:** The display name captured for diagnostics.

**Parameter `propertyPath`:** The serialized property or subsystem-relative location.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceLocation.cs#L25).

## `kind`

<a id="api-074917eaeaa193c8"></a>
<!-- api: P:Inno.Assets.AssetReferenceLocation.kind 455424ba56ac5a747af508bb3ee109be3e16d7794df19aae874dd32836b660e1 -->

```csharp
public Inno.Assets.AssetReferenceKind Inno.Assets.AssetReferenceLocation.kind { get; }
```

Gets the category of the known reference.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceLocation.cs#L40).

## `ownerId`

<a id="api-bc396645e145d2b3"></a>
<!-- api: P:Inno.Assets.AssetReferenceLocation.ownerId 39ffd274b37db3b8b47d4ed440f0f4b70ab93650553ab1efd05aec0ab137e931 -->

```csharp
public System.Guid Inno.Assets.AssetReferenceLocation.ownerId { get; }
```

Gets the persistent identity of the known owner, when available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceLocation.cs#L45).

## `ownerName`

<a id="api-2107c635d5693f74"></a>
<!-- api: P:Inno.Assets.AssetReferenceLocation.ownerName 24cc732d40010832b048b28388f7506d914e99791a1d427e57839ada41ce9338 -->

```csharp
public string Inno.Assets.AssetReferenceLocation.ownerName { get; }
```

Gets the display name of the known owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceLocation.cs#L50).

## `propertyPath`

<a id="api-6a7ed4270fc49d51"></a>
<!-- api: P:Inno.Assets.AssetReferenceLocation.propertyPath c5bac3db35e25ae8e492b486c520a7f4711711d8963ced0ac13b5ed83508f241 -->

```csharp
public string Inno.Assets.AssetReferenceLocation.propertyPath { get; }
```

Gets the serialized or subsystem-relative property path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceLocation.cs#L55).
