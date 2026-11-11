---
title: "FontAsset"
description: "Reference for FontAsset in Inno.Text."
uid: api.inno.text.229f0918bf695370
kind: api
owners:
  - Inno.Text
apiSurface: source-clr
contracts:
  - project.inno-text#shaping-and-glyph-contract
---
# `FontAsset`

This reference describes `FontAsset` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cfb0bbaf183f8bdf) | Method |
| [`OnRuntimePayloadChanged`](#api-45533f79d08af1ba) | Method |
| [`metadata`](#api-33356320dca52449) | Property |

## Type declaration

<a id="api-229f0918bf695370"></a>
<!-- api: T:Inno.Text.FontAsset 40e24b27d108856cc32c3cf7b98be5eb18e1b754da47f5aee7c0a9451ccfd8c0 -->

```csharp
public sealed class Inno.Text.FontAsset : Inno.Assets.AssetObject
```

Represents one imported OpenType font file or collection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L100).

## `#ctor`

<a id="api-cfb0bbaf183f8bdf"></a>
<!-- api: M:Inno.Text.FontAsset.#ctor c4f85a56b707bd92ee960e9ffc584c6e6f47329c30813e1091302f9655f4fc9f -->

```csharp
public Inno.Text.FontAsset.FontAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L100).

## `OnRuntimePayloadChanged`

<a id="api-45533f79d08af1ba"></a>
<!-- api: M:Inno.Text.FontAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte}) 843ba1d87294dba638268ce940d175d09766ae1b0795e3563cd30670341ddcdd -->

```csharp
protected override void Inno.Text.FontAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory<byte> previousPayload, System.ReadOnlyMemory<byte> currentPayload)
```

Refreshes imported metadata after an artifact commit.

**Parameter `previousPayload`:** The previous compact runtime payload.

**Parameter `currentPayload`:** The current compact runtime payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L118).

## `metadata`

<a id="api-33356320dca52449"></a>
<!-- api: P:Inno.Text.FontAsset.metadata aa389f59100c5217613e370b11f8f3d414d2e37d9a77eaca8d7e2ff537cc27f0 -->

```csharp
public Inno.Text.FontMetadata? Inno.Text.FontAsset.metadata { get; }
```

Gets imported metadata, or null before runtime content is loaded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L107).
