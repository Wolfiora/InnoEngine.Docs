---
title: "TextAsset"
description: "Reference for TextAsset in Inno.Assets."
uid: api.inno.assets.3b1065bf3cc86507
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `TextAsset`

This reference describes `TextAsset` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-44978b593ce207b4) | Method |
| [`#ctor`](#api-3a66fc71f9e579a9) | Method |
| [`content`](#api-cf052ee8254a5587) | Property |
| [`languageHint`](#api-c93d9d431e87eacd) | Property |

## Type declaration

<a id="api-3b1065bf3cc86507"></a>
<!-- api: T:Inno.Assets.TextAsset 3ff9cf10510913005e7c6e89c7b2da69db7021ad215977864e24e52ebf767595 -->

```csharp
public sealed class Inno.Assets.TextAsset : Inno.Assets.AssetObject
```

Stores decoded text content and its language hint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Types/TextAsset.cs#L11).

## `#ctor`

<a id="api-44978b593ce207b4"></a>
<!-- api: M:Inno.Assets.TextAsset.#ctor 57f53149e5eb756ad47ae536c588554bef75d89884681f4e4d825b557a66c7ad -->

```csharp
public Inno.Assets.TextAsset.TextAsset()
```

Creates an empty text asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Types/TextAsset.cs#L28).

## `#ctor`

<a id="api-3a66fc71f9e579a9"></a>
<!-- api: M:Inno.Assets.TextAsset.#ctor(System.String,System.String) 1c7d2536352a4ed18f4914778c9379ead2ef3143b0f7089784d95f05e2e0d680 -->

```csharp
public Inno.Assets.TextAsset.TextAsset(string content, string languageHint = "plain")
```

Creates a text asset with content and an optional language hint.

**Parameter `content`:** Decoded text content.

**Parameter `languageHint`:** Language or format hint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Types/TextAsset.cs#L41).

## `content`

<a id="api-cf052ee8254a5587"></a>
<!-- api: P:Inno.Assets.TextAsset.content 7199ffc876527d9a6bbd4c2dc734d2fac5a9d8b38822322525e77fd5a20257a6 -->

```csharp
public string Inno.Assets.TextAsset.content { get; private set; }
```

Gets the decoded text content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Types/TextAsset.cs#L17).

## `languageHint`

<a id="api-c93d9d431e87eacd"></a>
<!-- api: P:Inno.Assets.TextAsset.languageHint 0c45c5eed77c1dd48d74387b90553ea082de91bf0117d87480e5decfe004a5e5 -->

```csharp
public string Inno.Assets.TextAsset.languageHint { get; private set; }
```

Gets the language or format hint associated with the text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Types/TextAsset.cs#L23).
