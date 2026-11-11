---
title: "ScriptReloadHost"
description: "Reference for ScriptReloadHost in Inno.Scripting.Reload."
uid: api.inno.scripting.reload.d272da59695cbec1
kind: api
owners:
  - Inno.Scripting.Reload
apiSurface: source-clr
contracts:
  - project.inno-scripting-reload
---
# `ScriptReloadHost`

This reference describes `ScriptReloadHost` in `Inno.Scripting.Reload`. Read the [shared contract](../../../projects/inno-scripting-reload.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-565f8678e79922b3) | Method |
| [`AdvanceUnloadVerification`](#api-d99fd3e5cc175627) | Method |
| [`ApplyPendingReload`](#api-3359fe2269df35c8) | Method |
| [`CancelCompilation`](#api-1a40c935331ced16) | Method |
| [`Dispose`](#api-b43176b6c42c3187) | Method |
| [`GenerateProjectFiles`](#api-6b6265f58517adaa) | Method |
| [`RecompileScripting`](#api-166a113fbf040051) | Method |
| [`ReloadPlugins`](#api-fa69c054093a1013) | Method |
| [`ReloadScripting`](#api-6cfe661c1443c5a5) | Method |
| [`Start`](#api-386a67b3386a3eb2) | Method |
| [`TryCompilePending`](#api-c6ca072769826943) | Method |
| [`compilationElapsed`](#api-320960c1cbc9cff3) | Property |
| [`isCompilationPending`](#api-477b93b244c46342) | Property |
| [`isCompilationTakingLong`](#api-019f5b07b6fcb214) | Property |
| [`isCompiling`](#api-478d31b91243bdfa) | Property |
| [`isFaulted`](#api-8f3fe58c8e57bbe5) | Property |
| [`isUnloadVerificationPending`](#api-c3b1aa504ce412a8) | Property |
| [`lastCompilation`](#api-842e9368e922a5f9) | Property |
| [`progress`](#api-92d7825d18daf508) | Property |

## Type declaration

<a id="api-d272da59695cbec1"></a>
<!-- api: T:Inno.Scripting.Reload.ScriptReloadHost f7f9e6f9a8b72d9b87ced665ffffa03729bc6b4d611124e67cc95d0e1482e1d9 -->

```csharp
public sealed class Inno.Scripting.Reload.ScriptReloadHost : System.IDisposable
```

Watches, compiles, and atomically activates one project's C# script assemblies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L24).

## `#ctor`

<a id="api-565f8678e79922b3"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadHost.#ctor(Inno.Scripting.Reload.ScriptReloadOptions,Inno.Scripting.Compiler.ScriptCompiler,Inno.Assets.Pipeline.AssetPipeline,Inno.Plugins.Authoring.PluginEnvironment,Inno.Extensibility.Modules.ModuleHost,Inno.Core.Settings.ProjectSettingsStore,Inno.Scripting.Reload.IScriptReloadCoordinator,System.Func{Inno.Scripting.Compiler.ScriptModuleDeployment,Inno.Extensibility.Modules.IModuleSource}) ace01430c6f226c6e14477095fb5cfdb56a932b6ac81720154b6473359de9bf6 -->

```csharp
public Inno.Scripting.Reload.ScriptReloadHost.ScriptReloadHost(Inno.Scripting.Reload.ScriptReloadOptions options, Inno.Scripting.Compiler.ScriptCompiler compiler, Inno.Assets.Pipeline.AssetPipeline assets, Inno.Plugins.Authoring.PluginEnvironment plugins, Inno.Extensibility.Modules.ModuleHost modules, Inno.Core.Settings.ProjectSettingsStore settings, Inno.Scripting.Reload.IScriptReloadCoordinator reloads, System.Func<Inno.Scripting.Compiler.ScriptModuleDeployment, Inno.Extensibility.Modules.IModuleSource> moduleSourceFactory)
```

Creates a reload host for one compiler and runtime module owner.

**Parameter `options`:** The automatic compilation, debounce, and long-running warning policy.

**Parameter `compiler`:** The compiler that produces immutable candidate script generations.

**Parameter `assets`:** The authoring asset pipeline that supplies committed source artifacts.

**Parameter `plugins`:** The Plugin environment that owns active and candidate source generations.

**Parameter `modules`:** The module host that atomically activates compiled assemblies.

**Parameter `settings`:** The project settings store rebuilt with each committed Plugin generation.

**Parameter `reloads`:** The host-owned coordinator that commits dependent state together with script generations.

**Parameter `moduleSourceFactory`:** The composition-owned factory that chooses the loading policy for each immutable script module.
It must return a fresh source without activating or publishing the module.

**Throws `System.ArgumentNullException`:** Thrown when any required dependency is null.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when the configured debounce duration is negative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L104).

## `AdvanceUnloadVerification`

<a id="api-d99fd3e5cc175627"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadHost.AdvanceUnloadVerification(System.Exception@) 99d8c5abda7a53296c72735c570bcda98d71ef9d4426ec3c849c7e7030e54327 -->

```csharp
public bool Inno.Scripting.Reload.ScriptReloadHost.AdvanceUnloadVerification(out System.Exception? failure)
```

Advances cooperative unload verification for retired script generations.

**Parameter `failure`:** Receives the retention failure after all verification attempts, otherwise `null`.

**Returns:** `true` when no additional verification frame is required.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L675).

## `ApplyPendingReload`

<a id="api-3359fe2269df35c8"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadHost.ApplyPendingReload f97703983ea27376b5c4fafd6f072d14af15933324673f1078d77cd29c32524e -->

```csharp
public bool Inno.Scripting.Reload.ScriptReloadHost.ApplyPendingReload()
```

Applies the latest compiled generation, or commits a Plugin-unavailability generation when changed
Plugin code cannot produce a replacement, at a caller-controlled main-thread safe point.

**Returns:** `true` when modules were replaced or retired; otherwise, `false`.

**Throws `System.ObjectDisposedException`:** Thrown after the manager has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L516).

## `CancelCompilation`

<a id="api-1a40c935331ced16"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadHost.CancelCompilation(System.Int64) 00d33352ac06c64f9ecc95a6e3795ce720d894017e593077dee383dadbe1270b -->

```csharp
public bool Inno.Scripting.Reload.ScriptReloadHost.CancelCompilation(long operationId)
```

Requests cancellation of the active compilation without changing the active script generation.

**Returns:** `true` when an active compilation received the request.

**Throws `System.ObjectDisposedException`:** Thrown after the manager has been disposed.

**Parameter `operationId`:** The observed request; a stale cancellation is rejected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L289).

## `Dispose`

<a id="api-b43176b6c42c3187"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadHost.Dispose 7d04652880792814591fa3cf60e49919ec901dec0a93e46dfc1bff24d405a862 -->

```csharp
public void Inno.Scripting.Reload.ScriptReloadHost.Dispose()
```

Cancels and waits for active compilation work, stops Asset Database observation, and unloads
the active script module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L598).

## `GenerateProjectFiles`

<a id="api-6b6265f58517adaa"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadHost.GenerateProjectFiles 515fa12c27e9ffe3656b42e284878dd89bb181f069f0af9142a64fdf7e859922 -->

```csharp
public void Inno.Scripting.Reload.ScriptReloadHost.GenerateProjectFiles()
```

Generates standard SDK-style game/editor projects and a solution for IDE tooling.

**Throws `System.ObjectDisposedException`:** Thrown after the manager has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L583).

## `RecompileScripting`

<a id="api-166a113fbf040051"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadHost.RecompileScripting 5254d4cc2dcf2750dfd2dfe6d3b95be50ec16051ef781d9e735186f6648ede9b -->

```csharp
public void Inno.Scripting.Reload.ScriptReloadHost.RecompileScripting()
```

Queues incremental recompilation of changed script assemblies.

**Throws `System.ObjectDisposedException`:** Thrown after the manager has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L320).

## `ReloadPlugins`

<a id="api-fa69c054093a1013"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadHost.ReloadPlugins b74ab53e73f3fe141431bb56a287649b5c440cc90b3deabbe5a5b20589016094 -->

```csharp
public void Inno.Scripting.Reload.ScriptReloadHost.ReloadPlugins()
```

Queues replacement of the unified plugin generation and both dependent scripting generations.
Valid script artifacts are reused when plugin reference fingerprints are unchanged.

**Throws `System.ObjectDisposedException`:** Thrown after the manager has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L341).

## `ReloadScripting`

<a id="api-6cfe661c1443c5a5"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadHost.ReloadScripting dad84f2718a0f27df3652b1ef2246b862571522f51593002420493ac1cf34df8 -->

```csharp
public void Inno.Scripting.Reload.ScriptReloadHost.ReloadScripting()
```

Queues a complete rebuild of both scripting load contexts while retaining the plugin generation.
Valid cached artifacts are reused.

**Throws `System.ObjectDisposedException`:** Thrown after the manager has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L332).

## `Start`

<a id="api-386a67b3386a3eb2"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadHost.Start e3610960bd7d5ad3fabdb50906c5a64e1ec3475663b3c88a21b797667808d804 -->

```csharp
public void Inno.Scripting.Reload.ScriptReloadHost.Start()
```

Subscribes to committed asset changes and queues a cache-aware initial compilation request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L246).

## `TryCompilePending`

<a id="api-c6ca072769826943"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadHost.TryCompilePending(System.Threading.Tasks.Task{Inno.Scripting.Compiler.ScriptCompilationResult}@) 2034b6958e3b2fe20f067ef054978ecbb9be13cc62cd5f8ac1f2914afaabccd9 -->

```csharp
public bool Inno.Scripting.Reload.ScriptReloadHost.TryCompilePending(out System.Threading.Tasks.Task<Inno.Scripting.Compiler.ScriptCompilationResult>? compilation)
```

Starts a pending compilation after the configured quiet period has elapsed.

**Constraints:** The initial automatic request is immediately ready and does not observe the debounce duration.

**Parameter `compilation`:** The started compilation task, or `null` when none was ready.

**Returns:** `true` when a pending compilation was started.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L355).

## `compilationElapsed`

<a id="api-320960c1cbc9cff3"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadHost.compilationElapsed ac141cb10c477e4f2c99a2df08d195bb4891912cb0b0e24f744147a794861e2b -->

```csharp
public System.TimeSpan Inno.Scripting.Reload.ScriptReloadHost.compilationElapsed { get; }
```

Gets the elapsed duration of the active or most recently completed compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L188).

## `isCompilationPending`

<a id="api-477b93b244c46342"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadHost.isCompilationPending a83aa7eaabbe69ef81fbd95e2b3451b154f4594171e164c1fb3ab6e7f54a7163 -->

```csharp
public bool Inno.Scripting.Reload.ScriptReloadHost.isCompilationPending { get; }
```

Gets whether source or plugin changes are waiting to be compiled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L171).

## `isCompilationTakingLong`

<a id="api-019f5b07b6fcb214"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadHost.isCompilationTakingLong 7047ddd0e9147dcb27ba019b98fff8bdd61ab33e335fb358bd27db3987fef89f -->

```csharp
public bool Inno.Scripting.Reload.ScriptReloadHost.isCompilationTakingLong { get; }
```

Gets whether the active compilation exceeded the configured warning duration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L202).

## `isCompiling`

<a id="api-478d31b91243bdfa"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadHost.isCompiling 7b77f9acd70f6174f0d75832135a253d30f85f43cec0177735cf41efb78dc8f0 -->

```csharp
public bool Inno.Scripting.Reload.ScriptReloadHost.isCompiling { get; }
```

Gets whether a compilation currently owns the compiler gate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L166).

## `isFaulted`

<a id="api-8f3fe58c8e57bbe5"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadHost.isFaulted eb47d6ac19582a159a1a020a25f5abed3cddaf1ae944985d204fabd63805b3a3 -->

```csharp
public bool Inno.Scripting.Reload.ScriptReloadHost.isFaulted { get; }
```

Gets whether a retired generation exceeded the retention threshold and permanently stopped this host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L234).

## `isUnloadVerificationPending`

<a id="api-c3b1aa504ce412a8"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadHost.isUnloadVerificationPending eadfe071683871ccc6e3238b50955fff749b32e42890b0142f738912d439e2a0 -->

```csharp
public bool Inno.Scripting.Reload.ScriptReloadHost.isUnloadVerificationPending { get; }
```

Gets whether retired collectible assembly generations are still being verified for unload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L222).

## `lastCompilation`

<a id="api-842e9368e922a5f9"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadHost.lastCompilation d232189383ddea05046c1c8d9a9702e879e74ae4e31e00521ceeb6fc7c463acb -->

```csharp
public Inno.Scripting.Compiler.ScriptCompilationResult? Inno.Scripting.Reload.ScriptReloadHost.lastCompilation { get; }
```

Gets the most recently completed compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L210).

## `progress`

<a id="api-92d7825d18daf508"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadHost.progress a70bf6d278935eb261ffa516ae4b962c94593682cf6ca8418341cc925691bd61 -->

```csharp
public Inno.Scripting.Reload.ScriptReloadProgress Inno.Scripting.Reload.ScriptReloadHost.progress { get; }
```

Gets one atomically published operation, fraction, stage and cancellation snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadHost.cs#L183).
