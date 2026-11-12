---
title: "AssetReferenceLocation"
description: "Reference for AssetReferenceLocation in Inno.Assets."
uid: api.inno.assets.runtime-script.43a86f012149f876
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetReferenceLocation`

This reference describes `AssetReferenceLocation` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dc13878aae4bfc25) | Method |
| [`kind`](#api-494ed36b8aeb28d9) | Property |
| [`ownerId`](#api-50026934e9a8dab6) | Property |
| [`ownerName`](#api-82d85dd37fac259c) | Property |
| [`propertyPath`](#api-4ba9aaf8953bde3d) | Property |

## Type declaration

<a id="api-43a86f012149f876"></a>
<!-- api: T:InnoEngine.Assets.AssetReferenceLocation 29d788f7a6a180b27a79879b822cd33b70e52a412fb3c2b297ef6f943d26e3ea -->

```csharp
public sealed class InnoEngine.Assets.AssetReferenceLocation
```

Describes one engine-known reference location for an asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceLocation.cs#L8).

## `#ctor`

<a id="api-dc13878aae4bfc25"></a>
<!-- api: M:InnoEngine.Assets.AssetReferenceLocation.#ctor(InnoEngine.Assets.AssetReferenceKind,System.Guid,System.String,System.String) 69fb286f96761ac983e354cb7ba389217582c8c5f278f0a7b3acd79546f5fffa -->

```csharp
public InnoEngine.Assets.AssetReferenceLocation.AssetReferenceLocation(InnoEngine.Assets.AssetReferenceKind kind, System.Guid ownerId, string ownerName, string propertyPath)
```

Describes a neutral, persistent location without retaining its live owner.

**Parameter `kind`:** The category of reference owner.

**Parameter `ownerId`:** The owner's persistent identity.

**Parameter `ownerName`:** The display name captured for diagnostics.

**Parameter `propertyPath`:** The serialized property or subsystem-relative location.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceLocation.cs#L25).

## `kind`

<a id="api-494ed36b8aeb28d9"></a>
<!-- api: P:InnoEngine.Assets.AssetReferenceLocation.kind ddd8ca4ea687ba63adb827ed1f733a379c876b9f4b5f694bfdcf023052d5f705 -->

```csharp
public InnoEngine.Assets.AssetReferenceKind InnoEngine.Assets.AssetReferenceLocation.kind { get; }
```

Gets the category of the known reference.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceLocation.cs#L40).

## `ownerId`

<a id="api-50026934e9a8dab6"></a>
<!-- api: P:InnoEngine.Assets.AssetReferenceLocation.ownerId df246115c0c3eb860d207de0c498ad8d6ceaa4b504d0c81907ff616015faf6d7 -->

```csharp
public System.Guid InnoEngine.Assets.AssetReferenceLocation.ownerId { get; }
```

Gets the persistent identity of the known owner, when available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceLocation.cs#L45).

## `ownerName`

<a id="api-82d85dd37fac259c"></a>
<!-- api: P:InnoEngine.Assets.AssetReferenceLocation.ownerName 04ec18ca145e70890d7127f551ff17453a604eee695b48222b355135961cc615 -->

```csharp
public string InnoEngine.Assets.AssetReferenceLocation.ownerName { get; }
```

Gets the display name of the known owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceLocation.cs#L50).

## `propertyPath`

<a id="api-4ba9aaf8953bde3d"></a>
<!-- api: P:InnoEngine.Assets.AssetReferenceLocation.propertyPath 4bdbb4bfce07a5eab4a069fe442b64fabfdc0da1157b47b19269e7b3390de06a -->

```csharp
public string InnoEngine.Assets.AssetReferenceLocation.propertyPath { get; }
```

Gets the serialized or subsystem-relative property path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceLocation.cs#L55).
