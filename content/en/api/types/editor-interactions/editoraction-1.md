---
title: "EditorAction`1"
description: "Reference for EditorAction`1 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.8978533587d95f0d
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# ``EditorAction`1``

This reference describes ``EditorAction`1`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Interactions.EditorAction`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-02512251dd34a42c) | Method |
| [`Execute`](#api-1d8bea7fec6d5778) | Method |
| [`Execute`](#api-c76252d8f8e1daf6) | Method |
| [`Present`](#api-9390d9a47ec244ec) | Method |
| [`Present`](#api-91207ac3f377e7be) | Method |
| [`Query`](#api-8fa06a8844de7a68) | Method |
| [`Query`](#api-96a9be010218d5ac) | Method |
| [`targetType`](#api-5b7242c5581fa4bc) | Property |

## Type declaration

<a id="api-8978533587d95f0d"></a>
<!-- api: T:Inno.Editor.Interactions.EditorAction`1 d798a53cfb9930af038b97803bb6fbf96499c7bc82fd3b91e817da8ddd2ff4be -->

```csharp
public abstract class Inno.Editor.Interactions.EditorAction<TTarget> : Inno.Editor.Interactions.EditorAction
```

Defines a discoverable action whose target must be assignable to a specific reference type.

**Type parameter `TTarget`:** The target type accepted by the action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L381).

## `#ctor`

<a id="api-02512251dd34a42c"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction`1.#ctor 3c31785dabd27d7e6aadfdece06d54f4910141a9861b85925c24e089770f9364 -->

```csharp
protected Inno.Editor.Interactions.EditorAction<TTarget>.EditorAction()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L381).

## `Execute`

<a id="api-1d8bea7fec6d5778"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction`1.Execute(Inno.Editor.Interactions.EditorActionContext) 01c490d1bd56729eaaf00bb5168ea84591c55c62fef447456f32dfb3461b6fdd -->

```csharp
protected override sealed void Inno.Editor.Interactions.EditorAction<TTarget>.Execute(Inno.Editor.Interactions.EditorActionContext context)
```

Applies the editor action to the supplied interaction context.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L409).

## `Execute`

<a id="api-c76252d8f8e1daf6"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction`1.Execute(Inno.Editor.Interactions.EditorActionContext{`0}) 9828fd47be5d9aefefbf90b01630d0131890a7402b09ebdc05cc490c75affe33 -->

```csharp
protected abstract void Inno.Editor.Interactions.EditorAction<TTarget>.Execute(Inno.Editor.Interactions.EditorActionContext<TTarget> context)
```

Executes the action for a strongly typed target.

**Parameter `context`:** The contextual request containing the typed target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L451).

## `Present`

<a id="api-9390d9a47ec244ec"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction`1.Present(Inno.Editor.Interactions.EditorActionContext) edd540ad27e13b2b87014ecacd82806c544bdc1306dec190040eac5a4f38cc90 -->

```csharp
protected override sealed bool Inno.Editor.Interactions.EditorAction<TTarget>.Present(Inno.Editor.Interactions.EditorActionContext context)
```

Presents this action through the current editor interaction surface.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L429).

## `Present`

<a id="api-91207ac3f377e7be"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction`1.Present(Inno.Editor.Interactions.EditorActionContext{`0}) 1d04ea7a492690b97d13bc5cd0b1d3d8feb4c11d494ea7cfdf0fc2098a7aaea3 -->

```csharp
protected virtual bool Inno.Editor.Interactions.EditorAction<TTarget>.Present(Inno.Editor.Interactions.EditorActionContext<TTarget> context)
```

Presents an active action for a strongly typed target.

**Parameter `context`:** The current presentation request containing the typed target.

**Returns:** `true` when content was presented; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L461).

## `Query`

<a id="api-8fa06a8844de7a68"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction`1.Query(Inno.Editor.Interactions.EditorActionContext) 87805ad2431fe08e25da54a856edf8846f16dd9a6aaeb7dd268810afc3ce8f19 -->

```csharp
protected override sealed Inno.Editor.Interactions.EditorActionState Inno.Editor.Interactions.EditorAction<TTarget>.Query(Inno.Editor.Interactions.EditorActionContext context)
```

Evaluates the operation's current availability and presentation state.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** The validated editor action state that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L397).

## `Query`

<a id="api-96a9be010218d5ac"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction`1.Query(Inno.Editor.Interactions.EditorActionContext{`0}) 2c64d9efb60c56a2bd87d46d53ae99dae4a929aa9e17991609b8848e77facfac -->

```csharp
protected virtual Inno.Editor.Interactions.EditorActionState Inno.Editor.Interactions.EditorAction<TTarget>.Query(Inno.Editor.Interactions.EditorActionContext<TTarget> context)
```

Evaluates the action for a strongly typed target.

**Parameter `context`:** The contextual request containing the typed target.

**Returns:** The current presentation and availability state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L444).

## `targetType`

<a id="api-5b7242c5581fa4bc"></a>
<!-- api: P:Inno.Editor.Interactions.EditorAction`1.targetType 00fb89ecd4ee78250346187da781a0ae0c409df10d5a0343e9c05173d79c6893 -->

```csharp
public override sealed System.Type Inno.Editor.Interactions.EditorAction<TTarget>.targetType { get; }
```

Gets the concrete type handled by this extension implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L386).
