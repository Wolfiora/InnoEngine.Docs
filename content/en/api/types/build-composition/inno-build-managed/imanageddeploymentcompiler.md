---
title: "IManagedDeploymentCompiler"
description: "Reference for IManagedDeploymentCompiler in Inno.Build.Managed."
uid: api.inno.build.managed.635da91fa2f65d7f
kind: api
owners:
  - Inno.Build.Managed
apiSurface: source-clr
contracts:
  - project.inno-build-managed
---
# `IManagedDeploymentCompiler`

This reference describes `IManagedDeploymentCompiler` in `Inno.Build.Managed`. Read the [shared contract](../../../projects/inno-build-managed.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CompileAsync`](#api-5de3fd38e8da5769) | Method |
| [`capabilities`](#api-94e9222424967b4c) | Property |
| [`id`](#api-de60136130b95186) | Property |

## Type declaration

<a id="api-635da91fa2f65d7f"></a>
<!-- api: T:Inno.Build.Managed.IManagedDeploymentCompiler 543fa5bca93196563a186dde9083d2afc08abb1d18c611e068dcaaa547519ed4 -->

```csharp
public interface Inno.Build.Managed.IManagedDeploymentCompiler
```

Publishes an explicit code closure independently of platform layout, content packaging and signing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/IManagedDeploymentCompiler.cs#L9).

## `CompileAsync`

<a id="api-5de3fd38e8da5769"></a>
<!-- api: M:Inno.Build.Managed.IManagedDeploymentCompiler.CompileAsync(Inno.Build.Managed.ManagedDeploymentRequest,System.Threading.CancellationToken) cebba513e6f710b75ffb758f384cab2327fdadf9825217dfc43f6bf8e18f0dd4 -->

```csharp
System.Threading.Tasks.ValueTask<Inno.Build.Managed.ManagedDeploymentResult> Inno.Build.Managed.IManagedDeploymentCompiler.CompileAsync(Inno.Build.Managed.ManagedDeploymentRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Compiles or publishes the prepared code closure into isolated managed staging.

**Parameter `request`:** The immutable prepared project, target, frozen inputs and staging locations.

**Parameter `cancellationToken`:** Cancels the publisher and waits for its process tree and output readers to retire.

**Returns:** Verified output evidence; failed or canceled publication never returns a successful result.

**Throws `System.InvalidOperationException`:** The target is unsupported, required toolchain inputs are absent, or publication fails.

**Throws `System.OperationCanceledException`:** Publication was canceled and all owned work has stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/IManagedDeploymentCompiler.cs#L39).

## `capabilities`

<a id="api-94e9222424967b4c"></a>
<!-- api: P:Inno.Build.Managed.IManagedDeploymentCompiler.capabilities f0acc2836f170c9c489c830a769e023d287f045d8a45970361142de3ece64a17 -->

```csharp
Inno.Build.Managed.ManagedDeploymentCapabilities Inno.Build.Managed.IManagedDeploymentCompiler.capabilities { get; }
```

Gets the provider's actual target and execution capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/IManagedDeploymentCompiler.cs#L19).

## `id`

<a id="api-de60136130b95186"></a>
<!-- api: P:Inno.Build.Managed.IManagedDeploymentCompiler.id 270fa17e93d461c5f78c864f5030ee11201d3309dbd6e6d53a7e790cc48a36c8 -->

```csharp
Inno.Build.Managed.ManagedDeploymentId Inno.Build.Managed.IManagedDeploymentCompiler.id { get; }
```

Gets the open stable implementation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/IManagedDeploymentCompiler.cs#L14).
