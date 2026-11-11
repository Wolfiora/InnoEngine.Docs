---
title: "PlayerSupportPackCatalog"
description: "Reference for PlayerSupportPackCatalog in Inno.Build."
uid: api.inno.build.b8cb057156e01ab9
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `PlayerSupportPackCatalog`

This reference describes `PlayerSupportPackCatalog` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8fd63b0c07ce9b7b) | Method |
| [`Acquire`](#api-b7aab6f6e7113020) | Method |
| [`PublishAsync`](#api-4c0b5a10e1671e9f) | Method |
| [`SelectAsync`](#api-0f5bea75087f755e) | Method |

## Type declaration

<a id="api-b8cb057156e01ab9"></a>
<!-- api: T:Inno.Build.PlayerSupportPackCatalog 6dae889299b205e4340980782a5f117d3ed102508c19f26a925c739877037dfb -->

```csharp
public sealed class Inno.Build.PlayerSupportPackCatalog
```

Resolves and validates installed Player Support Packs without loading authoring services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Player/PlayerSupportPackCatalog.cs#L17).

## `#ctor`

<a id="api-8fd63b0c07ce9b7b"></a>
<!-- api: M:Inno.Build.PlayerSupportPackCatalog.#ctor(System.String) b9eb8a4c3bbe90550591645b10128469d01654dc61a53a734f143a37a5be475f -->

```csharp
public Inno.Build.PlayerSupportPackCatalog.PlayerSupportPackCatalog(string root)
```

Creates a catalog rooted at the directory containing target-specific Player Support Packs.

**Parameter `root`:** The directory whose target children contain immutable fingerprint directories and a current index.

**Throws `System.ArgumentException`:** Thrown when `root` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Player/PlayerSupportPackCatalog.cs#L49).

## `Acquire`

<a id="api-b7aab6f6e7113020"></a>
<!-- api: M:Inno.Build.PlayerSupportPackCatalog.Acquire(Inno.Build.BuildTargetId,Inno.Build.IPlayerSupportPackValidator,System.Threading.CancellationToken) ed52be63f3dd8861b124ecb1ce374e0c0a5acb6ebef503351eeee20552d7897b -->

```csharp
public Inno.Build.PlayerSupportPackLease Inno.Build.PlayerSupportPackCatalog.Acquire(Inno.Build.BuildTargetId target, Inno.Build.IPlayerSupportPackValidator validator, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Resolves one installed Support Pack after validating its deployment-only closure.

**Parameter `target`:** The platform and architecture identity of the required Support Pack.

**Returns:** Reading ownership of the complete pack; dispose it after its final consumer finishes.

**Throws `System.IO.DirectoryNotFoundException`:** Thrown when no Support Pack is installed for `target`.

**Throws `System.IO.InvalidDataException`:** Thrown when the pack is empty, contains build-time payload, or lacks its Player executable or native runtimes.

**Parameter `validator`:** The target-owned validator for runtime or linker inputs.

**Parameter `cancellationToken`:** Cancels ownership acquisition or complete content validation before returning a lease.

**Throws `System.OperationCanceledException`:** Acquisition or validation was canceled; no reading ownership is transferred.

**Throws `System.TimeoutException`:** Exclusive repair or retirement retains the artifact for more than thirty seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Player/PlayerSupportPackCatalog.cs#L144).

## `PublishAsync`

<a id="api-4c0b5a10e1671e9f"></a>
<!-- api: M:Inno.Build.PlayerSupportPackCatalog.PublishAsync(Inno.Build.BuildTargetId,System.String,Inno.Build.IPlayerSupportPackValidator,System.Threading.CancellationToken,System.Func{System.Threading.CancellationToken,System.Threading.Tasks.ValueTask}) f0ceccbabdf94dd006c13141c83b196aff6dc9a28dfb6a1d8471868cb40f253c -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.PlayerSupportPackLease> Inno.Build.PlayerSupportPackCatalog.PublishAsync(Inno.Build.BuildTargetId target, string stagingDirectory, Inno.Build.IPlayerSupportPackValidator validator, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken), System.Func<System.Threading.CancellationToken, System.Threading.Tasks.ValueTask>? verifyInputs = null)
```

Validates and publishes an immutable pack, then atomically selects it for new readers.

**Parameter `target`:** The platform and architecture owning the staged inputs.

**Parameter `stagingDirectory`:** A complete, exclusively owned staging tree on the same filesystem as this catalog.
Successful publication consumes this directory unless identical inputs already exist.

**Parameter `validator`:** The target validator for runtime and linker inputs.

**Parameter `cancellationToken`:** Cancels validation or lease acquisition before selecting the completed pack.

**Parameter `verifyInputs`:** Optional final source-input gate after output validation and any publication wait.
Omit only when the caller exclusively owns a fully prepared tree with no external preparation inputs.

**Returns:** Reading ownership of the selected immutable pack; earlier readers retain their own protection.

**Throws `System.IO.InvalidDataException`:** The candidate is incomplete or contains forbidden inputs.

**Throws `System.IO.IOException`:** The completed directory or its atomic current index cannot be installed.

**Throws `System.OperationCanceledException`:** Cancellation occurred before the current index was committed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Player/PlayerSupportPackCatalog.cs#L198).

## `SelectAsync`

<a id="api-0f5bea75087f755e"></a>
<!-- api: M:Inno.Build.PlayerSupportPackCatalog.SelectAsync(Inno.Build.BuildTargetId,System.String,Inno.Build.IPlayerSupportPackValidator,System.Func{System.Threading.CancellationToken,System.Threading.Tasks.ValueTask},System.Threading.CancellationToken) d27b46b691f0706ba699f8ef3b3cadac543baac2590785a597bdd27ed41dd479 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.PlayerSupportPackLease> Inno.Build.PlayerSupportPackCatalog.SelectAsync(Inno.Build.BuildTargetId target, string fingerprint, Inno.Build.IPlayerSupportPackValidator validator, System.Func<System.Threading.CancellationToken, System.Threading.Tasks.ValueTask> verifyInputs, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Validates one immutable content identity and atomically selects it for subsequent readers.

**Parameter `target`:** The explicit target whose prepared Pack is requested.

**Parameter `fingerprint`:** The exact lowercase SHA-256 content identity recorded by the publisher.

**Parameter `validator`:** The borrowed platform closure validator.

**Parameter `verifyInputs`:** The final awaited source-input gate after output validation and before selection.

**Parameter `cancellationToken`:** Cancels validation or selection before replacing the current index.

**Returns:** Reading ownership of the complete requested Pack; dispose it after every consumer finishes.

**Throws `System.ArgumentException`:** The content identity is invalid or the target path escapes the catalog.

**Throws `System.IO.InvalidDataException`:** The requested directory or its complete file set and hashes are invalid.

**Throws `System.OperationCanceledException`:** Validation or selection was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Player/PlayerSupportPackCatalog.cs#L85).
