---
title: "BuildCacheCleanupPlan"
description: "Reference for BuildCacheCleanupPlan in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.dfb3accedee44d1b
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `BuildCacheCleanupPlan`

This reference describes `BuildCacheCleanupPlan` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-5e205e7623bdbfd8) | Method |
| [`ExecuteAsync`](#api-ea50458fc5aa3531) | Method |
| [`candidates`](#api-aef1974f7d4f514a) | Property |
| [`protectedBytes`](#api-cbf6e3ca280316f3) | Property |
| [`totalBytes`](#api-dc422bb749406ca2) | Property |

## Type declaration

<a id="api-dfb3accedee44d1b"></a>
<!-- api: T:Inno.Build.Toolchains.BuildCacheCleanupPlan c585480b6aa78561de06d658ef59d7ef1d202e20a5159ec91204a1ea6c68952a -->

```csharp
public sealed class Inno.Build.Toolchains.BuildCacheCleanupPlan
```

Freezes a reviewable retirement proposal for explicitly registered cache owners in one checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheCleanupPlan.cs#L15).

## `Create`

<a id="api-5e205e7623bdbfd8"></a>
<!-- api: M:Inno.Build.Toolchains.BuildCacheCleanupPlan.Create(System.String,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.BuildCacheOwnerDescriptor},Inno.Build.Toolchains.BuildCachePolicy,System.Boolean,System.String,System.Threading.CancellationToken) 1966dcea13c3262f2952395cc012a4921d842393c1232f945cbe5a935bae13c7 -->

```csharp
public static Inno.Build.Toolchains.BuildCacheCleanupPlan Inno.Build.Toolchains.BuildCacheCleanupPlan.Create(string workspace, System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.BuildCacheOwnerDescriptor> owners, Inno.Build.Toolchains.BuildCachePolicy policy, bool retireAll = false, string? targetId = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Plans retirement by budget pressure or an explicit request to retire every unreferenced artifact.

**Parameter `workspace`:** The absolute checkout boundary; no owner may manage it or its parent.

**Parameter `owners`:** Explicit registrations; callbacks remain borrowed until execution completes.

**Parameter `policy`:** The immutable size, free-space and duration budgets.

**Parameter `retireAll`:** Whether to propose all unreferenced generations regardless of size pressure.

**Parameter `cancellationToken`:** Cancels planning before any directory is removed.

**Parameter `targetId`:** An exact producer-declared target filter, or null to manage all registered scopes.
Outside-scope generations and their dependencies remain protected.

**Returns:** A fixed proposal; execution rechecks ownership, roots and active readers before deletion.

**Throws `System.ArgumentException`:** Owners overlap, identities repeat, or dependency metadata forms a cycle.

**Throws `System.IO.IOException`:** An owner, artifact or lease escapes its boundary or traverses a link.

**Throws `System.IO.InvalidDataException`:** An inventory has ambiguous ownership or undeclared dependencies.

**Throws `System.OperationCanceledException`:** Planning was canceled.

**Throws `System.TimeoutException`:** Inventory exceeded the complete operation budget; no artifact was removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheCleanupPlan.cs#L95).

## `ExecuteAsync`

<a id="api-ea50458fc5aa3531"></a>
<!-- api: M:Inno.Build.Toolchains.BuildCacheCleanupPlan.ExecuteAsync(System.Boolean,System.Threading.CancellationToken) fa36fb3beac7f97128e2f01c20605518064462a105b802fcd39f249d1eb3d69d -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.BuildCacheCleanupResult> Inno.Build.Toolchains.BuildCacheCleanupPlan.ExecuteAsync(bool dryRun = false, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Executes the original proposal under fresh owner and artifact leases without waiting for active readers.

**Parameter `dryRun`:** Whether to report the proposal without acquiring mutation leases or deleting files.

**Parameter `cancellationToken`:** Cancels remaining work; successful earlier retirements are not rolled back.

**Returns:** Actual retirement, activity skips and IO failures; protected generations are never forced out.

**Throws `System.IO.InvalidDataException`:** Fresh ownership metadata violates the registered boundary.

**Throws `System.OperationCanceledException`:** The caller canceled; no later candidate is processed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheCleanupPlan.cs#L184).

## `candidates`

<a id="api-aef1974f7d4f514a"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheCleanupPlan.candidates a3dca8e70c06249766c8d9cd18ea59d493e497eea638b93d39b68c386331ffdf -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.BuildCacheArtifactDescriptor> Inno.Build.Toolchains.BuildCacheCleanupPlan.candidates { get; }
```

Gets the original eligible candidates shared by preview and execution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheCleanupPlan.cs#L43).

## `protectedBytes`

<a id="api-cbf6e3ca280316f3"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheCleanupPlan.protectedBytes a74df1b34e58398f02dacad39287868e30facef45c00319bc7d8e49e6b1d9e85 -->

```csharp
public long Inno.Build.Toolchains.BuildCacheCleanupPlan.protectedBytes { get; }
```

Gets the size protected by current roots and their transitive dependencies when planning.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheCleanupPlan.cs#L53).

## `totalBytes`

<a id="api-dc422bb749406ca2"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheCleanupPlan.totalBytes 083edc72ff05e72ef414e5cb0b249fb8e533601e9c2b8c5576b6c3ea663bed83 -->

```csharp
public long Inno.Build.Toolchains.BuildCacheCleanupPlan.totalBytes { get; }
```

Gets the measured total of explicitly inventoried artifact files.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheCleanupPlan.cs#L48).
