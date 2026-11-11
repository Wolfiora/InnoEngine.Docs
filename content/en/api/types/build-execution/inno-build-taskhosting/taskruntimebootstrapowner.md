---
title: "TaskRuntimeBootstrapOwner"
description: "Reference for TaskRuntimeBootstrapOwner in Inno.Build.TaskHosting."
uid: api.inno.build.taskhosting.4e36554364566d29
kind: api
owners:
  - Inno.Build.TaskHosting
apiSurface: source-clr
contracts:
  - project.inno-build-taskhosting
---
# `TaskRuntimeBootstrapOwner`

This reference describes `TaskRuntimeBootstrapOwner` in `Inno.Build.TaskHosting`. Read the [shared contract](../../../projects/inno-build-taskhosting.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Microsoft.Build.Utilities.Task`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b8337cdb3323d9d9) | Method |
| [`Execute`](#api-65479adfba3085af) | Method |
| [`Directory`](#api-ac8a6472636a0774) | Property |
| [`FoundationAssembly`](#api-4c7de22179e2ea95) | Property |
| [`Identity`](#api-6cb80b7cfa19243c) | Property |
| [`Root`](#api-e44083ab7509d2ff) | Property |

## Type declaration

<a id="api-4e36554364566d29"></a>
<!-- api: T:Inno.Build.TaskHosting.TaskRuntimeBootstrapOwner 6c885efa1310f5c64df9c9d750c2741d682ac57330e2a1037baa70c9ece8d88b -->

```csharp
public sealed class Inno.Build.TaskHosting.TaskRuntimeBootstrapOwner : Microsoft.Build.Utilities.Task
```

Claims bootstrap storage before SDK compilation without depending on the full task runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/TaskRuntimeBootstrapOwner.cs#L13).

## `#ctor`

<a id="api-b8337cdb3323d9d9"></a>
<!-- api: M:Inno.Build.TaskHosting.TaskRuntimeBootstrapOwner.#ctor e8d9c89fcf975310aa42199c9caccd7c15f394dd6a435b96571cd2b3ba1809c0 -->

```csharp
public Inno.Build.TaskHosting.TaskRuntimeBootstrapOwner.TaskRuntimeBootstrapOwner()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/TaskRuntimeBootstrapOwner.cs#L13).

## `Execute`

<a id="api-65479adfba3085af"></a>
<!-- api: M:Inno.Build.TaskHosting.TaskRuntimeBootstrapOwner.Execute a92eb78bb503eed207c7e3cc3013c09a0821af431cbe2af8843d596681160a11 -->

```csharp
public override bool Inno.Build.TaskHosting.TaskRuntimeBootstrapOwner.Execute()
```

Establishes ownership through Core.IO; no SDK object or lease enters the Build registry.

**Returns:** True after a new claim, or false with an error before payload compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/TaskRuntimeBootstrapOwner.cs#L45).

## `Directory`

<a id="api-ac8a6472636a0774"></a>
<!-- api: P:Inno.Build.TaskHosting.TaskRuntimeBootstrapOwner.Directory 8ded160ca212b760915954fe9ca6860aa34c7df69bcbfcf57c9ed55f4f80f593 -->

```csharp
public string Inno.Build.TaskHosting.TaskRuntimeBootstrapOwner.Directory { get; private set; }
```

Gets the new process-owned directory whose claim precedes all bootstrap payloads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/TaskRuntimeBootstrapOwner.cs#L37).

## `FoundationAssembly`

<a id="api-4c7de22179e2ea95"></a>
<!-- api: P:Inno.Build.TaskHosting.TaskRuntimeBootstrapOwner.FoundationAssembly 68eb508d0b15d2c62cacbd3e28b2c450b0fd6dc4946db56fbb42d72ba9c47330 -->

```csharp
public string Inno.Build.TaskHosting.TaskRuntimeBootstrapOwner.FoundationAssembly { get; set; }
```

Gets or sets the freshly built Foundation assembly selected by this SDK bootstrap.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/TaskRuntimeBootstrapOwner.cs#L31).

## `Identity`

<a id="api-6cb80b7cfa19243c"></a>
<!-- api: P:Inno.Build.TaskHosting.TaskRuntimeBootstrapOwner.Identity 9d9a33375fdb66a11c1982e7eb507ae212a07a7bba38d609e6905a5b0de6e114 -->

```csharp
public string Inno.Build.TaskHosting.TaskRuntimeBootstrapOwner.Identity { get; set; }
```

Gets or sets the current operation identity already propagated through the project graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/TaskRuntimeBootstrapOwner.cs#L25).

## `Root`

<a id="api-e44083ab7509d2ff"></a>
<!-- api: P:Inno.Build.TaskHosting.TaskRuntimeBootstrapOwner.Root cb738fb5bb94c4605d56ceec74da71011624901a5ec6b4b17be6a21832a2adc6 -->

```csharp
public string Inno.Build.TaskHosting.TaskRuntimeBootstrapOwner.Root { get; set; }
```

Gets or sets the absolute publisher root managed by the standard distribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/TaskRuntimeBootstrapOwner.cs#L19).
