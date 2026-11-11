---
title: "WindowsToolchainWorkspaceProvider"
description: "Reference for WindowsToolchainWorkspaceProvider in Inno.Build.Windows.Host."
uid: api.inno.build.windows.host.a33b0037c9479398
kind: api
owners:
  - Inno.Build.Windows.Host
apiSurface: source-clr
contracts:
  - project.inno-build-windows-host
---
# `WindowsToolchainWorkspaceProvider`

This reference describes `WindowsToolchainWorkspaceProvider` in `Inno.Build.Windows.Host`. Read the [shared contract](../../../projects/inno-build-windows-host.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.Toolchains.IToolchainWorkspaceProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f3e73bd08c800fd9) | Method |
| [`OpenAsync`](#api-3cabe936462c5980) | Method |
| [`identity`](#api-9293065eec2dcf40) | Property |

## Type declaration

<a id="api-a33b0037c9479398"></a>
<!-- api: T:Inno.Build.Windows.Host.WindowsToolchainWorkspaceProvider 8779f5339a54243fc3cf3a5feb7acb1f44caa5c807caa793e1ba4b64b88cd8b8 -->

```csharp
public sealed class Inno.Build.Windows.Host.WindowsToolchainWorkspaceProvider : Inno.Build.Toolchains.IToolchainWorkspaceProvider
```

Owns stable bounded Windows junctions for native compiler workspaces.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/Windows/build/Inno.Build.Windows.Host/Workspace/WindowsToolchainWorkspaceProvider.cs#L15).

## `#ctor`

<a id="api-f3e73bd08c800fd9"></a>
<!-- api: M:Inno.Build.Windows.Host.WindowsToolchainWorkspaceProvider.#ctor 626e0212d68374ce31806e625429254525fb8eb3620e1758365a9c0ddb7363d9 -->

```csharp
public Inno.Build.Windows.Host.WindowsToolchainWorkspaceProvider.WindowsToolchainWorkspaceProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/Windows/build/Inno.Build.Windows.Host/Workspace/WindowsToolchainWorkspaceProvider.cs#L15).

## `OpenAsync`

<a id="api-3cabe936462c5980"></a>
<!-- api: M:Inno.Build.Windows.Host.WindowsToolchainWorkspaceProvider.OpenAsync(System.String,System.Threading.CancellationToken) eac9b42a50127a7448b2e7a9ad63fded9f3b04081f31356aff823e9a3481c40a -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.ToolchainWorkingDirectory> Inno.Build.Windows.Host.WindowsToolchainWorkspaceProvider.OpenAsync(string physicalPath, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Acquires an execution path for an absolute build-owned directory.

**Parameter `physicalPath`:** The retained physical directory.

**Parameter `cancellationToken`:** Cancellation while waiting for exclusive alias ownership.

**Returns:** A scoped path whose processes must finish before disposal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/Windows/build/Inno.Build.Windows.Host/Workspace/WindowsToolchainWorkspaceProvider.cs#L21).

## `identity`

<a id="api-9293065eec2dcf40"></a>
<!-- api: P:Inno.Build.Windows.Host.WindowsToolchainWorkspaceProvider.identity 20b16bd7657068a51806a5b72ede2ad77f5744c991eac9db514087b82b3ba325 -->

```csharp
public string Inno.Build.Windows.Host.WindowsToolchainWorkspaceProvider.identity { get; }
```

Gets the stable execution namespace included in compiler workspace identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/Windows/build/Inno.Build.Windows.Host/Workspace/WindowsToolchainWorkspaceProvider.cs#L18).
