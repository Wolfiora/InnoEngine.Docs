---
title: "EditorModule"
description: "Reference for EditorModule in Inno.Editor.Core."
uid: api.inno.editor.core.f2db28e069de36fd
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorModule`

This reference describes `EditorModule` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-daec7896019a507c) | Method |
| [`Capture`](#api-bf60119211c4d91b) | Method |
| [`OnDispose`](#api-dad64923f4e43ab5) | Method |
| [`OnStart`](#api-5c93d28e44789d14) | Method |
| [`OnStop`](#api-f407acd300714b1f) | Method |
| [`OnUpdate`](#api-ec65d912677fc113) | Method |
| [`Restore`](#api-3b912009674f83ec) | Method |
| [`Start`](#api-f4283f9848253786) | Method |
| [`Stop`](#api-1e22a81d7dc08e2b) | Method |
| [`Update`](#api-0b352784bd222871) | Method |
| [`blocksFollowingUpdates`](#api-d42d0970118884e6) | Property |

## Type declaration

<a id="api-f2db28e069de36fd"></a>
<!-- api: T:Inno.Editor.Core.EditorModule 726212138efc98689b563c671352dc62b2c63c6782126587b843fb9b9e89d06a -->

```csharp
public abstract class Inno.Editor.Core.EditorModule : System.IDisposable
```

Owns optional shared state and lifecycle for one editor feature.
Simple panels and actions do not need a module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L13).

## `#ctor`

<a id="api-daec7896019a507c"></a>
<!-- api: M:Inno.Editor.Core.EditorModule.#ctor 53a990d62940faf2b40d9ef8aa7afc9d3b1eaaad369429cfe1d03f43a4a28676 -->

```csharp
protected Inno.Editor.Core.EditorModule.EditorModule()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L13).

## `Capture`

<a id="api-bf60119211c4d91b"></a>
<!-- api: M:Inno.Editor.Core.EditorModule.Capture(Inno.Editor.Core.EditorState) 2524d58e6491e9daa1e3e4b1e47f67f2396b27fb0d390fdc09d4a5840b979deb -->

```csharp
protected virtual void Inno.Editor.Core.EditorModule.Capture(Inno.Editor.Core.EditorState state)
```

Captures readable project state owned by this module.

**Constraints:** Overriding this method opts the module into project-state IO. Modules that keep the base
implementation are never registered with the persistence coordinator and therefore perform
no state reads or writes.

**Parameter `state`:** The writable parameter that receives the complete readable state for this module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L172).

## `OnDispose`

<a id="api-dad64923f4e43ab5"></a>
<!-- api: M:Inno.Editor.Core.EditorModule.OnDispose ca1c31f2f5ff0cf45a9afd3fc696b001b83f6c5765be172739c64e7d98d44ece -->

```csharp
protected virtual void Inno.Editor.Core.EditorModule.OnDispose()
```

Releases resources owned by this module after it has stopped and left the active extension
generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L195).

## `OnStart`

<a id="api-5c93d28e44789d14"></a>
<!-- api: M:Inno.Editor.Core.EditorModule.OnStart(Inno.Editor.Core.EditorContext) 7ac260f324d8fb387bdc88bb7794b2e410b3d5ac48489db7a246f161c1a93186 -->

```csharp
protected virtual void Inno.Editor.Core.EditorModule.OnStart(Inno.Editor.Core.EditorContext context)
```

Runs after the module generation becomes active and before its first update.

**Parameter `context`:** The shared editor context for the active runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L133).

## `OnStop`

<a id="api-f407acd300714b1f"></a>
<!-- api: M:Inno.Editor.Core.EditorModule.OnStop(Inno.Editor.Core.EditorContext) 9256ab419c3636fbc989662ee1f7806b001880395b29294ce554020e969dbbb1 -->

```csharp
protected virtual void Inno.Editor.Core.EditorModule.OnStop(Inno.Editor.Core.EditorContext context)
```

Runs before the module generation is released and its disposable instances are destroyed.

**Constraints:** This includes partial startup compensation. Pending retirement must throw RetirementPendingException
and preserve unfinished ownership; completed steps must be idempotent across retries.

**Parameter `context`:** The shared editor context for the runtime being stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L157).

## `OnUpdate`

<a id="api-ec65d912677fc113"></a>
<!-- api: M:Inno.Editor.Core.EditorModule.OnUpdate(Inno.Editor.Core.EditorContext) c2c9c14a515fa4df6df5c26861d213c6fd8e28b51ac0420e7d2db2238052dda6 -->

```csharp
protected virtual void Inno.Editor.Core.EditorModule.OnUpdate(Inno.Editor.Core.EditorContext context)
```

Runs once per editor frame before views are drawn.

**Parameter `context`:** The shared editor context containing the current frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L143).

## `Restore`

<a id="api-3b912009674f83ec"></a>
<!-- api: M:Inno.Editor.Core.EditorModule.Restore(Inno.Editor.Core.EditorState) 17c56abf3337a5dfcedb7f1b19a7194045f1ec70f4d01fa8cca1e29e5f1756c3 -->

```csharp
protected virtual void Inno.Editor.Core.EditorModule.Restore(Inno.Editor.Core.EditorState state)
```

Restores readable project state owned by this module.

**Constraints:** This method is called only when `Inno.Editor.Core.EditorModule.Capture(Inno.Editor.Core.EditorState)` is overridden. It runs once after the
module is started and before the module is allowed to capture replacement state.

**Parameter `state`:** The read-only state parameter for this module. Missing or incompatible values return the
fallback supplied to ```Inno.Editor.Core.EditorState.Get``1(System.String,``0)```.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L187).

## `Start`

<a id="api-f4283f9848253786"></a>
<!-- api: M:Inno.Editor.Core.EditorModule.Start(Inno.Editor.Core.EditorContext) 445e4b4fe8dba14a0d0766dc9f042b4abf564b3d1fbfaa14b8318155d324c9fa -->

```csharp
public void Inno.Editor.Core.EditorModule.Start(Inno.Editor.Core.EditorContext context)
```

Starts the module after the containing extension generation becomes active.

**Parameter `context`:** The shared editor context for the active runtime.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.

**Throws `System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Throws `System.InvalidOperationException`:** Thrown when the module is already started.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L46).

## `Stop`

<a id="api-1e22a81d7dc08e2b"></a>
<!-- api: M:Inno.Editor.Core.EditorModule.Stop(Inno.Editor.Core.EditorContext) 9e903df9cd5292a68e63a963f85df057386b64b9ab7ac6a5a16b9172cc9def88 -->

```csharp
public void Inno.Editor.Core.EditorModule.Stop(Inno.Editor.Core.EditorContext context)
```

Stops the module before the containing extension generation is released.

**Constraints:** Also compensates a partially failed Start. Completed stops are idempotent; pending stops may be retried.

**Parameter `context`:** The shared editor context for the runtime being stopped.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.

**Throws `System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Live work still depends on this module. Its owner must retain it and retry Stop before disposal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L102).

## `Update`

<a id="api-0b352784bd222871"></a>
<!-- api: M:Inno.Editor.Core.EditorModule.Update(Inno.Editor.Core.EditorContext) 492a217661738609e95d3f2c8260420f0903004691469411bcbb50e7af878c51 -->

```csharp
public void Inno.Editor.Core.EditorModule.Update(Inno.Editor.Core.EditorContext context)
```

Updates the module once per editor frame before panels and modals are drawn.

**Parameter `context`:** The shared editor context containing the current frame state.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.

**Throws `System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Throws `System.InvalidOperationException`:** Thrown when the module is not started.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L74).

## `blocksFollowingUpdates`

<a id="api-d42d0970118884e6"></a>
<!-- api: P:Inno.Editor.Core.EditorModule.blocksFollowingUpdates fd053cc6e55ee447283c06570592573227caa2100bfee388fbf2106aa13a49de -->

```csharp
public virtual bool Inno.Editor.Core.EditorModule.blocksFollowingUpdates { get; }
```

Gets whether modules ordered after this module must defer their updates for the current frame.

**Constraints:** A module may return `true` while completing a project-wide bootstrap or atomic
transition that later modules must not observe partially. Panels and modals remain drawable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModule.cs#L28).
