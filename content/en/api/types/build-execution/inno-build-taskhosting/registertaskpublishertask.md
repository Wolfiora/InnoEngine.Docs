---
title: "RegisterTaskPublisherTask"
description: "Reference for RegisterTaskPublisherTask in Inno.Build.TaskHosting."
uid: api.inno.build.taskhosting.5be0507a3a95ef62
kind: api
owners:
  - Inno.Build.TaskHosting
apiSurface: source-clr
contracts:
  - project.inno-build-taskhosting
---
# `RegisterTaskPublisherTask`

This reference describes `RegisterTaskPublisherTask` in `Inno.Build.TaskHosting`. Read the [shared contract](../../../projects/inno-build-taskhosting.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Microsoft.Build.Utilities.Task`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-60a8a728a76540d4) | Method |
| [`Execute`](#api-49ae2d2fe2fd7664) | Method |
| [`BootstrapDirectory`](#api-d1b6ba8af37cbce0) | Property |
| [`PublisherDirectory`](#api-f986bbab253e19ec) | Property |
| [`PublisherRoot`](#api-2aca6f43282329b5) | Property |

## Type declaration

<a id="api-5be0507a3a95ef62"></a>
<!-- api: T:Inno.Build.TaskHosting.RegisterTaskPublisherTask 3ef705e4897445289d182a9f1f6e601ac7715020723892d6d68905421c795019 -->

```csharp
public sealed class Inno.Build.TaskHosting.RegisterTaskPublisherTask : Microsoft.Build.Utilities.Task
```

Registers the lightweight publisher's process owner before any task uses its private load directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/RegisterTaskPublisherTask.cs#L12).

## `#ctor`

<a id="api-60a8a728a76540d4"></a>
<!-- api: M:Inno.Build.TaskHosting.RegisterTaskPublisherTask.#ctor 2039ab855039cd8fd80d80b08ffc0869fe7a90ba4933810e1f1ea7e3383e0825 -->

```csharp
public Inno.Build.TaskHosting.RegisterTaskPublisherTask.RegisterTaskPublisherTask()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/RegisterTaskPublisherTask.cs#L12).

## `Execute`

<a id="api-49ae2d2fe2fd7664"></a>
<!-- api: M:Inno.Build.TaskHosting.RegisterTaskPublisherTask.Execute 3fca9448756f3a0ea0b47f58ae02251597a3c8a4c85c465723457cbf23216bcd -->

```csharp
public override bool Inno.Build.TaskHosting.RegisterTaskPublisherTask.Execute()
```

Records ownership using the same protocol as full task-runtime publication.

**Returns:** True after recording the current process, or false after reporting an invalid owner or IO failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/RegisterTaskPublisherTask.cs#L39).

## `BootstrapDirectory`

<a id="api-d1b6ba8af37cbce0"></a>
<!-- api: P:Inno.Build.TaskHosting.RegisterTaskPublisherTask.BootstrapDirectory 907b600532607423af1e90701c2146678198e12b6d53941e4be04dd39fb5a543 -->

```csharp
public string Inno.Build.TaskHosting.RegisterTaskPublisherTask.BootstrapDirectory { get; set; }
```

Gets or sets the operation-owned compilation directory shared by publishers in this project invocation.
This directory is never used as a task assembly load location.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/RegisterTaskPublisherTask.cs#L31).

## `PublisherDirectory`

<a id="api-f986bbab253e19ec"></a>
<!-- api: P:Inno.Build.TaskHosting.RegisterTaskPublisherTask.PublisherDirectory 7d9cfb56c8722f2053168c56edf1998f38a1387c0c3ba38dbbf7c33b2294e52a -->

```csharp
public string Inno.Build.TaskHosting.RegisterTaskPublisherTask.PublisherDirectory { get; set; }
```

Gets or sets the private configuration directory whose assembly was loaded for this invocation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/RegisterTaskPublisherTask.cs#L24).

## `PublisherRoot`

<a id="api-2aca6f43282329b5"></a>
<!-- api: P:Inno.Build.TaskHosting.RegisterTaskPublisherTask.PublisherRoot 2c0906caba9977a8082e3fd499c42fc8051fdbf91bf00c14cce2e0bcc5fef933 -->

```csharp
public string Inno.Build.TaskHosting.RegisterTaskPublisherTask.PublisherRoot { get; set; }
```

Gets or sets the registered cache root containing private publisher directories.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/RegisterTaskPublisherTask.cs#L18).
