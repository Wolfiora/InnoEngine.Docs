---
title: "FileByteDocumentStore"
description: "Reference for FileByteDocumentStore in Inno.Core.IO."
uid: api.inno.core.io.d4ae6dc0b0e6fbc9
kind: api
owners:
  - Inno.Core.IO
apiSurface: source-clr
contracts:
  - project.inno-core-io#publication-and-ownership-contract
---
# `FileByteDocumentStore`

This reference describes `FileByteDocumentStore` in `Inno.Core.IO`. Read the [shared contract](../../projects/inno-core-io.md#publication-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.IO.IByteDocumentStore`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-fef31f060f75abcd) | Method |
| [`Read`](#api-1d8edfcca7e0762a) | Method |
| [`Write`](#api-93b5aabe94ff0cc0) | Method |
| [`canWrite`](#api-7d4c928042d60203) | Property |
| [`documentName`](#api-fd32944e8ef37e93) | Property |
| [`exists`](#api-f38b421295ef83da) | Property |

## Type declaration

<a id="api-d4ae6dc0b0e6fbc9"></a>
<!-- api: T:Inno.Core.IO.FileByteDocumentStore 91569048f049ae940238c1b5a4c039ee814d461bb470c9b957601a56abb44859 -->

```csharp
public sealed class Inno.Core.IO.FileByteDocumentStore : Inno.Core.IO.IByteDocumentStore
```

Stores one file document with atomic replacement using the common filesystem boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/FileByteDocumentStore.cs#L9).

## `#ctor`

<a id="api-fef31f060f75abcd"></a>
<!-- api: M:Inno.Core.IO.FileByteDocumentStore.#ctor(System.String) aae905368090a51cb2d512373c2316cae1bca9b1bc5f0dce4fee106c485904cc -->

```csharp
public Inno.Core.IO.FileByteDocumentStore.FileByteDocumentStore(string path)
```

Selects one host-owned absolute document location.

**Parameter `path`:** The absolute file path; its parent directory is prepared only when writing.

**Throws `System.ArgumentException`:** The path is empty or relative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/FileByteDocumentStore.cs#L22).

## `Read`

<a id="api-1d8edfcca7e0762a"></a>
<!-- api: M:Inno.Core.IO.FileByteDocumentStore.Read 05060e917d0f3c7428c9c8dd0e449e1f9e13e87bee66f4109731f34d51362c0d -->

```csharp
public byte[]? Inno.Core.IO.FileByteDocumentStore.Read()
```

Obtains a newly owned complete document snapshot.

**Returns:** Owned document bytes, or null when no document exists; an empty document remains distinct from absence.

**Constraints:** One rename-compatible handle pins the selected complete publication until its owned bytes are read.
Writers must atomically replace the document rather than modify the selected file in place.

**Throws `System.IO.IOException`:** The document cannot be read completely or exceeds the maximum supported byte-array size.

**Throws `System.UnauthorizedAccessException`:** The selected location denies reading or names a directory instead of a document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/FileByteDocumentStore.cs#L50).

## `Write`

<a id="api-93b5aabe94ff0cc0"></a>
<!-- api: M:Inno.Core.IO.FileByteDocumentStore.Write(System.ReadOnlySpan{System.Byte}) 4cf2b7e624453bfd3fdba844cc58f56dc597bc95bcc00890dd84ac8bc1b1ad17 -->

```csharp
public void Inno.Core.IO.FileByteDocumentStore.Write(System.ReadOnlySpan<byte> data)
```

Replaces the document atomically after preparation succeeds.

**Parameter `data`:** The complete candidate bytes; the implementation cannot retain borrowed caller memory.

**Throws `System.NotSupportedException`:** The source is read-only.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/FileByteDocumentStore.cs#L73).

## `canWrite`

<a id="api-7d4c928042d60203"></a>
<!-- api: P:Inno.Core.IO.FileByteDocumentStore.canWrite efaae70a5a31b1b182a5099146281b75bc46a8c5ff8218b2924f087b15f40d2c -->

```csharp
public bool Inno.Core.IO.FileByteDocumentStore.canWrite { get; }
```

Gets whether this source permits atomic replacement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/FileByteDocumentStore.cs#L34).

## `documentName`

<a id="api-fd32944e8ef37e93"></a>
<!-- api: P:Inno.Core.IO.FileByteDocumentStore.documentName 7f3cc7a26e53843c56caddfddfb81dc393ad3603844d8a05f71e35fec3201ec2 -->

```csharp
public string Inno.Core.IO.FileByteDocumentStore.documentName { get; }
```

Gets a stable diagnostic name for this document, independent of its storage implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/FileByteDocumentStore.cs#L31).

## `exists`

<a id="api-f38b421295ef83da"></a>
<!-- api: P:Inno.Core.IO.FileByteDocumentStore.exists 550f458e06557b4a2c9100c3adf4cd161db971122beca75b9aee0156a3370f2b -->

```csharp
public bool Inno.Core.IO.FileByteDocumentStore.exists { get; }
```

Gets whether a document currently exists; callers must still handle absence during a later read.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/FileByteDocumentStore.cs#L37).
