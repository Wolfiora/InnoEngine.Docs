---
title: "NativeAotDeploymentCompiler"
description: "Reference for NativeAotDeploymentCompiler in Inno.Build.Managed.DotNet."
uid: api.inno.build.managed.dotnet.e0f574edd36fed16
kind: api
owners:
  - Inno.Build.Managed.DotNet
apiSurface: source-clr
contracts:
  - project.inno-build-managed-dotnet
---
# `NativeAotDeploymentCompiler`

This reference describes `NativeAotDeploymentCompiler` in `Inno.Build.Managed.DotNet`. Read the [shared contract](../../../projects/inno-build-managed-dotnet.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.Managed.IManagedDeploymentCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-310a35ede8b58884) | Method |
| [`CompileAsync`](#api-890e635e3095614a) | Method |
| [`capabilities`](#api-7325ee45590b9641) | Property |
| [`id`](#api-c354fbdc53da7a04) | Property |

## Type declaration

<a id="api-e0f574edd36fed16"></a>
<!-- api: T:Inno.Build.Managed.DotNet.NativeAotDeploymentCompiler 257d2865852a334f2465ed40270829a5a9965331c68a260f89be6ba2d9cbee55 -->

```csharp
public sealed class Inno.Build.Managed.DotNet.NativeAotDeploymentCompiler : Inno.Build.Managed.IManagedDeploymentCompiler
```

Publishes explicitly linked game code as a native executable through .NET NativeAOT.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/build/Inno.Build.Managed.DotNet/NativeAot/NativeAotDeploymentCompiler.cs#L12).

## `#ctor`

<a id="api-310a35ede8b58884"></a>
<!-- api: M:Inno.Build.Managed.DotNet.NativeAotDeploymentCompiler.#ctor(System.String,System.Collections.Generic.IReadOnlyList{System.String},Inno.Build.Toolchains.IToolchainWorkspaceProvider) d8e939abc330c26f49d1f564c8308fe2a0eba4bc1bd771843e37c825e7112813 -->

```csharp
public Inno.Build.Managed.DotNet.NativeAotDeploymentCompiler.NativeAotDeploymentCompiler(string hostPath, System.Collections.Generic.IReadOnlyList<string> runtimeIdentifiers, Inno.Build.Toolchains.IToolchainWorkspaceProvider workspaces)
```

Selects the project-scoped .NET SDK host that invokes the installed native compiler toolchain.

**Parameter `hostPath`:** The .NET executable selected by the build composition root.

**Parameter `runtimeIdentifiers`:** The platform-contributed managed targets authorized for this implementation.

**Parameter `workspaces`:** The explicit host execution path provider.

**Throws `System.ArgumentException`:** The SDK host is empty or runtime targets are empty, unassigned, or repeated.

**Throws `System.ArgumentNullException`:** The target collection or workspace provider is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/build/Inno.Build.Managed.DotNet/NativeAot/NativeAotDeploymentCompiler.cs#L35).

## `CompileAsync`

<a id="api-890e635e3095614a"></a>
<!-- api: M:Inno.Build.Managed.DotNet.NativeAotDeploymentCompiler.CompileAsync(Inno.Build.Managed.ManagedDeploymentRequest,System.Threading.CancellationToken) 657dbf68ced60b7a78379e429f66da11c549c6b5496db4806f8b9016ef853817 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.Managed.ManagedDeploymentResult> Inno.Build.Managed.DotNet.NativeAotDeploymentCompiler.CompileAsync(Inno.Build.Managed.ManagedDeploymentRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Compiles or publishes the prepared code closure into isolated managed staging.

**Parameter `request`:** The immutable prepared project, target, frozen inputs and staging locations.

**Parameter `cancellationToken`:** Cancels the publisher and waits for its process tree and output readers to retire.

**Returns:** Verified output evidence; failed or canceled publication never returns a successful result.

**Throws `System.InvalidOperationException`:** The target is unsupported, required toolchain inputs are absent, or publication fails.

**Throws `System.OperationCanceledException`:** Publication was canceled and all owned work has stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/build/Inno.Build.Managed.DotNet/NativeAot/NativeAotDeploymentCompiler.cs#L55).

## `capabilities`

<a id="api-7325ee45590b9641"></a>
<!-- api: P:Inno.Build.Managed.DotNet.NativeAotDeploymentCompiler.capabilities eb97dbc242453653e2caf69bcb6f7d912224684067c496b14f5ea9794ed78b7b -->

```csharp
public Inno.Build.Managed.ManagedDeploymentCapabilities Inno.Build.Managed.DotNet.NativeAotDeploymentCompiler.capabilities { get; }
```

Gets the provider's actual target and execution capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/build/Inno.Build.Managed.DotNet/NativeAot/NativeAotDeploymentCompiler.cs#L52).

## `id`

<a id="api-c354fbdc53da7a04"></a>
<!-- api: P:Inno.Build.Managed.DotNet.NativeAotDeploymentCompiler.id c388e8f40484abb2d7de3944816858def8fef30e6aa2b5017877d840ba19ccf8 -->

```csharp
public Inno.Build.Managed.ManagedDeploymentId Inno.Build.Managed.DotNet.NativeAotDeploymentCompiler.id { get; }
```

Gets the open stable implementation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/build/Inno.Build.Managed.DotNet/NativeAot/NativeAotDeploymentCompiler.cs#L49).
