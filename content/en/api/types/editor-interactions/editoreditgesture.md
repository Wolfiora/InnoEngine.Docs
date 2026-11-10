---
title: "EditorEditGesture"
description: "Reference for EditorEditGesture in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.dd3aee67fe8793e9
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorEditGesture`

This reference describes `EditorEditGesture` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-591bba2658b449c2) | Method |
| [`Cancel`](#api-dd1a227577e34c27) | Method |
| [`Commit`](#api-7f42b89c8aca3e33) | Method |
| [`Dispose`](#api-4191b7cb89b4a5e9) | Method |
| [`isActive`](#api-98586dcd46680878) | Property |
| [`mergeKey`](#api-9af79ec6ff79b0b8) | Property |

## Type declaration

<a id="api-dd3aee67fe8793e9"></a>
<!-- api: T:Inno.Editor.Interactions.EditorEditGesture d7f052708c480d4c2c88f5ae738adb86991462b2e83c89bcddb093893878ae20 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorEditGesture : System.IDisposable
```

Owns one continuous edit transaction without retaining edited objects, setters or extension instances.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Editing/EditorEditGesture.cs#L7).

## `#ctor`

<a id="api-591bba2658b449c2"></a>
<!-- api: M:Inno.Editor.Interactions.EditorEditGesture.#ctor(Inno.Editor.Interactions.IEditorHistory,System.String) ca3ed946bf00764c0fb95d1157e67418c639c66e144c403050b6cfec25e48ae7 -->

```csharp
public Inno.Editor.Interactions.EditorEditGesture.EditorEditGesture(Inno.Editor.Interactions.IEditorHistory history, string name)
```

Begins an edit whose updates use the existing domain mutation and History protocols.

**Parameter `history`:** The authoritative History for the current editor session.

**Parameter `name`:** The operation name displayed by Undo and Redo after a successful commit.

**Throws `System.ArgumentNullException`:** The History owner is null.

**Throws `System.InvalidOperationException`:** History cannot begin a transaction in its current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Editing/EditorEditGesture.cs#L25).

## `Cancel`

<a id="api-dd1a227577e34c27"></a>
<!-- api: M:Inno.Editor.Interactions.EditorEditGesture.Cancel caf53427de4a469c85e78aa25bee7cd85f6415dab51f89118dbe995747415883 -->

```csharp
public Inno.Editor.Interactions.EditorHistoryResult Inno.Editor.Interactions.EditorEditGesture.Cancel()
```

Attempts to restore the state before the gesture without discarding a failed rollback.

**Returns:** The rollback outcome; a state-preserving failure keeps this gesture active for retry.

**Throws `System.InvalidOperationException`:** The gesture is finished or a nested transaction remains active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Editing/EditorEditGesture.cs#L66).

## `Commit`

<a id="api-7f42b89c8aca3e33"></a>
<!-- api: M:Inno.Editor.Interactions.EditorEditGesture.Commit 28cc0f531ff81b65892d7a483eb9d0b724f42eec0ae13f4183f4d83aaa47b069 -->

```csharp
public void Inno.Editor.Interactions.EditorEditGesture.Commit()
```

Commits the edit exactly once; rejected completion leaves the transaction available for retry.

**Throws `System.InvalidOperationException`:** The gesture is finished or a nested transaction remains active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Editing/EditorEditGesture.cs#L49).

## `Dispose`

<a id="api-4191b7cb89b4a5e9"></a>
<!-- api: M:Inno.Editor.Interactions.EditorEditGesture.Dispose b1006bc3609dc518d02a4fb552c884ef03faef82bfb735a03193db01553f3e04 -->

```csharp
public void Inno.Editor.Interactions.EditorEditGesture.Dispose()
```

Cancels an unfinished gesture and releases its ownership only after rollback succeeds.

**Throws `System.InvalidOperationException`:** Rollback is blocked or a nested transaction remains active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Editing/EditorEditGesture.cs#L85).

## `isActive`

<a id="api-98586dcd46680878"></a>
<!-- api: P:Inno.Editor.Interactions.EditorEditGesture.isActive 4538dae2696dea677325e32717823135149c56d6cad47ff81e7437804df73b0a -->

```csharp
public bool Inno.Editor.Interactions.EditorEditGesture.isActive { get; }
```

Gets whether this gesture still owns an active transaction, including a rejected completion.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Editing/EditorEditGesture.cs#L41).

## `mergeKey`

<a id="api-9af79ec6ff79b0b8"></a>
<!-- api: P:Inno.Editor.Interactions.EditorEditGesture.mergeKey 860e66663aed19a704a3e8cfc7e3fe2b6854ef8cf6ddc53826276e511087ab64 -->

```csharp
public string Inno.Editor.Interactions.EditorEditGesture.mergeKey { get; }
```

Gets the transient merge boundary shared only by updates within this gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Editing/EditorEditGesture.cs#L37).
