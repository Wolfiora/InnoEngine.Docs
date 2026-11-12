---
title: "EditorModule"
description: "Reference for EditorModule in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.05e0ad135a2e28c8
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `EditorModule`

This reference describes `EditorModule` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-eeb3cc76ef8031f1) | Method |
| [`Capture`](#api-fe612fe6db11622d) | Method |
| [`OnDispose`](#api-c9b15e17771b0ad8) | Method |
| [`OnStart`](#api-6364a95b8e1b0029) | Method |
| [`OnStop`](#api-31f29f3b75d3bf92) | Method |
| [`OnUpdate`](#api-533e95800fc0c5fb) | Method |
| [`Restore`](#api-be84a153b9430d0a) | Method |
| [`Start`](#api-e0fd967f4afe73a4) | Method |
| [`Stop`](#api-68516feb27d1225e) | Method |
| [`Update`](#api-3bcea8e88b494a57) | Method |
| [`blocksFollowingUpdates`](#api-685366db6153e8b4) | Property |

## Type declaration

<a id="api-05e0ad135a2e28c8"></a>
<!-- api: T:InnoEditor.Core.EditorModule 64ac0432ca0ac13c151682ca7ed2ab51953e93af8e093b0d6b4833fa1a6c28b0 -->

```csharp
public abstract class InnoEditor.Core.EditorModule
```

Owns optional shared state and lifecycle for one editor feature.
Simple panels and actions do not need a module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L13).

## `#ctor`

<a id="api-eeb3cc76ef8031f1"></a>
<!-- api: M:InnoEditor.Core.EditorModule.#ctor 3291217ecc955cc3412b135eb8caa8f305d3bad34dadfa4ebe91f3f622265eca -->

```csharp
protected InnoEditor.Core.EditorModule.EditorModule()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L13).

## `Capture`

<a id="api-fe612fe6db11622d"></a>
<!-- api: M:InnoEditor.Core.EditorModule.Capture(InnoEditor.Core.EditorState) 5c6d0c39f3c7a679dca38fe4e98a0b0563e676513a71625f0f2e112cbeb1bfcb -->

```csharp
protected virtual void InnoEditor.Core.EditorModule.Capture(InnoEditor.Core.EditorState state)
```

Captures readable project state owned by this module.

**Constraints:** Overriding this method opts the module into project-state IO. Modules that keep the base
implementation are never registered with the persistence coordinator and therefore perform
no state reads or writes.

**Parameter `state`:** The writable parameter that receives the complete readable state for this module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L172).

## `OnDispose`

<a id="api-c9b15e17771b0ad8"></a>
<!-- api: M:InnoEditor.Core.EditorModule.OnDispose 6d844c0c1553132a50ffeeeaf1d7a2fa684e1f0ae5265d4b2c6d9667972d8730 -->

```csharp
protected virtual void InnoEditor.Core.EditorModule.OnDispose()
```

Releases resources owned by this module after it has stopped and left the active extension
generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L195).

## `OnStart`

<a id="api-6364a95b8e1b0029"></a>
<!-- api: M:InnoEditor.Core.EditorModule.OnStart(InnoEditor.Core.EditorContext) 07be0c9f5fca44e783e38b87bf63282a82b4005878f230f7919391e3f15662b2 -->

```csharp
protected virtual void InnoEditor.Core.EditorModule.OnStart(InnoEditor.Core.EditorContext context)
```

Runs after the module generation becomes active and before its first update.

**Parameter `context`:** The shared editor context for the active runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L133).

## `OnStop`

<a id="api-31f29f3b75d3bf92"></a>
<!-- api: M:InnoEditor.Core.EditorModule.OnStop(InnoEditor.Core.EditorContext) 65e171e76ee2ac4632f1b15f7463c4567703cef5cfd064c195d737a2ac0f3e4e -->

```csharp
protected virtual void InnoEditor.Core.EditorModule.OnStop(InnoEditor.Core.EditorContext context)
```

Runs before the module generation is released and its disposable instances are destroyed.

**Constraints:** This includes partial startup compensation. Pending retirement must throw RetirementPendingException
and preserve unfinished ownership; completed steps must be idempotent across retries.

**Parameter `context`:** The shared editor context for the runtime being stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L157).

## `OnUpdate`

<a id="api-533e95800fc0c5fb"></a>
<!-- api: M:InnoEditor.Core.EditorModule.OnUpdate(InnoEditor.Core.EditorContext) d39af08859a6e4d350aa4e165212e67bcba6b9997c030c4d13b628b3ae27dd94 -->

```csharp
protected virtual void InnoEditor.Core.EditorModule.OnUpdate(InnoEditor.Core.EditorContext context)
```

Runs once per editor frame before views are drawn.

**Parameter `context`:** The shared editor context containing the current frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L143).

## `Restore`

<a id="api-be84a153b9430d0a"></a>
<!-- api: M:InnoEditor.Core.EditorModule.Restore(InnoEditor.Core.EditorState) 18c3a5f3029505a270112c74ada8f46b3087b2714e088df06cfb04dd6b5f0cb4 -->

```csharp
protected virtual void InnoEditor.Core.EditorModule.Restore(InnoEditor.Core.EditorState state)
```

Restores readable project state owned by this module.

**Constraints:** This method is called only when `InnoEditor.Core.EditorModule.Capture(InnoEditor.Core.EditorState)` is overridden. It runs once after the
module is started and before the module is allowed to capture replacement state.

**Parameter `state`:** The read-only state parameter for this module. Missing or incompatible values return the
fallback supplied to ```InnoEditor.Core.EditorState.Get``1(System.String,``0)```.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L187).

## `Start`

<a id="api-e0fd967f4afe73a4"></a>
<!-- api: M:InnoEditor.Core.EditorModule.Start(InnoEditor.Core.EditorContext) 9d4c9896811f77a30c8a44c53fc2a690367f1d48d9d8964d1ba062ab4f05cd36 -->

```csharp
public void InnoEditor.Core.EditorModule.Start(InnoEditor.Core.EditorContext context)
```

Starts the module after the containing extension generation becomes active.

**Parameter `context`:** The shared editor context for the active runtime.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.

**Throws `System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Throws `System.InvalidOperationException`:** Thrown when the module is already started.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L46).

## `Stop`

<a id="api-68516feb27d1225e"></a>
<!-- api: M:InnoEditor.Core.EditorModule.Stop(InnoEditor.Core.EditorContext) 4e1b09e6b8f0eb879c2f3fbc183ccacb071ded19bd90008b154eb185f88f96e0 -->

```csharp
public void InnoEditor.Core.EditorModule.Stop(InnoEditor.Core.EditorContext context)
```

Stops the module before the containing extension generation is released.

**Constraints:** Also compensates a partially failed Start. Completed stops are idempotent; pending stops may be retried.

**Parameter `context`:** The shared editor context for the runtime being stopped.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.

**Throws `System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Live work still depends on this module. Its owner must retain it and retry Stop before disposal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L102).

## `Update`

<a id="api-3bcea8e88b494a57"></a>
<!-- api: M:InnoEditor.Core.EditorModule.Update(InnoEditor.Core.EditorContext) f7fc2074f2a5a247672cf190edb487c804af5e7f42621a7d2e86b295ed4e2011 -->

```csharp
public void InnoEditor.Core.EditorModule.Update(InnoEditor.Core.EditorContext context)
```

Updates the module once per editor frame before panels and modals are drawn.

**Parameter `context`:** The shared editor context containing the current frame state.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.

**Throws `System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Throws `System.InvalidOperationException`:** Thrown when the module is not started.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L74).

## `blocksFollowingUpdates`

<a id="api-685366db6153e8b4"></a>
<!-- api: P:InnoEditor.Core.EditorModule.blocksFollowingUpdates 05086842429740633d6dbd679238f968181874a8e472224a191ca067f25907a0 -->

```csharp
public virtual bool InnoEditor.Core.EditorModule.blocksFollowingUpdates { get; }
```

Gets whether modules ordered after this module must defer their updates for the current frame.

**Constraints:** A module may return `true` while completing a project-wide bootstrap or atomic
transition that later modules must not observe partially. Panels and modals remain drawable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L28).
