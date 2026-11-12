---
title: "RenderTextureArtifactSlot"
description: "Reference for RenderTextureArtifactSlot in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.57ecf76088efd691
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `RenderTextureArtifactSlot`

This reference describes `RenderTextureArtifactSlot` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderTextureArtifactSlot>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-fa34fcd1abc0c3b1) | Method |
| [`Equals`](#api-99b459df724ccef0) | Method |
| [`Equals`](#api-edb50bfc11e048d2) | Method |
| [`GetHashCode`](#api-bbf37d70a4d80558) | Method |
| [`op_Equality`](#api-1b8189d20d7cc1ec) | Method |
| [`op_Inequality`](#api-27cfecb23c48abf1) | Method |
| [`ToString`](#api-6b16a0976ae15edc) | Method |
| [`colorSpace`](#api-84747828f55af7f5) | Property |
| [`id`](#api-685570806e95b171) | Property |
| [`sourceOutputName`](#api-4d92ae5bc63de478) | Property |

## Type declaration

<a id="api-57ecf76088efd691"></a>
<!-- api: T:InnoEngine.Rendering.RenderTextureArtifactSlot 121fb7912a73a67ada08d86e8a13f7673ae3ada4f73c2147288557b37a7968e1 -->

```csharp
public readonly struct InnoEngine.Rendering.RenderTextureArtifactSlot : System.IEquatable<InnoEngine.Rendering.RenderTextureArtifactSlot>
```

Declares an immutable source artifact that is compiled into one sampled texture slot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L11).

## `#ctor`

<a id="api-fa34fcd1abc0c3b1"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureArtifactSlot.#ctor(System.String,System.String,InnoEngine.Rendering.TextureColorSpace) 663e18a9581873734647723db05ca92aae611ef29159e3e2184a2bd6408673c8 -->

```csharp
public InnoEngine.Rendering.RenderTextureArtifactSlot.RenderTextureArtifactSlot(string id, string sourceOutputName, InnoEngine.Rendering.TextureColorSpace colorSpace)
```

Creates one stable texture slot declaration.

**Parameter `id`:** Asset-local stable slot identifier.

**Parameter `sourceOutputName`:** Named source artifact written by the owning asset importer.

**Parameter `colorSpace`:** Sampling color-space interpretation used by the target compiler and GPU resource.

**Throws `System.ArgumentException`:** Thrown when `id` or `sourceOutputName` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L28).

## `Equals`

<a id="api-99b459df724ccef0"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureArtifactSlot.Equals(InnoEngine.Rendering.RenderTextureArtifactSlot) faf06b9f2c0c40edeccd2c77c3c2241253974f3eb2f61d295414866f3227ee33 -->

```csharp
public bool InnoEngine.Rendering.RenderTextureArtifactSlot.Equals(InnoEngine.Rendering.RenderTextureArtifactSlot other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L11).

## `Equals`

<a id="api-edb50bfc11e048d2"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureArtifactSlot.Equals(System.Object) d5bc0afc9beec543bc0da312bafef7acc0321cb8d9c7268479b24a4c858227b0 -->

```csharp
public override bool InnoEngine.Rendering.RenderTextureArtifactSlot.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L11).

## `GetHashCode`

<a id="api-bbf37d70a4d80558"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureArtifactSlot.GetHashCode 58968da91292a97aa727abc7bb3469a9ea0905f7e3e4cd4217cd156e0e5a3f0e -->

```csharp
public override int InnoEngine.Rendering.RenderTextureArtifactSlot.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L11).

## `op_Equality`

<a id="api-1b8189d20d7cc1ec"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureArtifactSlot.op_Equality(InnoEngine.Rendering.RenderTextureArtifactSlot,InnoEngine.Rendering.RenderTextureArtifactSlot) 2621c9baad31dd66c9b268712ba8024af723589b5ffa2f9d0bf0db51398d540d -->

```csharp
public static bool InnoEngine.Rendering.RenderTextureArtifactSlot.operator ==(InnoEngine.Rendering.RenderTextureArtifactSlot left, InnoEngine.Rendering.RenderTextureArtifactSlot right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L11).

## `op_Inequality`

<a id="api-27cfecb23c48abf1"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureArtifactSlot.op_Inequality(InnoEngine.Rendering.RenderTextureArtifactSlot,InnoEngine.Rendering.RenderTextureArtifactSlot) 61b011c7ef5d3cc20d1e7101d15cb9632b0f51012ec34a399132b15c73d6d2a3 -->

```csharp
public static bool InnoEngine.Rendering.RenderTextureArtifactSlot.operator !=(InnoEngine.Rendering.RenderTextureArtifactSlot left, InnoEngine.Rendering.RenderTextureArtifactSlot right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L11).

## `ToString`

<a id="api-6b16a0976ae15edc"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureArtifactSlot.ToString 094d4878c50979acc98225b5f3429319f94c0f31b96b70b16100fb89375b2d4b -->

```csharp
public override string InnoEngine.Rendering.RenderTextureArtifactSlot.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L11).

## `colorSpace`

<a id="api-84747828f55af7f5"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureArtifactSlot.colorSpace 5eeb7bd517723859fdc0bf43ed2e82ab5435d4a76edeab7d15efda82d72d4f57 -->

```csharp
public InnoEngine.Rendering.TextureColorSpace InnoEngine.Rendering.RenderTextureArtifactSlot.colorSpace { get; }
```

Gets the sampling color-space interpretation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L53).

## `id`

<a id="api-685570806e95b171"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureArtifactSlot.id 099a46b55b430564ae5beb868d9cf7d458878f4ad57775ae250cb9d13bf47b7f -->

```csharp
public string InnoEngine.Rendering.RenderTextureArtifactSlot.id { get; }
```

Gets the asset-local stable slot identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L43).

## `sourceOutputName`

<a id="api-4d92ae5bc63de478"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureArtifactSlot.sourceOutputName c167afc7ffc6c299641b0403755d7049f897e94b41da42b507f1db3b65a7d8b3 -->

```csharp
public string InnoEngine.Rendering.RenderTextureArtifactSlot.sourceOutputName { get; }
```

Gets the named portable image artifact consumed by target compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/RenderTextureArtifactSlot.cs#L48).
