---
title: "AtomicFile"
description: "Reference for AtomicFile in Inno.Core.IO."
uid: api.inno.core.io.50bb21c877feddc1
kind: api
owners:
  - Inno.Core.IO
apiSurface: source-clr
contracts:
  - project.inno-core-io#publication-and-ownership-contract
---
# `AtomicFile`

This reference describes `AtomicFile` in `Inno.Core.IO`. Read the [shared contract](../../projects/inno-core-io.md#publication-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Install`](#api-5d7c305f369e5c62) | Method |
| [`IsCandidatePath`](#api-04775fa99d9edfd9) | Method |
| [`WriteAllBytes`](#api-131b9c8a528b9757) | Method |

## Type declaration

<a id="api-50bb21c877feddc1"></a>
<!-- api: T:Inno.Core.IO.AtomicFile 1e80794d7c609d4533a84d84795da5c6be12b01a22e69c34825e0ebddbec963e -->

```csharp
public static class Inno.Core.IO.AtomicFile
```

Provides durable same-directory file replacement without exposing partial destination content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/AtomicFile.cs#L9).

## `Install`

<a id="api-5d7c305f369e5c62"></a>
<!-- api: M:Inno.Core.IO.AtomicFile.Install(System.String,System.String,System.Boolean) 8822ceeac332cd33204d41099512f0c18d843ccf4a2f6248fc818155ba6a4a48 -->

```csharp
public static void Inno.Core.IO.AtomicFile.Install(string source, string destination, bool overwrite = true)
```

Atomically installs an existing same-directory candidate file.

**Parameter `source`:** The complete candidate file beside the destination.

**Parameter `destination`:** The destination file path beside the candidate.

**Parameter `overwrite`:** Whether an existing destination may be replaced; false never overwrites an external creator.

**Constraints:** A failed create-only publication preserves the candidate. After successful publication the
candidate is removed; a subsequent cleanup failure reports that the complete target exists.
Unix create-only publication requires same-directory hard-link support. The caller must own
the candidate and parent directory until the operation completes.

**Throws `System.IO.IOException`:** Publication fails, create-only mode finds an existing destination, or candidate retirement
fails after the complete destination has been published.

**Throws `System.PlatformNotSupportedException`:** The host does not provide an atomic create-only filesystem primitive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/AtomicFile.cs#L110).

## `IsCandidatePath`

<a id="api-04775fa99d9edfd9"></a>
<!-- api: M:Inno.Core.IO.AtomicFile.IsCandidatePath(System.String) 2f9da434b609dea5e0c9e112ee4dbcd00f7c0c352c4e5ccbb79ef4926ec5bc13 -->

```csharp
public static bool Inno.Core.IO.AtomicFile.IsCandidatePath(string path)
```

Recognizes the reserved temporary file names created by atomic byte publication.

**Parameter `path`:** The file name or path to inspect without opening the file.

**Returns:** True for a nonempty destination name followed by the reserved marker and a complete hexadecimal operation identity.

**Constraints:** Recognition excludes transient payloads from source discovery. It does not establish ownership or authorize deletion.

**Throws `System.ArgumentNullException`:** The path is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/AtomicFile.cs#L28).

## `WriteAllBytes`

<a id="api-131b9c8a528b9757"></a>
<!-- api: M:Inno.Core.IO.AtomicFile.WriteAllBytes(System.String,System.ReadOnlySpan{System.Byte},System.Boolean) 752a360022972a45a702098a150364da63a8b2d9f3e5cbd52ffe27d8db5f5a88 -->

```csharp
public static void Inno.Core.IO.AtomicFile.WriteAllBytes(string path, System.ReadOnlySpan<byte> data, bool overwrite = true)
```

Writes a complete byte payload and atomically installs it at the destination.

**Parameter `path`:** The destination file path.

**Parameter `data`:** The complete file payload.

**Parameter `overwrite`:** Whether an existing destination may be replaced; false atomically rejects name collisions.

**Throws `System.IO.IOException`:** Publication or cleanup fails, the destination already exists in create-only mode, or the
filesystem cannot atomically publish a complete file. No copy fallback exposes partial content.

**Throws `System.PlatformNotSupportedException`:** The host does not provide an atomic create-only filesystem primitive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/AtomicFile.cs#L56).
