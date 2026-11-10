---
title: "EditorViewportPointerEvent"
description: "Reference for EditorViewportPointerEvent in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.2a7d76275fd599c8
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorViewportPointerEvent`

This reference describes `EditorViewportPointerEvent` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Interactions.EditorViewportPointerEvent>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-11e3ffd7951261a3) | Method |
| [`Equals`](#api-9a261da2716a84f7) | Method |
| [`Equals`](#api-fe4a48e31b021352) | Method |
| [`GetHashCode`](#api-e53141b108f766fe) | Method |
| [`op_Equality`](#api-3094d96d1e6b26d5) | Method |
| [`op_Inequality`](#api-e06bc240871c51a4) | Method |
| [`ToString`](#api-786dd3561541bca9) | Method |
| [`button`](#api-ce54e05b0a9964a8) | Property |
| [`modifiers`](#api-708a10f45cfd401b) | Property |
| [`phase`](#api-e883c46c5d6fa54a) | Property |
| [`pointerId`](#api-0b93f75437de1731) | Property |
| [`screenPosition`](#api-31657312d3a39016) | Property |
| [`worldPosition`](#api-71108fa7ba0ae6b1) | Property |

## Type declaration

<a id="api-2a7d76275fd599c8"></a>
<!-- api: T:Inno.Editor.Interactions.EditorViewportPointerEvent 7ddab7922adf8854af3cd41b0e216bf39f91f959b43eb009ee7a640413519d4e -->

```csharp
public readonly record struct Inno.Editor.Interactions.EditorViewportPointerEvent : System.IEquatable<Inno.Editor.Interactions.EditorViewportPointerEvent>
```

Contains one immutable viewport pointer sample in screen and world coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L111).

## `#ctor`

<a id="api-11e3ffd7951261a3"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportPointerEvent.#ctor(System.Int32,Inno.Editor.Interactions.EditorViewportPointerPhase,Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2,System.Int32,Inno.Core.Input.KeyModifier) 87015b10cad84941e665a1ebe95c886a629ed41379b7ee03441a97e47fbb8c3d -->

```csharp
public Inno.Editor.Interactions.EditorViewportPointerEvent.EditorViewportPointerEvent(int pointerId, Inno.Editor.Interactions.EditorViewportPointerPhase phase, Inno.Core.Mathematics.Vector2 screenPosition, Inno.Core.Mathematics.Vector2 worldPosition, int button, Inno.Core.Input.KeyModifier modifiers)
```

Creates one viewport pointer sample.

**Parameter `pointerId`:** Platform pointer identity.

**Parameter `phase`:** Gesture lifecycle phase.

**Parameter `screenPosition`:** Viewport-local pixel position.

**Parameter `worldPosition`:** Corresponding world position.

**Parameter `button`:** Platform button number.

**Parameter `modifiers`:** Active keyboard modifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L134).

## `Equals`

<a id="api-9a261da2716a84f7"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportPointerEvent.Equals(Inno.Editor.Interactions.EditorViewportPointerEvent) 1df2b727256e8ebba3c3d81082404a7ac34f9c525f3ade02875749289a652ba4 -->

```csharp
public bool Inno.Editor.Interactions.EditorViewportPointerEvent.Equals(Inno.Editor.Interactions.EditorViewportPointerEvent other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L111).

## `Equals`

<a id="api-fe4a48e31b021352"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportPointerEvent.Equals(System.Object) db7ac0177e21d275f8d413748f9f997f583c12de35d82cf68df5b3624a1a1b82 -->

```csharp
public override bool Inno.Editor.Interactions.EditorViewportPointerEvent.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L111).

## `GetHashCode`

<a id="api-e53141b108f766fe"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportPointerEvent.GetHashCode 0ab2d0c7a8b273eeb1f342f4b36695a92b716c5edf47f2cb60642f0b9e726af5 -->

```csharp
public override int Inno.Editor.Interactions.EditorViewportPointerEvent.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L111).

## `op_Equality`

<a id="api-3094d96d1e6b26d5"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportPointerEvent.op_Equality(Inno.Editor.Interactions.EditorViewportPointerEvent,Inno.Editor.Interactions.EditorViewportPointerEvent) df8826bd96ffc796ae163e3fd62de2590a7864ec3a93158d87b1cc48adeb0c8d -->

```csharp
public static bool Inno.Editor.Interactions.EditorViewportPointerEvent.operator ==(Inno.Editor.Interactions.EditorViewportPointerEvent left, Inno.Editor.Interactions.EditorViewportPointerEvent right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L111).

## `op_Inequality`

<a id="api-e06bc240871c51a4"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportPointerEvent.op_Inequality(Inno.Editor.Interactions.EditorViewportPointerEvent,Inno.Editor.Interactions.EditorViewportPointerEvent) f5dd49349486d081a93f1c3cb649171f27e4201cbf1c31b2f878ce06fa90fb13 -->

```csharp
public static bool Inno.Editor.Interactions.EditorViewportPointerEvent.operator !=(Inno.Editor.Interactions.EditorViewportPointerEvent left, Inno.Editor.Interactions.EditorViewportPointerEvent right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L111).

## `ToString`

<a id="api-786dd3561541bca9"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportPointerEvent.ToString 3c69aaa214436e7dde8fdade0eb8fbc5c8c9f941e0b57934c1032e7afd8b7b5e -->

```csharp
public override string Inno.Editor.Interactions.EditorViewportPointerEvent.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L111).

## `button`

<a id="api-ce54e05b0a9964a8"></a>
<!-- api: P:Inno.Editor.Interactions.EditorViewportPointerEvent.button 16fa9fbe4b728f4880363d4dcd40ed78916f8f9ad9e3e7bfeee1242cbcf48234 -->

```csharp
public int Inno.Editor.Interactions.EditorViewportPointerEvent.button { get; }
```

Gets the platform button number.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L173).

## `modifiers`

<a id="api-708a10f45cfd401b"></a>
<!-- api: P:Inno.Editor.Interactions.EditorViewportPointerEvent.modifiers 253e7088d807c2595535a240788665ee8a7c16af7c8a860f6bf08715f178af41 -->

```csharp
public Inno.Core.Input.KeyModifier Inno.Editor.Interactions.EditorViewportPointerEvent.modifiers { get; }
```

Gets active keyboard modifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L178).

## `phase`

<a id="api-e883c46c5d6fa54a"></a>
<!-- api: P:Inno.Editor.Interactions.EditorViewportPointerEvent.phase 308a671aff2075dc2ca63c0ec65024f78d4accb0340cc28d81d1aa19f585eed9 -->

```csharp
public Inno.Editor.Interactions.EditorViewportPointerPhase Inno.Editor.Interactions.EditorViewportPointerEvent.phase { get; }
```

Gets the gesture lifecycle phase.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L158).

## `pointerId`

<a id="api-0b93f75437de1731"></a>
<!-- api: P:Inno.Editor.Interactions.EditorViewportPointerEvent.pointerId 15ad3127169bc8036f7d00e689c2bc8e0a02edb08d9c78f943454030f95936eb -->

```csharp
public int Inno.Editor.Interactions.EditorViewportPointerEvent.pointerId { get; }
```

Gets the platform pointer identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L153).

## `screenPosition`

<a id="api-31657312d3a39016"></a>
<!-- api: P:Inno.Editor.Interactions.EditorViewportPointerEvent.screenPosition 8927d33f713db9a67081d413d7b301b00f725006719cbfb6e782fab581c8ede3 -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.Editor.Interactions.EditorViewportPointerEvent.screenPosition { get; }
```

Gets the viewport-local pixel position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L163).

## `worldPosition`

<a id="api-71108fa7ba0ae6b1"></a>
<!-- api: P:Inno.Editor.Interactions.EditorViewportPointerEvent.worldPosition 2111970dc945745db3a2465176ce24be14b5e03c3cd980bfb1eae851f01967db -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.Editor.Interactions.EditorViewportPointerEvent.worldPosition { get; }
```

Gets the corresponding world position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L168).
