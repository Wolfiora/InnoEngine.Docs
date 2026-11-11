---
title: "GraphDocumentCodec"
description: "Reference for GraphDocumentCodec in Inno.Core.Graphs."
uid: api.inno.core.graphs.9936d2431e681f25
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphDocumentCodec`

This reference describes `GraphDocumentCodec` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Decode`](#api-15a2a3d8c47646ef) | Method |
| [`Encode`](#api-3381f5150a4c2f33) | Method |

## Type declaration

<a id="api-9936d2431e681f25"></a>
<!-- api: T:Inno.Core.Graphs.GraphDocumentCodec 3759b937896352a9c523cf7f05b28403307bb9f3114b675f8195ef72e3dc8c80 -->

```csharp
public static class Inno.Core.Graphs.GraphDocumentCodec
```

Persists neutral graph documents through the common Inno serialization pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocumentCodec.cs#L10).

## `Decode`

<a id="api-15a2a3d8c47646ef"></a>
<!-- api: M:Inno.Core.Graphs.GraphDocumentCodec.Decode(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry) 8ab515e1bd68967d005de222cc19cf5757c96ddd626c92fb0dd47195218cec65 -->

```csharp
public static Inno.Core.Graphs.GraphDocument Inno.Core.Graphs.GraphDocumentCodec.Decode(System.ReadOnlySpan<byte> bytes, Inno.Core.Serialization.SerializationRegistry serialization)
```

Decodes one current native graph document.

**Parameter `bytes`:** Complete native graph payload.

**Parameter `serialization`:** The serialization registry that owns the converter generation for this operation.

**Returns:** A detached mutable neutral graph document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocumentCodec.cs#L90).

## `Encode`

<a id="api-3381f5150a4c2f33"></a>
<!-- api: M:Inno.Core.Graphs.GraphDocumentCodec.Encode(Inno.Core.Graphs.GraphDocument,Inno.Core.Serialization.SerializationRegistry) 68c83512744e7a9a06f5b1885be2b9151bb1fa54bf5e780a24e29c187aef2cbc -->

```csharp
public static byte[] Inno.Core.Graphs.GraphDocumentCodec.Encode(Inno.Core.Graphs.GraphDocument document, Inno.Core.Serialization.SerializationRegistry serialization)
```

Encodes a graph document into deterministic native bytes.

**Parameter `document`:** Document to encode.

**Parameter `serialization`:** The serialization registry that owns the converter generation for this operation.

**Returns:** Native graph bytes containing stable IDs and neutral values only.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocumentCodec.cs#L24).
