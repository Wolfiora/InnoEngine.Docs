---
title: "ToolchainWorkingDirectory"
description: "Reference for ToolchainWorkingDirectory in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.09ec90086662e6fc
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `ToolchainWorkingDirectory`

This reference describes `ToolchainWorkingDirectory` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6b0f1a16504a7f79) | Method |
| [`Dispose`](#api-e5f6145e0a41a3d2) | Method |
| [`toolPath`](#api-f228faa7b9c5c43c) | Property |

## Type declaration

<a id="api-09ec90086662e6fc"></a>
<!-- api: T:Inno.Build.Toolchains.ToolchainWorkingDirectory 12c8e43022d67b2ab25086ae04361db9d65e9a0f3906bc375a6d19828df631f0 -->

```csharp
public sealed class Inno.Build.Toolchains.ToolchainWorkingDirectory : System.IDisposable
```

Retains a provider-owned tool execution path until all dependent processes finish.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainWorkingDirectory.cs#L10).

## `#ctor`

<a id="api-6b0f1a16504a7f79"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainWorkingDirectory.#ctor(System.String,System.IDisposable) 5557d9d121f0e9c575ad9a80ee65c787c34ea5840ac72b59a9eaa7783f3359ae -->

```csharp
public Inno.Build.Toolchains.ToolchainWorkingDirectory.ToolchainWorkingDirectory(string toolPath, System.IDisposable? ownership = null)
```

Captures an absolute execution path and its optional release protocol.

**Parameter `toolPath`:** The execution directory selected by the host provider.

**Parameter `ownership`:** The alias and lease owner, or null for direct physical execution.

**Throws `System.ArgumentException`:** The execution path is not absolute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainWorkingDirectory.cs#L26).

## `Dispose`

<a id="api-e5f6145e0a41a3d2"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainWorkingDirectory.Dispose 28a049548142f0f2a4cb582ef28fe2eb9cefb6a48b9c1621b7b65f332dc06428 -->

```csharp
public void Inno.Build.Toolchains.ToolchainWorkingDirectory.Dispose()
```

Releases provider resources after all dependent processes have stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainWorkingDirectory.cs#L44).

## `toolPath`

<a id="api-f228faa7b9c5c43c"></a>
<!-- api: P:Inno.Build.Toolchains.ToolchainWorkingDirectory.toolPath b553c92bdc306968721e4ba820aec13953b01949788618c547571e5ca28ed978 -->

```csharp
public string Inno.Build.Toolchains.ToolchainWorkingDirectory.toolPath { get; }
```

Gets the execution path, valid until disposal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainWorkingDirectory.cs#L39).
