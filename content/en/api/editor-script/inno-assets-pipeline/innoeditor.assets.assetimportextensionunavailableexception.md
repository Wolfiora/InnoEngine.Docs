---
title: "AssetImportExtensionUnavailableException"
description: "Reference for AssetImportExtensionUnavailableException in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.18181796887c9f40
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# `AssetImportExtensionUnavailableException`

This reference describes `AssetImportExtensionUnavailableException` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.InvalidOperationException`.

**Direct interfaces:** `System.Runtime.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4e9c5572e5eb7ef2) | Method |
| [`extensionId`](#api-5b379f95eedc6e4b) | Property |
| [`extensionKind`](#api-6df24267eaa4a84f) | Property |

## Type declaration

<a id="api-18181796887c9f40"></a>
<!-- api: T:InnoEditor.Assets.AssetImportExtensionUnavailableException 30b8d4bc90fc32ac8c9d185374e1a53625e25991008fb9ef1e5d93567164e37a -->

```csharp
public sealed class InnoEditor.Assets.AssetImportExtensionUnavailableException : System.InvalidOperationException, System.Runtime.Serialization.ISerializable
```

Reports a required authoring extension absent from the current generation.

**Constraints:** The host may defer this condition during discovery; it remains an import failure once discovery is complete.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportExtensionUnavailableException.cs#L11).

## `#ctor`

<a id="api-4e9c5572e5eb7ef2"></a>
<!-- api: M:InnoEditor.Assets.AssetImportExtensionUnavailableException.#ctor(System.String,System.String) fad1cf04a728c0f1de3557c09ab7f03b697b9732b72f57a62c6c8fd9718cb4ef -->

```csharp
public InnoEditor.Assets.AssetImportExtensionUnavailableException.AssetImportExtensionUnavailableException(string extensionKind, string extensionId)
```

Describes a missing extension using generation-neutral identities.

**Parameter `extensionKind`:** The stable extension protocol identity.

**Parameter `extensionId`:** The required implementation's stable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportExtensionUnavailableException.cs#L22).

## `extensionId`

<a id="api-5b379f95eedc6e4b"></a>
<!-- api: P:InnoEditor.Assets.AssetImportExtensionUnavailableException.extensionId f0d8702c9a38a54d2a6a302503e9eb6b6047974c5d70119127b5a1e0d4c5db92 -->

```csharp
public string InnoEditor.Assets.AssetImportExtensionUnavailableException.extensionId { get; }
```

Gets the required implementation's stable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportExtensionUnavailableException.cs#L42).

## `extensionKind`

<a id="api-6df24267eaa4a84f"></a>
<!-- api: P:InnoEditor.Assets.AssetImportExtensionUnavailableException.extensionKind 3103f9e48218816a168722b3fa38c4c19c74bbb69da05a820c735b6c252cb2d7 -->

```csharp
public string InnoEditor.Assets.AssetImportExtensionUnavailableException.extensionKind { get; }
```

Gets the stable extension protocol identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportExtensionUnavailableException.cs#L37).
