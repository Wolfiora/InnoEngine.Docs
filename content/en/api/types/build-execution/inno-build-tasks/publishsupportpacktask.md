---
title: "PublishSupportPackTask"
description: "Reference for PublishSupportPackTask in Inno.Build.Tasks."
uid: api.inno.build.tasks.8c2e8f3c7f71bbe4
kind: api
owners:
  - Inno.Build.Tasks
apiSurface: source-clr
contracts:
  - project.inno-build-tasks
---
# `PublishSupportPackTask`

This reference describes `PublishSupportPackTask` in `Inno.Build.Tasks`. Read the [shared contract](../../../projects/inno-build-tasks.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Microsoft.Build.Utilities.Task`.

**Direct interfaces:** `Microsoft.Build.Framework.ICancelableTask`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-eb6353f8d53da889) | Method |
| [`Cancel`](#api-c2cc3ab11edf1284) | Method |
| [`Execute`](#api-340855085dd8722b) | Method |
| [`DotnetHost`](#api-cd3d0b94e175c13c) | Property |
| [`EngineRoot`](#api-40bae46b53808cd2) | Property |
| [`OutputRoot`](#api-0574e0cdd7b940fd) | Property |
| [`Target`](#api-7c02113ae29f3bb8) | Property |
| [`ToolTarget`](#api-8ee71db1117460e4) | Property |

## Type declaration

<a id="api-8c2e8f3c7f71bbe4"></a>
<!-- api: T:Inno.Build.Tasks.PublishSupportPackTask afb7c65f60b0a8f3964a13d725462ebeb09360afa879863eff93e0fb01e0a4ac -->

```csharp
public sealed class Inno.Build.Tasks.PublishSupportPackTask : Microsoft.Build.Utilities.Task, Microsoft.Build.Framework.ICancelableTask
```

Connects MSBuild publication to the common atomic Support Pack publisher.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PublishSupportPackTask.cs#L17).

## `#ctor`

<a id="api-eb6353f8d53da889"></a>
<!-- api: M:Inno.Build.Tasks.PublishSupportPackTask.#ctor 4e1d97a6c9b454101630af2574fbb21bf337ba058d75e6dcf10be889c53aa83c -->

```csharp
public Inno.Build.Tasks.PublishSupportPackTask.PublishSupportPackTask()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PublishSupportPackTask.cs#L17).

## `Cancel`

<a id="api-c2cc3ab11edf1284"></a>
<!-- api: M:Inno.Build.Tasks.PublishSupportPackTask.Cancel 4ed313b958d440c7b332188b188958a8d2c3802dc6cf47e183009d370c5e063b -->

```csharp
public void Inno.Build.Tasks.PublishSupportPackTask.Cancel()
```

Requests cancellation before or during execution without racing disposal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PublishSupportPackTask.cs#L95).

## `Execute`

<a id="api-340855085dd8722b"></a>
<!-- api: M:Inno.Build.Tasks.PublishSupportPackTask.Execute d560b8eb68d4d2c71db2a345c8a6453c1c2fc159d3fa0ac59247c2602d07c02a -->

```csharp
public override bool Inno.Build.Tasks.PublishSupportPackTask.Execute()
```

Publishes and validates the target pack, reporting failures through MSBuild.

**Returns:** True after installation; false when publication fails or is canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PublishSupportPackTask.cs#L58).

## `DotnetHost`

<a id="api-cd3d0b94e175c13c"></a>
<!-- api: P:Inno.Build.Tasks.PublishSupportPackTask.DotnetHost 6d3632deaede563157464c9b62227f7a6376a40cc24be084209760a499194614 -->

```csharp
public string Inno.Build.Tasks.PublishSupportPackTask.DotnetHost { get; set; }
```

Gets or sets the SDK host executable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PublishSupportPackTask.cs#L44).

## `EngineRoot`

<a id="api-40bae46b53808cd2"></a>
<!-- api: P:Inno.Build.Tasks.PublishSupportPackTask.EngineRoot 62b4837658cdd6d0c46675dac36f90a40df50adb812e435929ad029ea2c1e453 -->

```csharp
public string Inno.Build.Tasks.PublishSupportPackTask.EngineRoot { get; set; }
```

Gets or sets the engine checkout directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PublishSupportPackTask.cs#L27).

## `OutputRoot`

<a id="api-0574e0cdd7b940fd"></a>
<!-- api: P:Inno.Build.Tasks.PublishSupportPackTask.OutputRoot 055794987c03c7d294d5c8fa755b269197002815f8a087194cf8a31ecb3f226f -->

```csharp
public string Inno.Build.Tasks.PublishSupportPackTask.OutputRoot { get; set; }
```

Gets or sets the directory owning installed target packs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PublishSupportPackTask.cs#L33).

## `Target`

<a id="api-7c02113ae29f3bb8"></a>
<!-- api: P:Inno.Build.Tasks.PublishSupportPackTask.Target 13c85b1db754fe83bf44a772e4848640a8ea59fd8d4dfea9d38303ba01a5fe66 -->

```csharp
public string Inno.Build.Tasks.PublishSupportPackTask.Target { get; set; }
```

Gets or sets the requested build target identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PublishSupportPackTask.cs#L39).

## `ToolTarget`

<a id="api-8ee71db1117460e4"></a>
<!-- api: P:Inno.Build.Tasks.PublishSupportPackTask.ToolTarget 773c3baf90f3a29102b99ce14aa6e31c32e5c4f8711d6e0f21dd2f6c2a874219 -->

```csharp
public string Inno.Build.Tasks.PublishSupportPackTask.ToolTarget { get; set; }
```

Gets or sets the independently selected native target for executable compilation tools.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PublishSupportPackTask.cs#L50).
