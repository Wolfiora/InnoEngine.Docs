---
title: Inno.Scripting.Reload
description: Compile, prepare, activate and retire one project's complete authoring generation.
uid: project.inno-scripting-reload
kind: project
owners: [Inno.Scripting.Reload]
---
# Inno.Scripting.Reload

`ScriptReloadHost` coordinates script changes with module/type candidates and domain-state recovery. It consumes immutable compilation results; activation does not compile source again. Read [script reload and recovery](../script-reload.md) before implementing a coordinator or retaining script-generation state.

## Composition contract

The host receives the compiler, authoring assets, plugin environment, module host, project settings and `IScriptReloadCoordinator`. Composition also supplies `Func<ScriptModuleDeployment, IModuleSource>`, which returns a fresh module source for the frozen deployment. That factory cannot activate or publish the module itself.

Desktop composition can select the DotNet adapter without making the Compiler or Reload assembly depend on that adapter. The shared reload host retains transaction ordering, dependency selection, state migration and retirement verification.

GameScripts and EditorScripts form one authoring generation. Even an Editor-only edit participates in the complete candidate/state-recovery/activation/unload protocol. Unchanged GameScripts compilation artifacts can still be reused; one lifecycle boundary does not require recompiling every source file.

## Failure and cancellation contract

An ordinary failed Project compile produces no candidate and preserves the active generation. Plugin installation changes are different: a removed or invalid active plugin must be retired with its reverse dependency closure even when dependent scripts cannot compile a replacement. Missing-state recovery occurs inside the same generation transaction.

Before commit, participant preparation, activation, domain recovery or external synchronization failure rolls back against the retained complete previous snapshot. Cleanup failure after commit cannot roll back the already published generation; it faults the shared gate. Pending or failed unload verification is not success, including during shutdown.

The caller disposes the reload host to remove observations, cancel and drain compilation, finish the preceding shared GC barrier, and then unload active modules. A faulted gate requires host replacement rather than another reload that clears its diagnostic.

## Observe the current operation

`progress` is an immutable, atomically published `ScriptReloadProgress` snapshot. Queueing, background compilation, candidate application and retirement retain the same operation identity. Delayed callbacks from older work cannot overwrite a newer request's progress.

`CancelCompilation(operationId)` checks that identity under the owner lock and publishes cancellation state before signaling cancellation. `canCancel` reflects the actual compilation stage and resource ownership; do not infer it from a displayed percentage. Cancellation still requires owned work to drain.

Progress contains no plugin instance, `Type` or delegate. Observing it does not weaken candidate publication, Missing recovery, GC/finalizer/weak-reference verification or the Faulted gate.

## API reference

[Browse exact types and members](../../api/engine/scripting/reload/index.md).
