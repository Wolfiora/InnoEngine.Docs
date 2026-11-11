---
title: "Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner"
description: "Reference for Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner in Inno.Build.SupportPacks.Core."
uid: api.inno.build.supportpacks.core.067bb85108da2022
kind: api
owners:
  - Inno.Build.SupportPacks.Core
apiSurface: source-clr
contracts:
  - project.inno-build-supportpacks-core
---
# `Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner`

This reference describes `Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner` in `Inno.Build.SupportPacks.Core`. Read the [shared contract](../../../projects/inno-build-supportpacks-core.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.IPlayerSupportPackProvisioner`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-070c345d94b4ca55) | Method |
| [`ProvisionAsync`](#api-2db6981bf1adb951) | Method |
| [`TryCreateForHost`](#api-9dec136e64aff812) | Method |

## Type declaration

<a id="api-067bb85108da2022"></a>
<!-- api: T:Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner 40529fb77a79277c4ca01c49e377bd3c624e2ccb6de0af3c567f6ee169020a88 -->

```csharp
public sealed class Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner : Inno.Build.IPlayerSupportPackProvisioner
```

Prepares current checkout and SDK inputs and selects a verified, immutable Player Support Pack.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/SourcePlayerSupportPackProvisioner.cs#L12).

## `#ctor`

<a id="api-070c345d94b4ca55"></a>
<!-- api: M:Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner.#ctor(System.String,Inno.Build.SupportPacks.PlayerSupportPackPublisher,System.String,System.Action{System.String}) f827eea7eee6dd841abfe4731a0dcbb7557aca97e31d9920a8f570cccc059f13 -->

```csharp
public Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner.SourcePlayerSupportPackProvisioner(string engineRoot, Inno.Build.SupportPacks.PlayerSupportPackPublisher publisher, string dotnetHost, System.Action<string> reportDiagnostic)
```

Creates a provisioner for a complete engine checkout.

**Parameter `engineRoot`:** The directory containing InnoEngine.sln and the Player project.

**Throws `System.IO.DirectoryNotFoundException`:** The directory is not an engine checkout.

**Parameter `publisher`:** The publisher containing the host-selected platform sources.

**Parameter `dotnetHost`:** The SDK executable explicitly selected by the host.

**Parameter `reportDiagnostic`:** The borrowed host reporter for successful-publication indexing and cleanup diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/SourcePlayerSupportPackProvisioner.cs#L37).

## `ProvisionAsync`

<a id="api-2db6981bf1adb951"></a>
<!-- api: M:Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner.ProvisionAsync(Inno.Build.BuildTargetId,System.String,System.Threading.CancellationToken) de875f3c6a5fb09903ebf38b337de0800560a944f04f4fb4d581e6150529aefa -->

```csharp
public System.Threading.Tasks.ValueTask Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner.ProvisionAsync(Inno.Build.BuildTargetId target, string supportPackRoot, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Prepares current target inputs and atomically selects their immutable Support Pack.

**Parameter `target`:** The target platform and architecture identity.

**Parameter `supportPackRoot`:** The directory that owns the installed target directories.

**Parameter `cancellationToken`:** Cancels preparation or publication before a new current fingerprint is selected.

**Returns:** An operation that completes after the target Pack has been installed and verified.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/SourcePlayerSupportPackProvisioner.cs#L114).

## `TryCreateForHost`

<a id="api-9dec136e64aff812"></a>
<!-- api: M:Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner.TryCreateForHost(System.String,Inno.Build.SupportPacks.PlayerSupportPackPublisher,System.String,System.Action{System.String}) fb517ed4e9cc9d922300833fa9527fede921216e785d75e278ca58c2064431a1 -->

```csharp
public static Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner? Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner.TryCreateForHost(string startDirectory, Inno.Build.SupportPacks.PlayerSupportPackPublisher publisher, string dotnetHost, System.Action<string> reportDiagnostic)
```

Finds the checkout that owns the running Editor or build command.

**Parameter `startDirectory`:** The host binary directory from which to search upward.

**Returns:** A source provisioner, or null when the host is a source-independent distribution.

**Throws `System.IO.DirectoryNotFoundException`:** An explicit `INNO_ENGINE_ROOT` does not identify a complete engine checkout.

**Parameter `publisher`:** The publisher containing the host-selected platform sources.

**Parameter `dotnetHost`:** The SDK executable explicitly selected by the host.

**Parameter `reportDiagnostic`:** The borrowed host reporter, retained only by the returned provisioner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/SourcePlayerSupportPackProvisioner.cs#L76).
