---
title: "IToolchainWorkspaceProvider"
description: "Reference for IToolchainWorkspaceProvider in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.e89e71ebcc30c493
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `IToolchainWorkspaceProvider`

This reference describes `IToolchainWorkspaceProvider` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`OpenAsync`](#api-35699c89090ac3f4) | Method |
| [`identity`](#api-efff072a36945651) | Property |

## Type declaration

<a id="api-e89e71ebcc30c493"></a>
<!-- api: T:Inno.Build.Toolchains.IToolchainWorkspaceProvider 6fe47ceeead0aa2e51eab90e1ea34906ea4b8c88b049a2ebc3cef8b9575bace5 -->

```csharp
public interface Inno.Build.Toolchains.IToolchainWorkspaceProvider
```

Owns the relationship between physical build storage and host tool execution paths.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Host/IToolchainWorkspaceProvider.cs#L10).

## `OpenAsync`

<a id="api-35699c89090ac3f4"></a>
<!-- api: M:Inno.Build.Toolchains.IToolchainWorkspaceProvider.OpenAsync(System.String,System.Threading.CancellationToken) 1ad08d54610fcbe614aca4bc04a835e2642f6835e33439dd3fa7d459872344b3 -->

```csharp
System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.ToolchainWorkingDirectory> Inno.Build.Toolchains.IToolchainWorkspaceProvider.OpenAsync(string physicalPath, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Acquires an execution path for an absolute build-owned directory.

**Parameter `physicalPath`:** The retained physical directory.

**Parameter `cancellationToken`:** Cancellation while waiting for exclusive alias ownership.

**Returns:** A scoped path whose processes must finish before disposal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Host/IToolchainWorkspaceProvider.cs#L29).

## `identity`

<a id="api-efff072a36945651"></a>
<!-- api: P:Inno.Build.Toolchains.IToolchainWorkspaceProvider.identity 325bbd4e2c54fff532e6d37ebd400f5de9b27c5cd08f6fb0e88d433d11a8653f -->

```csharp
string Inno.Build.Toolchains.IToolchainWorkspaceProvider.identity { get; }
```

Gets the stable execution namespace included in compiler workspace identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Host/IToolchainWorkspaceProvider.cs#L15).
