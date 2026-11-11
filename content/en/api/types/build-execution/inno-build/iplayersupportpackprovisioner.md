---
title: "IPlayerSupportPackProvisioner"
description: "Reference for IPlayerSupportPackProvisioner in Inno.Build."
uid: api.inno.build.99737b355d923abd
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `IPlayerSupportPackProvisioner`

This reference describes `IPlayerSupportPackProvisioner` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`ProvisionAsync`](#api-cdf8f9b8589542ac) | Method |

## Type declaration

<a id="api-99737b355d923abd"></a>
<!-- api: T:Inno.Build.IPlayerSupportPackProvisioner f35810c7bd88de1cc0130407ee9b8bea6fc51dbdd9a21a83df73bae28d04d92a -->

```csharp
public interface Inno.Build.IPlayerSupportPackProvisioner
```

Prepares current Player Support Pack inputs without coupling game builds to an SDK or platform toolchain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Player/IPlayerSupportPackProvisioner.cs#L9).

## `ProvisionAsync`

<a id="api-cdf8f9b8589542ac"></a>
<!-- api: M:Inno.Build.IPlayerSupportPackProvisioner.ProvisionAsync(Inno.Build.BuildTargetId,System.String,System.Threading.CancellationToken) 58da8fb0fa702c68982c8dc89ee4e96fbe69c0f688702239d4dd90059176fe98 -->

```csharp
System.Threading.Tasks.ValueTask Inno.Build.IPlayerSupportPackProvisioner.ProvisionAsync(Inno.Build.BuildTargetId target, string supportPackRoot, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Checks current source inputs and selects a complete immutable pack before the build resumes.

**Parameter `target`:** The platform and architecture target whose current inputs are required.

**Parameter `supportPackRoot`:** The catalog directory where the verified pack must be installed.

**Parameter `cancellationToken`:** Cancellation before the installation commits.

**Returns:** An operation that completes after the pack has been installed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Player/IPlayerSupportPackProvisioner.cs#L26).
