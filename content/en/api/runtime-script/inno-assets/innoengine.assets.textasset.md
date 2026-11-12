---
title: "TextAsset"
description: "Reference for TextAsset in Inno.Assets."
uid: api.inno.assets.runtime-script.20ea29f5e4504ee8
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `TextAsset`

This reference describes `TextAsset` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Assets.AssetObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a945563260f08971) | Method |
| [`#ctor`](#api-32cfc2b81f0e079a) | Method |
| [`content`](#api-ee386c9645518f43) | Property |
| [`languageHint`](#api-4cf426e21f1bd753) | Property |

## Type declaration

<a id="api-20ea29f5e4504ee8"></a>
<!-- api: T:InnoEngine.Assets.TextAsset a38c2f67ba3d232f323f2e0993fb465aba3e539d85b40104b3a1296d8bf6fdb6 -->

```csharp
public sealed class InnoEngine.Assets.TextAsset : InnoEngine.Assets.AssetObject, InnoEngine.Serialization.ISerializable
```

Stores decoded text content and its language hint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Types/TextAsset.cs#L11).

## `#ctor`

<a id="api-a945563260f08971"></a>
<!-- api: M:InnoEngine.Assets.TextAsset.#ctor 0cfcfe13b8012addf7870170f4c6d4b805a1778f2446e924243a72a2a8c3bd7d -->

```csharp
public InnoEngine.Assets.TextAsset.TextAsset()
```

Creates an empty text asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Types/TextAsset.cs#L28).

## `#ctor`

<a id="api-32cfc2b81f0e079a"></a>
<!-- api: M:InnoEngine.Assets.TextAsset.#ctor(System.String,System.String) b0375588f3508193d1694f24d1f63de7f2731ccee0832b48054c0f0b85d7e991 -->

```csharp
public InnoEngine.Assets.TextAsset.TextAsset(string content, string languageHint = "plain")
```

Creates a text asset with content and an optional language hint.

**Parameter `content`:** Decoded text content.

**Parameter `languageHint`:** Language or format hint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Types/TextAsset.cs#L41).

## `content`

<a id="api-ee386c9645518f43"></a>
<!-- api: P:InnoEngine.Assets.TextAsset.content 007bb7c1daaa931b3c96e25aef48ae31e01ba11895a3560ddcc8196580a261c6 -->

```csharp
public string InnoEngine.Assets.TextAsset.content { get; }
```

Gets the decoded text content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Types/TextAsset.cs#L17).

## `languageHint`

<a id="api-4cf426e21f1bd753"></a>
<!-- api: P:InnoEngine.Assets.TextAsset.languageHint 8df2e60981a958451040e6695e129bde57f1d8d13b60f17b68f2c18b2938b7c9 -->

```csharp
public string InnoEngine.Assets.TextAsset.languageHint { get; }
```

Gets the language or format hint associated with the text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Types/TextAsset.cs#L23).
