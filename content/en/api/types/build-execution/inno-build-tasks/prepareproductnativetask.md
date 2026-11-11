---
title: "PrepareProductNativeTask"
description: "Reference for PrepareProductNativeTask in Inno.Build.Tasks."
uid: api.inno.build.tasks.90feb81b27588db9
kind: api
owners:
  - Inno.Build.Tasks
apiSurface: source-clr
contracts:
  - project.inno-build-tasks
---
# `PrepareProductNativeTask`

This reference describes `PrepareProductNativeTask` in `Inno.Build.Tasks`. Read the [shared contract](../../../projects/inno-build-tasks.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Microsoft.Build.Utilities.Task`.

**Direct interfaces:** `Microsoft.Build.Framework.ICancelableTask`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7bed92c629f73bb2) | Method |
| [`Cancel`](#api-0b337b5b1b0c5708) | Method |
| [`Execute`](#api-b8ca781d2842b2bf) | Method |
| [`BindingSelectionInputPath`](#api-be26d4b8d714e351) | Property |
| [`BindingSelectionOutputPath`](#api-3c90fc6208778207) | Property |
| [`Configuration`](#api-b480f403e77a86d1) | Property |
| [`EngineRoot`](#api-e7cf1daf35a50c42) | Property |
| [`OutputDirectory`](#api-3d71b74537f79659) | Property |
| [`ProductId`](#api-1d019d5a3b1dffca) | Property |
| [`TargetId`](#api-a11fccffcf2147ca) | Property |

## Type declaration

<a id="api-90feb81b27588db9"></a>
<!-- api: T:Inno.Build.Tasks.PrepareProductNativeTask 55efeac7cb8b6103a78d1e9e245696398b156d9a054bc9030919d2665a3b9b5f -->

```csharp
public sealed class Inno.Build.Tasks.PrepareProductNativeTask : Microsoft.Build.Utilities.Task, Microsoft.Build.Framework.ICancelableTask
```

Connects explicit product builds and publication to their target-native closure and exact deployment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PrepareProductNativeTask.cs#L20).

## `#ctor`

<a id="api-7bed92c629f73bb2"></a>
<!-- api: M:Inno.Build.Tasks.PrepareProductNativeTask.#ctor 3f6cb457d27201c9feacf6a352fdce8fd594d2357f4798bab751017497fe204a -->

```csharp
public Inno.Build.Tasks.PrepareProductNativeTask.PrepareProductNativeTask()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PrepareProductNativeTask.cs#L20).

## `Cancel`

<a id="api-0b337b5b1b0c5708"></a>
<!-- api: M:Inno.Build.Tasks.PrepareProductNativeTask.Cancel 1836685d1d740271593d145b676374ac6faa86c1ba5296b35ad94fecaa82f820 -->

```csharp
public void Inno.Build.Tasks.PrepareProductNativeTask.Cancel()
```

Requests process-tree retirement before or during task execution without racing token disposal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PrepareProductNativeTask.cs#L174).

## `Execute`

<a id="api-b8ca781d2842b2bf"></a>
<!-- api: M:Inno.Build.Tasks.PrepareProductNativeTask.Execute 9c0769b983bdde9b656a1f61ee0ca06dcfc3c42785e00d2721438996c27b2e97 -->

```csharp
public override bool Inno.Build.Tasks.PrepareProductNativeTask.Execute()
```

Prepares all host-native products and installs their exact closure after successful validation.

**Returns:** True after deployment, or false after reporting a build failure or cancellation to MSBuild.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PrepareProductNativeTask.cs#L72).

## `BindingSelectionInputPath`

<a id="api-be26d4b8d714e351"></a>
<!-- api: P:Inno.Build.Tasks.PrepareProductNativeTask.BindingSelectionInputPath acda8cb7514bcba45495d508f6c76afa86593abcc33e6cf865206933a8a21686 -->

```csharp
public string Inno.Build.Tasks.PrepareProductNativeTask.BindingSelectionInputPath { get; set; }
```

Gets or sets the managed build's frozen selection that publication must preserve before deployment.
An empty value denotes initial preparation without a preceding managed compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PrepareProductNativeTask.cs#L64).

## `BindingSelectionOutputPath`

<a id="api-3c90fc6208778207"></a>
<!-- api: P:Inno.Build.Tasks.PrepareProductNativeTask.BindingSelectionOutputPath d4dd4420898a681b95ec745832ae05c588982a65dedc21d74c5a29826f94ddc9 -->

```csharp
public string Inno.Build.Tasks.PrepareProductNativeTask.BindingSelectionOutputPath { get; set; }
```

Gets or sets an optional operation-owned selection consumed by the subsequent managed project closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PrepareProductNativeTask.cs#L58).

## `Configuration`

<a id="api-b480f403e77a86d1"></a>
<!-- api: P:Inno.Build.Tasks.PrepareProductNativeTask.Configuration 975731c6c2c6c2f7137caed7cd982ce11cc0c863872a25beb4e531eb1a2bc2e4 -->

```csharp
public string Inno.Build.Tasks.PrepareProductNativeTask.Configuration { get; set; }
```

Gets or sets the debug or release configuration used by the managed application.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PrepareProductNativeTask.cs#L53).

## `EngineRoot`

<a id="api-e7cf1daf35a50c42"></a>
<!-- api: P:Inno.Build.Tasks.PrepareProductNativeTask.EngineRoot a80af1a12910d8c1215a898ba93d22363a51f92a9cb0421732771cdc80334149 -->

```csharp
public string Inno.Build.Tasks.PrepareProductNativeTask.EngineRoot { get; set; }
```

Gets or sets the source checkout containing the unified native toolchains.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PrepareProductNativeTask.cs#L30).

## `OutputDirectory`

<a id="api-3d71b74537f79659"></a>
<!-- api: P:Inno.Build.Tasks.PrepareProductNativeTask.OutputDirectory 17f7f369c896945157f2f1a6e02dd6271473aa38a555c4763da1df0e2b0f92b4 -->

```csharp
public string Inno.Build.Tasks.PrepareProductNativeTask.OutputDirectory { get; set; }
```

Gets or sets the managed application directory receiving the complete native deployment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PrepareProductNativeTask.cs#L36).

## `ProductId`

<a id="api-1d019d5a3b1dffca"></a>
<!-- api: P:Inno.Build.Tasks.PrepareProductNativeTask.ProductId 29fd2b41ad62d4fdb80b86e4b0c9e847c2110c6c6a59b858d46f3d10f0aaa64d -->

```csharp
public string Inno.Build.Tasks.PrepareProductNativeTask.ProductId { get; set; }
```

Gets or sets the exact product identity whose component closure must be prepared.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PrepareProductNativeTask.cs#L42).

## `TargetId`

<a id="api-a11fccffcf2147ca"></a>
<!-- api: P:Inno.Build.Tasks.PrepareProductNativeTask.TargetId ff6a327ebf667b6491656edbebd2c0a5f8876b2fb3d4ea6476163a6d76f57bbc -->

```csharp
public string Inno.Build.Tasks.PrepareProductNativeTask.TargetId { get; set; }
```

Gets or sets the explicitly declared product target, independent of the task execution machine.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/PrepareProductNativeTask.cs#L48).
