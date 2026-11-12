---
title: "EditorActionArgumentContext`1"
description: "Reference for EditorActionArgumentContext`1 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.349b052f09398953
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# ``EditorActionArgumentContext`1``

This reference describes ``EditorActionArgumentContext`1`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Interactions.EditorActionContext`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-aa46a039030f8679) | Method |
| [`argument`](#api-20addd87dc566a38) | Property |

## Type declaration

<a id="api-349b052f09398953"></a>
<!-- api: T:InnoEditor.Interactions.EditorActionArgumentContext`1 983a4b2f14cb0edde666c99f1d0bed52dade4deb9d8c967d18848b44a0f598d2 -->

```csharp
public sealed class InnoEditor.Interactions.EditorActionArgumentContext<TArgument> : InnoEditor.Interactions.EditorActionContext
```

Provides a strongly typed action argument to a targetless editor action.

**Type parameter `TArgument`:** The action argument type required by the action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L134).

## `#ctor`

<a id="api-aa46a039030f8679"></a>
<!-- api: M:InnoEditor.Interactions.EditorActionArgumentContext`1.#ctor b99bcbef123ddd5d2413bf4aa14e1db1d7a0eeb18baa87ace2c0ed785672f487 -->

```csharp
public InnoEditor.Interactions.EditorActionArgumentContext<TArgument>.EditorActionArgumentContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L134).

## `argument`

<a id="api-20addd87dc566a38"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionArgumentContext`1.argument bae9fcac6da7318e924cbaf10769a92f1e8bf9145635e224f03aebda3a01d07a -->

```csharp
public TArgument InnoEditor.Interactions.EditorActionArgumentContext<TArgument>.argument { get; }
```

Gets the strongly typed action argument.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L147).
