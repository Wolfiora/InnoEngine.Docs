---
title: "DirectoryCleanupException"
description: "Reference for DirectoryCleanupException in Inno.Core.IO."
uid: api.inno.core.io.b292b985feb0da6c
kind: api
owners:
  - Inno.Core.IO
apiSurface: source-clr
contracts:
  - project.inno-core-io#publication-and-ownership-contract
---
# `DirectoryCleanupException`

This reference describes `DirectoryCleanupException` in `Inno.Core.IO`. Read the [shared contract](../../projects/inno-core-io.md#publication-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.IO.IOException`.

## Members

| Member | Kind |
| --- | --- |
| [`backupDirectory`](#api-e924516aa40c5950) | Property |
| [`installedDirectory`](#api-6774490d7602ba84) | Property |

## Type declaration

<a id="api-b292b985feb0da6c"></a>
<!-- api: T:Inno.Core.IO.DirectoryCleanupException 18074fe765a0e7e93df1e5b96fe688a7f20766884172a85cf5fbd1156e913efe -->

```csharp
public sealed class Inno.Core.IO.DirectoryCleanupException : System.IO.IOException
```

Reports backup cleanup failure after a complete directory installation has already committed.
The installed tree remains authoritative and must not be treated as a failed installation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/DirectoryCleanupException.cs#L10).

## `backupDirectory`

<a id="api-e924516aa40c5950"></a>
<!-- api: P:Inno.Core.IO.DirectoryCleanupException.backupDirectory 9aa3cfd1676d9b145e2d12e58b5b4116e669679f101f131802bbcd864e226dbb -->

```csharp
public string Inno.Core.IO.DirectoryCleanupException.backupDirectory { get; }
```

Gets the previous tree retained for a later owner-coordinated cleanup attempt.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/DirectoryCleanupException.cs#L30).

## `installedDirectory`

<a id="api-6774490d7602ba84"></a>
<!-- api: P:Inno.Core.IO.DirectoryCleanupException.installedDirectory 2b6ae47baf5b93a7cc72f936dfecb9587506ae8dfbcd70011ae2e90f4c494f08 -->

```csharp
public string Inno.Core.IO.DirectoryCleanupException.installedDirectory { get; }
```

Gets the complete installed tree that remains authoritative after cleanup failed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/DirectoryCleanupException.cs#L25).
