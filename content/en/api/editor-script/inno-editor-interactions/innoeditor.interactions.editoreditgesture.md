---
title: "EditorEditGesture"
description: "Reference for EditorEditGesture in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.288c350b936a53d7
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorEditGesture`

This reference describes `EditorEditGesture` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d4874efb4ca88e59) | Method |
| [`Cancel`](#api-59864709e0281d8a) | Method |
| [`Commit`](#api-246ab9bb0ebc3988) | Method |
| [`Dispose`](#api-9261e4ea5335f02b) | Method |
| [`isActive`](#api-8abd87fcaa480616) | Property |
| [`mergeKey`](#api-251f8071509495f1) | Property |

## Type declaration

<a id="api-288c350b936a53d7"></a>
<!-- api: T:InnoEditor.Interactions.EditorEditGesture 775f4810bde8e63e749ce89d48856b0d333bd52ba54a8ed86187242046544fd5 -->

```csharp
public sealed class InnoEditor.Interactions.EditorEditGesture : System.IDisposable
```

Owns one continuous edit transaction without retaining edited objects, setters or extension instances.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Editing/EditorEditGesture.cs#L7).

## `#ctor`

<a id="api-d4874efb4ca88e59"></a>
<!-- api: M:InnoEditor.Interactions.EditorEditGesture.#ctor(InnoEditor.Interactions.IEditorHistory,System.String) 5a187954928ac555effbf443e84f7e43df36856658f3ce6dd7f05564ae2bfa9c -->

```csharp
public InnoEditor.Interactions.EditorEditGesture.EditorEditGesture(InnoEditor.Interactions.IEditorHistory history, string name)
```

Begins an edit whose updates use the existing domain mutation and History protocols.

**Parameter `history`:** The authoritative History for the current editor session.

**Parameter `name`:** The operation name displayed by Undo and Redo after a successful commit.

**Throws `System.ArgumentNullException`:** The History owner is null.

**Throws `System.InvalidOperationException`:** History cannot begin a transaction in its current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Editing/EditorEditGesture.cs#L25).

## `Cancel`

<a id="api-59864709e0281d8a"></a>
<!-- api: M:InnoEditor.Interactions.EditorEditGesture.Cancel 83c1f8d3b97dbb0ba7aa08f5dc29978a966e92ca4446ba80682026d2831b6d0f -->

```csharp
public InnoEditor.Interactions.EditorHistoryResult InnoEditor.Interactions.EditorEditGesture.Cancel()
```

Attempts to restore the state before the gesture without discarding a failed rollback.

**Returns:** The rollback outcome; a state-preserving failure keeps this gesture active for retry.

**Throws `System.InvalidOperationException`:** The gesture is finished or a nested transaction remains active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Editing/EditorEditGesture.cs#L66).

## `Commit`

<a id="api-246ab9bb0ebc3988"></a>
<!-- api: M:InnoEditor.Interactions.EditorEditGesture.Commit eee14e3514926edf1d646f815c20a6b0c4145f03f967cbfb1226bfb2fa211a1f -->

```csharp
public void InnoEditor.Interactions.EditorEditGesture.Commit()
```

Commits the edit exactly once; rejected completion leaves the transaction available for retry.

**Throws `System.InvalidOperationException`:** The gesture is finished or a nested transaction remains active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Editing/EditorEditGesture.cs#L49).

## `Dispose`

<a id="api-9261e4ea5335f02b"></a>
<!-- api: M:InnoEditor.Interactions.EditorEditGesture.Dispose 6261b95d4eda12f857a932e35cdcdefc07fd98dc2719623c7c1e1764ff3f33c8 -->

```csharp
public void InnoEditor.Interactions.EditorEditGesture.Dispose()
```

Cancels an unfinished gesture and releases its ownership only after rollback succeeds.

**Throws `System.InvalidOperationException`:** Rollback is blocked or a nested transaction remains active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Editing/EditorEditGesture.cs#L85).

## `isActive`

<a id="api-8abd87fcaa480616"></a>
<!-- api: P:InnoEditor.Interactions.EditorEditGesture.isActive 83b08a0f36a44f5a1db6a725541bdde995219bb244e0816807214c949c425346 -->

```csharp
public bool InnoEditor.Interactions.EditorEditGesture.isActive { get; }
```

Gets whether this gesture still owns an active transaction, including a rejected completion.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Editing/EditorEditGesture.cs#L41).

## `mergeKey`

<a id="api-251f8071509495f1"></a>
<!-- api: P:InnoEditor.Interactions.EditorEditGesture.mergeKey 562a48df1824dcab7c233c6e78d69bc40b43544fe3f8b1b994ba63a84034d3a9 -->

```csharp
public string InnoEditor.Interactions.EditorEditGesture.mergeKey { get; }
```

Gets the transient merge boundary shared only by updates within this gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Editing/EditorEditGesture.cs#L37).
