---
title: "RestoreOwnedProjectTask"
description: "Reference for RestoreOwnedProjectTask in Inno.Build.TaskHosting."
uid: api.inno.build.taskhosting.2e577b3d3a13e7f9
kind: api
owners:
  - Inno.Build.TaskHosting
apiSurface: source-clr
contracts:
  - project.inno-build-taskhosting
---
# `RestoreOwnedProjectTask`

This reference describes `RestoreOwnedProjectTask` in `Inno.Build.TaskHosting`. Read the [shared contract](../../../projects/inno-build-taskhosting.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Microsoft.Build.Utilities.Task`.

**Direct interfaces:** `Microsoft.Build.Framework.ICancelableTask`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-30f2e219471d99ee) | Method |
| [`Cancel`](#api-d47b8a52fe06cb8e) | Method |
| [`Execute`](#api-68d8ec3db254ce20) | Method |
| [`LockPath`](#api-8e8ab3225a285e79) | Property |
| [`Projects`](#api-ff2328862d146380) | Property |
| [`Properties`](#api-35f3e62b2ee88af7) | Property |

## Type declaration

<a id="api-2e577b3d3a13e7f9"></a>
<!-- api: T:Inno.Build.TaskHosting.RestoreOwnedProjectTask 6f31b95a8f496caf02c2483c4894e4c83bfc3251b9607d0f8702f536556e434f -->

```csharp
public sealed class Inno.Build.TaskHosting.RestoreOwnedProjectTask : Microsoft.Build.Utilities.Task, Microsoft.Build.Framework.ICancelableTask
```

Coordinates SDK restore writes for explicitly selected project closures.
Parent solution entry points are excluded from these owned restores.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/RestoreOwnedProjectTask.cs#L16).

## `#ctor`

<a id="api-30f2e219471d99ee"></a>
<!-- api: M:Inno.Build.TaskHosting.RestoreOwnedProjectTask.#ctor 6bab79746becdd1c14dfbc5595803730a0d5054e5408e9960b39a4c165fd372b -->

```csharp
public Inno.Build.TaskHosting.RestoreOwnedProjectTask.RestoreOwnedProjectTask()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/RestoreOwnedProjectTask.cs#L16).

## `Cancel`

<a id="api-d47b8a52fe06cb8e"></a>
<!-- api: M:Inno.Build.TaskHosting.RestoreOwnedProjectTask.Cancel 436559386966a95db2741b448c6c47b16f38c755eff61221a61ab10f42ec1dd5 -->

```csharp
public void Inno.Build.TaskHosting.RestoreOwnedProjectTask.Cancel()
```

Cancels this writer's ownership wait without canceling another active restore.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/RestoreOwnedProjectTask.cs#L121).

## `Execute`

<a id="api-68d8ec3db254ce20"></a>
<!-- api: M:Inno.Build.TaskHosting.RestoreOwnedProjectTask.Execute 9caf84b62ec67f927bd580e55ff31192baeebfd1e237749da05207c4a9cf3bb0 -->

```csharp
public override bool Inno.Build.TaskHosting.RestoreOwnedProjectTask.Execute()
```

Waits outside the MSBuild node, then restores under exclusive cross-process write ownership.

**Returns:** True after every requested restore succeeds; false with a logged failure or cancellation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/RestoreOwnedProjectTask.cs#L46).

## `LockPath`

<a id="api-8e8ab3225a285e79"></a>
<!-- api: P:Inno.Build.TaskHosting.RestoreOwnedProjectTask.LockPath ee801d4b0d603e4397cd9056fc099d65513b063e1a7893867a377496bdfd3796 -->

```csharp
public string Inno.Build.TaskHosting.RestoreOwnedProjectTask.LockPath { get; set; }
```

Gets or sets the absolute lock belonging to all writers of the shared restore graph.
The lock file remains after release.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/RestoreOwnedProjectTask.cs#L33).

## `Projects`

<a id="api-ff2328862d146380"></a>
<!-- api: P:Inno.Build.TaskHosting.RestoreOwnedProjectTask.Projects 70a40a4f1f014e46d93fe2e5ebfb9fd551a1bcbcd694d406eac6e2fb5c7d477d -->

```csharp
public Microsoft.Build.Framework.ITaskItem[] Inno.Build.TaskHosting.RestoreOwnedProjectTask.Projects { get; set; }
```

Gets or sets projects with explicit AdditionalProperties and GlobalPropertiesToRemove metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/RestoreOwnedProjectTask.cs#L26).

## `Properties`

<a id="api-35f3e62b2ee88af7"></a>
<!-- api: P:Inno.Build.TaskHosting.RestoreOwnedProjectTask.Properties a309b4d03281a1d0f68f419a7663ef426d55d6c522a3dc732ce0048fc7b5b6c2 -->

```csharp
public string[] Inno.Build.TaskHosting.RestoreOwnedProjectTask.Properties { get; set; }
```

Gets or sets explicit name=value restore properties, independent of product discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/RestoreOwnedProjectTask.cs#L38).
