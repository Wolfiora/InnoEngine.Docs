---
title: "EditorArgumentAction`1"
description: "Reference for EditorArgumentAction`1 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.3a8cf4859e570fc3
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# ``EditorArgumentAction`1``

This reference describes ``EditorArgumentAction`1`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Interactions.EditorAction`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d9a3ef4f1bc8c2dd) | Method |
| [`Execute`](#api-8773d5e85b5ab2e3) | Method |
| [`Execute`](#api-aa3ef1f01ce9883c) | Method |
| [`Query`](#api-6673020262a9d277) | Method |
| [`Query`](#api-bc44252343807683) | Method |

## Type declaration

<a id="api-3a8cf4859e570fc3"></a>
<!-- api: T:Inno.Editor.Interactions.EditorArgumentAction`1 3064fcfd5edf0744b75f213fb960d2bb809cbb73a228cad23b704bf1c596232f -->

```csharp
public abstract class Inno.Editor.Interactions.EditorArgumentAction<TArgument> : Inno.Editor.Interactions.EditorAction
```

Defines a targetless editor action that requires one strongly typed command argument.

**Type parameter `TArgument`:** The command argument type accepted by the action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L291).

## `#ctor`

<a id="api-d9a3ef4f1bc8c2dd"></a>
<!-- api: M:Inno.Editor.Interactions.EditorArgumentAction`1.#ctor 732ef03170a8110d6173309ab2b169059c89b971827600f4e728f40bdf7dbb3a -->

```csharp
protected Inno.Editor.Interactions.EditorArgumentAction<TArgument>.EditorArgumentAction()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L291).

## `Execute`

<a id="api-8773d5e85b5ab2e3"></a>
<!-- api: M:Inno.Editor.Interactions.EditorArgumentAction`1.Execute(Inno.Editor.Interactions.EditorActionArgumentContext{`0}) 6ffa29071438199cf082bc1812bf3c0dcd358c9c129ea7fc4168b586eda3b59c -->

```csharp
protected abstract void Inno.Editor.Interactions.EditorArgumentAction<TArgument>.Execute(Inno.Editor.Interactions.EditorActionArgumentContext<TArgument> context)
```

Executes the action for a typed argument.

**Parameter `context`:** The typed contextual request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L338).

## `Execute`

<a id="api-aa3ef1f01ce9883c"></a>
<!-- api: M:Inno.Editor.Interactions.EditorArgumentAction`1.Execute(Inno.Editor.Interactions.EditorActionContext) e9b7bae6f79ccb945fb4376e7e6be9df229beeb23fa02ce02eed94831b3f490c -->

```csharp
protected override sealed void Inno.Editor.Interactions.EditorArgumentAction<TArgument>.Execute(Inno.Editor.Interactions.EditorActionContext context)
```

Applies the editor action to the supplied interaction context.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L312).

## `Query`

<a id="api-6673020262a9d277"></a>
<!-- api: M:Inno.Editor.Interactions.EditorArgumentAction`1.Query(Inno.Editor.Interactions.EditorActionArgumentContext{`0}) d78740a3e78c7b6264b47194bd52a7b6a14fbf591929f7d39227dedc3e9ce887 -->

```csharp
protected virtual Inno.Editor.Interactions.EditorActionState Inno.Editor.Interactions.EditorArgumentAction<TArgument>.Query(Inno.Editor.Interactions.EditorActionArgumentContext<TArgument> context)
```

Evaluates the action for a typed argument.

**Parameter `context`:** The typed contextual request.

**Returns:** The current presentation and availability state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L331).

## `Query`

<a id="api-bc44252343807683"></a>
<!-- api: M:Inno.Editor.Interactions.EditorArgumentAction`1.Query(Inno.Editor.Interactions.EditorActionContext) cce41e0de82667c0c8de83a1e51e0bb3ecdeea2437aa3491b190abbd345c96fc -->

```csharp
protected override sealed Inno.Editor.Interactions.EditorActionState Inno.Editor.Interactions.EditorArgumentAction<TArgument>.Query(Inno.Editor.Interactions.EditorActionContext context)
```

Evaluates the operation's current availability and presentation state.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** The validated editor action state that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L304).
