---
title: "PhysicalToolchainWorkspaceProvider"
description: "Reference for PhysicalToolchainWorkspaceProvider in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.e166627cfb2c33bc
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `PhysicalToolchainWorkspaceProvider`

This reference describes `PhysicalToolchainWorkspaceProvider` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.Toolchains.IToolchainWorkspaceProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-910891ed18803723) | Method |
| [`OpenAsync`](#api-c979fffe0137cf47) | Method |
| [`identity`](#api-c35e292bd96a27d7) | Property |

## Type declaration

<a id="api-e166627cfb2c33bc"></a>
<!-- api: T:Inno.Build.Toolchains.PhysicalToolchainWorkspaceProvider 76429b8a2cfa52199fe6203824c2d16270885e8159eec9f7fd2aeea88d57ea0d -->

```csharp
public sealed class Inno.Build.Toolchains.PhysicalToolchainWorkspaceProvider : Inno.Build.Toolchains.IToolchainWorkspaceProvider
```

Executes tools directly in their physical owner directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Host/PhysicalToolchainWorkspaceProvider.cs#L11).

## `#ctor`

<a id="api-910891ed18803723"></a>
<!-- api: M:Inno.Build.Toolchains.PhysicalToolchainWorkspaceProvider.#ctor f541095ab7eca16ba4ed48aa47f6ea478408fadfa2e1f446bd0b260789845c6d -->

```csharp
public Inno.Build.Toolchains.PhysicalToolchainWorkspaceProvider.PhysicalToolchainWorkspaceProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Host/PhysicalToolchainWorkspaceProvider.cs#L11).

## `OpenAsync`

<a id="api-c979fffe0137cf47"></a>
<!-- api: M:Inno.Build.Toolchains.PhysicalToolchainWorkspaceProvider.OpenAsync(System.String,System.Threading.CancellationToken) 3163f5909572bbb531fd3a54579331ab5a267ab43494c7f274f0c2fd6fc83c19 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.ToolchainWorkingDirectory> Inno.Build.Toolchains.PhysicalToolchainWorkspaceProvider.OpenAsync(string physicalPath, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Acquires an execution path for an absolute build-owned directory.

**Parameter `physicalPath`:** The retained physical directory.

**Parameter `cancellationToken`:** Cancellation while waiting for exclusive alias ownership.

**Returns:** A scoped path whose processes must finish before disposal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Host/PhysicalToolchainWorkspaceProvider.cs#L17).

## `identity`

<a id="api-c35e292bd96a27d7"></a>
<!-- api: P:Inno.Build.Toolchains.PhysicalToolchainWorkspaceProvider.identity bd00a425f04ae39ef04defe9046e33437bd567ad22b6c8658118e859ec3744ae -->

```csharp
public string Inno.Build.Toolchains.PhysicalToolchainWorkspaceProvider.identity { get; }
```

Gets the stable execution namespace included in compiler workspace identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Host/PhysicalToolchainWorkspaceProvider.cs#L14).
