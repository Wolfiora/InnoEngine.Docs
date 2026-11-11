---
title: "MonoWasmDeploymentCompiler"
description: "Reference for MonoWasmDeploymentCompiler in Inno.Build.Managed.DotNet."
uid: api.inno.build.managed.dotnet.0b153a76603c4de3
kind: api
owners:
  - Inno.Build.Managed.DotNet
apiSurface: source-clr
contracts:
  - project.inno-build-managed-dotnet
---
# `MonoWasmDeploymentCompiler`

This reference describes `MonoWasmDeploymentCompiler` in `Inno.Build.Managed.DotNet`. Read the [shared contract](../../../projects/inno-build-managed-dotnet.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.Managed.IManagedDeploymentCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-411a291ab9a337ed) | Method |
| [`CompileAsync`](#api-d31544a639775d37) | Method |
| [`capabilities`](#api-d0820d7192553b21) | Property |
| [`id`](#api-b5a48ed5e854f36e) | Property |

## Type declaration

<a id="api-0b153a76603c4de3"></a>
<!-- api: T:Inno.Build.Managed.DotNet.MonoWasmDeploymentCompiler abde8d30e97fe4bd7aac8a6266c0006b025280dc0f61591712690a969d888c7d -->

```csharp
public sealed class Inno.Build.Managed.DotNet.MonoWasmDeploymentCompiler : Inno.Build.Managed.IManagedDeploymentCompiler
```

Publishes explicitly linked code through the SDK's Mono WebAssembly interpreter or AOT toolchain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/build/Inno.Build.Managed.DotNet/WebAssembly/MonoWasmDeploymentCompiler.cs#L12).

## `#ctor`

<a id="api-411a291ab9a337ed"></a>
<!-- api: M:Inno.Build.Managed.DotNet.MonoWasmDeploymentCompiler.#ctor(System.String,System.Collections.Generic.IReadOnlyList{System.String},Inno.Build.Toolchains.IToolchainWorkspaceProvider,System.Boolean) bd1876b731fcf93230f2d072c376d8a7281912dc727fa89fee0aabe3183e3a87 -->

```csharp
public Inno.Build.Managed.DotNet.MonoWasmDeploymentCompiler.MonoWasmDeploymentCompiler(string hostPath, System.Collections.Generic.IReadOnlyList<string> runtimeIdentifiers, Inno.Build.Toolchains.IToolchainWorkspaceProvider workspaces, bool aheadOfTime)
```

Selects the project-scoped SDK host and one explicit compilation policy.

**Parameter `hostPath`:** The .NET executable whose project resolution selects the matching WebAssembly workload.

**Parameter `aheadOfTime`:** Whether managed code is compiled ahead of browser execution.

**Parameter `runtimeIdentifiers`:** The platform-contributed managed targets authorized for this implementation.

**Parameter `workspaces`:** The explicit host execution path provider.

**Throws `System.ArgumentException`:** The SDK host is empty or runtime targets are empty, unassigned, or repeated.

**Throws `System.ArgumentNullException`:** The target collection or workspace provider is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/build/Inno.Build.Managed.DotNet/WebAssembly/MonoWasmDeploymentCompiler.cs#L39).

## `CompileAsync`

<a id="api-d31544a639775d37"></a>
<!-- api: M:Inno.Build.Managed.DotNet.MonoWasmDeploymentCompiler.CompileAsync(Inno.Build.Managed.ManagedDeploymentRequest,System.Threading.CancellationToken) 375c3a3f8efed24fc7119483f6b22a94bf139988c0bd3b6cd7468070172e7209 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.Managed.ManagedDeploymentResult> Inno.Build.Managed.DotNet.MonoWasmDeploymentCompiler.CompileAsync(Inno.Build.Managed.ManagedDeploymentRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Compiles or publishes the prepared code closure into isolated managed staging.

**Parameter `request`:** The immutable prepared project, target, frozen inputs and staging locations.

**Parameter `cancellationToken`:** Cancels the publisher and waits for its process tree and output readers to retire.

**Returns:** Verified output evidence; failed or canceled publication never returns a successful result.

**Throws `System.InvalidOperationException`:** The target is unsupported, required toolchain inputs are absent, or publication fails.

**Throws `System.OperationCanceledException`:** Publication was canceled and all owned work has stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/build/Inno.Build.Managed.DotNet/WebAssembly/MonoWasmDeploymentCompiler.cs#L61).

## `capabilities`

<a id="api-d0820d7192553b21"></a>
<!-- api: P:Inno.Build.Managed.DotNet.MonoWasmDeploymentCompiler.capabilities 489c1cb44973092851846c52e45f8a62e5479cebdf6356a0b245b6e998d411f6 -->

```csharp
public Inno.Build.Managed.ManagedDeploymentCapabilities Inno.Build.Managed.DotNet.MonoWasmDeploymentCompiler.capabilities { get; }
```

Gets the provider's actual target and execution capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/build/Inno.Build.Managed.DotNet/WebAssembly/MonoWasmDeploymentCompiler.cs#L58).

## `id`

<a id="api-b5a48ed5e854f36e"></a>
<!-- api: P:Inno.Build.Managed.DotNet.MonoWasmDeploymentCompiler.id cbcec7fbfa3ab59b5c4e46ece3b85dedcd9e6c3eed6df998ef46af092b39f1c5 -->

```csharp
public Inno.Build.Managed.ManagedDeploymentId Inno.Build.Managed.DotNet.MonoWasmDeploymentCompiler.id { get; }
```

Gets the open stable implementation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/build/Inno.Build.Managed.DotNet/WebAssembly/MonoWasmDeploymentCompiler.cs#L55).
