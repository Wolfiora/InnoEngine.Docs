---
title: "EditorActionContext`2"
description: "Reference for EditorActionContext`2 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.9762c3ea4f12f04b
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# ``EditorActionContext`2``

This reference describes ``EditorActionContext`2`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Interactions.EditorActionContext`.

## Members

| Member | Kind |
| --- | --- |
| [`argument`](#api-8b44ef1d618702ac) | Property |
| [`target`](#api-0504bf4fe1ab423a) | Property |

## Type declaration

<a id="api-9762c3ea4f12f04b"></a>
<!-- api: T:Inno.Editor.Interactions.EditorActionContext`2 e9ea630868e079f2bb63d395944c6b279fe7c6a6011945e81d789705d190fcd7 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorActionContext<TTarget, TArgument> : Inno.Editor.Interactions.EditorActionContext
```

Provides a strongly typed target and action argument to an editor action.

**Type parameter `TTarget`:** The target type required by the action.

**Type parameter `TArgument`:** The action argument type required by the action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L106).

## `argument`

<a id="api-8b44ef1d618702ac"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionContext`2.argument 3a398351bbf11359bf86b414c94adaec46f2a3e16256a1ef2ae11dce001d5c80 -->

```csharp
public TArgument Inno.Editor.Interactions.EditorActionContext<TTarget, TArgument>.argument { get; }
```

Gets the strongly typed action argument.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L125).

## `target`

<a id="api-0504bf4fe1ab423a"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionContext`2.target 8ee42d852248ad17e37f677f3aa9b224944023d046196c251716cf30fee11562 -->

```csharp
public TTarget Inno.Editor.Interactions.EditorActionContext<TTarget, TArgument>.target { get; }
```

Gets the strongly typed action target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L121).
