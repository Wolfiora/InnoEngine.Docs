---
title: "RenderResourceStatistics"
description: "Reference for RenderResourceStatistics in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.ee7bf0989a3e6b7e
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderResourceStatistics`

This reference describes `RenderResourceStatistics` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Runtime.RenderResourceStatistics>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-74e1b9c40dd7f5eb) | Method |
| [`Equals`](#api-17c0b72034296049) | Method |
| [`GetHashCode`](#api-3e355e4f81da39da) | Method |
| [`op_Equality`](#api-2eb401b510b4b5d5) | Method |
| [`op_Inequality`](#api-9cc60bae364614ff) | Method |
| [`ToString`](#api-fae6c93ff2dd0de7) | Method |
| [`activeResources`](#api-7b891f354f748d29) | Property |
| [`peakReadbacks`](#api-91401e61ee6b56b7) | Property |
| [`pendingReadbacks`](#api-876a42238e5596e9) | Property |
| [`rejectedReadbacks`](#api-9c5beebf5b45c8af) | Property |
| [`rejectedResources`](#api-971b49a476388794) | Property |
| [`rejectedTargets`](#api-4d4f430b060e54b1) | Property |
| [`rejectedUploads`](#api-f117124850fbb0c4) | Property |
| [`retiringResources`](#api-8f6eceed85a38e03) | Property |
| [`targets`](#api-0740edadc2482270) | Property |
| [`uploadedFrameBytes`](#api-9307c156078a23b2) | Property |
| [`uploadPages`](#api-688044c2eed3620c) | Property |
| [`uploadPeakBytes`](#api-4f55680c58ff0250) | Property |
| [`uploadResidentBytes`](#api-793ecba2153c24e6) | Property |

## Type declaration

<a id="api-ee7bf0989a3e6b7e"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderResourceStatistics a9e1d787986facc4de7a77a77a81877c77e8d5273358211a2ccd0522fb2cfa96 -->

```csharp
public readonly record struct Inno.Rendering.Runtime.RenderResourceStatistics : System.IEquatable<Inno.Rendering.Runtime.RenderResourceStatistics>
```

Reports control-thread resource occupancy and admission pressure without exposing backend objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L6).

## `Equals`

<a id="api-74e1b9c40dd7f5eb"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceStatistics.Equals(Inno.Rendering.Runtime.RenderResourceStatistics) 1bf05e2b95936612f56fddf61a3ce5d2a1a7277bd7bd1cacd60905bb8d70f8c0 -->

```csharp
public bool Inno.Rendering.Runtime.RenderResourceStatistics.Equals(Inno.Rendering.Runtime.RenderResourceStatistics other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L6).

## `Equals`

<a id="api-17c0b72034296049"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceStatistics.Equals(System.Object) b0fff4ed98f94191c44a2a8a726d824e1539c2ecfb8feeb3d145f14b03b0bd5a -->

```csharp
public override bool Inno.Rendering.Runtime.RenderResourceStatistics.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L6).

## `GetHashCode`

<a id="api-3e355e4f81da39da"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceStatistics.GetHashCode 1ce4223fd7ce2924c6f9cf1d265dddca34ada8fc99b92f9ab62652c12d3601c9 -->

```csharp
public override int Inno.Rendering.Runtime.RenderResourceStatistics.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L6).

## `op_Equality`

<a id="api-2eb401b510b4b5d5"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceStatistics.op_Equality(Inno.Rendering.Runtime.RenderResourceStatistics,Inno.Rendering.Runtime.RenderResourceStatistics) 44142a085f9262636be57475d3a9a426fbe6544410374aa81c5a2bef6f86ca55 -->

```csharp
public static bool Inno.Rendering.Runtime.RenderResourceStatistics.operator ==(Inno.Rendering.Runtime.RenderResourceStatistics left, Inno.Rendering.Runtime.RenderResourceStatistics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L6).

## `op_Inequality`

<a id="api-9cc60bae364614ff"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceStatistics.op_Inequality(Inno.Rendering.Runtime.RenderResourceStatistics,Inno.Rendering.Runtime.RenderResourceStatistics) 82e67aa1d8b4095f188cca01c91f344913804102a921fa5172281927be30719e -->

```csharp
public static bool Inno.Rendering.Runtime.RenderResourceStatistics.operator !=(Inno.Rendering.Runtime.RenderResourceStatistics left, Inno.Rendering.Runtime.RenderResourceStatistics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L6).

## `ToString`

<a id="api-fae6c93ff2dd0de7"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceStatistics.ToString 35cfca7280268360d32c60c86229f23af01f9f2d025ea9e48e5c402e4ce3b750 -->

```csharp
public override string Inno.Rendering.Runtime.RenderResourceStatistics.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L6).

## `activeResources`

<a id="api-7b891f354f748d29"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceStatistics.activeResources c3e95c79f95306abcddf9cbc4f7ff183ecb9460bc48b4178e57c04a9c5a9a999 -->

```csharp
public int Inno.Rendering.Runtime.RenderResourceStatistics.activeResources { get; init; }
```

Gets active persistent buffers, textures, pipelines, material programs and geometry pairs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L11).

## `peakReadbacks`

<a id="api-91401e61ee6b56b7"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceStatistics.peakReadbacks 0c88a1429d9cfdc528f09aaee5042a8beb5e115f460699b2d7cf95091eaf3b96 -->

```csharp
public int Inno.Rendering.Runtime.RenderResourceStatistics.peakReadbacks { get; init; }
```

Gets the largest simultaneous readback occupancy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L27).

## `pendingReadbacks`

<a id="api-876a42238e5596e9"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceStatistics.pendingReadbacks 4e2b0592211e9f83b8e84cc681d0c5c4835f445362a51825ab9ba7d9a1a87ba6 -->

```csharp
public int Inno.Rendering.Runtime.RenderResourceStatistics.pendingReadbacks { get; init; }
```

Gets readbacks that still own native operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L23).

## `rejectedReadbacks`

<a id="api-9c5beebf5b45c8af"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceStatistics.rejectedReadbacks 834579b2dba13cd519a78a361e635f5ba4f27cb40ba9aa351e7cc99ef0aba93d -->

```csharp
public long Inno.Rendering.Runtime.RenderResourceStatistics.rejectedReadbacks { get; init; }
```

Gets readbacks rejected before native allocation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L31).

## `rejectedResources`

<a id="api-971b49a476388794"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceStatistics.rejectedResources e110af666546c81b26409a18eb999a3560507cba5299b936779b72d2366467dd -->

```csharp
public long Inno.Rendering.Runtime.RenderResourceStatistics.rejectedResources { get; init; }
```

Gets cache admissions rejected by per-kind capacity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L19).

## `rejectedTargets`

<a id="api-4d4f430b060e54b1"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceStatistics.rejectedTargets 7ea77e2566839d6d26e6bade9f3fd90f115372a5bf1f30079b1da62e5650b044 -->

```csharp
public long Inno.Rendering.Runtime.RenderResourceStatistics.rejectedTargets { get; init; }
```

Gets offscreen target requests rejected by finite capacity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L59).

## `rejectedUploads`

<a id="api-f117124850fbb0c4"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceStatistics.rejectedUploads 1655f0ba87348292baf5137de66c9604d48c7ebece0a253ce84c948dac4ede06 -->

```csharp
public long Inno.Rendering.Runtime.RenderResourceStatistics.rejectedUploads { get; init; }
```

Gets upload requests rejected by resident or per-frame limits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L51).

## `retiringResources`

<a id="api-8f6eceed85a38e03"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceStatistics.retiringResources 29557f4ffcde3429856b8dd8cb3e5ec7e09435436478531e2787d9e7e0813120 -->

```csharp
public int Inno.Rendering.Runtime.RenderResourceStatistics.retiringResources { get; init; }
```

Gets resource entries whose native retirement is still pending.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L15).

## `targets`

<a id="api-0740edadc2482270"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceStatistics.targets 890cdb1e89c339a8794cdeb903095b453ffb37a7bc9d58d041e734d48916834b -->

```csharp
public int Inno.Rendering.Runtime.RenderResourceStatistics.targets { get; init; }
```

Gets active offscreen targets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L55).

## `uploadedFrameBytes`

<a id="api-9307c156078a23b2"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceStatistics.uploadedFrameBytes 2c22059da3d7891e9be3377c3dd2555cb1a30a34878b4f72294640b6d3b03479 -->

```csharp
public long Inno.Rendering.Runtime.RenderResourceStatistics.uploadedFrameBytes { get; init; }
```

Gets successfully uploaded bytes during the current frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L47).

## `uploadPages`

<a id="api-688044c2eed3620c"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceStatistics.uploadPages 72f0b185464faaf209d3973b85a3e52a28b955740a41378b68fa3804de594e00 -->

```csharp
public int Inno.Rendering.Runtime.RenderResourceStatistics.uploadPages { get; init; }
```

Gets retained upload pages, including pages awaiting retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L35).

## `uploadPeakBytes`

<a id="api-4f55680c58ff0250"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceStatistics.uploadPeakBytes 1a0ede453a21d661910f2e45700237bd0ae96b52cc1aad92fd5a0b0c13765105 -->

```csharp
public long Inno.Rendering.Runtime.RenderResourceStatistics.uploadPeakBytes { get; init; }
```

Gets the high-water mark of resident upload bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L43).

## `uploadResidentBytes`

<a id="api-793ecba2153c24e6"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceStatistics.uploadResidentBytes 17f5ada6ef0330e7e4cc4171cf53591b2ddf1c255ec45a802b03b780109c41ca -->

```csharp
public long Inno.Rendering.Runtime.RenderResourceStatistics.uploadResidentBytes { get; init; }
```

Gets resident upload bytes, including pages awaiting retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceStatistics.cs#L39).
