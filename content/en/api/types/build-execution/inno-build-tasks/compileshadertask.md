---
title: "CompileShaderTask"
description: "Reference for CompileShaderTask in Inno.Build.Tasks."
uid: api.inno.build.tasks.b386a65d470033c7
kind: api
owners:
  - Inno.Build.Tasks
apiSurface: source-clr
contracts:
  - project.inno-build-tasks
---
# `CompileShaderTask`

This reference describes `CompileShaderTask` in `Inno.Build.Tasks`. Read the [shared contract](../../../projects/inno-build-tasks.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Microsoft.Build.Utilities.Task`.

**Direct interfaces:** `Microsoft.Build.Framework.ICancelableTask`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2e282983370f3b9a) | Method |
| [`Cancel`](#api-3e843d7bc51c1d99) | Method |
| [`Execute`](#api-ca9d1529950eaad3) | Method |
| [`AssetRoot`](#api-4cc2a6806019a2cd) | Property |
| [`Configuration`](#api-21957baa84608a49) | Property |
| [`EngineRoot`](#api-e944b3105e31d7b3) | Property |
| [`OutputFile`](#api-cd302b54af465f25) | Property |
| [`Renderer`](#api-c2071a8cc41cac44) | Property |
| [`ShaderPath`](#api-58d4eb4f091bffbf) | Property |
| [`Target`](#api-afd1629572f60a51) | Property |
| [`ToolTarget`](#api-88d5c566bc444191) | Property |

## Type declaration

<a id="api-b386a65d470033c7"></a>
<!-- api: T:Inno.Build.Tasks.CompileShaderTask c39e8f59c784fa4571af87fdf3d4eebf9b3edc15c26d77418b1b18f6140f3f94 -->

```csharp
public sealed class Inno.Build.Tasks.CompileShaderTask : Microsoft.Build.Utilities.Task, Microsoft.Build.Framework.ICancelableTask
```

Connects MSBuild to the same graph compiler used by the unified build workflow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/CompileShaderTask.cs#L22).

## `#ctor`

<a id="api-2e282983370f3b9a"></a>
<!-- api: M:Inno.Build.Tasks.CompileShaderTask.#ctor e768f0db28186b6552c40b2e640cbe1bba4b70dec0e5b0e22080ccaf60376ada -->

```csharp
public Inno.Build.Tasks.CompileShaderTask.CompileShaderTask()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/CompileShaderTask.cs#L22).

## `Cancel`

<a id="api-3e843d7bc51c1d99"></a>
<!-- api: M:Inno.Build.Tasks.CompileShaderTask.Cancel 5507f05d49118d4161d95555b2dc2af93316fdf5ec8f7ce6018c90a0c15277f7 -->

```csharp
public void Inno.Build.Tasks.CompileShaderTask.Cancel()
```

Cancels offline tool preparation and prevents publication of newly prepared tool products.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/CompileShaderTask.cs#L118).

## `Execute`

<a id="api-ca9d1529950eaad3"></a>
<!-- api: M:Inno.Build.Tasks.CompileShaderTask.Execute 12cca3ab6d3604126c62a0e36743ef22f1df95ed0e56b484c3fc6bc529fd141b -->

```csharp
public override bool Inno.Build.Tasks.CompileShaderTask.Execute()
```

Compiles the requested graph artifact and reports compilation failures through MSBuild.

**Returns:** True after writing the artifact; false when validation or compilation fails.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/CompileShaderTask.cs#L83).

## `AssetRoot`

<a id="api-4cc2a6806019a2cd"></a>
<!-- api: P:Inno.Build.Tasks.CompileShaderTask.AssetRoot 88c9d2fc78392d450dee66e56c9bd6558c1576278586867bfc67afa551fca468 -->

```csharp
public string Inno.Build.Tasks.CompileShaderTask.AssetRoot { get; set; }
```

Gets or sets the authoring source directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/CompileShaderTask.cs#L43).

## `Configuration`

<a id="api-21957baa84608a49"></a>
<!-- api: P:Inno.Build.Tasks.CompileShaderTask.Configuration 1ab66675d82182d5d3a85457a80cef012a4e58866258f324a785639bd03b1fa1 -->

```csharp
public string Inno.Build.Tasks.CompileShaderTask.Configuration { get; set; }
```

Gets or sets the managed and native tool configuration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/CompileShaderTask.cs#L37).

## `EngineRoot`

<a id="api-e944b3105e31d7b3"></a>
<!-- api: P:Inno.Build.Tasks.CompileShaderTask.EngineRoot 2d7a1e65a459c9c0d03810d863d005ee7f74fa6f9356ec6b7a98edb154b8c3b6 -->

```csharp
public string Inno.Build.Tasks.CompileShaderTask.EngineRoot { get; set; }
```

Gets or sets the checkout whose native offline tools must match this build.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/CompileShaderTask.cs#L32).

## `OutputFile`

<a id="api-cd302b54af465f25"></a>
<!-- api: P:Inno.Build.Tasks.CompileShaderTask.OutputFile e3e2374357adc2c0ba1e98da55f8cf04feff6a33a69718b6fdffc11ffb9e1663 -->

```csharp
public string Inno.Build.Tasks.CompileShaderTask.OutputFile { get; set; }
```

Gets or sets the compiled file inside an owned Outputs subdirectory.
Its parent artifact directory is validated and atomically published with a content manifest.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/CompileShaderTask.cs#L75).

## `Renderer`

<a id="api-c2071a8cc41cac44"></a>
<!-- api: P:Inno.Build.Tasks.CompileShaderTask.Renderer ad2c8c4658abb86ca7a1c1f33a3339c7ffa03063f69eb7513102bc72dc9b05d2 -->

```csharp
public string Inno.Build.Tasks.CompileShaderTask.Renderer { get; set; }
```

Gets or sets the graphics API identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/CompileShaderTask.cs#L68).

## `ShaderPath`

<a id="api-58d4eb4f091bffbf"></a>
<!-- api: P:Inno.Build.Tasks.CompileShaderTask.ShaderPath d4c5b1d62a8fede93cf80bb17bf77b015deb4da77031518bda5cce26cc27b337 -->

```csharp
public string Inno.Build.Tasks.CompileShaderTask.ShaderPath { get; set; }
```

Gets or sets the source-local shader graph path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/CompileShaderTask.cs#L49).

## `Target`

<a id="api-afd1629572f60a51"></a>
<!-- api: P:Inno.Build.Tasks.CompileShaderTask.Target b79bea8a0b61e05c1d0a8d5c44bb022cfc5bc92788175ace1ee9019a55299f78 -->

```csharp
public string Inno.Build.Tasks.CompileShaderTask.Target { get; set; }
```

Gets or sets the graphics compiler target platform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/CompileShaderTask.cs#L55).

## `ToolTarget`

<a id="api-88d5c566bc444191"></a>
<!-- api: P:Inno.Build.Tasks.CompileShaderTask.ToolTarget cdbc752af84fb3a27546a5c0750369230f677fa3ae2acf24ddecc12b0720f4e4 -->

```csharp
public string Inno.Build.Tasks.CompileShaderTask.ToolTarget { get; set; }
```

Gets or sets the explicit native target of the offline compiler executed by this task.
This selection is independent of the shader artifact target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/CompileShaderTask.cs#L62).
