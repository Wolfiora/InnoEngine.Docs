---
title: "AssetReferenceProtocol"
description: "Reference for AssetReferenceProtocol in Inno.Assets."
uid: api.inno.assets.a1271bd06a423e1e
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetReferenceProtocol`

This reference describes `AssetReferenceProtocol` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`id`](#api-dc085a6e626e57cb) | Property |

## Type declaration

<a id="api-a1271bd06a423e1e"></a>
<!-- api: T:Inno.Assets.AssetReferenceProtocol 4771a672bd541cdc274ae4d4f53a1e5388b8a16dcef62e66391fca144f02dbf5 -->

```csharp
public static class Inno.Assets.AssetReferenceProtocol
```

Defines the open cross-domain protocol used to resolve persistent asset identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/AssetReferenceProtocol.cs#L8).

## `id`

<a id="api-dc085a6e626e57cb"></a>
<!-- api: P:Inno.Assets.AssetReferenceProtocol.id 0ea1fdbc241db0dcf6e23d9d539e85df009a9eaefd0c901efacfc02d9e16f19e -->

```csharp
public static Inno.References.ReferenceKindId Inno.Assets.AssetReferenceProtocol.id { get; }
```

Gets the stable asset reference kind registered in shared reference catalogs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/AssetReferenceProtocol.cs#L13).
