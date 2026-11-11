---
title: "ReadOnlyByteDocumentStore"
description: "Reference for ReadOnlyByteDocumentStore in Inno.Core.IO."
uid: api.inno.core.io.2b41b1ce4515b100
kind: api
owners:
  - Inno.Core.IO
apiSurface: source-clr
contracts:
  - project.inno-core-io#publication-and-ownership-contract
---
# `ReadOnlyByteDocumentStore`

This reference describes `ReadOnlyByteDocumentStore` in `Inno.Core.IO`. Read the [shared contract](../../projects/inno-core-io.md#publication-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.IO.IByteDocumentStore`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e63cea19f9b54d09) | Method |
| [`Read`](#api-f5b9e715ccf93fe8) | Method |
| [`Write`](#api-eda866d4161b8a09) | Method |
| [`canWrite`](#api-c2f61e390ef6225d) | Property |
| [`documentName`](#api-763f0addb751a265) | Property |
| [`exists`](#api-27a9c89cca91c402) | Property |

## Type declaration

<a id="api-2b41b1ce4515b100"></a>
<!-- api: T:Inno.Core.IO.ReadOnlyByteDocumentStore 2579adb0e50827ae565cccbd40d22dc2f9a5ed3d4ee758cc104830763e2bb77b -->

```csharp
public sealed class Inno.Core.IO.ReadOnlyByteDocumentStore : Inno.Core.IO.IByteDocumentStore
```

Owns an immutable document snapshot that cannot be replaced through its read boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ReadOnlyByteDocumentStore.cs#L8).

## `#ctor`

<a id="api-e63cea19f9b54d09"></a>
<!-- api: M:Inno.Core.IO.ReadOnlyByteDocumentStore.#ctor(System.String,System.ReadOnlySpan{System.Byte}) c8a600d5223525fe0407f110ee9ebaaf003e26f9b9f589cf00885e35b3cc1f32 -->

```csharp
public Inno.Core.IO.ReadOnlyByteDocumentStore.ReadOnlyByteDocumentStore(string documentName, System.ReadOnlySpan<byte> data)
```

Copies one complete document into this source.

**Parameter `documentName`:** The stable logical diagnostic name.

**Parameter `data`:** Borrowed bytes copied before construction completes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ReadOnlyByteDocumentStore.cs#L21).

## `Read`

<a id="api-f5b9e715ccf93fe8"></a>
<!-- api: M:Inno.Core.IO.ReadOnlyByteDocumentStore.Read c8388f1c55bd8f9e78de4f27070f31a776c0a49ed732e42d55090534fc2e398d -->

```csharp
public byte[] Inno.Core.IO.ReadOnlyByteDocumentStore.Read()
```

Obtains a newly owned complete document snapshot.

**Returns:** Owned document bytes, or null when no document exists; an empty document remains distinct from absence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ReadOnlyByteDocumentStore.cs#L40).

## `Write`

<a id="api-eda866d4161b8a09"></a>
<!-- api: M:Inno.Core.IO.ReadOnlyByteDocumentStore.Write(System.ReadOnlySpan{System.Byte}) a69e8430b6d34a668670ab5d5bf43e14d98fd139bd9ac9aa83e70c926f609047 -->

```csharp
public void Inno.Core.IO.ReadOnlyByteDocumentStore.Write(System.ReadOnlySpan<byte> data)
```

Replaces the document atomically after preparation succeeds.

**Parameter `data`:** The complete candidate bytes; the implementation cannot retain borrowed caller memory.

**Throws `System.NotSupportedException`:** The source is read-only.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ReadOnlyByteDocumentStore.cs#L43).

## `canWrite`

<a id="api-c2f61e390ef6225d"></a>
<!-- api: P:Inno.Core.IO.ReadOnlyByteDocumentStore.canWrite 88afdd37cc4135344ae60bb90210ce1bcb1f400a66ea877644b3382b9293c698 -->

```csharp
public bool Inno.Core.IO.ReadOnlyByteDocumentStore.canWrite { get; }
```

Gets whether this source permits atomic replacement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ReadOnlyByteDocumentStore.cs#L34).

## `documentName`

<a id="api-763f0addb751a265"></a>
<!-- api: P:Inno.Core.IO.ReadOnlyByteDocumentStore.documentName 789b243382b964998b88f5226becb0c1f07138a091246dbd5a4cab253855f58c -->

```csharp
public string Inno.Core.IO.ReadOnlyByteDocumentStore.documentName { get; }
```

Gets a stable diagnostic name for this document, independent of its storage implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ReadOnlyByteDocumentStore.cs#L31).

## `exists`

<a id="api-27a9c89cca91c402"></a>
<!-- api: P:Inno.Core.IO.ReadOnlyByteDocumentStore.exists 871224ae479290eb0b95d8aacf9ba501367594ae2f01e2adab3ebff7374e9685 -->

```csharp
public bool Inno.Core.IO.ReadOnlyByteDocumentStore.exists { get; }
```

Gets whether a document currently exists; callers must still handle absence during a later read.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ReadOnlyByteDocumentStore.cs#L37).
