---
title: "EditorAction`2"
description: "Reference for EditorAction`2 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.2c8417110b03bd5e
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# ``EditorAction`2``

This reference describes ``EditorAction`2`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Interactions.EditorAction`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6323bcfd5f2e8e94) | Method |
| [`Execute`](#api-0a7453a141a18a77) | Method |
| [`Execute`](#api-a2ee805414b15d62) | Method |
| [`Present`](#api-d090efbdcbfeb4e5) | Method |
| [`Present`](#api-0391be560aceddde) | Method |
| [`Query`](#api-205bbafffdf07b1d) | Method |
| [`Query`](#api-8f6f7217982cb7d8) | Method |
| [`targetType`](#api-14cb443230e594a7) | Property |

## Type declaration

<a id="api-2c8417110b03bd5e"></a>
<!-- api: T:Inno.Editor.Interactions.EditorAction`2 fba801a4aa7dab7de806fc014a2fa06470e143e46d190a25ef3cd966e95b1a12 -->

```csharp
public abstract class Inno.Editor.Interactions.EditorAction<TTarget, TArgument> : Inno.Editor.Interactions.EditorAction
```

Defines a target action that requires one strongly typed command argument.

**Type parameter `TTarget`:** The target type accepted by the action.

**Type parameter `TArgument`:** The command argument type accepted by the action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L196).

## `#ctor`

<a id="api-6323bcfd5f2e8e94"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction`2.#ctor e6a1202089c91a6c7a5a1e8b7e16f8b79827a2a4f5334ed1e1c9521e16353a7b -->

```csharp
protected Inno.Editor.Interactions.EditorAction<TTarget, TArgument>.EditorAction()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L196).

## `Execute`

<a id="api-0a7453a141a18a77"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction`2.Execute(Inno.Editor.Interactions.EditorActionContext) 1f3a07c7b8a32806a3d031808eb4b8ae1fef36acb98fc4fcdbe3172b6a922748 -->

```csharp
protected override sealed void Inno.Editor.Interactions.EditorAction<TTarget, TArgument>.Execute(Inno.Editor.Interactions.EditorActionContext context)
```

Applies the editor action to the supplied interaction context.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L223).

## `Execute`

<a id="api-a2ee805414b15d62"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction`2.Execute(Inno.Editor.Interactions.EditorActionContext{`0,`1}) 1b8e50dddb87a99e491907464c14dae49bb13a36331d5f84b36279657b511736 -->

```csharp
protected abstract void Inno.Editor.Interactions.EditorAction<TTarget, TArgument>.Execute(Inno.Editor.Interactions.EditorActionContext<TTarget, TArgument> context)
```

Executes the action for a typed target and argument.

**Parameter `context`:** The typed contextual request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L259).

## `Present`

<a id="api-d090efbdcbfeb4e5"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction`2.Present(Inno.Editor.Interactions.EditorActionContext) cf29c095ef40109a0447e52210c9d73825b995be0805b336f558c87d144c8cb5 -->

```csharp
protected override sealed bool Inno.Editor.Interactions.EditorAction<TTarget, TArgument>.Present(Inno.Editor.Interactions.EditorActionContext context)
```

Presents this action through the current editor interaction surface.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L242).

## `Present`

<a id="api-0391be560aceddde"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction`2.Present(Inno.Editor.Interactions.EditorActionContext{`0,`1}) 945fa70c416b67318130abc5f259decf1fe34bb353d3b2a08411c691f35fc7d3 -->

```csharp
protected virtual bool Inno.Editor.Interactions.EditorAction<TTarget, TArgument>.Present(Inno.Editor.Interactions.EditorActionContext<TTarget, TArgument> context)
```

Presents an active action for a typed target and argument.

**Parameter `context`:** The typed presentation request.

**Returns:** `true` when content was presented.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L269).

## `Query`

<a id="api-205bbafffdf07b1d"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction`2.Query(Inno.Editor.Interactions.EditorActionContext) 5ebd9a781fa2c75d4003c3c3750cbb6a5f62ef9722b5663a20c7e3698d403600 -->

```csharp
protected override sealed Inno.Editor.Interactions.EditorActionState Inno.Editor.Interactions.EditorAction<TTarget, TArgument>.Query(Inno.Editor.Interactions.EditorActionContext context)
```

Evaluates the operation's current availability and presentation state.

**Returns:** The validated editor action state that represents the completed operation.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L213).

## `Query`

<a id="api-8f6f7217982cb7d8"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction`2.Query(Inno.Editor.Interactions.EditorActionContext{`0,`1}) 417e000da867bd47e911862f26c4c82ac9f2c5eb9061652d961d9a604f78e9de -->

```csharp
protected virtual Inno.Editor.Interactions.EditorActionState Inno.Editor.Interactions.EditorAction<TTarget, TArgument>.Query(Inno.Editor.Interactions.EditorActionContext<TTarget, TArgument> context)
```

Evaluates the action for a typed target and argument.

**Parameter `context`:** The typed contextual request.

**Returns:** The current presentation and availability state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L252).

## `targetType`

<a id="api-14cb443230e594a7"></a>
<!-- api: P:Inno.Editor.Interactions.EditorAction`2.targetType d9469c64946db1ff6794eed3c78c3ff2b1e5faf43ec6a362d59d03a084d0cf52 -->

```csharp
public override sealed System.Type Inno.Editor.Interactions.EditorAction<TTarget, TArgument>.targetType { get; }
```

Gets the concrete type handled by this extension implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L201).
