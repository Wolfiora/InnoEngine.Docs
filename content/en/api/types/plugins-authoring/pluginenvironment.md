---
title: "PluginEnvironment"
description: "Reference for PluginEnvironment in Inno.Plugins.Authoring."
uid: api.inno.plugins.authoring.1a2897a392751b15
kind: api
owners:
  - Inno.Plugins.Authoring
apiSurface: source-clr
contracts:
  - project.inno-plugins-authoring#installation-and-generation-contract
---
# `PluginEnvironment`

This reference describes `PluginEnvironment` in `Inno.Plugins.Authoring`. Read the [shared contract](../../projects/inno-plugins-authoring.md#installation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`ActivationCandidateChanged`](#api-9749e86e209dc128) | Event |
| [`Changed`](#api-bdbbd7e7d3bc54d4) | Event |
| [`#ctor`](#api-eca3d43295a04e99) | Method |
| [`ActivatePending`](#api-ca20fd6a37dee8d9) | Method |
| [`ApplyPendingChange`](#api-3a63e7b54fac61af) | Method |
| [`CommitPending`](#api-66e0d2eb2ed77d19) | Method |
| [`CreateReloadChange`](#api-b91dfaccac90065e) | Method |
| [`Dispose`](#api-dd565ef54bfe45b9) | Method |
| [`Refresh`](#api-335cb36e9026b48d) | Method |
| [`RollbackPending`](#api-c7371c41a4cfc7aa) | Method |
| [`TryGet`](#api-5c8d3cfa2d89f779) | Method |
| [`TryGetCompilationPlugin`](#api-2b2d836a7ada13fa) | Method |
| [`Update`](#api-1e0ba017969a546d) | Method |
| [`activePlugins`](#api-170da364a2895a71) | Property |
| [`compilationAssets`](#api-b8ad6856a8caf048) | Property |
| [`compilationPlugins`](#api-25303ca91bbb7b9a) | Property |
| [`discovery`](#api-a54631d9425a3e9a) | Property |
| [`hasPendingActivation`](#api-96474e5b42b7c0bb) | Property |
| [`isInitialized`](#api-ca67c563bf219b2e) | Property |
| [`revision`](#api-635f142f92f1af98) | Property |

## Type declaration

<a id="api-1a2897a392751b15"></a>
<!-- api: T:Inno.Plugins.Authoring.PluginEnvironment 44a2d428e5bb1bf7e72389edd5b2c0ffc8fbca80054a4e5b930b03ba1377252a -->

```csharp
public sealed class Inno.Plugins.Authoring.PluginEnvironment : System.IDisposable
```

Owns automatic installed Plugin source discovery and atomically publishes Asset mounts, settings contributors,
and the active Plugin catalog on the Asset Database owner thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L23).

## `ActivationCandidateChanged`

<a id="api-9749e86e209dc128"></a>
<!-- api: E:Inno.Plugins.Authoring.PluginEnvironment.ActivationCandidateChanged a20ccdf05eccc89df77bbc25488e424242bb8c65b340946412f5acc44a36539c -->

```csharp
public System.Action? Inno.Plugins.Authoring.PluginEnvironment.ActivationCandidateChanged
```

Occurs after a validated Plugin generation is staged for script compilation but before it becomes active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L51).

## `Changed`

<a id="api-bdbbd7e7d3bc54d4"></a>
<!-- api: E:Inno.Plugins.Authoring.PluginEnvironment.Changed e995a16989581bf8ec1c080ae107012fe4179436ac77bf280fee3aef87c66c58 -->

```csharp
public System.Action? Inno.Plugins.Authoring.PluginEnvironment.Changed
```

Occurs after discovery diagnostics or the active Plugin generation changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L84).

## `#ctor`

<a id="api-eca3d43295a04e99"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginEnvironment.#ctor(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Settings.ProjectSettingsStore,Inno.Core.Serialization.SerializationRegistry,System.String,System.String,Inno.Plugins.Authoring.PluginScanResult,Inno.Extensibility.Reload.GenerationCoordinator) f061843ad229378d52676049742db9acc9660e3c4ef94162dece2b1ab1f16aa1 -->

```csharp
public Inno.Plugins.Authoring.PluginEnvironment.PluginEnvironment(Inno.Assets.Pipeline.AssetPipeline assets, Inno.Core.Settings.ProjectSettingsStore settings, Inno.Core.Serialization.SerializationRegistry serialization, string pluginRoot, string libraryRoot, Inno.Plugins.Authoring.PluginScanResult initialScan, Inno.Extensibility.Reload.GenerationCoordinator generations)
```

Creates automatic Plugin discovery around one asset pipeline and project settings store.

**Parameter `assets`:** The authoring asset pipeline that owns Plugin source mounts.

**Parameter `settings`:** The project settings store that composes active Plugin contributions.

**Parameter `serialization`:** The serialization registry used to validate installed Plugin manifests.

**Parameter `pluginRoot`:** Project Plugins directory.

**Parameter `libraryRoot`:** Project rebuildable Library directory.

**Parameter `initialScan`:** Scan already used to create the initial Asset mount generation.

**Parameter `generations`:** The shared Host gate for publication, Play, Build and unload verification.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L115).

## `ActivatePending`

<a id="api-ca20fd6a37dee8d9"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginEnvironment.ActivatePending ae3845a4f072dc721cc3ff18eefdf1f2589d5a75ce48d7d7f18b88a51821b0a7 -->

```csharp
public void Inno.Plugins.Authoring.PluginEnvironment.ActivatePending()
```

Provisionally publishes at the shared generation safety point; the owning change must roll back failures.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L391).

## `ApplyPendingChange`

<a id="api-3a63e7b54fac61af"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginEnvironment.ApplyPendingChange f77ec995fc8aefb3c389165338a9982f61dfa85da46d9d3a8719041e91f715dc -->

```csharp
public void Inno.Plugins.Authoring.PluginEnvironment.ApplyPendingChange()
```

Commits a non-code availability change using the same generation gate and recovery phases as script reload.

**Throws `System.InvalidOperationException`:** The Host is not ready for a new generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L304).

## `CommitPending`

<a id="api-66e0d2eb2ed77d19"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginEnvironment.CommitPending 5f0df23000edd614507c66403f6997bee7b86e70cb3e1ace0be7c8eeee9161d0 -->

```csharp
public void Inno.Plugins.Authoring.PluginEnvironment.CommitPending()
```

Commits the pending mount generation after scripts, assets, settings, and registries activate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L410).

## `CreateReloadChange`

<a id="api-b91dfaccac90065e"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginEnvironment.CreateReloadChange 4b80a548a1b18e835681c5253ffdb1d8b7eacff63a20d0da24cf0da628d91f72 -->

```csharp
public Inno.Extensibility.Reload.IGenerationChange Inno.Plugins.Authoring.PluginEnvironment.CreateReloadChange()
```

Captures Plugin availability, Asset mounts and effective settings as one shared recovery participant.

**Returns:** A five-phase change for the Host assembly publication, preserving Missing semantic contributions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L293).

## `Dispose`

<a id="api-dd565ef54bfe45b9"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginEnvironment.Dispose 0a54f9adc3e397d4927ac1fa1d55bfe89f48f393d0e143a753c151f83ea6df3c -->

```csharp
public void Inno.Plugins.Authoring.PluginEnvironment.Dispose()
```

Stops automatic discovery without deleting Plugin sources or rebuildable extraction caches.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L462).

## `Refresh`

<a id="api-335cb36e9026b48d"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginEnvironment.Refresh c0e2780991618362e24042061e83b1289db3bb66aa887fbe414b2a7f69d6bb38 -->

```csharp
public bool Inno.Plugins.Authoring.PluginEnvironment.Refresh()
```

Forces validation and prepares or commits one atomic Plugin availability generation.

**Returns:** `true` when a different mount generation was committed immediately or staged for code reload;
    otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L183).

## `RollbackPending`

<a id="api-c7371c41a4cfc7aa"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginEnvironment.RollbackPending 91e6d6cd27efaa0f054051f01efb4f57ef67ce7aeb2e5612afc828e06093b440 -->

```csharp
public void Inno.Plugins.Authoring.PluginEnvironment.RollbackPending()
```

Restores the complete last-good mount, catalog, and settings contributor generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L435).

## `TryGet`

<a id="api-5c8d3cfa2d89f779"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginEnvironment.TryGet(Inno.Assets.AssetSourceId,Inno.Plugins.Authoring.PluginCandidate@) 0d4b6ddbc06be794e8e76e7e7c55ad3015c2014a4c999eed9b93347698df36d9 -->

```csharp
public bool Inno.Plugins.Authoring.PluginEnvironment.TryGet(Inno.Assets.AssetSourceId source, out Inno.Plugins.Authoring.PluginCandidate? plugin)
```

Tries to resolve the active Plugin that owns an asset source.

**Parameter `source`:** The isolated asset source identity.

**Parameter `plugin`:** Receives the active Plugin candidate when the source is owned by one.

**Returns:** `true` when an active Plugin owns the source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L382).

## `TryGetCompilationPlugin`

<a id="api-2b2d836a7ada13fa"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginEnvironment.TryGetCompilationPlugin(Inno.Assets.AssetSourceId,Inno.Plugins.Authoring.PluginCandidate@) d46ab73bea1f0d87eb22a9a5c641bf76eccb87a3998e7cc373301b3488a6f8dc -->

```csharp
public bool Inno.Plugins.Authoring.PluginEnvironment.TryGetCompilationPlugin(Inno.Assets.AssetSourceId source, out Inno.Plugins.Authoring.PluginCandidate? plugin)
```

Resolves a Plugin owned by the active or pending script-compilation generation.

**Parameter `source`:** Plugin source mount ID.

**Parameter `plugin`:** Resolved Plugin candidate.

**Returns:** True when the compilation generation owns the source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L362).

## `Update`

<a id="api-1e0ba017969a546d"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginEnvironment.Update 69d9131317071eec2554285c2b3fa694452e7aecb9243057191e7fcbd58b739e -->

```csharp
public void Inno.Plugins.Authoring.PluginEnvironment.Update()
```

Processes debounced Plugin source notifications and completed background reconciliation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L155).

## `activePlugins`

<a id="api-170da364a2895a71"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginEnvironment.activePlugins 53f7f93ae00a039289a84ad8a8aa613a8d1a364b2a4c28d9c3382d411cc9aa0a -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Plugins.Authoring.PluginCandidate> Inno.Plugins.Authoring.PluginEnvironment.activePlugins { get; }
```

Gets the dependency-ordered active Plugin generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L69).

## `compilationAssets`

<a id="api-b8ad6856a8caf048"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginEnvironment.compilationAssets 65171ca61f7691391922b01831f0a07c2e21cc56d0bc8a81c58c55c9cb80cefe -->

```csharp
public Inno.Assets.Pipeline.AssetSourceMountTransaction? Inno.Plugins.Authoring.PluginEnvironment.compilationAssets { get; }
```

Gets the isolated Asset candidate used by the next Plugin script compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L323).

## `compilationPlugins`

<a id="api-25303ca91bbb7b9a"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginEnvironment.compilationPlugins 8581ea8b4436233024223788746d35c9918a297e2d4bdf923216c5ca9f8f4666 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Plugins.Authoring.PluginCandidate> Inno.Plugins.Authoring.PluginEnvironment.compilationPlugins { get; }
```

Gets the Plugin candidates visible to the next script compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L336).

## `discovery`

<a id="api-a54631d9425a3e9a"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginEnvironment.discovery 42c0628c4ec5cd0440b1d184c243760d5c5c2b367f012f7d1a3d9a6934515fad -->

```csharp
public Inno.Plugins.Authoring.PluginScanResult Inno.Plugins.Authoring.PluginEnvironment.discovery { get; }
```

Gets the latest installed Plugin discovery and isolated diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L79).

## `hasPendingActivation`

<a id="api-96474e5b42b7c0bb"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginEnvironment.hasPendingActivation 155500c11219d4e01f3014f677886e886114c5794e560bc05dca82a08f728a57 -->

```csharp
public bool Inno.Plugins.Authoring.PluginEnvironment.hasPendingActivation { get; }
```

Gets whether a source-mount candidate is waiting for successful script generation activation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L310).

## `isInitialized`

<a id="api-ca67c563bf219b2e"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginEnvironment.isInitialized 80a02c33ab12d62a31a043562d165b123a12d7c9ea8ee250583b4f560c8ec738 -->

```csharp
public bool Inno.Plugins.Authoring.PluginEnvironment.isInitialized { get; }
```

Gets whether project Plugin management is initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L57).

## `revision`

<a id="api-635f142f92f1af98"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginEnvironment.revision 8b1aa8f01ef6d5aa2e6366a6f1f1516ef4a33371dbf0bb2e1adba537d0156cb5 -->

```csharp
public long Inno.Plugins.Authoring.PluginEnvironment.revision { get; }
```

Gets the monotonic identity of the active Plugin generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginEnvironment.cs#L74).
