---
title: "EditorAction`2"
description: "Reference for EditorAction`2 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.ba89acafc45ada60
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# ``EditorAction`2``

This reference describes ``EditorAction`2`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Interactions.EditorAction`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-57da7bdc00535c3c) | Method |
| [`Execute`](#api-a6dcd3662df09861) | Method |
| [`Execute`](#api-3e3dc75a5b547ccd) | Method |
| [`Present`](#api-bfb699fecb55e9aa) | Method |
| [`Present`](#api-39c96f1a46c89123) | Method |
| [`Query`](#api-9f096d6fb492235e) | Method |
| [`Query`](#api-13f3a7ac68af64b3) | Method |
| [`targetType`](#api-1bfdc002083bca34) | Property |

## Type declaration

<a id="api-ba89acafc45ada60"></a>
<!-- api: T:InnoEditor.Interactions.EditorAction`2 7feb838828ee6104e4bbcc5c860fe5ffabcc3ac356eb838e1026131deb61fc48 -->

```csharp
public abstract class InnoEditor.Interactions.EditorAction<TTarget, TArgument> : InnoEditor.Interactions.EditorAction, System.IDisposable
```

Defines a target action that requires one strongly typed command argument.

**Type parameter `TTarget`:** The target type accepted by the action.

**Type parameter `TArgument`:** The command argument type accepted by the action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L196).

## `#ctor`

<a id="api-57da7bdc00535c3c"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction`2.#ctor 76beeb6c613ce20cf2eb6cf8e805eb955fb2922f96e4ac7d118e0c4329574e97 -->

```csharp
protected InnoEditor.Interactions.EditorAction<TTarget, TArgument>.EditorAction()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L196).

## `Execute`

<a id="api-a6dcd3662df09861"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction`2.Execute(InnoEditor.Interactions.EditorActionContext) ee3ca25b3f583b00e1800a571b2255b0378cb32a5d7b3b721e7a230ee7dbcd20 -->

```csharp
protected override sealed void InnoEditor.Interactions.EditorAction<TTarget, TArgument>.Execute(InnoEditor.Interactions.EditorActionContext context)
```

Applies the editor action to the supplied interaction context.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L223).

## `Execute`

<a id="api-3e3dc75a5b547ccd"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction`2.Execute(InnoEditor.Interactions.EditorActionContext{`0,`1}) a1d2d00ecbbcd775c9cf8106664d7fdb9e5e23acf49ab98b3f7c0701d7cbde39 -->

```csharp
protected abstract void InnoEditor.Interactions.EditorAction<TTarget, TArgument>.Execute(InnoEditor.Interactions.EditorActionContext<TTarget, TArgument> context)
```

Executes the action for a typed target and argument.

**Parameter `context`:** The typed contextual request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L259).

## `Present`

<a id="api-bfb699fecb55e9aa"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction`2.Present(InnoEditor.Interactions.EditorActionContext) 72b5265ae1a725caadd6a3305e137e449b39b94d0efa96c7afaf95a7aead7c47 -->

```csharp
protected override sealed bool InnoEditor.Interactions.EditorAction<TTarget, TArgument>.Present(InnoEditor.Interactions.EditorActionContext context)
```

Presents this action through the current editor interaction surface.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L242).

## `Present`

<a id="api-39c96f1a46c89123"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction`2.Present(InnoEditor.Interactions.EditorActionContext{`0,`1}) 413650a3ef96bd4749804af58855b393ace7f26721aa320cf55e0b7afe03c01a -->

```csharp
protected virtual bool InnoEditor.Interactions.EditorAction<TTarget, TArgument>.Present(InnoEditor.Interactions.EditorActionContext<TTarget, TArgument> context)
```

Presents an active action for a typed target and argument.

**Parameter `context`:** The typed presentation request.

**Returns:** `true` when content was presented.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L269).

## `Query`

<a id="api-9f096d6fb492235e"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction`2.Query(InnoEditor.Interactions.EditorActionContext) 28a0421e0390ef2d2724f59132bfd42b7f566931286b21e23d79b6419b411247 -->

```csharp
protected override sealed InnoEditor.Interactions.EditorActionState InnoEditor.Interactions.EditorAction<TTarget, TArgument>.Query(InnoEditor.Interactions.EditorActionContext context)
```

Evaluates the operation's current availability and presentation state.

**Returns:** The validated editor action state that represents the completed operation.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L213).

## `Query`

<a id="api-13f3a7ac68af64b3"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction`2.Query(InnoEditor.Interactions.EditorActionContext{`0,`1}) 0fc1c2398a77f9f4d56c02ef2ad2cd26d2a44a191f0c3e2ea28efe8cc58e9add -->

```csharp
protected virtual InnoEditor.Interactions.EditorActionState InnoEditor.Interactions.EditorAction<TTarget, TArgument>.Query(InnoEditor.Interactions.EditorActionContext<TTarget, TArgument> context)
```

Evaluates the action for a typed target and argument.

**Parameter `context`:** The typed contextual request.

**Returns:** The current presentation and availability state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L252).

## `targetType`

<a id="api-1bfdc002083bca34"></a>
<!-- api: P:InnoEditor.Interactions.EditorAction`2.targetType 358e6f2524ef9054e8d631e9fe222d982b1544991b6e29a6f6e4c7a5499842e1 -->

```csharp
public override sealed System.Type InnoEditor.Interactions.EditorAction<TTarget, TArgument>.targetType { get; }
```

Gets the concrete type handled by this extension implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L201).
