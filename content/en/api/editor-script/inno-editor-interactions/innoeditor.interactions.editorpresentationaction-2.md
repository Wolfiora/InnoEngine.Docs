---
title: "EditorPresentationAction`2"
description: "Reference for EditorPresentationAction`2 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.dc49ee7b6aef90fc
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# ``EditorPresentationAction`2``

This reference describes ``EditorPresentationAction`2`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Interactions.EditorAction<TTarget>`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e099d14a73e942d0) | Method |
| [`Present`](#api-48e277b8c0cfb106) | Method |
| [`Present`](#api-180e04601820ed9a) | Method |

## Type declaration

<a id="api-dc49ee7b6aef90fc"></a>
<!-- api: T:InnoEditor.Interactions.EditorPresentationAction`2 f78ada9abe05cea0a826321d31d13cdfbb9c9d95ed1db1fae9fb9cc515f4ab18 -->

```csharp
public abstract class InnoEditor.Interactions.EditorPresentationAction<TTarget, TPresentation> : InnoEditor.Interactions.EditorAction<TTarget>, System.IDisposable
```

Defines a target action with a typed presentation-only argument.

**Type parameter `TTarget`:** The target type accepted by the action.

**Type parameter `TPresentation`:** The presentation data type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L350).

## `#ctor`

<a id="api-e099d14a73e942d0"></a>
<!-- api: M:InnoEditor.Interactions.EditorPresentationAction`2.#ctor 516e5936371f4281454768c861fe4fdec969e51b9a2879db2be9367575ba5d3d -->

```csharp
protected InnoEditor.Interactions.EditorPresentationAction<TTarget, TPresentation>.EditorPresentationAction()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L350).

## `Present`

<a id="api-48e277b8c0cfb106"></a>
<!-- api: M:InnoEditor.Interactions.EditorPresentationAction`2.Present(InnoEditor.Interactions.EditorActionContext{`0,`1}) abf1f6ea1454997a2eb895f1e91022c071471e39b123c9151b4b0624eac2e008 -->

```csharp
protected abstract bool InnoEditor.Interactions.EditorPresentationAction<TTarget, TPresentation>.Present(InnoEditor.Interactions.EditorActionContext<TTarget, TPresentation> context)
```

Presents active content using strongly typed presentation data.

**Parameter `context`:** The typed presentation request.

**Returns:** `true` when content was presented.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L372).

## `Present`

<a id="api-180e04601820ed9a"></a>
<!-- api: M:InnoEditor.Interactions.EditorPresentationAction`2.Present(InnoEditor.Interactions.EditorActionContext{`0}) 4c405163430452aed3d83c6df698f0f6aff07beab9ce273839da67b77a679a09 -->

```csharp
protected override sealed bool InnoEditor.Interactions.EditorPresentationAction<TTarget, TPresentation>.Present(InnoEditor.Interactions.EditorActionContext<TTarget> context)
```

Presents this action through the current editor interaction surface.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L361).
