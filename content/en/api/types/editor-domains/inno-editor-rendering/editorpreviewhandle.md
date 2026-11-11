---
title: "EditorPreviewHandle"
description: "Reference for EditorPreviewHandle in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.66853ffd6d8a90c9
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorPreviewHandle`

This reference describes `EditorPreviewHandle` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Rendering.EditorPreviewHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9429630e7c0e7185) | Method |
| [`Equals`](#api-a562753077fda1c8) | Method |
| [`Equals`](#api-7b648051f4506423) | Method |
| [`GetHashCode`](#api-1542706ab9039c44) | Method |
| [`op_Equality`](#api-05b5af36c1ee53aa) | Method |
| [`op_Inequality`](#api-840ecc98c0fe8391) | Method |
| [`ToString`](#api-1f468cd7dd0ce72d) | Method |
| [`deviceGeneration`](#api-af9a9361c48d16a7) | Property |
| [`isValid`](#api-09c36a8d8a497c13) | Property |
| [`pixelHeight`](#api-6b76a85219ff4e21) | Property |
| [`pixelWidth`](#api-1025a600a4986625) | Property |
| [`value`](#api-c3542599b879b848) | Property |

## Type declaration

<a id="api-66853ffd6d8a90c9"></a>
<!-- api: T:Inno.Editor.Rendering.EditorPreviewHandle 3f600c53cbad5405b5c682f19b99f355640259f9cdca850d2b669b95da748258 -->

```csharp
public readonly record struct Inno.Editor.Rendering.EditorPreviewHandle : System.IEquatable<Inno.Editor.Rendering.EditorPreviewHandle>
```

Identifies one preview texture owned by a specific rendering-device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L11).

## `#ctor`

<a id="api-9429630e7c0e7185"></a>
<!-- api: M:Inno.Editor.Rendering.EditorPreviewHandle.#ctor(System.UInt64,System.UInt32,System.Int32,System.Int32) 208d1954caa8ec98dfb7183efbb40a00319345e3d7e280a8a85f9e7b205cdbcc -->

```csharp
public Inno.Editor.Rendering.EditorPreviewHandle.EditorPreviewHandle(ulong value, uint deviceGeneration, int pixelWidth, int pixelHeight)
```

Creates one generation-scoped preview handle.

**Parameter `value`:** Non-zero preview identity.

**Parameter `deviceGeneration`:** Non-zero rendering-device generation.

**Parameter `pixelWidth`:** Positive source width.

**Parameter `pixelHeight`:** Positive source height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L28).

## `Equals`

<a id="api-a562753077fda1c8"></a>
<!-- api: M:Inno.Editor.Rendering.EditorPreviewHandle.Equals(Inno.Editor.Rendering.EditorPreviewHandle) a08d18b7294010df5c6a98b7c8d002358d23a4d0ae3c0c709d9c4ec02ccdd9d2 -->

```csharp
public bool Inno.Editor.Rendering.EditorPreviewHandle.Equals(Inno.Editor.Rendering.EditorPreviewHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L11).

## `Equals`

<a id="api-7b648051f4506423"></a>
<!-- api: M:Inno.Editor.Rendering.EditorPreviewHandle.Equals(System.Object) 8f747a7bd614a7f2815fadd5cbaef0e4f07de9726bc74511e453cd164923c580 -->

```csharp
public override bool Inno.Editor.Rendering.EditorPreviewHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L11).

## `GetHashCode`

<a id="api-1542706ab9039c44"></a>
<!-- api: M:Inno.Editor.Rendering.EditorPreviewHandle.GetHashCode 6aacc65ffe5e17b96c3a87c9e55ff026096a33bd1720d52b39ea0c3b718a5325 -->

```csharp
public override int Inno.Editor.Rendering.EditorPreviewHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L11).

## `op_Equality`

<a id="api-05b5af36c1ee53aa"></a>
<!-- api: M:Inno.Editor.Rendering.EditorPreviewHandle.op_Equality(Inno.Editor.Rendering.EditorPreviewHandle,Inno.Editor.Rendering.EditorPreviewHandle) e434167083ed60cf304840016facf80e754b91067db57ec190a072295d78ea10 -->

```csharp
public static bool Inno.Editor.Rendering.EditorPreviewHandle.operator ==(Inno.Editor.Rendering.EditorPreviewHandle left, Inno.Editor.Rendering.EditorPreviewHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L11).

## `op_Inequality`

<a id="api-840ecc98c0fe8391"></a>
<!-- api: M:Inno.Editor.Rendering.EditorPreviewHandle.op_Inequality(Inno.Editor.Rendering.EditorPreviewHandle,Inno.Editor.Rendering.EditorPreviewHandle) bfd3e7e33d013a680f8dfe3c86a0f323f78f797a9a088860744e6354538235bf -->

```csharp
public static bool Inno.Editor.Rendering.EditorPreviewHandle.operator !=(Inno.Editor.Rendering.EditorPreviewHandle left, Inno.Editor.Rendering.EditorPreviewHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L11).

## `ToString`

<a id="api-1f468cd7dd0ce72d"></a>
<!-- api: M:Inno.Editor.Rendering.EditorPreviewHandle.ToString f02c2c5c25a25a6155c4a35ff80adc7fc0893f9dfc9d66b1a3b3482fda265d95 -->

```csharp
public override string Inno.Editor.Rendering.EditorPreviewHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L11).

## `deviceGeneration`

<a id="api-af9a9361c48d16a7"></a>
<!-- api: P:Inno.Editor.Rendering.EditorPreviewHandle.deviceGeneration f501906a0b2e5e551526bab580ffc21f1f80959affc11c3cb0bb6ba1a461cce5 -->

```csharp
public uint Inno.Editor.Rendering.EditorPreviewHandle.deviceGeneration { get; }
```

Gets the rendering-device generation that owns this handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L52).

## `isValid`

<a id="api-09c36a8d8a497c13"></a>
<!-- api: P:Inno.Editor.Rendering.EditorPreviewHandle.isValid 32e3258baa81c9ba3294e2562ee16fbc2e4ab9b501c29eafed013bd80fef65fc -->

```csharp
public bool Inno.Editor.Rendering.EditorPreviewHandle.isValid { get; }
```

Gets whether this handle identifies a usable generation-scoped preview.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L67).

## `pixelHeight`

<a id="api-6b76a85219ff4e21"></a>
<!-- api: P:Inno.Editor.Rendering.EditorPreviewHandle.pixelHeight 33ebb8ee094c81b9be369b3dbbe01b20b556781910945cbfb1ff8e63d97032e1 -->

```csharp
public int Inno.Editor.Rendering.EditorPreviewHandle.pixelHeight { get; }
```

Gets source height in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L62).

## `pixelWidth`

<a id="api-1025a600a4986625"></a>
<!-- api: P:Inno.Editor.Rendering.EditorPreviewHandle.pixelWidth 81f57820c9522cabac592c73246f41cce67d4c1add7e6c75604a2632a7220560 -->

```csharp
public int Inno.Editor.Rendering.EditorPreviewHandle.pixelWidth { get; }
```

Gets source width in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L57).

## `value`

<a id="api-c3542599b879b848"></a>
<!-- api: P:Inno.Editor.Rendering.EditorPreviewHandle.value 0892b7f90a470b80012a1a787da7bff49ff90c76ca1e21d526ac0223974a7bac -->

```csharp
public ulong Inno.Editor.Rendering.EditorPreviewHandle.value { get; }
```

Gets the opaque preview identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L47).
