---
title: "ScriptCompiler"
description: "Reference for ScriptCompiler in Inno.Scripting.Compiler."
uid: api.inno.scripting.compiler.81e89c199c4d737e
kind: api
owners:
  - Inno.Scripting.Compiler
apiSurface: source-clr
contracts:
  - project.inno-scripting-compiler
---
# `ScriptCompiler`

This reference describes `ScriptCompiler` in `Inno.Scripting.Compiler`. Read the [shared contract](../../../projects/inno-scripting-compiler.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a8433c37a7df04de) | Method |
| [`CollectArtifacts`](#api-25139372f5a70322) | Method |
| [`CompileAuthoringGenerationAsync`](#api-41efe62a5f7fac88) | Method |
| [`CompileRuntimeDeploymentAsync`](#api-aa1ed1280f65dc28) | Method |
| [`GenerateProjectFiles`](#api-44713677a7cd1fa2) | Method |

## Type declaration

<a id="api-81e89c199c4d737e"></a>
<!-- api: T:Inno.Scripting.Compiler.ScriptCompiler e45ca3f759396bc9b3ede5b955212a63f6a24b1c99d0d1a3d41e3a1dbd05c594 -->

```csharp
public sealed class Inno.Scripting.Compiler.ScriptCompiler
```

Produces deterministic runtime and editor script artifacts from one authoring snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompiler.cs#L16).

## `#ctor`

<a id="api-a8433c37a7df04de"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompiler.#ctor(Inno.Scripting.Compiler.ScriptCompilerOptions,Inno.Assets.Pipeline.AssetPipeline,Inno.Plugins.Authoring.PluginEnvironment) 3aa4991f8cbdafb35d8fb38271b1da1b081550b8cac87e7cb67fe5c462bff9a3 -->

```csharp
public Inno.Scripting.Compiler.ScriptCompiler.ScriptCompiler(Inno.Scripting.Compiler.ScriptCompilerOptions options, Inno.Assets.Pipeline.AssetPipeline assets, Inno.Plugins.Authoring.PluginEnvironment plugins)
```

Creates a compiler over explicit authoring services owned by one host.

**Parameter `options`:** The project and derived-cache locations used by compilation.

**Parameter `assets`:** The authoring asset pipeline supplying committed source artifacts.

**Parameter `plugins`:** The Plugin environment supplying the candidate Plugin source generation.

**Throws `System.ArgumentNullException`:** Thrown when an owner argument is `null`.

**Throws `System.ArgumentException`:** Thrown when the project root is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompiler.cs#L40).

## `CollectArtifacts`

<a id="api-25139372f5a70322"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompiler.CollectArtifacts(System.Collections.Generic.IEnumerable{System.String}) 51955c25138858591e10844aac9c25d40944e4a403102e985c056cd3f072ac80 -->

```csharp
public int Inno.Scripting.Compiler.ScriptCompiler.CollectArtifacts(System.Collections.Generic.IEnumerable<string?> retainedDirectories)
```

Removes unreferenced compiler generations while retaining the supplied active directories.

**Parameter `retainedDirectories`:** The generation directories that remain reachable from active runtime sessions.

**Returns:** The number of obsolete generation directories removed from the compiler cache.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompiler.cs#L200).

## `CompileAuthoringGenerationAsync`

<a id="api-41efe62a5f7fac88"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompiler.CompileAuthoringGenerationAsync(System.IProgress{Inno.Scripting.Compiler.ScriptCompilationProgress},System.Threading.CancellationToken,Inno.Assets.Pipeline.IAssetSourceSnapshot) 46bcba0cea8ef0e2627c79e05299d77829f5b8aa217bfdec7cd959e5bb01f717 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Scripting.Compiler.ScriptCompilationResult> Inno.Scripting.Compiler.ScriptCompiler.CompileAuthoringGenerationAsync(System.IProgress<Inno.Scripting.Compiler.ScriptCompilationProgress>? progress = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken), Inno.Assets.Pipeline.IAssetSourceSnapshot? sourceSnapshot = null)
```

Compiles a complete runtime and editor candidate generation without activating it.

**Constraints:** Source discovery captures live inputs on the owner thread. Reference generation, Roslyn and
artifact writes run in the background; progress observers must accept callbacks from either thread.
Retain the source generation until the returned operation drains, including after cancellation.
Complete cache trees use Core IO atomic publication and replacement. A committed cache remains
valid if cleanup of its previous tree fails; compilation does not activate either generation.

**Parameter `progress`:** Optional observer for monotonic compiler progress.

**Parameter `cancellationToken`:** The token that cancels compilation before an artifact generation is committed.

**Returns:** The immutable diagnostics and artifacts produced by the compilation attempt.

**Throws `System.OperationCanceledException`:** Thrown when `cancellationToken` is canceled.

**Throws `System.IO.IOException`:** Artifact publication fails, or cleanup fails after a complete cache tree commits.

**Throws `System.UnauthorizedAccessException`:** The filesystem continues denying artifact access after the bounded Core IO wait.

**Throws `System.AggregateException`:** Cache replacement and restoration both fail; the exception identifies the preserved previous tree.

**Parameter `sourceSnapshot`:** Optional isolated authoring sources. Capture on its owner thread and keep its transaction
alive until compilation drains; null selects the current Plugin candidate or active sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompiler.cs#L109).

## `CompileRuntimeDeploymentAsync`

<a id="api-aa1ed1280f65dc28"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompiler.CompileRuntimeDeploymentAsync(System.String,System.IProgress{Inno.Scripting.Compiler.ScriptCompilationProgress},System.Threading.CancellationToken) 07093e9dd3515291d1c8ebbd6bb3d275b24cb93c263257314c394641742f4e94 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Scripting.Compiler.ScriptCompilationResult> Inno.Scripting.Compiler.ScriptCompiler.CompileRuntimeDeploymentAsync(string targetRuntimeDirectory, System.IProgress<Inno.Scripting.Compiler.ScriptCompilationProgress>? progress = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Compiles only the runtime assembly closure required by a deployed Player and binds it to that Player runtime.

**Constraints:** Complete cache trees use Core IO atomic publication and replacement. Cancellation before commit
preserves the previous tree; cancellation does not undo a committed cache. Cleanup failure after
commit preserves the installed tree and remaining backup without activating a generation.

**Parameter `targetRuntimeDirectory`:** The verified Player Support Pack directory whose runtime assemblies will execute the emitted scripts.

**Parameter `progress`:** Optional observer for monotonic compiler progress.

**Parameter `cancellationToken`:** The token that cancels compilation before an artifact generation is committed.

**Returns:** The immutable diagnostics and runtime-only artifacts produced by the compilation attempt.

**Throws `System.OperationCanceledException`:** Thrown when `cancellationToken` is canceled.

**Throws `System.ArgumentException`:** Thrown when `targetRuntimeDirectory` is empty.

**Throws `System.IO.DirectoryNotFoundException`:** Thrown when `targetRuntimeDirectory` does not exist.

**Throws `System.IO.InvalidDataException`:** Thrown when the target runtime has no valid Inno runtime assembly closure.

**Throws `System.IO.IOException`:** Artifact publication fails, or cleanup fails after a complete cache tree commits.

**Throws `System.UnauthorizedAccessException`:** The filesystem continues denying artifact access after the bounded Core IO wait.

**Throws `System.AggregateException`:** Cache replacement and restoration both fail; the exception identifies the preserved previous tree.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompiler.cs#L170).

## `GenerateProjectFiles`

<a id="api-44713677a7cd1fa2"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompiler.GenerateProjectFiles c868a7dbad380ffff94536c4072a81062ba507cdd89f4eb3d67848ee12fc20ca -->

```csharp
public void Inno.Scripting.Compiler.ScriptCompiler.GenerateProjectFiles()
```

Regenerates IDE project files from the current source graph and logical API references.

**Throws `System.InvalidOperationException`:** Thrown when the authoring asset pipeline is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompiler.cs#L66).
