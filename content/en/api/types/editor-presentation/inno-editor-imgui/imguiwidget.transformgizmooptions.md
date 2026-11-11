---
title: "ImGuiWidget.TransformGizmoOptions"
description: "Reference for ImGuiWidget.TransformGizmoOptions in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.b79faec3a1d18f6e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiWidget.TransformGizmoOptions`

This reference describes `ImGuiWidget.TransformGizmoOptions` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-f312e079e668b509) | Method |
| [`Equals`](#api-d1259efaa8339edf) | Method |
| [`GetHashCode`](#api-276160c5281baa87) | Method |
| [`op_Equality`](#api-4f4f7319a86d88b5) | Method |
| [`op_Inequality`](#api-6e85013eebc2fbf2) | Method |
| [`ToString`](#api-f4f45c02c5e51ff7) | Method |
| [`enabled`](#api-888b6a86bdccd3a5) | Property |
| [`maskX`](#api-68d274ead69f8796) | Property |
| [`maskY`](#api-da52c3adeff05e91) | Property |
| [`maskZ`](#api-1e9f3df317c15e7f) | Property |
| [`maximum`](#api-9d29c35ff9322e3c) | Property |
| [`minimum`](#api-f8119b59c5c6ff84) | Property |
| [`operation`](#api-d9a5abfa43692794) | Property |
| [`orthographic`](#api-86b441b644c9fa1f) | Property |
| [`projection`](#api-db6ffa7ad5aeec5d) | Property |
| [`space`](#api-c3be489097d72b26) | Property |
| [`view`](#api-5cba9690d06ed805) | Property |

## Type declaration

<a id="api-b79faec3a1d18f6e"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions cfc6c3fc9378ed9b4298460d2bbb8df543e3f1d86cabee43769ffc2c958883cb -->

```csharp
public readonly record struct Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions : System.IEquatable<Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions>
```

Supplies frame-local matrices and interaction policy without native handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L60).

## `Equals`

<a id="api-f312e079e668b509"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.Equals(Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions) c9862916c0e77876ae3cf1ca694877c9918ef459c3fd91de250969ceb8ca8db9 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.Equals(Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L60).

## `Equals`

<a id="api-d1259efaa8339edf"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.Equals(System.Object) 6274dd751effea37b2feec1d08d8af763702a5574c241b4f85f715385bf1838b -->

```csharp
public override bool Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L60).

## `GetHashCode`

<a id="api-276160c5281baa87"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.GetHashCode 268943b6f2632aa6c5807f9b65f9f327c725e250c894d490f38092ab28406fc7 -->

```csharp
public override int Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L60).

## `op_Equality`

<a id="api-4f4f7319a86d88b5"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.op_Equality(Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions,Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions) 2b0f5ad47b58ff3dd3cfa3f7c63b4e52913553d39f0cdc545281074dcb1f03e8 -->

```csharp
public static bool Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.operator ==(Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions left, Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L60).

## `op_Inequality`

<a id="api-6e85013eebc2fbf2"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.op_Inequality(Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions,Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions) 76f0697e37897a361f424af2f602e6a55246d36f4310fd908932ee96931204ee -->

```csharp
public static bool Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.operator !=(Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions left, Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L60).

## `ToString`

<a id="api-f4f45c02c5e51ff7"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.ToString f822e8947eb8d2f05b275e6502894810c906a077891463bc6413905893bc873f -->

```csharp
public override string Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L60).

## `enabled`

<a id="api-888b6a86bdccd3a5"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.enabled bfb9ad650d7a52f3790be7757ff04bf14909721fc06619b139f69ebd4a255aad -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.enabled { get; init; }
```

Gets whether manipulation can consume pointer input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L85).

## `maskX`

<a id="api-68d274ead69f8796"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.maskX 5df9bb2f069f12c07e01147308a3eeb54c97ef500aa7b6e07eb8dbc287cf9d3b -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.maskX { get; init; }
```

Gets whether the X translation axis is excluded by the viewport plane.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L97).

## `maskY`

<a id="api-da52c3adeff05e91"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.maskY 91b8d801d5b88801b9efe5627a16b0b0726e0f74fa1a9e222ff5fd02eafa2c8f -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.maskY { get; init; }
```

Gets whether the Y translation axis is excluded by the viewport plane.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L101).

## `maskZ`

<a id="api-1e9f3df317c15e7f"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.maskZ af00625e751df9f85eedec8faffb23a03d61244c138eb9d48e1f9e65e328bc6b -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.maskZ { get; init; }
```

Gets whether the Z translation axis is excluded by the viewport plane.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L105).

## `maximum`

<a id="api-9d29c35ff9322e3c"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.maximum 7b4629c19ded4fd36d1bfe8f8c9b97e3866eadff71272fb0261eff0b2834df8c -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.maximum { get; init; }
```

Gets the viewport's screen-space maximum.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L69).

## `minimum`

<a id="api-f8119b59c5c6ff84"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.minimum d994b5f4af01b5193de3ad44b86b1ad17f1d3625b8bfa39e9a6e62bc94b94498 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.minimum { get; init; }
```

Gets the viewport's screen-space minimum.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L65).

## `operation`

<a id="api-d9a5abfa43692794"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.operation a83837c6d1efba73f8bd6db3093ce1d75a0ef45f468071824ece0991ce1f3ea7 -->

```csharp
public Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.operation { get; init; }
```

Gets the requested handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L89).

## `orthographic`

<a id="api-86b441b644c9fa1f"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.orthographic 10518c331a32d54faf297f2d3d3832c12e47872d2f3be2fa485ad6169687d2ef -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.orthographic { get; init; }
```

Gets whether this viewport uses an orthographic projection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L81).

## `projection`

<a id="api-db6ffa7ad5aeec5d"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.projection 0909b4649ccf1324eb967519d73dee871150268e36dd2eda5a0475cc553e4e34 -->

```csharp
public Inno.Core.Mathematics.Matrix Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.projection { get; init; }
```

Gets the projection matrix supplied by the viewport owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L77).

## `space`

<a id="api-c3be489097d72b26"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.space 5f542e7ece5cb75eb770c09bec91824481979461ae0c5ccbed7309b6ebe8f568 -->

```csharp
public Inno.Editor.ImGui.ImGuiWidget.TransformGizmoSpace Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.space { get; init; }
```

Gets the handle coordinate space.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L93).

## `view`

<a id="api-5cba9690d06ed805"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.view c411442b8a3567233639f8d33268b4efdcb7769d9eab4b4be23e27fbb0f457ee -->

```csharp
public Inno.Core.Mathematics.Matrix Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions.view { get; init; }
```

Gets the column-vector view matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L73).
