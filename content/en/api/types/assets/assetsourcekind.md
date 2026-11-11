---
title: "AssetSourceKind"
description: "Reference for AssetSourceKind in Inno.Assets."
uid: api.inno.assets.7d8b07fce6230a93
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetSourceKind`

This reference describes `AssetSourceKind` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Directory`](#api-397cf675a7f2196f) | Field |
| [`File`](#api-233240842d0066f6) | Field |

## Type declaration

<a id="api-7d8b07fce6230a93"></a>
<!-- api: T:Inno.Assets.AssetSourceKind 013d7750e6e9296baeca5f995638483e333be505170c0390e6a07a9e48ebd449 -->

```csharp
public enum Inno.Assets.AssetSourceKind : int
```

Identifies the durable source role recorded by an asset metadata sidecar.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetSourceKind.cs#L6).

## `Directory`

<a id="api-397cf675a7f2196f"></a>
<!-- api: F:Inno.Assets.AssetSourceKind.Directory d230c418b536f412bfadbb75510096b5c8c5d7bf3828bf180c22297d514458f6 -->

```csharp
Inno.Assets.AssetSourceKind.Directory = 1
```

A source directory with persistent identity but no runtime artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetSourceKind.cs#L16).

## `File`

<a id="api-233240842d0066f6"></a>
<!-- api: F:Inno.Assets.AssetSourceKind.File 1ac3a811d6356cd97c42dbe7ab97b6a6db8afdd81c27123ae70ec62424fa0a32 -->

```csharp
Inno.Assets.AssetSourceKind.File = 0
```

A regular imported source file.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetSourceKind.cs#L11).
