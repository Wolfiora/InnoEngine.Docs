---
title: "PublishTaskHostTask"
description: "Reference for PublishTaskHostTask in Inno.Build.TaskHosting."
uid: api.inno.build.taskhosting.16b3e5e4461b4feb
kind: api
owners:
  - Inno.Build.TaskHosting
apiSurface: source-clr
contracts:
  - project.inno-build-taskhosting
---
# `PublishTaskHostTask`

This reference describes `PublishTaskHostTask` in `Inno.Build.TaskHosting`. Read the [shared contract](../../../projects/inno-build-taskhosting.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Microsoft.Build.Utilities.Task`.

**Direct interfaces:** `Microsoft.Build.Framework.ICancelableTask`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-64a83f71a923936b) | Method |
| [`Cancel`](#api-c66051fe232266e1) | Method |
| [`Execute`](#api-8134b8f157f6c713) | Method |
| [`CacheDirectory`](#api-100a520324c68aca) | Property |
| [`InputFiles`](#api-1a63ce224cb7903e) | Property |
| [`LoadDirectory`](#api-0d9ad49213c70af8) | Property |
| [`PublishedAssembly`](#api-6465ee9dda416a69) | Property |
| [`PublisherDirectory`](#api-89c47e64b5a8aabe) | Property |

## Type declaration

<a id="api-16b3e5e4461b4feb"></a>
<!-- api: T:Inno.Build.TaskHosting.PublishTaskHostTask d696247cb076b034b2bba04aa92df91512535af9f1f4f1d312c6eaf9322d75f6 -->

```csharp
public sealed class Inno.Build.TaskHosting.PublishTaskHostTask : Microsoft.Build.Utilities.Task, Microsoft.Build.Framework.ICancelableTask
```

Publishes one immutable task runtime per content identity before a build loads its private closure.
This bootstrap depends only on filesystem primitives and never loads the task runtime being built.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/PublishTaskHostTask.cs#L19).

## `#ctor`

<a id="api-64a83f71a923936b"></a>
<!-- api: M:Inno.Build.TaskHosting.PublishTaskHostTask.#ctor ab62439019e01cf1583686f2f480c1911935374c9f901092e08c29aa672fd9e0 -->

```csharp
public Inno.Build.TaskHosting.PublishTaskHostTask.PublishTaskHostTask()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/PublishTaskHostTask.cs#L19).

## `Cancel`

<a id="api-c66051fe232266e1"></a>
<!-- api: M:Inno.Build.TaskHosting.PublishTaskHostTask.Cancel 8a9d2bb9fc1142a94f4aa1f3e67e75fb9c6561c26148297fd81015f7b592ffd5 -->

```csharp
public void Inno.Build.TaskHosting.PublishTaskHostTask.Cancel()
```

Cancels ownership waits and unpublished copies without racing token retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/PublishTaskHostTask.cs#L127).

## `Execute`

<a id="api-8134b8f157f6c713"></a>
<!-- api: M:Inno.Build.TaskHosting.PublishTaskHostTask.Execute fd847577c17f7763f8fe20514f57f793aa82ac903aa798e8b169f47d2eb9b9f0 -->

```csharp
public override bool Inno.Build.TaskHosting.PublishTaskHostTask.Execute()
```

Verifies sources and cached files, publishes a complete candidate under exclusive ownership,
and registers the private reader before returning its shared runtime.

**Returns:** True when a complete runtime was published or reused; false with a logged error otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/PublishTaskHostTask.cs#L62).

## `CacheDirectory`

<a id="api-100a520324c68aca"></a>
<!-- api: P:Inno.Build.TaskHosting.PublishTaskHostTask.CacheDirectory 66167aae3f49adc96c623dad87a6f189c65ac6353baadca5230c3642e2a1464e -->

```csharp
public string Inno.Build.TaskHosting.PublishTaskHostTask.CacheDirectory { get; set; }
```

Gets or sets the absolute owner of content-addressed, shared task runtime snapshots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/PublishTaskHostTask.cs#L35).

## `InputFiles`

<a id="api-1a63ce224cb7903e"></a>
<!-- api: P:Inno.Build.TaskHosting.PublishTaskHostTask.InputFiles 33b622830609c165b4b6560c0ffcfb2f3a14a6d184d8ccb065fdbb84af5bf106 -->

```csharp
public Microsoft.Build.Framework.ITaskItem[] Inno.Build.TaskHosting.PublishTaskHostTask.InputFiles { get; set; }
```

Gets or sets the frozen runtime files, each declaring RelativePath and FileHash metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/PublishTaskHostTask.cs#L29).

## `LoadDirectory`

<a id="api-0d9ad49213c70af8"></a>
<!-- api: P:Inno.Build.TaskHosting.PublishTaskHostTask.LoadDirectory f270466b8fe028ad1cd52f20ada58f0200881b2bcaf7ba768d80055186b048f3 -->

```csharp
public string Inno.Build.TaskHosting.PublishTaskHostTask.LoadDirectory { get; set; }
```

Gets or sets the absolute private load directory whose parent receives this process's ownership marker.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/PublishTaskHostTask.cs#L41).

## `PublishedAssembly`

<a id="api-6465ee9dda416a69"></a>
<!-- api: P:Inno.Build.TaskHosting.PublishTaskHostTask.PublishedAssembly 06aa075e1c39e2656c4814cbaab92dc8f41cd64bc629d66cb84a34fa6f2814f5 -->

```csharp
public string Inno.Build.TaskHosting.PublishTaskHostTask.PublishedAssembly { get; private set; }
```

Gets the verified immutable task assembly path after successful publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/PublishTaskHostTask.cs#L53).

## `PublisherDirectory`

<a id="api-89c47e64b5a8aabe"></a>
<!-- api: P:Inno.Build.TaskHosting.PublishTaskHostTask.PublisherDirectory 2c6d4e5b4b18e74f47788a47936b04fe03fa1eec999675026dda108e9f4989a8 -->

```csharp
public string Inno.Build.TaskHosting.PublishTaskHostTask.PublisherDirectory { get; set; }
```

Gets or sets an optional private bootstrap directory to register under the same process ownership.
An empty value leaves the caller's publisher assembly lifetime outside this cache.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/PublishTaskHostTask.cs#L47).
