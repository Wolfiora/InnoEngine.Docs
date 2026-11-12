---
title: "FontAsset"
description: "Reference for FontAsset in Inno.Text."
uid: api.inno.text.runtime-script.fea725fb033d19db
kind: api
owners:
  - Inno.Text
apiSurface: runtime-script
contracts:
  - project.inno-text#shaping-and-glyph-contract
  - manual.scripting.use-script-api
---
# `FontAsset`

This reference describes `FontAsset` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Assets.AssetObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-73703413742b2174) | Method |
| [`OnRuntimePayloadChanged`](#api-8f628f070ac13dd3) | Method |
| [`metadata`](#api-01286b3f98891a8c) | Property |

## Type declaration

<a id="api-fea725fb033d19db"></a>
<!-- api: T:InnoEngine.Text.FontAsset 69ee786c269abc96e4fb99756dc08f6ed3c43f3e0cc3a8ecc4a94e0baf729c8b -->

```csharp
public sealed class InnoEngine.Text.FontAsset : InnoEngine.Assets.AssetObject, InnoEngine.Serialization.ISerializable
```

Represents one imported OpenType font file or collection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/FontAsset.cs#L100).

## `#ctor`

<a id="api-73703413742b2174"></a>
<!-- api: M:InnoEngine.Text.FontAsset.#ctor 7d962bcf49d6ffd653c5daa8192071fd228829e21d7d3d1fbc14f89d1f9c7383 -->

```csharp
public InnoEngine.Text.FontAsset.FontAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/FontAsset.cs#L100).

## `OnRuntimePayloadChanged`

<a id="api-8f628f070ac13dd3"></a>
<!-- api: M:InnoEngine.Text.FontAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte}) e10d85a4acba49b4dc4c0bfe9bdc7645fcf83fe092b0b3cc0b5dffa7da9549ae -->

```csharp
protected override void InnoEngine.Text.FontAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory<byte> previousPayload, System.ReadOnlyMemory<byte> currentPayload)
```

Refreshes imported metadata after an artifact commit.

**Parameter `previousPayload`:** The previous compact runtime payload.

**Parameter `currentPayload`:** The current compact runtime payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/FontAsset.cs#L118).

## `metadata`

<a id="api-01286b3f98891a8c"></a>
<!-- api: P:InnoEngine.Text.FontAsset.metadata 76fb6e637d784472ec6578d08b33644fc0ea8bcc0c816416fc22d7f16ed4f5f1 -->

```csharp
public InnoEngine.Text.FontMetadata? InnoEngine.Text.FontAsset.metadata { get; }
```

Gets imported metadata, or null before runtime content is loaded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/FontAsset.cs#L107).
