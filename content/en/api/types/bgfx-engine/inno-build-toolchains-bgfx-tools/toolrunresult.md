---
title: "ToolRunResult"
description: "Reference for ToolRunResult in Inno.Build.Toolchains.Bgfx.Tools."
uid: api.inno.build.toolchains.bgfx.tools.72b18b2236d3c5a8
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx.Tools
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx-tools
---
# `ToolRunResult`

This reference describes `ToolRunResult` in `Inno.Build.Toolchains.Bgfx.Tools`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx-tools.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7e994d0b146b431d) | Method |
| [`exitCode`](#api-872f664ce9ddbea4) | Property |
| [`standardError`](#api-65406d4e05c85e31) | Property |
| [`standardOutput`](#api-377eb5e56a748d74) | Property |
| [`succeeded`](#api-72f03983ef338d50) | Property |

## Type declaration

<a id="api-72b18b2236d3c5a8"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.Tools.ToolRunResult 0ba8f09f6aa78bc1f218c249ca9e2533846b7b1d6c3a522002fe3acc20163ade -->

```csharp
public sealed class Inno.Build.Toolchains.Bgfx.Tools.ToolRunResult
```

Contains the immutable result of one bgfx tool invocation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/ToolRunResult.cs#L6).

## `#ctor`

<a id="api-7e994d0b146b431d"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.ToolRunResult.#ctor(System.Int32,System.String,System.String) 9cabb2ad50916e2e99c68acdfe4127871abe3836a8b163a29d32bfb99ad0be15 -->

```csharp
public Inno.Build.Toolchains.Bgfx.Tools.ToolRunResult.ToolRunResult(int exitCode, string standardOutput, string standardError)
```

Creates a tool invocation result.

**Parameter `exitCode`:** Native process exit code.

**Parameter `standardOutput`:** Captured standard output.

**Parameter `standardError`:** Captured standard error.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/ToolRunResult.cs#L20).

## `exitCode`

<a id="api-872f664ce9ddbea4"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Tools.ToolRunResult.exitCode 0b50e8d4391911bed3d299d3c9a9c1168397a6684a5dc4479ca4847b8bb1ff67 -->

```csharp
public int Inno.Build.Toolchains.Bgfx.Tools.ToolRunResult.exitCode { get; }
```

Gets the native process exit code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/ToolRunResult.cs#L33).

## `standardError`

<a id="api-65406d4e05c85e31"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Tools.ToolRunResult.standardError 407416fab6e6232da1c97fb9538837a02fdec246a4ade4cf20e6499afd8fb757 -->

```csharp
public string Inno.Build.Toolchains.Bgfx.Tools.ToolRunResult.standardError { get; }
```

Gets captured standard error.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/ToolRunResult.cs#L43).

## `standardOutput`

<a id="api-377eb5e56a748d74"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Tools.ToolRunResult.standardOutput 750011102f7c3bfcb9281df1d97a85452194e3322bb2fe4053c7f5f94067560e -->

```csharp
public string Inno.Build.Toolchains.Bgfx.Tools.ToolRunResult.standardOutput { get; }
```

Gets captured standard output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/ToolRunResult.cs#L38).

## `succeeded`

<a id="api-72f03983ef338d50"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Tools.ToolRunResult.succeeded 75fdcc6dda56ed343621d194eb06b7dcb5f8c311e4906bbe7cd32316e42d9655 -->

```csharp
public bool Inno.Build.Toolchains.Bgfx.Tools.ToolRunResult.succeeded { get; }
```

Gets whether the tool exited successfully.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/ToolRunResult.cs#L48).
