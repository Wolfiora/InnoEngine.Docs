---
title: "RenderTextureArtifactReference"
description: "Reference for RenderTextureArtifactReference in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.a02f624ca9534533
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `RenderTextureArtifactReference`

This reference describes `RenderTextureArtifactReference` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderTextureArtifactReference>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-385ddcd3c377d710) | Method |
| [`Equals`](#api-518023b25678d2a5) | Method |
| [`Equals`](#api-b41cd7a64187291b) | Method |
| [`GetHashCode`](#api-14f86bcd48883c48) | Method |
| [`op_Equality`](#api-86ee1fafd4dac557) | Method |
| [`op_Inequality`](#api-a8eb6fc7cc31f1a2) | Method |
| [`ToString`](#api-c5178f4d7243f073) | Method |
| [`assetId`](#api-57ecb323e2a40e1e) | Property |
| [`contentRevision`](#api-1ebd61a4cca45c51) | Property |
| [`slot`](#api-70276df2d305dd09) | Property |

## Type declaration

<a id="api-a02f624ca9534533"></a>
<!-- api: T:InnoEngine.Rendering.RenderTextureArtifactReference 8c0b13408c0b31378893a6c69283d65c0d57dcbab082099485daad0a249d048e -->

```csharp
public readonly struct InnoEngine.Rendering.RenderTextureArtifactReference : System.IEquatable<InnoEngine.Rendering.RenderTextureArtifactReference>
```

Identifies one immutable texture source across authoring, deployment, and runtime generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L11).

## `#ctor`

<a id="api-385ddcd3c377d710"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureArtifactReference.#ctor(System.Guid,System.Int64,InnoEngine.Rendering.RenderTextureArtifactSlot) 454258591f4debb2b8d793b73eb6befa973f43033a4e2d5143f9fc5a59df8197 -->

```csharp
public InnoEngine.Rendering.RenderTextureArtifactReference.RenderTextureArtifactReference(System.Guid assetId, long contentRevision, InnoEngine.Rendering.RenderTextureArtifactSlot slot)
```

Creates a reference to one texture slot owned by an imported asset generation.

**Parameter `assetId`:** Persistent identity of the asset that owns the named source artifact.

**Parameter `contentRevision`:** Current committed content revision of the owning asset.

**Parameter `slot`:** Stable texture slot declaration.

**Throws `System.ArgumentException`:** Thrown when `assetId` is empty or `contentRevision` is negative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L28).

## `Equals`

<a id="api-518023b25678d2a5"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureArtifactReference.Equals(InnoEngine.Rendering.RenderTextureArtifactReference) a7eb9b6fb8de08d49a0e2b56a1c740bfe05a3e48acc2ed8a0dd6af3764bf54fd -->

```csharp
public bool InnoEngine.Rendering.RenderTextureArtifactReference.Equals(InnoEngine.Rendering.RenderTextureArtifactReference other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L11).

## `Equals`

<a id="api-b41cd7a64187291b"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureArtifactReference.Equals(System.Object) be9cd551a271ab08b92f80de2bd7f04b575a2c9ab06dab76c2de9b695bb6a640 -->

```csharp
public override bool InnoEngine.Rendering.RenderTextureArtifactReference.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L11).

## `GetHashCode`

<a id="api-14f86bcd48883c48"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureArtifactReference.GetHashCode d272830382a8ac0a7c44bef630bcec67445e320277eecc1abb000690050cbc9c -->

```csharp
public override int InnoEngine.Rendering.RenderTextureArtifactReference.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L11).

## `op_Equality`

<a id="api-86ee1fafd4dac557"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureArtifactReference.op_Equality(InnoEngine.Rendering.RenderTextureArtifactReference,InnoEngine.Rendering.RenderTextureArtifactReference) 5349e1bf6ba00f20556e2beab680ce5d876eee0f38415a3787cae3f8f410b4ea -->

```csharp
public static bool InnoEngine.Rendering.RenderTextureArtifactReference.operator ==(InnoEngine.Rendering.RenderTextureArtifactReference left, InnoEngine.Rendering.RenderTextureArtifactReference right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L11).

## `op_Inequality`

<a id="api-a8eb6fc7cc31f1a2"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureArtifactReference.op_Inequality(InnoEngine.Rendering.RenderTextureArtifactReference,InnoEngine.Rendering.RenderTextureArtifactReference) b666e3eb8e32ab0d3f34a8edd8821cbe7948a9a07c7d32d50e2c0900ab466b7e -->

```csharp
public static bool InnoEngine.Rendering.RenderTextureArtifactReference.operator !=(InnoEngine.Rendering.RenderTextureArtifactReference left, InnoEngine.Rendering.RenderTextureArtifactReference right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L11).

## `ToString`

<a id="api-c5178f4d7243f073"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureArtifactReference.ToString 2360a38d96a1bb088512b69a365128d230ed77765c40e26fe65835a289ee9e2d -->

```csharp
public override string InnoEngine.Rendering.RenderTextureArtifactReference.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L11).

## `assetId`

<a id="api-57ecb323e2a40e1e"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureArtifactReference.assetId da4b61b70a2ebac7b79cc3a5eddc89ffabee2a63bffcdbd666ef036d8228fba9 -->

```csharp
public System.Guid InnoEngine.Rendering.RenderTextureArtifactReference.assetId { get; }
```

Gets the persistent identity of the owning asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L46).

## `contentRevision`

<a id="api-1ebd61a4cca45c51"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureArtifactReference.contentRevision 92384172fba722e54ca4aff86278543dc10f244c71c00bbafd9d0cc0441bb16b -->

```csharp
public long InnoEngine.Rendering.RenderTextureArtifactReference.contentRevision { get; }
```

Gets the committed owner content revision used for last-good replacement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L51).

## `slot`

<a id="api-70276df2d305dd09"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureArtifactReference.slot 83750aae09921f03065293f5f0d3b39cfad270bd14287b5fe00d580f133fa096 -->

```csharp
public InnoEngine.Rendering.RenderTextureArtifactSlot InnoEngine.Rendering.RenderTextureArtifactReference.slot { get; }
```

Gets the referenced stable texture slot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactReference.cs#L56).
