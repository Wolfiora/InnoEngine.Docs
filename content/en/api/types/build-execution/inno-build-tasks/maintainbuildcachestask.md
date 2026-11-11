---
title: "MaintainBuildCachesTask"
description: "Reference for MaintainBuildCachesTask in Inno.Build.Tasks."
uid: api.inno.build.tasks.461c154fdc94dce2
kind: api
owners:
  - Inno.Build.Tasks
apiSurface: source-clr
contracts:
  - project.inno-build-tasks
---
# `MaintainBuildCachesTask`

This reference describes `MaintainBuildCachesTask` in `Inno.Build.Tasks`. Read the [shared contract](../../../projects/inno-build-tasks.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Microsoft.Build.Utilities.Task`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5463b4ef34c0f8d3) | Method |
| [`Execute`](#api-47d1c42c2532768d) | Method |
| [`EngineRoot`](#api-537a4fc1c2e564e4) | Property |

## Type declaration

<a id="api-461c154fdc94dce2"></a>
<!-- api: T:Inno.Build.Tasks.MaintainBuildCachesTask 6a56c37da05d5e03cb999d2fda5e5ad93a6a2fee7890cc42354f599bb8942b8a -->

```csharp
public sealed class Inno.Build.Tasks.MaintainBuildCachesTask : Microsoft.Build.Utilities.Task
```

Runs bounded cache maintenance after a successful root Editor operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/MaintainBuildCachesTask.cs#L12).

## `#ctor`

<a id="api-5463b4ef34c0f8d3"></a>
<!-- api: M:Inno.Build.Tasks.MaintainBuildCachesTask.#ctor dfec429dd6a59b67a3d9cf466b193a88f0e8979850718ff23c5cf5608ec8d8fb -->

```csharp
public Inno.Build.Tasks.MaintainBuildCachesTask.MaintainBuildCachesTask()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/MaintainBuildCachesTask.cs#L12).

## `Execute`

<a id="api-47d1c42c2532768d"></a>
<!-- api: M:Inno.Build.Tasks.MaintainBuildCachesTask.Execute 1afc95e4d782b4058fbfa1af9962a07bc750ae92db202feb12ab1457aa9f54be -->

```csharp
public override bool Inno.Build.Tasks.MaintainBuildCachesTask.Execute()
```

Attempts maintenance without changing the successful product build outcome.

**Returns:** True after completed or explicitly deferred automatic maintenance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/MaintainBuildCachesTask.cs#L26).

## `EngineRoot`

<a id="api-537a4fc1c2e564e4"></a>
<!-- api: P:Inno.Build.Tasks.MaintainBuildCachesTask.EngineRoot dd402a9e231b189d206f3f86d6330a90bdb230a9d137563750c9bfbf65c8f96d -->

```csharp
public string Inno.Build.Tasks.MaintainBuildCachesTask.EngineRoot { get; set; }
```

Gets or sets the absolute checkout owning the registered cache catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/MaintainBuildCachesTask.cs#L18).
