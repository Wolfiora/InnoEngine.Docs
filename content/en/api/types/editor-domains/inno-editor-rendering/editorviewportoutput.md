---
title: "EditorViewportOutput"
description: "Reference for EditorViewportOutput in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.9e865a3d81bb6a21
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportOutput`

This reference describes `EditorViewportOutput` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Rendering.EditorViewportOutput>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d9671c6f892d6411) | Method |
| [`Equals`](#api-201f88338fcacf01) | Method |
| [`Equals`](#api-8a3cabc155f6316f) | Method |
| [`GetHashCode`](#api-fb0699ee83447333) | Method |
| [`op_Equality`](#api-123f9793079cdbbd) | Method |
| [`op_Inequality`](#api-615b74f5d01f3285) | Method |
| [`ToString`](#api-1cd01d31d9431e17) | Method |
| [`isReady`](#api-ec536c89cef9237a) | Property |
| [`pixelHeight`](#api-47b2aa704c1ef329) | Property |
| [`pixelWidth`](#api-5423a6ed397453aa) | Property |
| [`texture`](#api-d48de1c5bdf8c946) | Property |
| [`viewportId`](#api-23912bf83aec5f51) | Property |

## Type declaration

<a id="api-9e865a3d81bb6a21"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportOutput 490a7ec9e6c5c8bffd0e990b0b4414354a33d4b22df282e387a6f42aafc2bc5e -->

```csharp
public readonly record struct Inno.Editor.Rendering.EditorViewportOutput : System.IEquatable<Inno.Editor.Rendering.EditorViewportOutput>
```

Identifies a renderer-owned editor viewport image through an opaque presentation token.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L15).

## `#ctor`

<a id="api-d9671c6f892d6411"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportOutput.#ctor(System.String,Inno.Adapter.Presentation.PresentationTextureHandle,System.Int32,System.Int32) d8d443fef6506cae64d0d25f4412efa25870b0725c5be93edbfed834ee444ddf -->

```csharp
public Inno.Editor.Rendering.EditorViewportOutput.EditorViewportOutput(string viewportId, Inno.Adapter.Presentation.PresentationTextureHandle texture, int pixelWidth, int pixelHeight)
```

Creates an editor viewport output snapshot.

**Parameter `viewportId`:** Stable viewport identity.

**Parameter `texture`:** Opaque presentation token, or an invalid token while warming up.

**Parameter `pixelWidth`:** Current target width.

**Parameter `pixelHeight`:** Current target height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L32).

## `Equals`

<a id="api-201f88338fcacf01"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportOutput.Equals(Inno.Editor.Rendering.EditorViewportOutput) 343c253ac5fb18626b52000b7f754919f37d1d36eb3f1214889c4cbc9d47c509 -->

```csharp
public bool Inno.Editor.Rendering.EditorViewportOutput.Equals(Inno.Editor.Rendering.EditorViewportOutput other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L15).

## `Equals`

<a id="api-8a3cabc155f6316f"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportOutput.Equals(System.Object) 9377c4e12a0a6ced0a83f4881478606ab8d4bbd1b0e30ea990ce24813644202f -->

```csharp
public override bool Inno.Editor.Rendering.EditorViewportOutput.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L15).

## `GetHashCode`

<a id="api-fb0699ee83447333"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportOutput.GetHashCode 220aca0588936de01dd2e59b584eafbfe7e3a1f5d61fcbd281ee5399a52ffb7f -->

```csharp
public override int Inno.Editor.Rendering.EditorViewportOutput.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L15).

## `op_Equality`

<a id="api-123f9793079cdbbd"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportOutput.op_Equality(Inno.Editor.Rendering.EditorViewportOutput,Inno.Editor.Rendering.EditorViewportOutput) 2a899c766c4a1c3fb56d9cb242fcbfc93a2c3394554f6213e38c888c8f95f7cc -->

```csharp
public static bool Inno.Editor.Rendering.EditorViewportOutput.operator ==(Inno.Editor.Rendering.EditorViewportOutput left, Inno.Editor.Rendering.EditorViewportOutput right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L15).

## `op_Inequality`

<a id="api-615b74f5d01f3285"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportOutput.op_Inequality(Inno.Editor.Rendering.EditorViewportOutput,Inno.Editor.Rendering.EditorViewportOutput) 03f5138fe9c81f277502953c61d3b36e4eb4185fb00c22e9c57f997285c58c74 -->

```csharp
public static bool Inno.Editor.Rendering.EditorViewportOutput.operator !=(Inno.Editor.Rendering.EditorViewportOutput left, Inno.Editor.Rendering.EditorViewportOutput right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L15).

## `ToString`

<a id="api-1cd01d31d9431e17"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportOutput.ToString 2ff3eb8af29d3d89004942373ff488cf614ed1c81ea74c4dfba0b1282c69b38a -->

```csharp
public override string Inno.Editor.Rendering.EditorViewportOutput.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L15).

## `isReady`

<a id="api-ec536c89cef9237a"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportOutput.isReady b0af8737f05f3c078d5f0c32ad1d01466a807b248d7e38dae41f81acad7480ee -->

```csharp
public bool Inno.Editor.Rendering.EditorViewportOutput.isReady { get; }
```

Gets whether a completed target can be drawn.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L70).

## `pixelHeight`

<a id="api-47b2aa704c1ef329"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportOutput.pixelHeight 757c3857f2b8d2337af9ad01828263525028f4c435787be6c0158cb48b7a2114 -->

```csharp
public int Inno.Editor.Rendering.EditorViewportOutput.pixelHeight { get; }
```

Gets the current target height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L65).

## `pixelWidth`

<a id="api-5423a6ed397453aa"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportOutput.pixelWidth eb6693661614df8384375ca679d6ed5923bb20b206631a5204f27d6d8c697cf4 -->

```csharp
public int Inno.Editor.Rendering.EditorViewportOutput.pixelWidth { get; }
```

Gets the current target width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L60).

## `texture`

<a id="api-d48de1c5bdf8c946"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportOutput.texture 4728dbd87b3f347d13218cab8083085b39aa433ef7e297ac23f0e70ae953aa13 -->

```csharp
public Inno.Adapter.Presentation.PresentationTextureHandle Inno.Editor.Rendering.EditorViewportOutput.texture { get; }
```

Gets the opaque presentation token.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L55).

## `viewportId`

<a id="api-23912bf83aec5f51"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportOutput.viewportId 6ebc618276ca165febe4cfae03fee3d90e0fd77f28d9ed8313dc166352728e8f -->

```csharp
public string Inno.Editor.Rendering.EditorViewportOutput.viewportId { get; }
```

Gets the stable viewport identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L50).
