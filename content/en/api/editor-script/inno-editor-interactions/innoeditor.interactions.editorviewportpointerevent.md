---
title: "EditorViewportPointerEvent"
description: "Reference for EditorViewportPointerEvent in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.7e1c7c6c216ce108
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorViewportPointerEvent`

This reference describes `EditorViewportPointerEvent` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Interactions.EditorViewportPointerEvent>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-88bba419779b8b61) | Method |
| [`Equals`](#api-a0e2d8212103d098) | Method |
| [`Equals`](#api-d8c64232260b77e6) | Method |
| [`GetHashCode`](#api-77daebb55071017f) | Method |
| [`op_Equality`](#api-b5bfd867cff844cc) | Method |
| [`op_Inequality`](#api-89af4d607eafa2fd) | Method |
| [`ToString`](#api-6c0e1e5d4573e2b6) | Method |
| [`button`](#api-5b32d9e9589d9a0f) | Property |
| [`modifiers`](#api-c0fade353928a122) | Property |
| [`phase`](#api-66b93d5f445bbfbc) | Property |
| [`pointerId`](#api-c5e277ff41226f85) | Property |
| [`screenPosition`](#api-803a5452b65884b0) | Property |
| [`worldPosition`](#api-bb601ad303e3b738) | Property |

## Type declaration

<a id="api-7e1c7c6c216ce108"></a>
<!-- api: T:InnoEditor.Interactions.EditorViewportPointerEvent fe60ecb6e1861877d47c0a9dbd8f61b0b493ef9ec9dd26f574d41f3e691afd24 -->

```csharp
public readonly struct InnoEditor.Interactions.EditorViewportPointerEvent : System.IEquatable<InnoEditor.Interactions.EditorViewportPointerEvent>
```

Contains one immutable viewport pointer sample in screen and world coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L111).

## `#ctor`

<a id="api-88bba419779b8b61"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportPointerEvent.#ctor(System.Int32,InnoEditor.Interactions.EditorViewportPointerPhase,InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2,System.Int32,InnoEngine.Input.KeyModifier) e6ce4f4a42208c14d62b7ff3469e57f6f35f90d8815374b92645b69526c3f4ef -->

```csharp
public InnoEditor.Interactions.EditorViewportPointerEvent.EditorViewportPointerEvent(int pointerId, InnoEditor.Interactions.EditorViewportPointerPhase phase, InnoEngine.Mathematics.Vector2 screenPosition, InnoEngine.Mathematics.Vector2 worldPosition, int button, InnoEngine.Input.KeyModifier modifiers)
```

Creates one viewport pointer sample.

**Parameter `pointerId`:** Platform pointer identity.

**Parameter `phase`:** Gesture lifecycle phase.

**Parameter `screenPosition`:** Viewport-local pixel position.

**Parameter `worldPosition`:** Corresponding world position.

**Parameter `button`:** Platform button number.

**Parameter `modifiers`:** Active keyboard modifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L134).

## `Equals`

<a id="api-a0e2d8212103d098"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportPointerEvent.Equals(InnoEditor.Interactions.EditorViewportPointerEvent) 6e4c0b3acfecaf342f2ae0f71fbdef759919d7f49f87908a5c1c36f73a428c11 -->

```csharp
public bool InnoEditor.Interactions.EditorViewportPointerEvent.Equals(InnoEditor.Interactions.EditorViewportPointerEvent other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L111).

## `Equals`

<a id="api-d8c64232260b77e6"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportPointerEvent.Equals(System.Object) 4ef6f307cbdd8449fb96154add38f413dfe61f6cf26450135e5d8187f5827b50 -->

```csharp
public override bool InnoEditor.Interactions.EditorViewportPointerEvent.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L111).

## `GetHashCode`

<a id="api-77daebb55071017f"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportPointerEvent.GetHashCode c657128c42a2b1942bc0138e258c6269f24ce3f8598ddfe4b9da044794667111 -->

```csharp
public override int InnoEditor.Interactions.EditorViewportPointerEvent.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L111).

## `op_Equality`

<a id="api-b5bfd867cff844cc"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportPointerEvent.op_Equality(InnoEditor.Interactions.EditorViewportPointerEvent,InnoEditor.Interactions.EditorViewportPointerEvent) 590dec2f196f27c4bd8e3890aedae1a3f24cc7fe1f4cf1c5ce99e3e04bb4342f -->

```csharp
public static bool InnoEditor.Interactions.EditorViewportPointerEvent.operator ==(InnoEditor.Interactions.EditorViewportPointerEvent left, InnoEditor.Interactions.EditorViewportPointerEvent right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L111).

## `op_Inequality`

<a id="api-89af4d607eafa2fd"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportPointerEvent.op_Inequality(InnoEditor.Interactions.EditorViewportPointerEvent,InnoEditor.Interactions.EditorViewportPointerEvent) b4b39fa6ccdb6f0a8c9e82658cdd94a561825f7c901165d2b1d867ab63996fb1 -->

```csharp
public static bool InnoEditor.Interactions.EditorViewportPointerEvent.operator !=(InnoEditor.Interactions.EditorViewportPointerEvent left, InnoEditor.Interactions.EditorViewportPointerEvent right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L111).

## `ToString`

<a id="api-6c0e1e5d4573e2b6"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportPointerEvent.ToString 40d1a728541cf655be489dbb29de40d36a84d2b4a834fd943d6ebf711080a009 -->

```csharp
public override string InnoEditor.Interactions.EditorViewportPointerEvent.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L111).

## `button`

<a id="api-5b32d9e9589d9a0f"></a>
<!-- api: P:InnoEditor.Interactions.EditorViewportPointerEvent.button ee3b09351ca57ec6114f93d16a446439e0b5e8afdb796970d618be579c0024c2 -->

```csharp
public int InnoEditor.Interactions.EditorViewportPointerEvent.button { get; }
```

Gets the platform button number.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L173).

## `modifiers`

<a id="api-c0fade353928a122"></a>
<!-- api: P:InnoEditor.Interactions.EditorViewportPointerEvent.modifiers 7a54b6789c88789cd499dc90414b94f24ace0ac65235228d49f1c71bce3c78c0 -->

```csharp
public InnoEngine.Input.KeyModifier InnoEditor.Interactions.EditorViewportPointerEvent.modifiers { get; }
```

Gets active keyboard modifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L178).

## `phase`

<a id="api-66b93d5f445bbfbc"></a>
<!-- api: P:InnoEditor.Interactions.EditorViewportPointerEvent.phase d89b4238cb7d55e6c4d13cc21021cfe16f4a9e2fbd4b526000454ae972068ff0 -->

```csharp
public InnoEditor.Interactions.EditorViewportPointerPhase InnoEditor.Interactions.EditorViewportPointerEvent.phase { get; }
```

Gets the gesture lifecycle phase.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L158).

## `pointerId`

<a id="api-c5e277ff41226f85"></a>
<!-- api: P:InnoEditor.Interactions.EditorViewportPointerEvent.pointerId be18f3c21968924f2e8b12695cf4526cfdb82eb79eea34e7ec7394317149f02b -->

```csharp
public int InnoEditor.Interactions.EditorViewportPointerEvent.pointerId { get; }
```

Gets the platform pointer identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L153).

## `screenPosition`

<a id="api-803a5452b65884b0"></a>
<!-- api: P:InnoEditor.Interactions.EditorViewportPointerEvent.screenPosition ccc262e39926592d006001f57b2e14874cdd76309d2a88fcd16dc22de71ea073 -->

```csharp
public InnoEngine.Mathematics.Vector2 InnoEditor.Interactions.EditorViewportPointerEvent.screenPosition { get; }
```

Gets the viewport-local pixel position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L163).

## `worldPosition`

<a id="api-bb601ad303e3b738"></a>
<!-- api: P:InnoEditor.Interactions.EditorViewportPointerEvent.worldPosition e4289a8e8fa88094122ee7a6ba1cfcbf1efb6e7ec6a31961736a00541cd2902b -->

```csharp
public InnoEngine.Mathematics.Vector2 InnoEditor.Interactions.EditorViewportPointerEvent.worldPosition { get; }
```

Gets the corresponding world position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L168).
