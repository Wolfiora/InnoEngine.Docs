---
title: "EditorActionContext`2"
description: "Reference for EditorActionContext`2 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.d62438502ab274bc
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# ``EditorActionContext`2``

This reference describes ``EditorActionContext`2`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Interactions.EditorActionContext`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-32c1e7369055e1f4) | Method |
| [`argument`](#api-b88d4c9d53733609) | Property |
| [`target`](#api-ab320c034407277c) | Property |

## Type declaration

<a id="api-d62438502ab274bc"></a>
<!-- api: T:InnoEditor.Interactions.EditorActionContext`2 d004c180ca7dabf99fc9c8b8c56424ded2641bc1cec72387d2627eb85ed443d7 -->

```csharp
public sealed class InnoEditor.Interactions.EditorActionContext<TTarget, TArgument> : InnoEditor.Interactions.EditorActionContext
```

Provides a strongly typed target and action argument to an editor action.

**Type parameter `TTarget`:** The target type required by the action.

**Type parameter `TArgument`:** The action argument type required by the action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L106).

## `#ctor`

<a id="api-32c1e7369055e1f4"></a>
<!-- api: M:InnoEditor.Interactions.EditorActionContext`2.#ctor 9b74a731f96b96764ad794a404755d04d6978921bf62e41e620ddf7d84c9bd96 -->

```csharp
public InnoEditor.Interactions.EditorActionContext<TTarget, TArgument>.EditorActionContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L106).

## `argument`

<a id="api-b88d4c9d53733609"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionContext`2.argument c7f796d0ae0cbbdf0895cb93e9f6e4dbe11d2fc42c343b1c1bc0192b89c3289a -->

```csharp
public TArgument InnoEditor.Interactions.EditorActionContext<TTarget, TArgument>.argument { get; }
```

Gets the strongly typed action argument.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L125).

## `target`

<a id="api-ab320c034407277c"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionContext`2.target ea7656a0755feb4d88a3ecf347cacac11b0dff930a200669067709c71aa81dcb -->

```csharp
public TTarget InnoEditor.Interactions.EditorActionContext<TTarget, TArgument>.target { get; }
```

Gets the strongly typed action target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L121).
