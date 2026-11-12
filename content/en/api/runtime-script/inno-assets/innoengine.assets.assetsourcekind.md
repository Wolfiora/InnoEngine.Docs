---
title: "AssetSourceKind"
description: "Reference for AssetSourceKind in Inno.Assets."
uid: api.inno.assets.runtime-script.e98aadb965069de1
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetSourceKind`

This reference describes `AssetSourceKind` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Directory`](#api-77c40b8147481603) | Field |
| [`File`](#api-db175f04bcf712bf) | Field |

## Type declaration

<a id="api-e98aadb965069de1"></a>
<!-- api: T:InnoEngine.Assets.AssetSourceKind 9d7e43876b12e7cd5be6a152414162eaec6d2a606601435498ff8cdb7b41c044 -->

```csharp
public enum InnoEngine.Assets.AssetSourceKind : int
```

Identifies the durable source role recorded by an asset metadata sidecar.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetSourceKind.cs#L6).

## `Directory`

<a id="api-77c40b8147481603"></a>
<!-- api: F:InnoEngine.Assets.AssetSourceKind.Directory c1681d68e4bb6d2a875401e65ddf826c22f11c9a153037f8819812eb0b550599 -->

```csharp
InnoEngine.Assets.AssetSourceKind.Directory = 1
```

A source directory with persistent identity but no runtime artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetSourceKind.cs#L16).

## `File`

<a id="api-db175f04bcf712bf"></a>
<!-- api: F:InnoEngine.Assets.AssetSourceKind.File 440bf1c82e42da4d682b94e10378a6b7eddb4aa1770c152f655346ec268a4822 -->

```csharp
InnoEngine.Assets.AssetSourceKind.File = 0
```

A regular imported source file.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetSourceKind.cs#L11).
