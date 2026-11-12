---
title: "AssetImportStatus"
description: "Reference for AssetImportStatus in Inno.Assets."
uid: api.inno.assets.runtime-script.9f00d3b4ca83ab19
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetImportStatus`

This reference describes `AssetImportStatus` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Conflict`](#api-7cf0c669f4936b4c) | Field |
| [`Failed`](#api-1211d8ad25404b6f) | Field |
| [`Imported`](#api-876f32255a0d6a00) | Field |
| [`Missing`](#api-b92e616223ce4cab) | Field |
| [`Pending`](#api-d4b89207de714521) | Field |
| [`Unsupported`](#api-7172ece5bfbe1601) | Field |

## Type declaration

<a id="api-9f00d3b4ca83ab19"></a>
<!-- api: T:InnoEngine.Assets.AssetImportStatus 9ef4725d65c1102a16946f6929b321d40b3ab187b08a344350f7ebab07c3581b -->

```csharp
public enum InnoEngine.Assets.AssetImportStatus : int
```

Identifies the current source and import state of an asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetImportStatus.cs#L6).

## `Conflict`

<a id="api-7cf0c669f4936b4c"></a>
<!-- api: F:InnoEngine.Assets.AssetImportStatus.Conflict 8943f94a9d168d77e7ff79e2f7a79927707be8914e0eb4fe486dc60eefafa239 -->

```csharp
InnoEngine.Assets.AssetImportStatus.Conflict = 5
```

The source cannot be reconciled without resolving an identity conflict.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetImportStatus.cs#L36).

## `Failed`

<a id="api-1211d8ad25404b6f"></a>
<!-- api: F:InnoEngine.Assets.AssetImportStatus.Failed ca6a659315e4584a2b8073874913815014151c5ebaeccc7ff7a976dc15785f9b -->

```csharp
InnoEngine.Assets.AssetImportStatus.Failed = 3
```

The latest import failed and diagnostics are available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetImportStatus.cs#L26).

## `Imported`

<a id="api-876f32255a0d6a00"></a>
<!-- api: F:InnoEngine.Assets.AssetImportStatus.Imported f6264b88db9ff608306ba22a537fc900843df6572823a77239db51ead863bdbb -->

```csharp
InnoEngine.Assets.AssetImportStatus.Imported = 2
```

A valid artifact is committed for the source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetImportStatus.cs#L21).

## `Missing`

<a id="api-b92e616223ce4cab"></a>
<!-- api: F:InnoEngine.Assets.AssetImportStatus.Missing 61d61b05dc88f4350ca480db191585284257e455c3da6509108d3e8f0855d56a -->

```csharp
InnoEngine.Assets.AssetImportStatus.Missing = 4
```

The source is unavailable while its persistent identity is retained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetImportStatus.cs#L31).

## `Pending`

<a id="api-d4b89207de714521"></a>
<!-- api: F:InnoEngine.Assets.AssetImportStatus.Pending 33d817f6db764c61b8120ed0ae417a6de9b91701f4e26a1bb0c6db3a6ccc976f -->

```csharp
InnoEngine.Assets.AssetImportStatus.Pending = 1
```

The source is waiting for import or commit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetImportStatus.cs#L16).

## `Unsupported`

<a id="api-7172ece5bfbe1601"></a>
<!-- api: F:InnoEngine.Assets.AssetImportStatus.Unsupported aa492c1ccc88b10cea8ecccd7bb6ee66cc570b763f25a2f6820bf6093bb3221b -->

```csharp
InnoEngine.Assets.AssetImportStatus.Unsupported = 0
```

No importer currently accepts the source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetImportStatus.cs#L11).
