---
title: "RenderTextureArtifactReference"
description: "Reference for RenderTextureArtifactReference in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.4506acf5f09fe1bb
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `RenderTextureArtifactReference`

This reference describes `RenderTextureArtifactReference` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Assets.RenderTextureArtifactReference>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9b7a652f9a96ddd6) | Method |
| [`Equals`](#api-164c23a688eb38e3) | Method |
| [`Equals`](#api-45ea0645bdbcbef1) | Method |
| [`GetHashCode`](#api-a1eeb8bbfaf987ec) | Method |
| [`op_Equality`](#api-2a07230d84113021) | Method |
| [`op_Inequality`](#api-8b7140d04ecadf5c) | Method |
| [`ToString`](#api-b972723d6132a6c0) | Method |
| [`assetId`](#api-cfaa1456df83c5a7) | Property |
| [`contentRevision`](#api-0c2bb32f0a954091) | Property |
| [`slot`](#api-7db00c0e4fe3d52b) | Property |

## Type declaration

<a id="api-4506acf5f09fe1bb"></a>
<!-- api: T:Inno.Rendering.Assets.RenderTextureArtifactReference 259c5ae92532ee557ddfe91c850ed9d42cac19fd6072162ec4e0fa8570c66987 -->

```csharp
public readonly record struct Inno.Rendering.Assets.RenderTextureArtifactReference : System.IEquatable<Inno.Rendering.Assets.RenderTextureArtifactReference>
```

Identifies one immutable texture source across authoring, deployment, and runtime generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L11).

## `#ctor`

<a id="api-9b7a652f9a96ddd6"></a>
<!-- api: M:Inno.Rendering.Assets.RenderTextureArtifactReference.#ctor(System.Guid,System.Int64,Inno.Rendering.Assets.RenderTextureArtifactSlot) 047d4b1e8abae4819d30e412086bb79f89cd44715c25166c12981c52f201456c -->

```csharp
public Inno.Rendering.Assets.RenderTextureArtifactReference.RenderTextureArtifactReference(System.Guid assetId, long contentRevision, Inno.Rendering.Assets.RenderTextureArtifactSlot slot)
```

Creates a reference to one texture slot owned by an imported asset generation.

**Parameter `assetId`:** Persistent identity of the asset that owns the named source artifact.

**Parameter `contentRevision`:** Current committed content revision of the owning asset.

**Parameter `slot`:** Stable texture slot declaration.

**Throws `System.ArgumentException`:** Thrown when `assetId` is empty or `contentRevision` is negative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L28).

## `Equals`

<a id="api-164c23a688eb38e3"></a>
<!-- api: M:Inno.Rendering.Assets.RenderTextureArtifactReference.Equals(Inno.Rendering.Assets.RenderTextureArtifactReference) 4faa26fbcfbecd9bfa990e3d7d19fedf875054e8216d8d112fd8220dce96a64e -->

```csharp
public bool Inno.Rendering.Assets.RenderTextureArtifactReference.Equals(Inno.Rendering.Assets.RenderTextureArtifactReference other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L11).

## `Equals`

<a id="api-45ea0645bdbcbef1"></a>
<!-- api: M:Inno.Rendering.Assets.RenderTextureArtifactReference.Equals(System.Object) fed92c9dc8fb9f34a47b84aa696046ffe8160026ea484dbf51fb8933a878969e -->

```csharp
public override bool Inno.Rendering.Assets.RenderTextureArtifactReference.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L11).

## `GetHashCode`

<a id="api-a1eeb8bbfaf987ec"></a>
<!-- api: M:Inno.Rendering.Assets.RenderTextureArtifactReference.GetHashCode 09947f2f960547e7c8d43f79c5abab179f29fe7579c0c5fd49286ea39b555937 -->

```csharp
public override int Inno.Rendering.Assets.RenderTextureArtifactReference.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L11).

## `op_Equality`

<a id="api-2a07230d84113021"></a>
<!-- api: M:Inno.Rendering.Assets.RenderTextureArtifactReference.op_Equality(Inno.Rendering.Assets.RenderTextureArtifactReference,Inno.Rendering.Assets.RenderTextureArtifactReference) 410aeba4aee5b52da3e170306bed94f2efa949d8efd44316a112ed7d51e6407c -->

```csharp
public static bool Inno.Rendering.Assets.RenderTextureArtifactReference.operator ==(Inno.Rendering.Assets.RenderTextureArtifactReference left, Inno.Rendering.Assets.RenderTextureArtifactReference right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L11).

## `op_Inequality`

<a id="api-8b7140d04ecadf5c"></a>
<!-- api: M:Inno.Rendering.Assets.RenderTextureArtifactReference.op_Inequality(Inno.Rendering.Assets.RenderTextureArtifactReference,Inno.Rendering.Assets.RenderTextureArtifactReference) ea2e688317db897070199a3c9c9858e5549a4f56255588b246d15cead80cc2af -->

```csharp
public static bool Inno.Rendering.Assets.RenderTextureArtifactReference.operator !=(Inno.Rendering.Assets.RenderTextureArtifactReference left, Inno.Rendering.Assets.RenderTextureArtifactReference right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L11).

## `ToString`

<a id="api-b972723d6132a6c0"></a>
<!-- api: M:Inno.Rendering.Assets.RenderTextureArtifactReference.ToString cb82b2fe875b4a0f268f3b83e02fd19d2f04c12c48ba7f86439a4e670cdb6b38 -->

```csharp
public override string Inno.Rendering.Assets.RenderTextureArtifactReference.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L11).

## `assetId`

<a id="api-cfaa1456df83c5a7"></a>
<!-- api: P:Inno.Rendering.Assets.RenderTextureArtifactReference.assetId a7f27fcc69bd0ffd7b6e48ed395afd27ac90ee7094eb937b9c5e8bc9aafb2b8e -->

```csharp
public System.Guid Inno.Rendering.Assets.RenderTextureArtifactReference.assetId { get; }
```

Gets the persistent identity of the owning asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L46).

## `contentRevision`

<a id="api-0c2bb32f0a954091"></a>
<!-- api: P:Inno.Rendering.Assets.RenderTextureArtifactReference.contentRevision 0323ec7d8486dd61df1a02816caf08107c5f1902d8f9df0c99d98ac0e4055050 -->

```csharp
public long Inno.Rendering.Assets.RenderTextureArtifactReference.contentRevision { get; }
```

Gets the committed owner content revision used for last-good replacement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L51).

## `slot`

<a id="api-7db00c0e4fe3d52b"></a>
<!-- api: P:Inno.Rendering.Assets.RenderTextureArtifactReference.slot 23f77a5b4a46be098188bc0facdfb6b86c05d32441d71bc905e94307aeb15ed6 -->

```csharp
public Inno.Rendering.Assets.RenderTextureArtifactSlot Inno.Rendering.Assets.RenderTextureArtifactReference.slot { get; }
```

Gets the referenced stable texture slot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L56).
