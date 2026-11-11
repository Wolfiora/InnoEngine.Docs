---
title: "BuildMaintenanceApplication"
description: "Reference for BuildMaintenanceApplication in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.a4227e52588e2413
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `BuildMaintenanceApplication`

This reference describes `BuildMaintenanceApplication` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CleanAsync`](#api-c847edbf56a59736) | Method |
| [`Run`](#api-6e829ae1b90ed2d3) | Method |

## Type declaration

<a id="api-a4227e52588e2413"></a>
<!-- api: T:Inno.Build.Toolchains.BuildMaintenanceApplication 3da805d3b34b9d33a405394e711f477ed35af815df303e337369e4184bb87d2d -->

```csharp
public static class Inno.Build.Toolchains.BuildMaintenanceApplication
```

Runs publisher-owned cache maintenance without backend, generator or Editor dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Maintenance/BuildMaintenanceApplication.cs#L14).

## `CleanAsync`

<a id="api-c847edbf56a59736"></a>
<!-- api: M:Inno.Build.Toolchains.BuildMaintenanceApplication.CleanAsync(System.String,Inno.Build.Toolchains.BuildCachePolicy,System.Boolean,System.Boolean,System.String,System.Threading.CancellationToken) 2a215999bd524c6017916840d5c2940b6fea6439b3da4851dc78e7f276e8678a -->

```csharp
public static System.Threading.Tasks.Task Inno.Build.Toolchains.BuildMaintenanceApplication.CleanAsync(string engineRoot, Inno.Build.Toolchains.BuildCachePolicy policy, bool retireAll, bool dryRun, string? targetId, System.Threading.CancellationToken cancellationToken)
```

Uses the same owner inventory, dependency protection and retirement plan for automatic and explicit cleanup.

**Parameter `engineRoot`:** The absolute checkout containing registered publishers.

**Parameter `policy`:** The bounded size and duration policy.

**Parameter `retireAll`:** Whether to select every unreferenced generation instead of pressure candidates.

**Parameter `dryRun`:** Whether to report the plan without retiring it.

**Parameter `targetId`:** An optional exact producer target filter; shared dependencies remain protected.

**Parameter `cancellationToken`:** Cancels inventory and retirement.

**Returns:** A completed, bounded cleanup operation with protected owners retained.

**Throws `System.InvalidOperationException`:** Explicit retirement encountered failures.

**Throws `System.TimeoutException`:** Owner discovery or planning exhausts the operation budget before retirement can begin.

**Throws `System.IO.IOException`:** Ownership metadata or protected input cannot be validated.

**Throws `System.OperationCanceledException`:** The caller canceled before completion.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Maintenance/BuildMaintenanceApplication.cs#L117).

## `Run`

<a id="api-6e829ae1b90ed2d3"></a>
<!-- api: M:Inno.Build.Toolchains.BuildMaintenanceApplication.Run(System.String[],System.Threading.CancellationToken) 5bd4de93180cfcbe167feadea18b5a554d5f21df0c8197aa1889bea996ed1fcf -->

```csharp
public static System.Threading.Tasks.Task<int> Inno.Build.Toolchains.BuildMaintenanceApplication.Run(string[] arguments, System.Threading.CancellationToken cancellationToken)
```

Executes the cache-clean command using the checkout's explicit publisher catalog.

**Parameter `arguments`:** The clean command and its validated named options.

**Parameter `cancellationToken`:** Cancels planning or retirement without deleting protected outputs.

**Returns:** Zero on success, two on cancellation, or one with a diagnostic on failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Maintenance/BuildMaintenanceApplication.cs#L28).
