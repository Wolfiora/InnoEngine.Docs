---
title: "EditorDropResult"
description: "Reference for EditorDropResult in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.fcf95f2080ed0bd4
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorDropResult`

This reference describes `EditorDropResult` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Interactions.EditorDropResult>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8c00879dca61c371) | Method |
| [`Accepted`](#api-37234f88c2ab6b0b) | Method |
| [`Equals`](#api-b30eb3cfe81b4062) | Method |
| [`Equals`](#api-ff68772bc48e1fc2) | Method |
| [`GetHashCode`](#api-884c0d95715eea4b) | Method |
| [`op_Equality`](#api-a40e32d588a57367) | Method |
| [`op_Inequality`](#api-a74ff2e8ad906cc9) | Method |
| [`ToString`](#api-671be72241e85435) | Method |
| [`accepted`](#api-82cfd91eeb388029) | Property |
| [`rejected`](#api-025d10b95aa5afc3) | Property |
| [`revealTarget`](#api-b3b0fabb96bf6db2) | Property |
| [`selectionTarget`](#api-ace5f28bd05c3888) | Property |

## Type declaration

<a id="api-fcf95f2080ed0bd4"></a>
<!-- api: T:Inno.Editor.Interactions.EditorDropResult 47783d7d963c82bfee425e37884e4edc96ae58e14cdeb05607c979606772ce06 -->

```csharp
public readonly record struct Inno.Editor.Interactions.EditorDropResult : System.IEquatable<Inno.Editor.Interactions.EditorDropResult>
```

Describes the observable result of a completed editor drop.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L6).

## `#ctor`

<a id="api-8c00879dca61c371"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropResult.#ctor(System.Boolean,System.Object,System.Object) edb48c532eef515f2c5f1c240fd2fca7c73f0d030aa3c50d6e0225b35ba59258 -->

```csharp
public Inno.Editor.Interactions.EditorDropResult.EditorDropResult(bool accepted, object? selectionTarget = null, object? revealTarget = null)
```

Creates the observable result of a completed drop operation.

**Parameter `accepted`:** Whether the handler accepted and completed the drop.

**Parameter `selectionTarget`:** An optional object that the originating view should select.

**Parameter `revealTarget`:** An optional object that the originating view should reveal or expand.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L20).

## `Accepted`

<a id="api-37234f88c2ab6b0b"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropResult.Accepted(System.Object,System.Object) 228d9813bcaa1310e8ae7940f01e5fb44510eea9cb126f5febadfbe786ea6980 -->

```csharp
public static Inno.Editor.Interactions.EditorDropResult Inno.Editor.Interactions.EditorDropResult.Accepted(object? selectionTarget = null, object? revealTarget = null)
```

Creates an accepted drop result with optional presentation requests.

**Parameter `selectionTarget`:** An optional object that the originating view should select.

**Parameter `revealTarget`:** An optional object that the originating view should reveal or expand.

**Returns:** An accepted drop result containing the supplied presentation requests.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L62).

## `Equals`

<a id="api-b30eb3cfe81b4062"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropResult.Equals(Inno.Editor.Interactions.EditorDropResult) 4f0febd2da6dcf0e903eaa874f5b31fb00ee2bd21eae913b90992bae77fc7fcf -->

```csharp
public bool Inno.Editor.Interactions.EditorDropResult.Equals(Inno.Editor.Interactions.EditorDropResult other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L6).

## `Equals`

<a id="api-ff68772bc48e1fc2"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropResult.Equals(System.Object) f2c4e1ae667d343146b2284e79a208dd36b34aacc23111c148587889a30f8fa9 -->

```csharp
public override bool Inno.Editor.Interactions.EditorDropResult.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L6).

## `GetHashCode`

<a id="api-884c0d95715eea4b"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropResult.GetHashCode 311575bdccc016395f1cb7b1d46c700d4cb041a62456fdf1c951f48c167ca0ef -->

```csharp
public override int Inno.Editor.Interactions.EditorDropResult.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L6).

## `op_Equality`

<a id="api-a40e32d588a57367"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropResult.op_Equality(Inno.Editor.Interactions.EditorDropResult,Inno.Editor.Interactions.EditorDropResult) c1b10cebc7c47ad468dab870995cd246d0c6a131f25ff32ac7045a68452f89cf -->

```csharp
public static bool Inno.Editor.Interactions.EditorDropResult.operator ==(Inno.Editor.Interactions.EditorDropResult left, Inno.Editor.Interactions.EditorDropResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L6).

## `op_Inequality`

<a id="api-a74ff2e8ad906cc9"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropResult.op_Inequality(Inno.Editor.Interactions.EditorDropResult,Inno.Editor.Interactions.EditorDropResult) 8fcee5e3306cb87dffb6e93f27ee923b9db18e7c80f57865180f0528e40129ea -->

```csharp
public static bool Inno.Editor.Interactions.EditorDropResult.operator !=(Inno.Editor.Interactions.EditorDropResult left, Inno.Editor.Interactions.EditorDropResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L6).

## `ToString`

<a id="api-671be72241e85435"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropResult.ToString 1cd969bbe07e14e44674055b8ba1aeb8d3b425c32d96a1015419c4075e6c4f18 -->

```csharp
public override string Inno.Editor.Interactions.EditorDropResult.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L6).

## `accepted`

<a id="api-82cfd91eeb388029"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropResult.accepted 05c8ac81a1e83e698716872a41c872b105a29ee0c2f6b99b0cc2fa31869d95c8 -->

```csharp
public bool Inno.Editor.Interactions.EditorDropResult.accepted { get; }
```

Gets whether the drop was accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L33).

## `rejected`

<a id="api-025d10b95aa5afc3"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropResult.rejected 027d748ca89b79889c3f01547b5d959650712d2cd82d479ed7ca2af6b82ef891 -->

```csharp
public static Inno.Editor.Interactions.EditorDropResult Inno.Editor.Interactions.EditorDropResult.rejected { get; }
```

Gets a rejected drop result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L48).

## `revealTarget`

<a id="api-b3b0fabb96bf6db2"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropResult.revealTarget a40be1b87601e7b5f832bc0a78d814f24ddf6dda790afa2f307dc54140e11ba8 -->

```csharp
public object? Inno.Editor.Interactions.EditorDropResult.revealTarget { get; }
```

Gets the optional hierarchy target that should be revealed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L43).

## `selectionTarget`

<a id="api-ace5f28bd05c3888"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropResult.selectionTarget 621d2537ee69c402b9968aaaae0e5457616ff8c0bc600f32f661850ca1dfea00 -->

```csharp
public object? Inno.Editor.Interactions.EditorDropResult.selectionTarget { get; }
```

Gets the optional target that should become selected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropResult.cs#L38).
