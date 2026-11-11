---
title: "FontMetadataCodec"
description: "Reference for FontMetadataCodec in Inno.Text."
uid: api.inno.text.e8d5c01b19e82afa
kind: api
owners:
  - Inno.Text
apiSurface: source-clr
contracts:
  - project.inno-text#shaping-and-glyph-contract
---
# `FontMetadataCodec`

This reference describes `FontMetadataCodec` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Decode`](#api-3b5dd0b2ad55c89f) | Method |
| [`Encode`](#api-bbaf2750d1d8e4d3) | Method |

## Type declaration

<a id="api-e8d5c01b19e82afa"></a>
<!-- api: T:Inno.Text.FontMetadataCodec 169e49b3c2bd29541e71e0a94116236f5c1793a699dfd59162b1f998b8efb2a2 -->

```csharp
public static class Inno.Text.FontMetadataCodec
```

Encodes the compact runtime payload shared by the font importer and text runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L47).

## `Decode`

<a id="api-3b5dd0b2ad55c89f"></a>
<!-- api: M:Inno.Text.FontMetadataCodec.Decode(System.ReadOnlySpan{System.Byte}) e8cb013a6823a448c1a3821cb675d683fa1128c8839145ee5aa6305ddfd580ad -->

```csharp
public static Inno.Text.FontMetadata Inno.Text.FontMetadataCodec.Decode(System.ReadOnlySpan<byte> payload)
```

Decodes and validates a compact font runtime payload.

**Parameter `payload`:** The complete runtime payload.

**Returns:** The decoded metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L79).

## `Encode`

<a id="api-bbaf2750d1d8e4d3"></a>
<!-- api: M:Inno.Text.FontMetadataCodec.Encode(Inno.Text.FontMetadata) bbd3f9eb86acf93f28384100e6cce9491b46d61e5ac3624a159b23ae3621c95a -->

```csharp
public static byte[] Inno.Text.FontMetadataCodec.Encode(Inno.Text.FontMetadata metadata)
```

Encodes validated metadata into a deterministic runtime payload.

**Parameter `metadata`:** The metadata to encode.

**Returns:** The compact runtime payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L61).
