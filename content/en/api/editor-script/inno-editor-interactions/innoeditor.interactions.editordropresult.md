---
title: "EditorDropResult"
description: "Reference for EditorDropResult in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.d8785b444e61d03e
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorDropResult`

This reference describes `EditorDropResult` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Interactions.EditorDropResult>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2ebea8ab44bb23a0) | Method |
| [`Accepted`](#api-4c581015a6920241) | Method |
| [`Equals`](#api-4b682c5d63b56ca6) | Method |
| [`Equals`](#api-ece64f432d2ea530) | Method |
| [`GetHashCode`](#api-85ec4135a7f19bba) | Method |
| [`op_Equality`](#api-23a584bcd6cccf9b) | Method |
| [`op_Inequality`](#api-88bebe9c93f56d6e) | Method |
| [`ToString`](#api-ee451d47f2073b69) | Method |
| [`accepted`](#api-5df57e4f40bac122) | Property |
| [`rejected`](#api-3ef3acf0be7ca229) | Property |
| [`revealTarget`](#api-573dfe102b89b1f4) | Property |
| [`selectionTarget`](#api-db693a158f485578) | Property |

## Type declaration

<a id="api-d8785b444e61d03e"></a>
<!-- api: T:InnoEditor.Interactions.EditorDropResult 250e2ef2bf9473c9a231182f14009004ad562de8c3173ed379859874f81058f4 -->

```csharp
public readonly struct InnoEditor.Interactions.EditorDropResult : System.IEquatable<InnoEditor.Interactions.EditorDropResult>
```

Describes the observable result of a completed editor drop.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L6).

## `#ctor`

<a id="api-2ebea8ab44bb23a0"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropResult.#ctor(System.Boolean,System.Object,System.Object) 193ef962823b441a892589175139c0dc91ab94e1e5d7f5ae03fc2bdbe48d3c4f -->

```csharp
public InnoEditor.Interactions.EditorDropResult.EditorDropResult(bool accepted, object? selectionTarget = null, object? revealTarget = null)
```

Creates the observable result of a completed drop operation.

**Parameter `accepted`:** Whether the handler accepted and completed the drop.

**Parameter `selectionTarget`:** An optional object that the originating view should select.

**Parameter `revealTarget`:** An optional object that the originating view should reveal or expand.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L20).

## `Accepted`

<a id="api-4c581015a6920241"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropResult.Accepted(System.Object,System.Object) cb56a50381f1923d8b18c89ceb509e62e2fd5181ad3f493fe98843e9b95f94b4 -->

```csharp
public static InnoEditor.Interactions.EditorDropResult InnoEditor.Interactions.EditorDropResult.Accepted(object? selectionTarget = null, object? revealTarget = null)
```

Creates an accepted drop result with optional presentation requests.

**Parameter `selectionTarget`:** An optional object that the originating view should select.

**Parameter `revealTarget`:** An optional object that the originating view should reveal or expand.

**Returns:** An accepted drop result containing the supplied presentation requests.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L62).

## `Equals`

<a id="api-4b682c5d63b56ca6"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropResult.Equals(InnoEditor.Interactions.EditorDropResult) ed6f1ffad78d4ad08ec8d8c9bc627eaa14abac8278f054cdcb3dcb7e5a2c941e -->

```csharp
public bool InnoEditor.Interactions.EditorDropResult.Equals(InnoEditor.Interactions.EditorDropResult other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L6).

## `Equals`

<a id="api-ece64f432d2ea530"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropResult.Equals(System.Object) 9a137a4ab5bb3f08dda394b20eb4c38673f209cfaefc1cc40ada540407090e2a -->

```csharp
public override bool InnoEditor.Interactions.EditorDropResult.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L6).

## `GetHashCode`

<a id="api-85ec4135a7f19bba"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropResult.GetHashCode e8ad4376917cde8d6f214758f5906d1c755597ab33ee8a690a89d926d7269882 -->

```csharp
public override int InnoEditor.Interactions.EditorDropResult.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L6).

## `op_Equality`

<a id="api-23a584bcd6cccf9b"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropResult.op_Equality(InnoEditor.Interactions.EditorDropResult,InnoEditor.Interactions.EditorDropResult) 7dd42147c10c30750868ddd092231e5020abdfb3e03c419588e4e670458e49ff -->

```csharp
public static bool InnoEditor.Interactions.EditorDropResult.operator ==(InnoEditor.Interactions.EditorDropResult left, InnoEditor.Interactions.EditorDropResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L6).

## `op_Inequality`

<a id="api-88bebe9c93f56d6e"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropResult.op_Inequality(InnoEditor.Interactions.EditorDropResult,InnoEditor.Interactions.EditorDropResult) 517e2ea729109950ed6895b97e1d67167d12ef4ca3b55be755daf934e83a34da -->

```csharp
public static bool InnoEditor.Interactions.EditorDropResult.operator !=(InnoEditor.Interactions.EditorDropResult left, InnoEditor.Interactions.EditorDropResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L6).

## `ToString`

<a id="api-ee451d47f2073b69"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropResult.ToString 3cf605d479d07475c4fc518595ab5d3ddcac0da6f83e134e8c41d9eee8b3ca5f -->

```csharp
public override string InnoEditor.Interactions.EditorDropResult.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L6).

## `accepted`

<a id="api-5df57e4f40bac122"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropResult.accepted 548866a19b9ac7eefba1857c35a44865982d12dabcf158d1dcc5b5a23987485b -->

```csharp
public bool InnoEditor.Interactions.EditorDropResult.accepted { get; }
```

Gets whether the drop was accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L33).

## `rejected`

<a id="api-3ef3acf0be7ca229"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropResult.rejected 193b205e91aff68e9543ae3b13aa4fc42363e217828a6faf373077827820cb97 -->

```csharp
public static InnoEditor.Interactions.EditorDropResult InnoEditor.Interactions.EditorDropResult.rejected { get; }
```

Gets a rejected drop result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L48).

## `revealTarget`

<a id="api-573dfe102b89b1f4"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropResult.revealTarget 67a342979d2ee9e226ae58f26a9b7f84e193b2cb0fd44b87f87d25501b7053bf -->

```csharp
public object? InnoEditor.Interactions.EditorDropResult.revealTarget { get; }
```

Gets the optional hierarchy target that should be revealed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L43).

## `selectionTarget`

<a id="api-db693a158f485578"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropResult.selectionTarget b9472757e115e86ab2a48b30e056633d84f90f806a949b1d107cbdd3ba1a8771 -->

```csharp
public object? InnoEditor.Interactions.EditorDropResult.selectionTarget { get; }
```

Gets the optional target that should become selected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L38).
