---
title: "IByteDocumentStore"
description: "Reference for IByteDocumentStore in Inno.Core.IO."
uid: api.inno.core.io.967cb24b732eb289
kind: api
owners:
  - Inno.Core.IO
apiSurface: source-clr
contracts:
  - project.inno-core-io#publication-and-ownership-contract
---
# `IByteDocumentStore`

This reference describes `IByteDocumentStore` in `Inno.Core.IO`. Read the [shared contract](../../projects/inno-core-io.md#publication-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Read`](#api-2c8a681febc596e3) | Method |
| [`Write`](#api-6fcdecd43cf59faa) | Method |
| [`canWrite`](#api-7b72a2e587528e44) | Property |
| [`documentName`](#api-60e105027dd54a28) | Property |
| [`exists`](#api-5b6bb8c5a66081e6) | Property |

## Type declaration

<a id="api-967cb24b732eb289"></a>
<!-- api: T:Inno.Core.IO.IByteDocumentStore f05a3247c06ecaabd12c6574dbe05e90a9472556d68b63fd10c353643f358c0a -->

```csharp
public interface Inno.Core.IO.IByteDocumentStore
```

Reads and replaces one complete document without prescribing its physical location.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/IByteDocumentStore.cs#L8).

## `Read`

<a id="api-2c8a681febc596e3"></a>
<!-- api: M:Inno.Core.IO.IByteDocumentStore.Read 1768807c3b029f02381f0b95f7f9e55070b05993d0633493183c58ea6dd8cf4e -->

```csharp
byte[]? Inno.Core.IO.IByteDocumentStore.Read()
```

Obtains a newly owned complete document snapshot.

**Returns:** Owned document bytes, or null when no document exists; an empty document remains distinct from absence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/IByteDocumentStore.cs#L31).

## `Write`

<a id="api-6fcdecd43cf59faa"></a>
<!-- api: M:Inno.Core.IO.IByteDocumentStore.Write(System.ReadOnlySpan{System.Byte}) af94e7842408b0db9617929e657aa961aca692dbb07d2fb3c1209a7d668a2481 -->

```csharp
void Inno.Core.IO.IByteDocumentStore.Write(System.ReadOnlySpan<byte> data)
```

Replaces the document atomically after preparation succeeds.

**Parameter `data`:** The complete candidate bytes; the implementation cannot retain borrowed caller memory.

**Throws `System.NotSupportedException`:** The source is read-only.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/IByteDocumentStore.cs#L42).

## `canWrite`

<a id="api-7b72a2e587528e44"></a>
<!-- api: P:Inno.Core.IO.IByteDocumentStore.canWrite 808a2b9d375664995cb63cc1f05bd85fb750402dba176f880d1e9f8619fcc87d -->

```csharp
bool Inno.Core.IO.IByteDocumentStore.canWrite { get; }
```

Gets whether this source permits atomic replacement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/IByteDocumentStore.cs#L18).

## `documentName`

<a id="api-60e105027dd54a28"></a>
<!-- api: P:Inno.Core.IO.IByteDocumentStore.documentName 1edc9b5b68808b8a59749fbaa3342c6a279b9b90f9f417413c3df1164bfd9e31 -->

```csharp
string Inno.Core.IO.IByteDocumentStore.documentName { get; }
```

Gets a stable diagnostic name for this document, independent of its storage implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/IByteDocumentStore.cs#L13).

## `exists`

<a id="api-5b6bb8c5a66081e6"></a>
<!-- api: P:Inno.Core.IO.IByteDocumentStore.exists 2b6db274042de670e347e24d714eb297a34a14638153837a93d0f57f6de7306a -->

```csharp
bool Inno.Core.IO.IByteDocumentStore.exists { get; }
```

Gets whether a document currently exists; callers must still handle absence during a later read.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/IByteDocumentStore.cs#L23).
