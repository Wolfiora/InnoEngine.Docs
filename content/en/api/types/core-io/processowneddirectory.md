---
title: "ProcessOwnedDirectory"
description: "Reference for ProcessOwnedDirectory in Inno.Core.IO."
uid: api.inno.core.io.87ebbef5c9f0f02d
kind: api
owners:
  - Inno.Core.IO
apiSurface: source-clr
contracts:
  - project.inno-core-io#publication-and-ownership-contract
---
# `ProcessOwnedDirectory`

This reference describes `ProcessOwnedDirectory` in `Inno.Core.IO`. Read the [shared contract](../../projects/inno-core-io.md#publication-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateAsync`](#api-1813e712c22e926e) | Method |
| [`CreateForProcessAsync`](#api-0df8fee3aadaeed1) | Method |
| [`Dispose`](#api-6c41eb0c5c0d5ce2) | Method |
| [`ReadClaims`](#api-2d160976e9cf0d57) | Method |
| [`RegisterCurrentProcess`](#api-171b96d1bdc39c2f) | Method |
| [`RetireMetadataUnderOwnership`](#api-371b31881cdb1a6b) | Method |
| [`directory`](#api-eed5f32b6f829b08) | Property |

## Type declaration

<a id="api-87ebbef5c9f0f02d"></a>
<!-- api: T:Inno.Core.IO.ProcessOwnedDirectory 294f9bfed71e69c62253d904ec73ebe0ac2fd6e2ed5e4cf2ac45a22faaef5908 -->

```csharp
public sealed class Inno.Core.IO.ProcessOwnedDirectory : System.IDisposable
```

Claims a new temporary directory before payload writes and preserves failed cleanup for later retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnedDirectory.cs#L16).

## `CreateAsync`

<a id="api-1813e712c22e926e"></a>
<!-- api: M:Inno.Core.IO.ProcessOwnedDirectory.CreateAsync(System.String,System.Threading.CancellationToken) 889d45fadf2cbecefc6cf952ddc13689c47c8f5a0f1ecd4ac97568785caf69bc -->

```csharp
public static System.Threading.Tasks.ValueTask<Inno.Core.IO.ProcessOwnedDirectory> Inno.Core.IO.ProcessOwnedDirectory.CreateAsync(string root, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Creates a fresh directory and ownership record under an explicitly supplied file boundary.

**Parameter `root`:** The absolute producer-controlled root; existing unrecorded directories are never adopted.

**Parameter `cancellationToken`:** Cancels before payload ownership is returned.

**Returns:** An owned directory lease; dispose only after its subprocesses and consumers finish.

**Throws `System.ArgumentException`:** The root is relative or is a filesystem root.

**Throws `System.IO.IOException`:** The boundary crosses a link or ownership cannot be recorded.

**Throws `System.OperationCanceledException`:** Creation was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnedDirectory.cs#L122).

## `CreateForProcessAsync`

<a id="api-0df8fee3aadaeed1"></a>
<!-- api: M:Inno.Core.IO.ProcessOwnedDirectory.CreateForProcessAsync(System.String,System.String,System.Threading.CancellationToken) c0a8a979c537bbd1a06bdaf2d9ef62f343b7d47b35e3ee13d4fcf16cb0c127f1 -->

```csharp
public static System.Threading.Tasks.ValueTask<string> Inno.Core.IO.ProcessOwnedDirectory.CreateForProcessAsync(string root, string identity, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Creates a directory protected by this process lifetime when the caller can retain only file metadata.
Payload consumers in other processes must register their lifetimes before using it.

**Parameter `root`:** The absolute producer root; existing directories are never adopted.

**Parameter `identity`:** A current operation's explicit 32-digit hexadecimal directory identity shared by its process participants.

**Parameter `cancellationToken`:** Cancels before the process claim is transferred.

**Returns:** The new directory, preserved until every recorded process exits and the producer retires it.
No managed lease object is retained by the caller.

**Throws `System.IO.IOException`:** Ownership cannot be established within the boundary.

**Throws `System.ArgumentException`:** The producer root or current operation identity is invalid.

**Throws `System.IO.InvalidDataException`:** An existing operation claim is malformed, inactive, or cannot authorize this process.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnedDirectory.cs#L68).

## `Dispose`

<a id="api-6c41eb0c5c0d5ce2"></a>
<!-- api: M:Inno.Core.IO.ProcessOwnedDirectory.Dispose 862b400cced4844e46f0ddc44d8d1616dde42e404b64dbebec7c90237a88c9b5 -->

```csharp
public void Inno.Core.IO.ProcessOwnedDirectory.Dispose()
```

Releases only this directory after its other recorded process lifetimes have exited.

**Throws `System.IO.IOException`:** Removal failed; its explicit claim remains available for later retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnedDirectory.cs#L226).

## `ReadClaims`

<a id="api-2d160976e9cf0d57"></a>
<!-- api: M:Inno.Core.IO.ProcessOwnedDirectory.ReadClaims(System.String,System.Threading.CancellationToken) afa088e7302dbd2fb5feb74846dacbee5901ed9728517eebd94aa2a22c120f13 -->

```csharp
public static System.Collections.Generic.IReadOnlyList<Inno.Core.IO.ProcessOwnedDirectoryDescriptor> Inno.Core.IO.ProcessOwnedDirectory.ReadClaims(string root, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Reads only current explicit claims, without inferring ownership from arbitrary directory names.

**Parameter `root`:** The producer-controlled absolute root.

**Parameter `cancellationToken`:** Cancels claim inspection.

**Returns:** Existing directories with exact lease paths and conservative combined owner states.

**Throws `System.IO.IOException`:** A claim cannot be read or its directory escapes the producer boundary.

**Throws `System.IO.InvalidDataException`:** A claim is malformed or its recorded identity does not match its location.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnedDirectory.cs#L200).

## `RegisterCurrentProcess`

<a id="api-171b96d1bdc39c2f"></a>
<!-- api: M:Inno.Core.IO.ProcessOwnedDirectory.RegisterCurrentProcess(System.String,System.String) a684d6ce2b36c1b367677820f95c078d1b33fd2fe3b9d9cd8d2efbb08a1743c8 -->

```csharp
public static void Inno.Core.IO.ProcessOwnedDirectory.RegisterCurrentProcess(string root, string directory)
```

Records a subprocess lifetime while a previously claimed parent directory remains protected.

**Parameter `root`:** The producer root containing the existing current claim.

**Parameter `directory`:** The claimed directory borrowed by this process.

**Throws `System.IO.IOException`:** The directory is unrecorded, escapes the root, or its ownership cannot be read.

**Throws `System.IO.InvalidDataException`:** The existing claim is malformed or does not match this directory.

**Throws `System.TimeoutException`:** An exclusive owner retains retirement rights beyond the registration budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnedDirectory.cs#L172).

## `RetireMetadataUnderOwnership`

<a id="api-371b31881cdb1a6b"></a>
<!-- api: M:Inno.Core.IO.ProcessOwnedDirectory.RetireMetadataUnderOwnership(System.String,System.Threading.CancellationToken) cb5664a889c592e725c0db55199be3eb6971be2a89de085ae976bd3b0101ed7f -->

```csharp
public static int Inno.Core.IO.ProcessOwnedDirectory.RetireMetadataUnderOwnership(string root, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Retires claims for absent payloads while the caller exclusively owns the persistent root gate.

**Parameter `root`:** The exact producer root whose owner.lock the caller exclusively holds.

**Parameter `cancellationToken`:** Cancellation between complete metadata retirements.

**Returns:** The number of fully retired claims.

**Constraints:** Every participant must acquire the same owner gate before waiting for or opening a work lease.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnedDirectory.cs#L265).

## `directory`

<a id="api-eed5f32b6f829b08"></a>
<!-- api: P:Inno.Core.IO.ProcessOwnedDirectory.directory dfb650555c5ee4fab5e8efb406b368c1bcb167e5c04271e6bdcb5777ec98eacb -->

```csharp
public string Inno.Core.IO.ProcessOwnedDirectory.directory { get; }
```

Gets the newly claimed absolute directory; its parent and persistent lease are not payloads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnedDirectory.cs#L40).
