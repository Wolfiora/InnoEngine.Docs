---
title: "ProcessOwnedDirectoryDescriptor"
description: "Reference for ProcessOwnedDirectoryDescriptor in Inno.Core.IO."
uid: api.inno.core.io.f6f890bacaa026b7
kind: api
owners:
  - Inno.Core.IO
apiSurface: source-clr
contracts:
  - project.inno-core-io#publication-and-ownership-contract
---
# `ProcessOwnedDirectoryDescriptor`

This reference describes `ProcessOwnedDirectoryDescriptor` in `Inno.Core.IO`. Read the [shared contract](../../projects/inno-core-io.md#publication-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`directory`](#api-a19255fa13cd7def) | Property |
| [`leasePath`](#api-d855aff025d9eb01) | Property |
| [`ownerState`](#api-68f00a21fecc1af8) | Property |

## Type declaration

<a id="api-f6f890bacaa026b7"></a>
<!-- api: T:Inno.Core.IO.ProcessOwnedDirectoryDescriptor 9b6d473e84cc393e61ca23c8786e22b5f38a3d430a238f73b96ef1efa4b84c65 -->

```csharp
public sealed class Inno.Core.IO.ProcessOwnedDirectoryDescriptor
```

Describes a recorded temporary directory without acquiring its producer's rights.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnedDirectoryDescriptor.cs#L6).

## `directory`

<a id="api-a19255fa13cd7def"></a>
<!-- api: P:Inno.Core.IO.ProcessOwnedDirectoryDescriptor.directory 967b3bd74e180661c6ef2012c75820577a3cb4538d39a7a44413491a87219c49 -->

```csharp
public string Inno.Core.IO.ProcessOwnedDirectoryDescriptor.directory { get; }
```

Gets the absolute path proven by the current ownership record.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnedDirectoryDescriptor.cs#L21).

## `leasePath`

<a id="api-d855aff025d9eb01"></a>
<!-- api: P:Inno.Core.IO.ProcessOwnedDirectoryDescriptor.leasePath 52fc0b6f12d4f1f70cf6557f0d399c0c8b1750a44f12a56267909d4770b8a7fa -->

```csharp
public string Inno.Core.IO.ProcessOwnedDirectoryDescriptor.leasePath { get; }
```

Gets the persistent producer and retirement coordination file.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnedDirectoryDescriptor.cs#L26).

## `ownerState`

<a id="api-68f00a21fecc1af8"></a>
<!-- api: P:Inno.Core.IO.ProcessOwnedDirectoryDescriptor.ownerState 0c52a52a23f5b022f9b74ea0bcccf891ee22edf244fe5d086c8871a25f71df7a -->

```csharp
public Inno.Core.IO.ProcessOwnerState Inno.Core.IO.ProcessOwnedDirectoryDescriptor.ownerState { get; }
```

Gets Active or Unknown while deletion must remain blocked, or Exited for retired owners.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnedDirectoryDescriptor.cs#L31).
