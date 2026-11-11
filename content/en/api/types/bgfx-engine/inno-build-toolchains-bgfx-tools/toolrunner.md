---
title: "ToolRunner"
description: "Reference for ToolRunner in Inno.Build.Toolchains.Bgfx.Tools."
uid: api.inno.build.toolchains.bgfx.tools.aaeacc262300ec5a
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx.Tools
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx-tools
---
# `ToolRunner`

This reference describes `ToolRunner` in `Inno.Build.Toolchains.Bgfx.Tools`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx-tools.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-79496da2b1f29e77) | Method |
| [`#ctor`](#api-a967a3cfdadd3845) | Method |
| [`Run`](#api-d527e22134ad37b1) | Method |
| [`RunAsync`](#api-c5a9cf30dc2459b8) | Method |

## Type declaration

<a id="api-aaeacc262300ec5a"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.Tools.ToolRunner 1a4e2889bf9c9b1ae749d340eff82640ac2e2ee8f9ab1799d92bbf0604a57e6e -->

```csharp
public sealed class Inno.Build.Toolchains.Bgfx.Tools.ToolRunner
```

Runs bgfx tool executables from the native output with argument-safe process invocation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/ToolRunner.cs#L16).

## `#ctor`

<a id="api-79496da2b1f29e77"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.ToolRunner.#ctor(Inno.Build.Toolchains.IToolchainWorkspaceProvider) 672fe51db7891bf8976eececb1ca4868fcf3a934788cf21a5ffa00f5af397f42 -->

```csharp
public Inno.Build.Toolchains.Bgfx.Tools.ToolRunner.ToolRunner(Inno.Build.Toolchains.IToolchainWorkspaceProvider? workspaces = null)
```

Creates a runner for tools explicitly deployed with the current application.
Resolution is deferred until execution; constructing a compiler does not start or discover a process.

**Parameter `workspaces`:** Explicit execution path policy, or null for physical execution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/ToolRunner.cs#L29).

## `#ctor`

<a id="api-a967a3cfdadd3845"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.ToolRunner.#ctor(System.Collections.Generic.IReadOnlyDictionary{Inno.Build.Toolchains.Bgfx.Tools.BgfxTool,System.String},System.String,Inno.Build.Toolchains.IToolchainWorkspaceProvider) 09443ee5106dfa29f929c43269dc131318cfaa0ba4915589d0e511f218f6e631 -->

```csharp
public Inno.Build.Toolchains.Bgfx.Tools.ToolRunner.ToolRunner(System.Collections.Generic.IReadOnlyDictionary<Inno.Build.Toolchains.Bgfx.Tools.BgfxTool, string> executables, string includesDirectory, Inno.Build.Toolchains.IToolchainWorkspaceProvider? workspaces = null)
```

Freezes executables selected and validated by the host's toolchain operation.

**Parameter `executables`:** Tool identities mapped to existing absolute executable paths; the collection is copied.

**Parameter `includesDirectory`:** The absolute shader include directory belonging to the same protected tool product.

**Parameter `workspaces`:** Explicit execution path policy, or null for physical execution.

**Throws `System.ArgumentException`:** An identity is unsupported or an executable path is relative.

**Throws `System.IO.FileNotFoundException`:** A declared executable is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/ToolRunner.cs#L49).

## `Run`

<a id="api-d527e22134ad37b1"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.ToolRunner.Run(Inno.Build.Toolchains.Bgfx.Tools.BgfxTool,System.Collections.Generic.IReadOnlyList{System.String},System.String) 62085ea243d4fc22f5d54cfcc04d4a26d84bf0fcfe17dcecc5629b55f13fc994 -->

```csharp
public Inno.Build.Toolchains.Bgfx.Tools.ToolRunResult Inno.Build.Toolchains.Bgfx.Tools.ToolRunner.Run(Inno.Build.Toolchains.Bgfx.Tools.BgfxTool tool, System.Collections.Generic.IReadOnlyList<string> arguments, string? workingDirectory = null)
```

Executes the configured workflow and returns its process outcome.

**Parameter `tool`:** Tool to execute.

**Parameter `arguments`:** Individual command-line arguments without shell quoting.

**Parameter `workingDirectory`:** Optional working directory; defaults to `System.AppContext.BaseDirectory`.

**Returns:** The exit code and captured output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/ToolRunner.cs#L87).

## `RunAsync`

<a id="api-c5a9cf30dc2459b8"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.ToolRunner.RunAsync(Inno.Build.Toolchains.Bgfx.Tools.BgfxTool,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Threading.CancellationToken) 9599da4c871a263f617abe84b32df793eeacb222187816d786edd5a4d68781f5 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.Bgfx.Tools.ToolRunResult> Inno.Build.Toolchains.Bgfx.Tools.ToolRunner.RunAsync(Inno.Build.Toolchains.Bgfx.Tools.BgfxTool tool, System.Collections.Generic.IReadOnlyList<string> arguments, string? workingDirectory = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Runs the external tool asynchronously and captures its complete process outcome.

**Parameter `tool`:** Tool to execute.

**Parameter `arguments`:** Individual command-line arguments without shell quoting.

**Parameter `workingDirectory`:** Optional working directory; defaults to `System.AppContext.BaseDirectory`.

**Parameter `cancellationToken`:** Cancellation that terminates the child process tree.

**Returns:** The exit code and captured output.

**Throws `System.IO.FileNotFoundException`:** Thrown when the requested bgfx tool cannot be resolved.

**Throws `System.InvalidOperationException`:** Thrown when the native process cannot be started.

**Throws `System.OperationCanceledException`:** Cancellation stopped the process tree and all redirected output has been drained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/ToolRunner.cs#L121).
