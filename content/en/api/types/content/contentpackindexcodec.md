---
title: "ContentPackIndexCodec"
description: "Reference for ContentPackIndexCodec in Inno.Content."
uid: api.inno.content.54ba251305b40c2d
kind: api
owners:
  - Inno.Content
apiSurface: source-clr
contracts:
  - project.inno-content
---
# `ContentPackIndexCodec`

This reference describes `ContentPackIndexCodec` in `Inno.Content`. Read the [shared contract](../../projects/inno-content.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Decode`](#api-6226d3cc335c7019) | Method |
| [`Encode`](#api-5ac952013cf2b4dc) | Method |

## Type declaration

<a id="api-54ba251305b40c2d"></a>
<!-- api: T:Inno.Content.ContentPackIndexCodec 9bad0704360149706a8c82b204cb16369cc4940f98fa0529225fc9d570e42731 -->

```csharp
public static class Inno.Content.ContentPackIndexCodec
```

Encodes the current immutable content inventory through the common serialization protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackIndexCodec.cs#L11).

## `Decode`

<a id="api-6226d3cc335c7019"></a>
<!-- api: M:Inno.Content.ContentPackIndexCodec.Decode(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationGeneration) cfc7ef407b34d8e33651d027fcfd3dd0334539e5fa58f0c9258ff6c2cdb0eee0 -->

```csharp
public static Inno.Content.ContentPackIndex Inno.Content.ContentPackIndexCodec.Decode(System.ReadOnlySpan<byte> data, Inno.Core.Serialization.SerializationGeneration serialization)
```

Restores and validates one current-format payload inventory.

**Parameter `data`:** The complete structured index bytes.

**Parameter `serialization`:** The borrowed converter generation pinned by the enclosing preparation operation.

**Returns:** A newly owned immutable inventory with no duplicate or ambiguous identities.

**Throws `System.IO.InvalidDataException`:** The bytes or inventory are malformed; no partial index is returned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackIndexCodec.cs#L57).

## `Encode`

<a id="api-5ac952013cf2b4dc"></a>
<!-- api: M:Inno.Content.ContentPackIndexCodec.Encode(Inno.Content.ContentPackIndex,Inno.Core.Serialization.SerializationGeneration) 1b7fb98b4b485467808aca70539a17612bb9cafd6285158692eec7880e5acede -->

```csharp
public static byte[] Inno.Content.ContentPackIndexCodec.Encode(Inno.Content.ContentPackIndex index, Inno.Core.Serialization.SerializationGeneration serialization)
```

Captures the entire index with the operation's pinned converter generation.

**Parameter `index`:** The validated immutable inventory.

**Parameter `serialization`:** The borrowed generation shared by the enclosing build transaction.

**Returns:** Newly owned deterministic index bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackIndexCodec.cs#L25).
