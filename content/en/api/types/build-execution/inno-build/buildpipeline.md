---
title: "BuildPipeline"
description: "Reference for BuildPipeline in Inno.Build."
uid: api.inno.build.9ecaf1e1ff65f104
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `BuildPipeline`

This reference describes `BuildPipeline` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e7c2c598bfa8e71b) | Method |
| [`BuildGameAsync`](#api-7b56b04e5b2b9066) | Method |
| [`BuildPluginAsync`](#api-ad19fc6953e46b2d) | Method |
| [`EnsurePlayerSupportPackAsync`](#api-5973bde23f769109) | Method |
| [`GetManagedDeployments`](#api-b45189e517aceed2) | Method |
| [`TryGetGameTargetDisplayName`](#api-3dc09fc3df68c7e9) | Method |
| [`availableGameTargets`](#api-7a060a08e23c9bf9) | Property |

## Type declaration

<a id="api-9ecaf1e1ff65f104"></a>
<!-- api: T:Inno.Build.BuildPipeline 633a9794fa14eeace4990a3d626a6dbeaff3eb9dbd8f2bf7a3ef687e17d274e7 -->

```csharp
public sealed class Inno.Build.BuildPipeline
```

Orchestrates deterministic Plugin and game builds over isolated staging and atomic commits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildPipeline.cs#L21).

## `#ctor`

<a id="api-e7c2c598bfa8e71b"></a>
<!-- api: M:Inno.Build.BuildPipeline.#ctor(Inno.Assets.Pipeline.AssetPipeline,Inno.Plugins.Authoring.PluginEnvironment,Inno.Core.Settings.ProjectSettingsStore,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Reload.GenerationCoordinator,Inno.Scripting.Compiler.ScriptCompiler,System.String,System.Collections.Generic.IEnumerable{Inno.Build.GameBuildTargetBinding},Inno.Build.Managed.ManagedDeploymentCatalog,Inno.Build.IPlayerSupportPackProvisioner) 26beff3ac6692ba417e269979fc5c8d79fed97d3dd709e5f708741017f3e0223 -->

```csharp
public Inno.Build.BuildPipeline.BuildPipeline(Inno.Assets.Pipeline.AssetPipeline assets, Inno.Plugins.Authoring.PluginEnvironment plugins, Inno.Core.Settings.ProjectSettingsStore settings, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Extensibility.Reload.GenerationCoordinator generations, Inno.Scripting.Compiler.ScriptCompiler compiler, string supportPackRoot, System.Collections.Generic.IEnumerable<Inno.Build.GameBuildTargetBinding> gameTargets, Inno.Build.Managed.ManagedDeploymentCatalog managedDeployments, Inno.Build.IPlayerSupportPackProvisioner? supportPackProvisioner = null)
```

Creates a build pipeline from installed Player Support Packs and platform packagers.

**Parameter `supportPackRoot`:** The directory containing one child directory per `Inno.Build.BuildTargetId`.

**Parameter `assets`:** The active authoring asset pipeline captured by builds.

**Parameter `generations`:** The host-wide admission gate that remains pinned until the build snapshot is released.

**Parameter `plugins`:** The active Plugin environment captured by builds.

**Parameter `settings`:** The current project settings store captured by builds.

**Parameter `serialization`:** The serialization registry used to pin and encode the build snapshot.

**Parameter `compiler`:** The project compiler used to produce a fresh runtime-only assembly generation for each game build.

**Parameter `gameTargets`:** The complete set of replaceable platform package implementations available to this host.

**Parameter `managedDeployments`:** Explicit managed publishers selected independently of the platform packagers.

**Parameter `supportPackProvisioner`:** Optional build-time provider that checks current source and SDK inputs during explicit pack preparation.

**Throws `System.ArgumentException`:** Thrown when the Support Pack root is empty, no target is provided, or a target identity is duplicated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildPipeline.cs#L68).

## `BuildGameAsync`

<a id="api-7b56b04e5b2b9066"></a>
<!-- api: M:Inno.Build.BuildPipeline.BuildGameAsync(Inno.Build.GameBuildRequest,System.IProgress{Inno.Build.BuildProgress},System.Threading.CancellationToken) 13beab469bc45d9e4f5ff3606cc9e482749d83d8f6338f3479ed0ac1883f71d4 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.BuildResult> Inno.Build.BuildPipeline.BuildGameAsync(Inno.Build.GameBuildRequest request, System.IProgress<Inno.Build.BuildProgress>? progress = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Builds and installs one complete source-free game deployment with rollback protection.

**Constraints:** Prepare current packs with EnsurePlayerSupportPackAsync before invoking this method on the
authoring owner's thread. The synchronous snapshot phase never waits for asynchronous provisioning.
Coordinate readers and writers of the output directory during its two installation moves.
Post-commit backup, staging and progress observer failures are warnings on the successful result.

**Parameter `request`:** The exact profile, destination, and activated runtime compilation generation.

**Parameter `progress`:** Optional observer for monotonic stage progress.

**Parameter `cancellationToken`:** The token that cancels work before directory installation begins.

**Returns:** The durable output identity and deployment metrics.

**Throws `System.OperationCanceledException`:** Thrown when cancellation is requested before commit.

**Throws `System.IO.DirectoryNotFoundException`:** The target Support Pack is missing; prepare it before starting the owner-thread build snapshot.

**Throws `System.IO.InvalidDataException`:** The target Support Pack is present but invalid.

**Throws `System.IO.IOException`:** Output installation fails before a complete candidate is committed.

**Throws `System.AggregateException`:** Output installation and restoration both fail; the previous tree remains at the reported backup path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildPipeline.cs#L253).

## `BuildPluginAsync`

<a id="api-ad19fc6953e46b2d"></a>
<!-- api: M:Inno.Build.BuildPipeline.BuildPluginAsync(Inno.Build.PluginBuildRequest,System.IProgress{Inno.Build.BuildProgress},System.Threading.CancellationToken) 248fd443897e7867147cf83d38f079ef66a0d0c41a44daf27b832463d1337dd4 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.BuildResult> Inno.Build.BuildPipeline.BuildPluginAsync(Inno.Build.PluginBuildRequest request, System.IProgress<Inno.Build.BuildProgress>? progress = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Builds and atomically commits one deterministic project Plugin package.

**Parameter `request`:** The package identity, destination, and dependency embedding policy.

**Parameter `progress`:** Optional observer for monotonic stage progress.

**Parameter `cancellationToken`:** The token that cancels work before atomic commit.

**Returns:** The durable package identity and source-content metrics.

**Throws `System.OperationCanceledException`:** Thrown when cancellation is requested before commit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildPipeline.cs#L287).

## `EnsurePlayerSupportPackAsync`

<a id="api-5973bde23f769109"></a>
<!-- api: M:Inno.Build.BuildPipeline.EnsurePlayerSupportPackAsync(Inno.Build.BuildTargetId,System.Nullable{Inno.Build.Managed.ManagedDeploymentId},System.Threading.CancellationToken) 847f5de9af9c7117120dc9f11ea952c1071bc3bef29272a956a5b009faf20cfb -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.PlayerSupportPackLease> Inno.Build.BuildPipeline.EnsurePlayerSupportPackAsync(Inno.Build.BuildTargetId target, Inno.Build.Managed.ManagedDeploymentId? deployment, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Validates the platform and managed deployment before asynchronously preparing its Support Pack.

**Parameter `target`:** The registered platform and architecture target to prepare.

**Parameter `deployment`:** The selected managed publisher, or null to use the platform's default deployment.
Unsupported pairs fail before any provisioner or external tool starts.

**Parameter `cancellationToken`:** Cancellation before the Pack installation commits.

**Returns:** Reading ownership of the verified Pack, to be disposed after starting its consuming build.
No authoring asset database operations run during preparation.

**Throws `System.NotSupportedException`:** No game target is registered for the requested identity.

**Throws `System.InvalidOperationException`:** The managed publisher is absent or cannot publish the selected platform's runtime identifier.

**Throws `System.IO.DirectoryNotFoundException`:** The Pack is absent and this host has no provisioner.

**Throws `System.IO.InvalidDataException`:** An installed or newly published Pack fails deployment validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildPipeline.cs#L203).

## `GetManagedDeployments`

<a id="api-b45189e517aceed2"></a>
<!-- api: M:Inno.Build.BuildPipeline.GetManagedDeployments(Inno.Build.BuildTargetId) fbeefaad95dac1ba6fe02e67b4ee96b91d787f40e624615c3c48e0bb936d05e8 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Build.Managed.ManagedDeploymentId> Inno.Build.BuildPipeline.GetManagedDeployments(Inno.Build.BuildTargetId target)
```

Gets the managed deployment choices supported by a registered publication platform.

**Parameter `target`:** The registered publication target whose managed runtime requirements are queried.

**Returns:** Immutable deployment identities in stable order; an unknown target throws explicitly.

**Throws `System.ArgumentException`:** The publication target is not registered in this build composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildPipeline.cs#L144).

## `TryGetGameTargetDisplayName`

<a id="api-3dc09fc3df68c7e9"></a>
<!-- api: M:Inno.Build.BuildPipeline.TryGetGameTargetDisplayName(Inno.Build.BuildTargetId,System.String@) 190c8647c1d2bbb7f32315fa9a50e8b28efa16035cfb18f060cec8b8880c402c -->

```csharp
public bool Inno.Build.BuildPipeline.TryGetGameTargetDisplayName(Inno.Build.BuildTargetId target, out string displayName)
```

Tries to get the adapter-owned display name for a registered game target.

**Parameter `target`:** The stable target identity to query.

**Parameter `displayName`:** Receives the registered user-facing name, or an empty value when no target is registered.

**Returns:** `true` when the target is registered; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildPipeline.cs#L161).

## `availableGameTargets`

<a id="api-7a060a08e23c9bf9"></a>
<!-- api: P:Inno.Build.BuildPipeline.availableGameTargets d97e63216b2af4f796c5a8abbae449e8c3eae423682fbc20fef8726fe5d2c75b -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Build.BuildTargetId> Inno.Build.BuildPipeline.availableGameTargets { get; }
```

Gets an immutable view of every registered build target in stable identity order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildPipeline.cs#L130).
