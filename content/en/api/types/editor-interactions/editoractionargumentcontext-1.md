---
title: "EditorActionArgumentContext`1"
description: "Reference for EditorActionArgumentContext`1 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.2efcac326ce7b7ce
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# ``EditorActionArgumentContext`1``

This reference describes ``EditorActionArgumentContext`1`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Interactions.EditorActionContext`.

## Members

| Member | Kind |
| --- | --- |
| [`argument`](#api-0a338dee816d8e23) | Property |

## Type declaration

<a id="api-2efcac326ce7b7ce"></a>
<!-- api: T:Inno.Editor.Interactions.EditorActionArgumentContext`1 7fe9d1b52910b850bb8ae353e1b628198cf828e67169763047db417eeb4d4407 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorActionArgumentContext<TArgument> : Inno.Editor.Interactions.EditorActionContext
```

Provides a strongly typed action argument to a targetless editor action.

**Type parameter `TArgument`:** The action argument type required by the action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L134).

## `argument`

<a id="api-0a338dee816d8e23"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionArgumentContext`1.argument 7ece092dd6ff8810c710db93e4d00ff273e336ecb3ceffec665a359050856887 -->

```csharp
public TArgument Inno.Editor.Interactions.EditorActionArgumentContext<TArgument>.argument { get; }
```

Gets the strongly typed action argument.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L147).
