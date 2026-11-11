---
title: "BuildTaskRuntimeTask"
description: "Reference for BuildTaskRuntimeTask in Inno.Build.TaskHosting."
uid: api.inno.build.taskhosting.3c145afa5eec3ea4
kind: api
owners:
  - Inno.Build.TaskHosting
apiSurface: source-clr
contracts:
  - project.inno-build-taskhosting
---
# `BuildTaskRuntimeTask`

This reference describes `BuildTaskRuntimeTask` in `Inno.Build.TaskHosting`. Read the [shared contract](../../../projects/inno-build-taskhosting.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Microsoft.Build.Utilities.Task`.

**Direct interfaces:** `Microsoft.Build.Framework.ICancelableTask`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4f350c8ca30259bc) | Method |
| [`Cancel`](#api-09a77c1ac5da17ab) | Method |
| [`Execute`](#api-94e4e76de32f1d3e) | Method |
| [`ArtifactsDirectory`](#api-c4e5dfbeda0505e4) | Property |
| [`LoadDirectory`](#api-9a721288367b48a5) | Property |
| [`ProjectFile`](#api-eb6622ae93b2bdd1) | Property |
| [`Properties`](#api-cd916444f9a72d7b) | Property |
| [`RemoveProperties`](#api-2aa6626ed21fc71d) | Property |
| [`TargetOutputs`](#api-fb0edd64fec02d2f) | Property |
| [`Targets`](#api-e2761437678872f8) | Property |

## Type declaration

<a id="api-3c145afa5eec3ea4"></a>
<!-- api: T:Inno.Build.TaskHosting.BuildTaskRuntimeTask d9d3fc8dd66d531a6b3d102baeaeef01b9d847c16f613d8d45009f89b320deb8 -->

```csharp
public sealed class Inno.Build.TaskHosting.BuildTaskRuntimeTask : Microsoft.Build.Utilities.Task, Microsoft.Build.Framework.ICancelableTask
```

Coordinates shared task-runtime compilation before immutable publication and private loading.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/BuildTaskRuntimeTask.cs#L16).

## `#ctor`

<a id="api-4f350c8ca30259bc"></a>
<!-- api: M:Inno.Build.TaskHosting.BuildTaskRuntimeTask.#ctor 652b04defb0ba8da19c2470b821d603a9ef704cbada67cf0353bd7dd4f228949 -->

```csharp
public Inno.Build.TaskHosting.BuildTaskRuntimeTask.BuildTaskRuntimeTask()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/BuildTaskRuntimeTask.cs#L16).

## `Cancel`

<a id="api-09a77c1ac5da17ab"></a>
<!-- api: M:Inno.Build.TaskHosting.BuildTaskRuntimeTask.Cancel b998de6a7ea284b64fce669070c6d33344f97110a3c4a4c04c3a801bd0088306 -->

```csharp
public void Inno.Build.TaskHosting.BuildTaskRuntimeTask.Cancel()
```

Cancels an ownership wait without racing retirement of the cancellation source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/BuildTaskRuntimeTask.cs#L220).

## `Execute`

<a id="api-94e4e76de32f1d3e"></a>
<!-- api: M:Inno.Build.TaskHosting.BuildTaskRuntimeTask.Execute 74a4fd3f0468709cc7515426d299f4a8433b30110de197235c32d7b826663de3 -->

```csharp
public override bool Inno.Build.TaskHosting.BuildTaskRuntimeTask.Execute()
```

Serializes shared writes across processes while yielding the MSBuild node during ownership waits.

**Returns:** True after a complete build; false with a logged error after failure or cancellation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/BuildTaskRuntimeTask.cs#L71).

## `ArtifactsDirectory`

<a id="api-c4e5dfbeda0505e4"></a>
<!-- api: P:Inno.Build.TaskHosting.BuildTaskRuntimeTask.ArtifactsDirectory 427a9fee80a47247cbdf286cc5305f4a17c0e48d890ca9d68eaa3c2f57a0c495 -->

```csharp
public string Inno.Build.TaskHosting.BuildTaskRuntimeTask.ArtifactsDirectory { get; set; }
```

Gets or sets the absolute shared intermediate owner, also supplied as ArtifactsPath.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/BuildTaskRuntimeTask.cs#L32).

## `LoadDirectory`

<a id="api-9a721288367b48a5"></a>
<!-- api: P:Inno.Build.TaskHosting.BuildTaskRuntimeTask.LoadDirectory 1e9400edd967d354d278f9378c7b0d5a0818cff5a97c281a3d70c4da734b2593 -->

```csharp
public string Inno.Build.TaskHosting.BuildTaskRuntimeTask.LoadDirectory { get; set; }
```

Gets or sets the private reader location registered before returning an immutable runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/BuildTaskRuntimeTask.cs#L38).

## `ProjectFile`

<a id="api-eb6622ae93b2bdd1"></a>
<!-- api: P:Inno.Build.TaskHosting.BuildTaskRuntimeTask.ProjectFile b306a36b8f89aa7b446efd2cb47d9568637b065be703f0df8dee109c0efc7d02 -->

```csharp
public string Inno.Build.TaskHosting.BuildTaskRuntimeTask.ProjectFile { get; set; }
```

Gets or sets the task project whose complete runtime is built by the calling MSBuild engine.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/BuildTaskRuntimeTask.cs#L26).

## `Properties`

<a id="api-cd916444f9a72d7b"></a>
<!-- api: P:Inno.Build.TaskHosting.BuildTaskRuntimeTask.Properties 6f78436bf1c532fb9c48998778b3ce4315a0d16ecdc0cd71f4ffacdd0e9bb3cc -->

```csharp
public string[] Inno.Build.TaskHosting.BuildTaskRuntimeTask.Properties { get; set; }
```

Gets or sets explicit name=value properties after product-specific global properties are removed.
Explicit values override removal of inherited properties with the same name.
ArtifactsPath is owned by this task and cannot be overridden.
Restore excludes package imports; compilation includes the restored imports in a distinct evaluation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/BuildTaskRuntimeTask.cs#L52).

## `RemoveProperties`

<a id="api-2aa6626ed21fc71d"></a>
<!-- api: P:Inno.Build.TaskHosting.BuildTaskRuntimeTask.RemoveProperties 2a2eab884727ea604b4a27db22fe51a02c7537f0de4a8ad908440ecb22eae1c6 -->

```csharp
public string[] Inno.Build.TaskHosting.BuildTaskRuntimeTask.RemoveProperties { get; set; }
```

Gets or sets parent global properties that must not enter the host tool build.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/BuildTaskRuntimeTask.cs#L57).

## `TargetOutputs`

<a id="api-fb0edd64fec02d2f"></a>
<!-- api: P:Inno.Build.TaskHosting.BuildTaskRuntimeTask.TargetOutputs e41ef260467e6dd53f456b159f6d119c730a735f91e5f13db56db41b8cab2e53 -->

```csharp
public Microsoft.Build.Framework.ITaskItem[] Inno.Build.TaskHosting.BuildTaskRuntimeTask.TargetOutputs { get; private set; }
```

Gets the returned runtime files and their hash metadata after successful compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/BuildTaskRuntimeTask.cs#L63).

## `Targets`

<a id="api-e2761437678872f8"></a>
<!-- api: P:Inno.Build.TaskHosting.BuildTaskRuntimeTask.Targets 09883ba636210c54a8164490f730036185bf7407e3bf7277fcc42f6bae1ebd2b -->

```csharp
public string[] Inno.Build.TaskHosting.BuildTaskRuntimeTask.Targets { get; set; }
```

Gets or sets the ordered targets returning the complete hashed runtime closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/BuildTaskRuntimeTask.cs#L44).
