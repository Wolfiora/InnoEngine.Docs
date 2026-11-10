---
title: "EditorPresentationAction`2"
description: "Reference for EditorPresentationAction`2 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.b52038e0a3af411c
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# ``EditorPresentationAction`2``

This reference describes ``EditorPresentationAction`2`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Interactions.EditorAction<TTarget>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-18185fe70cdc022c) | Method |
| [`Present`](#api-f31c7e6cc975cf88) | Method |
| [`Present`](#api-a43a09399825513a) | Method |

## Type declaration

<a id="api-b52038e0a3af411c"></a>
<!-- api: T:Inno.Editor.Interactions.EditorPresentationAction`2 4797c1515b43c25f46ed56a2b45075877ab45ed202ee1428d9c5f72731d4685d -->

```csharp
public abstract class Inno.Editor.Interactions.EditorPresentationAction<TTarget, TPresentation> : Inno.Editor.Interactions.EditorAction<TTarget>
```

Defines a target action with a typed presentation-only argument.

**Type parameter `TTarget`:** The target type accepted by the action.

**Type parameter `TPresentation`:** The presentation data type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L350).

## `#ctor`

<a id="api-18185fe70cdc022c"></a>
<!-- api: M:Inno.Editor.Interactions.EditorPresentationAction`2.#ctor 8c556b52112ee99f5b7e4668dd71d8fa64c5985db08513e23dfac75aef229d82 -->

```csharp
protected Inno.Editor.Interactions.EditorPresentationAction<TTarget, TPresentation>.EditorPresentationAction()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L350).

## `Present`

<a id="api-f31c7e6cc975cf88"></a>
<!-- api: M:Inno.Editor.Interactions.EditorPresentationAction`2.Present(Inno.Editor.Interactions.EditorActionContext{`0,`1}) 0fd5f37ed2e880d2e1953153bbc6654f1d2279637b32c9e3eeb82edc0bf92ef5 -->

```csharp
protected abstract bool Inno.Editor.Interactions.EditorPresentationAction<TTarget, TPresentation>.Present(Inno.Editor.Interactions.EditorActionContext<TTarget, TPresentation> context)
```

Presents active content using strongly typed presentation data.

**Parameter `context`:** The typed presentation request.

**Returns:** `true` when content was presented.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L372).

## `Present`

<a id="api-a43a09399825513a"></a>
<!-- api: M:Inno.Editor.Interactions.EditorPresentationAction`2.Present(Inno.Editor.Interactions.EditorActionContext{`0}) 8e5c32698914b47e8f228177b74e22cce454aec184bd704bc174f7adffba93a7 -->

```csharp
protected override sealed bool Inno.Editor.Interactions.EditorPresentationAction<TTarget, TPresentation>.Present(Inno.Editor.Interactions.EditorActionContext<TTarget> context)
```

Presents this action through the current editor interaction surface.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L361).
