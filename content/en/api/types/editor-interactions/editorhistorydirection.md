---
title: "EditorHistoryDirection"
description: "Reference for EditorHistoryDirection in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.4e86d2ae59fe2dfb
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorHistoryDirection`

This reference describes `EditorHistoryDirection` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Redo`](#api-567d1e320d363a5a) | Field |
| [`Undo`](#api-05a9e21b84c7f87f) | Field |

## Type declaration

<a id="api-4e86d2ae59fe2dfb"></a>
<!-- api: T:Inno.Editor.Interactions.EditorHistoryDirection 867d8dcd063a29f4e0ec747ce96553b6c6b84d8a4c06262a9172d1f8dcc47073 -->

```csharp
public enum Inno.Editor.Interactions.EditorHistoryDirection : int
```

Identifies the direction in which an editor history change is being applied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryDirection.cs#L6).

## `Redo`

<a id="api-567d1e320d363a5a"></a>
<!-- api: F:Inno.Editor.Interactions.EditorHistoryDirection.Redo 3774690d740ed2fa236904e1372fefffcc8268a226c063e86b4bdcb6eb946730 -->

```csharp
Inno.Editor.Interactions.EditorHistoryDirection.Redo = 1
```

Restores the state produced by the committed change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryDirection.cs#L16).

## `Undo`

<a id="api-05a9e21b84c7f87f"></a>
<!-- api: F:Inno.Editor.Interactions.EditorHistoryDirection.Undo 12453041ca48750ec0ddef939dc3e0fd7a42b192cac2e619d348ac976ce4e40a -->

```csharp
Inno.Editor.Interactions.EditorHistoryDirection.Undo = 0
```

Restores the state that existed before the change was committed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryDirection.cs#L11).
