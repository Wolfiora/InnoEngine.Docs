---
title: "AssetFileEntry"
description: "Reference for AssetFileEntry in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.ce98b0b57fc5c1e6
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# `AssetFileEntry`

This reference describes `AssetFileEntry` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Core.IdentityObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b7ca19e2b1968abc) | Method |
| [`assetPath`](#api-2ae4398001059fd1) | Property |
| [`extension`](#api-0aff4ce46227d8d2) | Property |
| [`isDirectory`](#api-75082dd8804f5b5f) | Property |
| [`isReadOnly`](#api-15eb78096123bc19) | Property |
| [`isSample`](#api-32d1d877f03f2c49) | Property |
| [`isSampleContent`](#api-b18c33bfe05c9627) | Property |
| [`name`](#api-0ab32a285ad30b41) | Property |
| [`nameWithoutExtension`](#api-071e9d134cd3e321) | Property |
| [`parentAssetPath`](#api-0faeca253a786282) | Property |
| [`source`](#api-b1311ad36b6c4f04) | Property |

## Type declaration

<a id="api-ce98b0b57fc5c1e6"></a>
<!-- api: T:InnoEditor.Assets.AssetFileEntry e440ab5951d215f2079cf93d634e871360295aecf1f2fa3795b7c42fa28262d9 -->

```csharp
public sealed class InnoEditor.Assets.AssetFileEntry : InnoEngine.Core.IdentityObject
```

One node in the asset source filesystem index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L11).

## `#ctor`

<a id="api-b7ca19e2b1968abc"></a>
<!-- api: M:InnoEditor.Assets.AssetFileEntry.#ctor 398bdce842dabf1412d712de209aa7bd57db0db7751e3a8df7ff628ace8c767a -->

```csharp
public InnoEditor.Assets.AssetFileEntry.AssetFileEntry()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L11).

## `assetPath`

<a id="api-2ae4398001059fd1"></a>
<!-- api: P:InnoEditor.Assets.AssetFileEntry.assetPath 039c4546a3a8c1e612c56df4ee286bd5ce01d5cb68239aed98cba92b16bf72cf -->

```csharp
public InnoEngine.Assets.AssetPath InnoEditor.Assets.AssetFileEntry.assetPath { get; }
```

Gets the isolated source path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L30).

## `extension`

<a id="api-0aff4ce46227d8d2"></a>
<!-- api: P:InnoEditor.Assets.AssetFileEntry.extension c920e93fbac0661e5f06bbab738d523f29b9d75989974d0b75ff806ea2f4d36e -->

```csharp
public string InnoEditor.Assets.AssetFileEntry.extension { get; }
```

Gets the normalized lower-case file extension.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L64).

## `isDirectory`

<a id="api-75082dd8804f5b5f"></a>
<!-- api: P:InnoEditor.Assets.AssetFileEntry.isDirectory a4e5741e5717fb357ce6a4c0b711efff8c13727f329de016b1b35f4577d10195 -->

```csharp
public bool InnoEditor.Assets.AssetFileEntry.isDirectory { get; }
```

Gets whether the entry represents a directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L60).

## `isReadOnly`

<a id="api-15eb78096123bc19"></a>
<!-- api: P:InnoEditor.Assets.AssetFileEntry.isReadOnly c66aec60386cb66ef61d48804b9b377e4eea7d58f251e5bc48d4477f34fa8199 -->

```csharp
public bool InnoEditor.Assets.AssetFileEntry.isReadOnly { get; }
```

Gets whether source mutations are forbidden.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L40).

## `isSample`

<a id="api-32d1d877f03f2c49"></a>
<!-- api: P:InnoEditor.Assets.AssetFileEntry.isSample a137a091776358d20d37ddb9f933a278e1c488cb37c66c8edffb11bde7746cf1 -->

```csharp
public bool InnoEditor.Assets.AssetFileEntry.isSample { get; }
```

Gets whether this entry is the root of an installed Plugin sample awaiting Project import.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L45).

## `isSampleContent`

<a id="api-b18c33bfe05c9627"></a>
<!-- api: P:InnoEditor.Assets.AssetFileEntry.isSampleContent 7c40792d0b7540557b806ce95f6da1c32e10e0286d09b50ff4d86b4d02cef281 -->

```csharp
public bool InnoEditor.Assets.AssetFileEntry.isSampleContent { get; }
```

Gets whether this entry belongs to an installed Plugin sample subtree awaiting Project import.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L50).

## `name`

<a id="api-0ab32a285ad30b41"></a>
<!-- api: P:InnoEditor.Assets.AssetFileEntry.name a82a2645f9f13c48d9aeaea2eccdf5e3b79fde63ad34585c85f0e5a750d76171 -->

```csharp
public string InnoEditor.Assets.AssetFileEntry.name { get; }
```

Gets the final source path segment, or the semantic mount-root label when this entry is a source root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L16).

## `nameWithoutExtension`

<a id="api-071e9d134cd3e321"></a>
<!-- api: P:InnoEditor.Assets.AssetFileEntry.nameWithoutExtension d01035df25ee7b1eac3e102b2b9d829c40c4db83b731e5ee89ccd38fe66e6dc9 -->

```csharp
public string InnoEditor.Assets.AssetFileEntry.nameWithoutExtension { get; }
```

Gets the final source path segment without its last extension.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L25).

## `parentAssetPath`

<a id="api-0faeca253a786282"></a>
<!-- api: P:InnoEditor.Assets.AssetFileEntry.parentAssetPath 1d2ddc344bbfec5852d27329e383e86a5b912011a6f6c19e2cbc238ed9a10f28 -->

```csharp
public InnoEngine.Assets.AssetPath InnoEditor.Assets.AssetFileEntry.parentAssetPath { get; }
```

Gets the isolated parent directory path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L55).

## `source`

<a id="api-b1311ad36b6c4f04"></a>
<!-- api: P:InnoEditor.Assets.AssetFileEntry.source d1e27eba209d0b9695a9c5b0c8696f8d45c4be114934216803551aaa70064e11 -->

```csharp
public InnoEngine.Assets.AssetSourceId InnoEditor.Assets.AssetFileEntry.source { get; }
```

Gets the owning source mount identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L35).
