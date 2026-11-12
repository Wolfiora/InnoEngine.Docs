---
title: "EditorHistoryHandler"
description: "Reference for EditorHistoryHandler in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.2a1f2430e0080765
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorHistoryHandler`

This reference describes `EditorHistoryHandler` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c7064c82cc783919) | Method |
| [`Apply`](#api-816cedd57db414aa) | Method |
| [`Query`](#api-afbf87bd7bf5ec81) | Method |
| [`StateIntegrityFailure`](#api-698f1f156a9c17ba) | Method |
| [`TryMerge`](#api-ecd15cdfd98c4476) | Method |

## Type declaration

<a id="api-2a1f2430e0080765"></a>
<!-- api: T:InnoEditor.Interactions.EditorHistoryHandler 7b1ee43ab865c46056220ea379f955e4485a2489d99d64eb053d7b6c13c47123 -->

```csharp
public abstract class InnoEditor.Interactions.EditorHistoryHandler
```

Interprets neutral editor history payloads for one current-generation feature protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandler.cs#L8).

## `#ctor`

<a id="api-c7064c82cc783919"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryHandler.#ctor 96d4deed22818f81eb72a55cc68297ba91334d30ad7cfed451324af9a5254c42 -->

```csharp
protected InnoEditor.Interactions.EditorHistoryHandler.EditorHistoryHandler()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandler.cs#L8).

## `Apply`

<a id="api-816cedd57db414aa"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryHandler.Apply(InnoEditor.Interactions.EditorHistoryContext,InnoEditor.Interactions.EditorHistoryChange,InnoEditor.Interactions.EditorHistoryDirection) 8f56912122d97be0609028f7a7f4f025844372a3b70bfce88b7e35995753385d -->

```csharp
protected abstract InnoEditor.Interactions.EditorHistoryResult InnoEditor.Interactions.EditorHistoryHandler.Apply(InnoEditor.Interactions.EditorHistoryContext context, InnoEditor.Interactions.EditorHistoryChange change, InnoEditor.Interactions.EditorHistoryDirection direction)
```

Atomically applies a neutral history change in the requested direction.

**Parameter `context`:** The current-generation editor services.

**Parameter `change`:** The neutral history change.

**Parameter `direction`:** The requested Undo or Redo direction.

**Returns:** The transition result. A failure must leave the feature in its original state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandler.cs#L46).

## `Query`

<a id="api-afbf87bd7bf5ec81"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryHandler.Query(InnoEditor.Interactions.EditorHistoryContext,InnoEditor.Interactions.EditorHistoryChange,InnoEditor.Interactions.EditorHistoryDirection) e2c5fd7b6fdb6c70ee66927d3e5fb19cc37a53aa46fb87fb69e3351adf36fb09 -->

```csharp
protected abstract InnoEditor.Interactions.EditorHistoryAvailability InnoEditor.Interactions.EditorHistoryHandler.Query(InnoEditor.Interactions.EditorHistoryContext context, InnoEditor.Interactions.EditorHistoryChange change, InnoEditor.Interactions.EditorHistoryDirection direction)
```

Determines whether a neutral change can currently transition in the requested direction.

**Parameter `context`:** The current-generation editor services.

**Parameter `change`:** The neutral history change.

**Parameter `direction`:** The requested Undo or Redo direction.

**Returns:** The current transition availability.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandler.cs#L25).

## `StateIntegrityFailure`

<a id="api-698f1f156a9c17ba"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryHandler.StateIntegrityFailure(System.String) 4316c169a1c19b5017823906950c8ed11418c027cfd7619f2da09336a4ed1d23 -->

```csharp
protected static InnoEditor.Interactions.EditorHistoryResult InnoEditor.Interactions.EditorHistoryHandler.StateIntegrityFailure(string message)
```

Creates a failed result for a transition whose compensation also failed.

**Parameter `message`:** The diagnostic containing both the transition and compensation failures.

**Returns:** A failure that faults the owning history.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandler.cs#L85).

## `TryMerge`

<a id="api-ecd15cdfd98c4476"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryHandler.TryMerge(InnoEditor.Interactions.EditorHistoryChange,InnoEditor.Interactions.EditorHistoryChange,InnoEditor.Interactions.EditorHistoryChange@) 074a38689197e4def36a275b7acdb4db12762fa1a10419990a9a659f02686f76 -->

```csharp
protected virtual bool InnoEditor.Interactions.EditorHistoryHandler.TryMerge(InnoEditor.Interactions.EditorHistoryChange older, InnoEditor.Interactions.EditorHistoryChange newer, out InnoEditor.Interactions.EditorHistoryChange? merged)
```

Attempts to merge two adjacent changes to the same logical value.

**Parameter `older`:** The existing older history change.

**Parameter `newer`:** The newly recorded adjacent history change.

**Parameter `merged`:** The independently owned merged change when successful.

**Returns:** `true` when `merged` replaces both input changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandler.cs#L67).
