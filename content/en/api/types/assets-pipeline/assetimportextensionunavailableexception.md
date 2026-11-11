---
title: "AssetImportExtensionUnavailableException"
description: "Reference for AssetImportExtensionUnavailableException in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.17d56805c35615d0
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetImportExtensionUnavailableException`

This reference describes `AssetImportExtensionUnavailableException` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.InvalidOperationException`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8021952e180003a9) | Method |
| [`extensionId`](#api-27a4fadff0757de1) | Property |
| [`extensionKind`](#api-40498766e2a1ccad) | Property |

## Type declaration

<a id="api-17d56805c35615d0"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetImportExtensionUnavailableException ce2ae1a9e5121abf0fe9db037c10cff39a28c23a28ae7b73e82f96a2a1f1b46b -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetImportExtensionUnavailableException : System.InvalidOperationException
```

Reports a required authoring extension absent from the current generation.

**Constraints:** The host may defer this condition during discovery; it remains an import failure once discovery is complete.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportExtensionUnavailableException.cs#L11).

## `#ctor`

<a id="api-8021952e180003a9"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportExtensionUnavailableException.#ctor(System.String,System.String) de0616d5032742ae9d948edcf3ed901ced91b27ac46d83163d58098e09add372 -->

```csharp
public Inno.Assets.Pipeline.AssetImportExtensionUnavailableException.AssetImportExtensionUnavailableException(string extensionKind, string extensionId)
```

Describes a missing extension using generation-neutral identities.

**Parameter `extensionKind`:** The stable extension protocol identity.

**Parameter `extensionId`:** The required implementation's stable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportExtensionUnavailableException.cs#L22).

## `extensionId`

<a id="api-27a4fadff0757de1"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportExtensionUnavailableException.extensionId 45059ccdf74d843dd5d63d545573d3c9945ebbc3a47261009df62652abdd59ce -->

```csharp
public string Inno.Assets.Pipeline.AssetImportExtensionUnavailableException.extensionId { get; }
```

Gets the required implementation's stable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportExtensionUnavailableException.cs#L42).

## `extensionKind`

<a id="api-40498766e2a1ccad"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportExtensionUnavailableException.extensionKind 15aaa0ecba6da826fa78cffe6723e226b21bb1aa1344855bb6f08ff9afae690f -->

```csharp
public string Inno.Assets.Pipeline.AssetImportExtensionUnavailableException.extensionKind { get; }
```

Gets the stable extension protocol identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportExtensionUnavailableException.cs#L37).
