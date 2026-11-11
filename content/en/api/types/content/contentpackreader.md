---
title: "ContentPackReader"
description: "Reference for ContentPackReader in Inno.Content."
uid: api.inno.content.42db43b94f3374bf
kind: api
owners:
  - Inno.Content
apiSurface: source-clr
contracts:
  - project.inno-content
---
# `ContentPackReader`

This reference describes `ContentPackReader` in `Inno.Content`. Read the [shared contract](../../projects/inno-content.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Open`](#api-53193dd347f1bc6f) | Method |

## Type declaration

<a id="api-42db43b94f3374bf"></a>
<!-- api: T:Inno.Content.ContentPackReader b43966ca05a36645f198e94be52390dc59532059e60d89be9784286e5796a085 -->

```csharp
public static class Inno.Content.ContentPackReader
```

Verifies complete encoded and decoded identities before transferring a pack into an immutable store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackReader.cs#L15).

## `Open`

<a id="api-53193dd347f1bc6f"></a>
<!-- api: M:Inno.Content.ContentPackReader.Open(System.IO.Stream,Inno.Content.ContentPackDescriptor,Inno.Core.Serialization.SerializationGeneration,Inno.Content.ContentReadLimits,System.Threading.CancellationToken) bba2680063420e8648255f38a1da651b5ce9b6d0df66ddce62e7092510530d07 -->

```csharp
public static Inno.Content.PackContentStore Inno.Content.ContentPackReader.Open(System.IO.Stream pack, Inno.Content.ContentPackDescriptor descriptor, Inno.Core.Serialization.SerializationGeneration serialization, Inno.Content.ContentReadLimits? limits = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Takes ownership of a readable seekable pack and validates all bytes, entries, and budgets.

**Parameter `pack`:** The owned stream; callers must not access it after this call. Failure also disposes it.

**Parameter `descriptor`:** The expected complete-pack identity received through validated deployment metadata.

**Parameter `serialization`:** The borrowed converter generation used to decode the common content index.

**Parameter `limits`:** Explicit finite reading and expansion budgets; null selects the documented defaults.

**Parameter `cancellationToken`:** Cancels validation before a store is returned.

**Returns:** A caller-owned store that retains the stream until every lease and stream has retired.

**Throws `System.IO.InvalidDataException`:** The encoded hash, index, entry inventory, decoded bytes, or reading budgets are invalid.

**Throws `System.OperationCanceledException`:** Validation was canceled; the input stream is disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackReader.cs#L44).
