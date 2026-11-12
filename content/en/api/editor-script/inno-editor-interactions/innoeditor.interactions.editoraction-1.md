---
title: "EditorAction`1"
description: "Reference for EditorAction`1 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.19062d3f32b66bce
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# ``EditorAction`1``

This reference describes ``EditorAction`1`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Interactions.EditorAction`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-66d049df08a090c5) | Method |
| [`Execute`](#api-007ea1755fbfd0a6) | Method |
| [`Execute`](#api-7ed3bfa2be189026) | Method |
| [`Present`](#api-7d68935926f58d63) | Method |
| [`Present`](#api-7312075dfd69fff3) | Method |
| [`Query`](#api-7d1afa7ce9dce44f) | Method |
| [`Query`](#api-d53f252f4992f9f8) | Method |
| [`targetType`](#api-1c5f2cb1ebe99711) | Property |

## Type declaration

<a id="api-19062d3f32b66bce"></a>
<!-- api: T:InnoEditor.Interactions.EditorAction`1 72d014f6a8079d6719f3d09081c5833e3488927280d4b049dbb7f893181700ab -->

```csharp
public abstract class InnoEditor.Interactions.EditorAction<TTarget> : InnoEditor.Interactions.EditorAction, System.IDisposable
```

Defines a discoverable action whose target must be assignable to a specific reference type.

**Type parameter `TTarget`:** The target type accepted by the action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L381).

## `#ctor`

<a id="api-66d049df08a090c5"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction`1.#ctor 9a6dc86226b018a70f932ca2d8987c4409e3c2b5245db952bb94c9bee65dce89 -->

```csharp
protected InnoEditor.Interactions.EditorAction<TTarget>.EditorAction()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L381).

## `Execute`

<a id="api-007ea1755fbfd0a6"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction`1.Execute(InnoEditor.Interactions.EditorActionContext) db3b70eac3c466d2c9f0d3a465a0bb60dffd44cf14718f48cff10389193cd18f -->

```csharp
protected override sealed void InnoEditor.Interactions.EditorAction<TTarget>.Execute(InnoEditor.Interactions.EditorActionContext context)
```

Applies the editor action to the supplied interaction context.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L409).

## `Execute`

<a id="api-7ed3bfa2be189026"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction`1.Execute(InnoEditor.Interactions.EditorActionContext{`0}) 3be481180165c60c84848b04a674e070ce843541b2e84c7f8dc226e3ae6ae887 -->

```csharp
protected abstract void InnoEditor.Interactions.EditorAction<TTarget>.Execute(InnoEditor.Interactions.EditorActionContext<TTarget> context)
```

Executes the action for a strongly typed target.

**Parameter `context`:** The contextual request containing the typed target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L451).

## `Present`

<a id="api-7d68935926f58d63"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction`1.Present(InnoEditor.Interactions.EditorActionContext) 0f8b0db5e81197e8812465a6cfb8b0c59034c9c713e306e4964d186cedcd80be -->

```csharp
protected override sealed bool InnoEditor.Interactions.EditorAction<TTarget>.Present(InnoEditor.Interactions.EditorActionContext context)
```

Presents this action through the current editor interaction surface.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L429).

## `Present`

<a id="api-7312075dfd69fff3"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction`1.Present(InnoEditor.Interactions.EditorActionContext{`0}) 7be082c0bd579f6d496f2345d99d53926e91720b8c22e162c2737b2af7728f15 -->

```csharp
protected virtual bool InnoEditor.Interactions.EditorAction<TTarget>.Present(InnoEditor.Interactions.EditorActionContext<TTarget> context)
```

Presents an active action for a strongly typed target.

**Parameter `context`:** The current presentation request containing the typed target.

**Returns:** `true` when content was presented; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L461).

## `Query`

<a id="api-7d1afa7ce9dce44f"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction`1.Query(InnoEditor.Interactions.EditorActionContext) 25dd121f3c254c010ad4504105907f88b9e6427af95760d6c38820c0667ec5dc -->

```csharp
protected override sealed InnoEditor.Interactions.EditorActionState InnoEditor.Interactions.EditorAction<TTarget>.Query(InnoEditor.Interactions.EditorActionContext context)
```

Evaluates the operation's current availability and presentation state.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** The validated editor action state that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L397).

## `Query`

<a id="api-d53f252f4992f9f8"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction`1.Query(InnoEditor.Interactions.EditorActionContext{`0}) acda017abfa3e50888960111a06383266107169793bf2dac26f2bc09e4e861c0 -->

```csharp
protected virtual InnoEditor.Interactions.EditorActionState InnoEditor.Interactions.EditorAction<TTarget>.Query(InnoEditor.Interactions.EditorActionContext<TTarget> context)
```

Evaluates the action for a strongly typed target.

**Parameter `context`:** The contextual request containing the typed target.

**Returns:** The current presentation and availability state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L444).

## `targetType`

<a id="api-1c5f2cb1ebe99711"></a>
<!-- api: P:InnoEditor.Interactions.EditorAction`1.targetType 5682b63e6fc5010774d5c9eec3b24d17417808c8855619c8a82595d6d716376f -->

```csharp
public override sealed System.Type InnoEditor.Interactions.EditorAction<TTarget>.targetType { get; }
```

Gets the concrete type handled by this extension implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L386).
