---
title: "EditorHistoryHandler"
description: "Reference for EditorHistoryHandler in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.b5f50b986f63fa2e
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorHistoryHandler`

This reference describes `EditorHistoryHandler` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2dcb5ae03e5eb054) | Method |
| [`Apply`](#api-bff2a1f0ba486c3a) | Method |
| [`Query`](#api-35dec4d4fffdc638) | Method |
| [`StateIntegrityFailure`](#api-ef7ad26fbf50e7c4) | Method |
| [`TryMerge`](#api-9a6842892243e1f6) | Method |

## Type declaration

<a id="api-b5f50b986f63fa2e"></a>
<!-- api: T:Inno.Editor.Interactions.EditorHistoryHandler f9d50ec19c4e95586c81286ebe0c3d79f0c763e538eee83d6ce8b0f26d652bca -->

```csharp
public abstract class Inno.Editor.Interactions.EditorHistoryHandler
```

Interprets neutral editor history payloads for one current-generation feature protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandler.cs#L8).

## `#ctor`

<a id="api-2dcb5ae03e5eb054"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryHandler.#ctor 1db1f93d62ce497b063e141e681cda0191fceaa510d4372b34a4ce717f4f2102 -->

```csharp
protected Inno.Editor.Interactions.EditorHistoryHandler.EditorHistoryHandler()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandler.cs#L8).

## `Apply`

<a id="api-bff2a1f0ba486c3a"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryHandler.Apply(Inno.Editor.Interactions.EditorHistoryContext,Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryDirection) c21d44e272c23a977aa0474cb34b51c5d4dbc7d9feca15d9476fd3e1463067a5 -->

```csharp
protected abstract Inno.Editor.Interactions.EditorHistoryResult Inno.Editor.Interactions.EditorHistoryHandler.Apply(Inno.Editor.Interactions.EditorHistoryContext context, Inno.Editor.Interactions.EditorHistoryChange change, Inno.Editor.Interactions.EditorHistoryDirection direction)
```

Atomically applies a neutral history change in the requested direction.

**Parameter `context`:** The current-generation editor services.

**Parameter `change`:** The neutral history change.

**Parameter `direction`:** The requested Undo or Redo direction.

**Returns:** The transition result. A failure must leave the feature in its original state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandler.cs#L46).

## `Query`

<a id="api-35dec4d4fffdc638"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryHandler.Query(Inno.Editor.Interactions.EditorHistoryContext,Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryDirection) def73cc2fca6163f197b11084983d0be8fc9040cc1e4b2282d49f5c84c38df24 -->

```csharp
protected abstract Inno.Editor.Interactions.EditorHistoryAvailability Inno.Editor.Interactions.EditorHistoryHandler.Query(Inno.Editor.Interactions.EditorHistoryContext context, Inno.Editor.Interactions.EditorHistoryChange change, Inno.Editor.Interactions.EditorHistoryDirection direction)
```

Determines whether a neutral change can currently transition in the requested direction.

**Parameter `context`:** The current-generation editor services.

**Parameter `change`:** The neutral history change.

**Parameter `direction`:** The requested Undo or Redo direction.

**Returns:** The current transition availability.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandler.cs#L25).

## `StateIntegrityFailure`

<a id="api-ef7ad26fbf50e7c4"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryHandler.StateIntegrityFailure(System.String) 2b2d24c7d311aefc13946c63fb04939da611e0f63e45b7b115d67fd1659bd342 -->

```csharp
protected static Inno.Editor.Interactions.EditorHistoryResult Inno.Editor.Interactions.EditorHistoryHandler.StateIntegrityFailure(string message)
```

Creates a failed result for a transition whose compensation also failed.

**Parameter `message`:** The diagnostic containing both the transition and compensation failures.

**Returns:** A failure that faults the owning history.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandler.cs#L85).

## `TryMerge`

<a id="api-9a6842892243e1f6"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryHandler.TryMerge(Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryChange@) a3aeeb86e5272a944ab41078448ffe01be34e73eed91124fa52c5504031ac742 -->

```csharp
protected virtual bool Inno.Editor.Interactions.EditorHistoryHandler.TryMerge(Inno.Editor.Interactions.EditorHistoryChange older, Inno.Editor.Interactions.EditorHistoryChange newer, out Inno.Editor.Interactions.EditorHistoryChange? merged)
```

Attempts to merge two adjacent changes to the same logical value.

**Parameter `older`:** The existing older history change.

**Parameter `newer`:** The newly recorded adjacent history change.

**Parameter `merged`:** The independently owned merged change when successful.

**Returns:** `true` when `merged` replaces both input changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandler.cs#L67).
