---
title: "CoreClrDeploymentCompiler"
description: "Reference for CoreClrDeploymentCompiler in Inno.Build.Managed.DotNet."
uid: api.inno.build.managed.dotnet.e0ed560b676ff39d
kind: api
owners:
  - Inno.Build.Managed.DotNet
apiSurface: source-clr
contracts:
  - project.inno-build-managed-dotnet
---
# `CoreClrDeploymentCompiler`

This reference describes `CoreClrDeploymentCompiler` in `Inno.Build.Managed.DotNet`. Read the [shared contract](../../../projects/inno-build-managed-dotnet.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.Managed.IManagedDeploymentCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2a774f6f1de235d6) | Method |
| [`CompileAsync`](#api-b6b3491024c85356) | Method |
| [`capabilities`](#api-84d91987256a760a) | Property |
| [`id`](#api-41b1176c74353b70) | Property |

## Type declaration

<a id="api-e0ed560b676ff39d"></a>
<!-- api: T:Inno.Build.Managed.DotNet.CoreClrDeploymentCompiler 870286e2ae6d1ca65709949c1568dfd2714bb63eb2dbad0bc0a5c092c9b82bad -->

```csharp
public sealed class Inno.Build.Managed.DotNet.CoreClrDeploymentCompiler : Inno.Build.Managed.IManagedDeploymentCompiler
```

Publishes explicitly linked game code with the .NET desktop CoreCLR runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/build/Inno.Build.Managed.DotNet/Desktop/CoreClrDeploymentCompiler.cs#L12).

## `#ctor`

<a id="api-2a774f6f1de235d6"></a>
<!-- api: M:Inno.Build.Managed.DotNet.CoreClrDeploymentCompiler.#ctor(System.String,System.Collections.Generic.IReadOnlyList{System.String},Inno.Build.Toolchains.IToolchainWorkspaceProvider) a2eff7ec6a91a0b5605e640dcfc17155ef30fc17324451123743cdd0782977b0 -->

```csharp
public Inno.Build.Managed.DotNet.CoreClrDeploymentCompiler.CoreClrDeploymentCompiler(string hostPath, System.Collections.Generic.IReadOnlyList<string> runtimeIdentifiers, Inno.Build.Toolchains.IToolchainWorkspaceProvider workspaces)
```

Selects the SDK host used for project-scoped publication.

**Parameter `hostPath`:** The .NET executable selected by the build composition root.

**Parameter `runtimeIdentifiers`:** The platform-contributed managed targets authorized for this implementation.

**Parameter `workspaces`:** The explicit host execution path provider.

**Throws `System.ArgumentException`:** The SDK host is empty or runtime targets are empty, unassigned, or repeated.

**Throws `System.ArgumentNullException`:** The target collection or workspace provider is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/build/Inno.Build.Managed.DotNet/Desktop/CoreClrDeploymentCompiler.cs#L35).

## `CompileAsync`

<a id="api-b6b3491024c85356"></a>
<!-- api: M:Inno.Build.Managed.DotNet.CoreClrDeploymentCompiler.CompileAsync(Inno.Build.Managed.ManagedDeploymentRequest,System.Threading.CancellationToken) 11a845da37d7e9d352827107c7367b20af9df0af5737b3083e55bdfe5abee1b6 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.Managed.ManagedDeploymentResult> Inno.Build.Managed.DotNet.CoreClrDeploymentCompiler.CompileAsync(Inno.Build.Managed.ManagedDeploymentRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Compiles or publishes the prepared code closure into isolated managed staging.

**Parameter `request`:** The immutable prepared project, target, frozen inputs and staging locations.

**Parameter `cancellationToken`:** Cancels the publisher and waits for its process tree and output readers to retire.

**Returns:** Verified output evidence; failed or canceled publication never returns a successful result.

**Throws `System.InvalidOperationException`:** The target is unsupported, required toolchain inputs are absent, or publication fails.

**Throws `System.OperationCanceledException`:** Publication was canceled and all owned work has stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/build/Inno.Build.Managed.DotNet/Desktop/CoreClrDeploymentCompiler.cs#L55).

## `capabilities`

<a id="api-84d91987256a760a"></a>
<!-- api: P:Inno.Build.Managed.DotNet.CoreClrDeploymentCompiler.capabilities 096258fcf8c4c2a4a7a2f6e459cef04c96998b59e7bfff1384609f4cfc9faf13 -->

```csharp
public Inno.Build.Managed.ManagedDeploymentCapabilities Inno.Build.Managed.DotNet.CoreClrDeploymentCompiler.capabilities { get; }
```

Gets the provider's actual target and execution capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/build/Inno.Build.Managed.DotNet/Desktop/CoreClrDeploymentCompiler.cs#L52).

## `id`

<a id="api-41b1176c74353b70"></a>
<!-- api: P:Inno.Build.Managed.DotNet.CoreClrDeploymentCompiler.id 28ee9aae65b6406f87a6d41a1cb640e22889d8d2716d3a36a62134d3214798a4 -->

```csharp
public Inno.Build.Managed.ManagedDeploymentId Inno.Build.Managed.DotNet.CoreClrDeploymentCompiler.id { get; }
```

Gets the open stable implementation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/build/Inno.Build.Managed.DotNet/Desktop/CoreClrDeploymentCompiler.cs#L49).
