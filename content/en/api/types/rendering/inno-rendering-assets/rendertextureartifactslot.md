---
title: "RenderTextureArtifactSlot"
description: "Reference for RenderTextureArtifactSlot in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.7caae3a33fe7e8aa
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `RenderTextureArtifactSlot`

This reference describes `RenderTextureArtifactSlot` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Assets.RenderTextureArtifactSlot>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4f4be4c3da81bf66) | Method |
| [`Equals`](#api-e27b17aa42eb7d1f) | Method |
| [`Equals`](#api-a026df8a41da7a20) | Method |
| [`GetHashCode`](#api-399c95af40e6756e) | Method |
| [`op_Equality`](#api-8353e397ff1c2a85) | Method |
| [`op_Inequality`](#api-103806e7aac5dded) | Method |
| [`ToString`](#api-3964f8b09bac397b) | Method |
| [`colorSpace`](#api-d62d27f534ef21b2) | Property |
| [`id`](#api-d021053f9687584d) | Property |
| [`sourceOutputName`](#api-26cbb1e771e99a63) | Property |

## Type declaration

<a id="api-7caae3a33fe7e8aa"></a>
<!-- api: T:Inno.Rendering.Assets.RenderTextureArtifactSlot e3e6fb7c1d890d84d06d99efded5e1e3e247c74ef00018ec1398c0a0f381327c -->

```csharp
public readonly record struct Inno.Rendering.Assets.RenderTextureArtifactSlot : System.IEquatable<Inno.Rendering.Assets.RenderTextureArtifactSlot>
```

Declares an immutable source artifact that is compiled into one sampled texture slot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L11).

## `#ctor`

<a id="api-4f4be4c3da81bf66"></a>
<!-- api: M:Inno.Rendering.Assets.RenderTextureArtifactSlot.#ctor(System.String,System.String,Inno.Rendering.Assets.TextureColorSpace) af709fe6998bd7fb36d0bbc4a1ae07db6f6168def6e21c4fc0b170483a21765b -->

```csharp
public Inno.Rendering.Assets.RenderTextureArtifactSlot.RenderTextureArtifactSlot(string id, string sourceOutputName, Inno.Rendering.Assets.TextureColorSpace colorSpace)
```

Creates one stable texture slot declaration.

**Parameter `id`:** Asset-local stable slot identifier.

**Parameter `sourceOutputName`:** Named source artifact written by the owning asset importer.

**Parameter `colorSpace`:** Sampling color-space interpretation used by the target compiler and GPU resource.

**Throws `System.ArgumentException`:** Thrown when `id` or `sourceOutputName` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L28).

## `Equals`

<a id="api-e27b17aa42eb7d1f"></a>
<!-- api: M:Inno.Rendering.Assets.RenderTextureArtifactSlot.Equals(Inno.Rendering.Assets.RenderTextureArtifactSlot) a9cb9f0836cbaa32c0233e1f05093b94372e02eb0e93fa5c36a83a994e3d22de -->

```csharp
public bool Inno.Rendering.Assets.RenderTextureArtifactSlot.Equals(Inno.Rendering.Assets.RenderTextureArtifactSlot other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L11).

## `Equals`

<a id="api-a026df8a41da7a20"></a>
<!-- api: M:Inno.Rendering.Assets.RenderTextureArtifactSlot.Equals(System.Object) d1076151c35e3e8b955546ffdaf161680d0f7bd7eb030e00441dcc0f50cd22c0 -->

```csharp
public override bool Inno.Rendering.Assets.RenderTextureArtifactSlot.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L11).

## `GetHashCode`

<a id="api-399c95af40e6756e"></a>
<!-- api: M:Inno.Rendering.Assets.RenderTextureArtifactSlot.GetHashCode b39b65c088d4819342496d3193a0010d25dfe755a671d7530fcc38d5b173b51b -->

```csharp
public override int Inno.Rendering.Assets.RenderTextureArtifactSlot.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L11).

## `op_Equality`

<a id="api-8353e397ff1c2a85"></a>
<!-- api: M:Inno.Rendering.Assets.RenderTextureArtifactSlot.op_Equality(Inno.Rendering.Assets.RenderTextureArtifactSlot,Inno.Rendering.Assets.RenderTextureArtifactSlot) ffe266dac874cfca721203c7aa0595c29c100b422e058f5a795930a136919b7b -->

```csharp
public static bool Inno.Rendering.Assets.RenderTextureArtifactSlot.operator ==(Inno.Rendering.Assets.RenderTextureArtifactSlot left, Inno.Rendering.Assets.RenderTextureArtifactSlot right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L11).

## `op_Inequality`

<a id="api-103806e7aac5dded"></a>
<!-- api: M:Inno.Rendering.Assets.RenderTextureArtifactSlot.op_Inequality(Inno.Rendering.Assets.RenderTextureArtifactSlot,Inno.Rendering.Assets.RenderTextureArtifactSlot) b4d353fdf2810609b82a06854dcb25a1e9c12ec043f63abe02b7ea5f0ffe0500 -->

```csharp
public static bool Inno.Rendering.Assets.RenderTextureArtifactSlot.operator !=(Inno.Rendering.Assets.RenderTextureArtifactSlot left, Inno.Rendering.Assets.RenderTextureArtifactSlot right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L11).

## `ToString`

<a id="api-3964f8b09bac397b"></a>
<!-- api: M:Inno.Rendering.Assets.RenderTextureArtifactSlot.ToString 5d6618d7bc683868d67fbdfd7f6a43fb3bd3e381b549944641d60231b1727f04 -->

```csharp
public override string Inno.Rendering.Assets.RenderTextureArtifactSlot.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L11).

## `colorSpace`

<a id="api-d62d27f534ef21b2"></a>
<!-- api: P:Inno.Rendering.Assets.RenderTextureArtifactSlot.colorSpace 9e1402ea57f45da5a52442487d5dddef82c69b7f6b7256fe476f1e40252cbeee -->

```csharp
public Inno.Rendering.Assets.TextureColorSpace Inno.Rendering.Assets.RenderTextureArtifactSlot.colorSpace { get; }
```

Gets the sampling color-space interpretation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L53).

## `id`

<a id="api-d021053f9687584d"></a>
<!-- api: P:Inno.Rendering.Assets.RenderTextureArtifactSlot.id 1cfd22ea22b18203d1a47522fc1462f9f28705c478d36157c2d5f61285245276 -->

```csharp
public string Inno.Rendering.Assets.RenderTextureArtifactSlot.id { get; }
```

Gets the asset-local stable slot identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L43).

## `sourceOutputName`

<a id="api-26cbb1e771e99a63"></a>
<!-- api: P:Inno.Rendering.Assets.RenderTextureArtifactSlot.sourceOutputName fcce0761deaa9f091266edd2e5fa33f043975ea6b9c95764201e9e77f9f5a830 -->

```csharp
public string Inno.Rendering.Assets.RenderTextureArtifactSlot.sourceOutputName { get; }
```

Gets the named portable image artifact consumed by target compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L48).
