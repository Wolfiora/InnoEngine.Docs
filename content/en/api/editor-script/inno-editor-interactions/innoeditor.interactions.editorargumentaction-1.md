---
title: "EditorArgumentAction`1"
description: "Reference for EditorArgumentAction`1 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.30974e7e431fece6
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# ``EditorArgumentAction`1``

This reference describes ``EditorArgumentAction`1`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Interactions.EditorAction`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-18c584f710da4135) | Method |
| [`Execute`](#api-5b2c57400dc2be7e) | Method |
| [`Execute`](#api-da048e2a90997faa) | Method |
| [`Query`](#api-fa5465cbf5ed3514) | Method |
| [`Query`](#api-159f324b2a66d3dc) | Method |

## Type declaration

<a id="api-30974e7e431fece6"></a>
<!-- api: T:InnoEditor.Interactions.EditorArgumentAction`1 e2b198406f8b0a4a2727ebabb9727e9299c4d38e0283a7044c929e00e91eac81 -->

```csharp
public abstract class InnoEditor.Interactions.EditorArgumentAction<TArgument> : InnoEditor.Interactions.EditorAction, System.IDisposable
```

Defines a targetless editor action that requires one strongly typed command argument.

**Type parameter `TArgument`:** The command argument type accepted by the action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L291).

## `#ctor`

<a id="api-18c584f710da4135"></a>
<!-- api: M:InnoEditor.Interactions.EditorArgumentAction`1.#ctor 24803a52a25ffc63d22e2296b4b12b4841e554471bea97abe752d1e1129da96b -->

```csharp
protected InnoEditor.Interactions.EditorArgumentAction<TArgument>.EditorArgumentAction()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L291).

## `Execute`

<a id="api-5b2c57400dc2be7e"></a>
<!-- api: M:InnoEditor.Interactions.EditorArgumentAction`1.Execute(InnoEditor.Interactions.EditorActionArgumentContext{`0}) 87ee8ad82e2b3256bbdfe9c1dfe963858c029c80dd7e67a764dd055cf6f9849c -->

```csharp
protected abstract void InnoEditor.Interactions.EditorArgumentAction<TArgument>.Execute(InnoEditor.Interactions.EditorActionArgumentContext<TArgument> context)
```

Executes the action for a typed argument.

**Parameter `context`:** The typed contextual request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L338).

## `Execute`

<a id="api-da048e2a90997faa"></a>
<!-- api: M:InnoEditor.Interactions.EditorArgumentAction`1.Execute(InnoEditor.Interactions.EditorActionContext) ded90c4195bd50998b82b2a17ab08be0798f38b9ec2416b13e66aa135b8cbffe -->

```csharp
protected override sealed void InnoEditor.Interactions.EditorArgumentAction<TArgument>.Execute(InnoEditor.Interactions.EditorActionContext context)
```

Applies the editor action to the supplied interaction context.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L312).

## `Query`

<a id="api-fa5465cbf5ed3514"></a>
<!-- api: M:InnoEditor.Interactions.EditorArgumentAction`1.Query(InnoEditor.Interactions.EditorActionArgumentContext{`0}) a824c262a165dc4c8c0de6174c49e6e8fb132574245768ea91a692094cabee6b -->

```csharp
protected virtual InnoEditor.Interactions.EditorActionState InnoEditor.Interactions.EditorArgumentAction<TArgument>.Query(InnoEditor.Interactions.EditorActionArgumentContext<TArgument> context)
```

Evaluates the action for a typed argument.

**Parameter `context`:** The typed contextual request.

**Returns:** The current presentation and availability state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L331).

## `Query`

<a id="api-159f324b2a66d3dc"></a>
<!-- api: M:InnoEditor.Interactions.EditorArgumentAction`1.Query(InnoEditor.Interactions.EditorActionContext) 53767c4513f701d555d75b12831f2a8db66f37f71363c7863a047513045b7422 -->

```csharp
protected override sealed InnoEditor.Interactions.EditorActionState InnoEditor.Interactions.EditorArgumentAction<TArgument>.Query(InnoEditor.Interactions.EditorActionContext context)
```

Evaluates the operation's current availability and presentation state.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** The validated editor action state that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L304).
