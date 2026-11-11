---
title: "BuildCachePublisher"
description: "Reference for BuildCachePublisher in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.744729150fd6ac26
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `BuildCachePublisher`

This reference describes `BuildCachePublisher` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bc1b00bfb648b5d9) | Method |
| [`AcquireUseAsync`](#api-ff8d3775e3ccb41e) | Method |
| [`BeginWorkingDirectory`](#api-4a7656fc5be23ae0) | Method |
| [`Describe`](#api-a636f9ac2177d308) | Method |
| [`EnsureImmutableRegistration`](#api-533ad75c2087c61a) | Method |
| [`Record`](#api-c0c669c6c379cfe3) | Method |
| [`RecordIndex`](#api-fa0b7dde2909bdd4) | Method |
| [`RecordProcessUse`](#api-fc1ce576730836bd) | Method |
| [`role`](#api-c93cbd90dc81ed51) | Property |

## Type declaration

<a id="api-744729150fd6ac26"></a>
<!-- api: T:Inno.Build.Toolchains.BuildCachePublisher a4ea3bd5d3e70e63b0f266ae914c6f3bf24510b38f19f35e129d7b98f9db2e9c -->

```csharp
public sealed class Inno.Build.Toolchains.BuildCachePublisher
```

Records exact publisher-owned generations and coordinates them with bounded cache retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCachePublisher.cs#L17).

## `#ctor`

<a id="api-bc1b00bfb648b5d9"></a>
<!-- api: M:Inno.Build.Toolchains.BuildCachePublisher.#ctor(System.String,Inno.Build.Toolchains.BuildCacheArtifactRole) 2f20e13b755bd1c1e202c1246eacd36a0861fe73eef7f01f4bc278947e51b58d -->

```csharp
public Inno.Build.Toolchains.BuildCachePublisher.BuildCachePublisher(string directory, Inno.Build.Toolchains.BuildCacheArtifactRole role)
```

Creates a publisher for one absolute, non-overlapping cache boundary.

**Parameter `directory`:** The cache root exclusively controlled by this publisher.

**Parameter `role`:** The lifetime declared for this publisher's completed entries.

**Throws `System.ArgumentException`:** The directory is blank or relative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCachePublisher.cs#L35).

## `AcquireUseAsync`

<a id="api-ff8d3775e3ccb41e"></a>
<!-- api: M:Inno.Build.Toolchains.BuildCachePublisher.AcquireUseAsync(System.Threading.CancellationToken) 4a68345e0b2097aaa3966127687bb37f91543538242f1b7b9be3a14c2f1e1ff8 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Core.IO.FileLease> Inno.Build.Toolchains.BuildCachePublisher.AcquireUseAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Pins publisher activity until publication, reading handoff and current-root updates finish.

**Parameter `cancellationToken`:** Cancels this wait without disturbing other owners.

**Returns:** Caller-owned shared activity; dispose after the final artifact reading lease is acquired.

**Throws `System.OperationCanceledException`:** Acquisition was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCachePublisher.cs#L74).

## `BeginWorkingDirectory`

<a id="api-4a7656fc5be23ae0"></a>
<!-- api: M:Inno.Build.Toolchains.BuildCachePublisher.BeginWorkingDirectory(System.String,System.String,System.String,System.Threading.CancellationToken) ce4ae7ad4fd81a951e9d352ba38aeb2b078b48b3c5472ecdfeb75e951816f6df -->

```csharp
public void Inno.Build.Toolchains.BuildCachePublisher.BeginWorkingDirectory(string directory, string leasePath, string? targetId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Records a reusable workspace before its first payload write while the caller holds activity and producer leases.
Existing unregistered directories are rejected, rather than adopted by cleanup authority.

**Parameter `directory`:** The new or previously registered workspace within this publisher root.

**Parameter `leasePath`:** The caller's persistent exclusive producer lease outside the workspace.

**Parameter `targetId`:** The explicit product target, or null for shared host work.

**Parameter `cancellationToken`:** Cancels registration before payload writes.

**Throws `System.InvalidOperationException`:** The publisher does not manage reusable workspaces or an existing directory has no current registration.

**Throws `System.IO.IOException`:** The workspace escapes its boundary or ownership cannot be written.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCachePublisher.cs#L244).

## `Describe`

<a id="api-a636f9ac2177d308"></a>
<!-- api: M:Inno.Build.Toolchains.BuildCachePublisher.Describe(System.String) 878429ffcb2d0e314e7aa794dcecf83964bfca8e0cdc5d2010f176eff6c75048 -->

```csharp
public Inno.Build.Toolchains.BuildCacheOwnerDescriptor Inno.Build.Toolchains.BuildCachePublisher.Describe(string id)
```

Registers only explicitly recorded ownership, without discovering artifacts by extension or directory age.

**Parameter `id`:** The unique publisher registration identity.

**Returns:** Borrowed inventory callbacks for this publisher's lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCachePublisher.cs#L219).

## `EnsureImmutableRegistration`

<a id="api-533ad75c2087c61a"></a>
<!-- api: M:Inno.Build.Toolchains.BuildCachePublisher.EnsureImmutableRegistration(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Threading.CancellationToken) 0a5ac9f42577011158788095be767e72887ffdd77cbb3f1a8303cff561d8f55f -->

```csharp
public void Inno.Build.Toolchains.BuildCachePublisher.EnsureImmutableRegistration(string directory, string leasePath, System.Collections.Generic.IReadOnlyList<string> dependencies, string? targetId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Establishes an immutable artifact's ownership once, or confirms its unchanged registration without rewriting it.

**Parameter `directory`:** The completed artifact within this publisher's exact boundary.

**Parameter `leasePath`:** The persistent artifact lease held by the caller alongside this publisher's activity lease.

**Parameter `dependencies`:** The exact dependency closure, in its original publication order.

**Parameter `targetId`:** The producer's explicit target, or null for shared host work.

**Parameter `cancellationToken`:** Cancels inspection or initial registration before publication.

**Constraints:** This confirms ownership, not content integrity. The producer must verify the immutable payload itself.
Existing registration age is retained; use an active lease or a current generation dependency to protect
consumers. This operation neither selects a current root nor records a new use time.

**Throws `System.InvalidOperationException`:** This publisher does not own immutable artifacts.

**Throws `System.IO.IOException`:** Paths cross ownership boundaries or links, or payload files are unavailable.

**Throws `System.IO.InvalidDataException`:** Existing ownership metadata disagrees with the immutable publication.

**Throws `System.OperationCanceledException`:** Inspection or registration was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCachePublisher.cs#L179).

## `Record`

<a id="api-c0c669c6c379cfe3"></a>
<!-- api: M:Inno.Build.Toolchains.BuildCachePublisher.Record(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.String,System.Threading.CancellationToken) f42d7d1cb76a772df38b5d78540294b8e6f0e814f77f653ba1f02d618e0b5289 -->

```csharp
public void Inno.Build.Toolchains.BuildCachePublisher.Record(string directory, string leasePath, System.Collections.Generic.IReadOnlyList<string> dependencies, string? currentKey, string? targetId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Records a completed generation and optionally selects it as a protected current root.
The caller must hold this publisher's activity lease and the artifact's producer or reading lease.

**Parameter `directory`:** An existing artifact within this publisher's exact boundary.

**Parameter `leasePath`:** The persistent lease used by its producer and readers.

**Parameter `dependencies`:** Exact owned entries required while this generation is protected.

**Parameter `currentKey`:** A product/target/configuration root identity, or null for an unselected generation.

**Parameter `cancellationToken`:** Cancels before metadata selection.

**Parameter `targetId`:** The producer's product target, or null for a shared host generation.

**Throws `System.IO.IOException`:** An owned path escapes the boundary, crosses a directory link, or contains an invalid file link.

**Throws `System.IO.DirectoryNotFoundException`:** The completed generation is absent.

**Constraints:** Reusable workspaces may contain compiler-created file aliases only when their complete link chain
resolves to a regular file within the same workspace. Aliases are not counted as duplicate payloads.
Immutable artifacts and process working directories reject all links.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCachePublisher.cs#L115).

## `RecordIndex`

<a id="api-fa0b7dde2909bdd4"></a>
<!-- api: M:Inno.Build.Toolchains.BuildCachePublisher.RecordIndex(System.String,System.Collections.Generic.IReadOnlyList{System.String}) ba0134328443818fd56083a5023b626af5e9c174a1ed359a813aa423b74ce9d3 -->

```csharp
public void Inno.Build.Toolchains.BuildCachePublisher.RecordIndex(string path, System.Collections.Generic.IReadOnlyList<string> dependencies)
```

Registers an exact cache index and the publication directories required to keep it useful.

**Parameter `path`:** The producer-owned index file within this publisher root.

**Parameter `dependencies`:** Exact publication roots; missing dependencies make the index retireable.

**Constraints:** The caller must hold this publisher's shared activity gate through the index write and registration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCachePublisher.cs#L333).

## `RecordProcessUse`

<a id="api-fc1ce576730836bd"></a>
<!-- api: M:Inno.Build.Toolchains.BuildCachePublisher.RecordProcessUse(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.Threading.CancellationToken) ab6a948b865ce062dfb9a4e19fb803781b6c50e37e287d44d9c629046616d60c -->

```csharp
public void Inno.Build.Toolchains.BuildCachePublisher.RecordProcessUse(string directory, string leasePath, System.Collections.Generic.IReadOnlyList<string> dependencies, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Registers a process-owned loader directory and its dependencies before returning it to a loader.
Retirement preserves the directory until every recorded process has exited.
Repeated registrations retain the complete dependency closure of that process-owned operation.

**Parameter `directory`:** The completed directory within this publisher's boundary.

**Parameter `leasePath`:** The persistent producer and retirement lease outside the directory.

**Parameter `dependencies`:** Owned generations and workspaces required throughout this process-owned operation.

**Parameter `cancellationToken`:** Cancels ownership acquisition before the process claim is recorded.

**Throws `System.IO.IOException`:** The directory escapes ownership or its registration cannot be written.

**Throws `System.OperationCanceledException`:** Ownership acquisition was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCachePublisher.cs#L288).

## `role`

<a id="api-c93cbd90dc81ed51"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCachePublisher.role 1e7c99228ae8d079e7ff598c9b2dd20ea9040b85f78b92439bd1f9a3e1f80672 -->

```csharp
public Inno.Build.Toolchains.BuildCacheArtifactRole Inno.Build.Toolchains.BuildCachePublisher.role { get; }
```

Gets the declared lifecycle used by this publisher's inventory and maintenance registration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCachePublisher.cs#L60).
