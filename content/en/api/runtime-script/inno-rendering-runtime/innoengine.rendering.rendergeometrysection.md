---
title: "RenderGeometrySection"
description: "Reference for RenderGeometrySection in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.bf7d6f0ce443a6d7
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderGeometrySection`

This reference describes `RenderGeometrySection` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderGeometrySection>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ad3b2454d042c095) | Method |
| [`Equals`](#api-aa6ed0b712026db9) | Method |
| [`Equals`](#api-64567c6e127566b5) | Method |
| [`GetHashCode`](#api-dc7724f7640e9b0b) | Method |
| [`op_Equality`](#api-97e3deabfc8ec715) | Method |
| [`op_Inequality`](#api-88e4d8254edf516e) | Method |
| [`ToString`](#api-817844a32427d993) | Method |
| [`firstIndex`](#api-ad44b5147ad63955) | Property |
| [`indexCount`](#api-3701c13d61b52144) | Property |

## Type declaration

<a id="api-bf7d6f0ce443a6d7"></a>
<!-- api: T:InnoEngine.Rendering.RenderGeometrySection 81308edca69e896a35906eff5ec792cfb9b439f77b8c0e914d2668fc3d57cc09 -->

```csharp
public readonly struct InnoEngine.Rendering.RenderGeometrySection : System.IEquatable<InnoEngine.Rendering.RenderGeometrySection>
```

Describes one indexed range in resolved backend-neutral geometry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L16).

## `#ctor`

<a id="api-ad3b2454d042c095"></a>
<!-- api: M:InnoEngine.Rendering.RenderGeometrySection.#ctor(System.Int32,System.Int32) e12a5e1b096e9171816da013bf3494c025517365bc3890945907415c9e15e41b -->

```csharp
public InnoEngine.Rendering.RenderGeometrySection.RenderGeometrySection(int firstIndex, int indexCount)
```

Creates one indexed geometry range.

**Parameter `firstIndex`:** First index in the shared index buffer.

**Parameter `indexCount`:** Positive index count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L27).

## `Equals`

<a id="api-aa6ed0b712026db9"></a>
<!-- api: M:InnoEngine.Rendering.RenderGeometrySection.Equals(InnoEngine.Rendering.RenderGeometrySection) 95f689161c488a7679478d4e57c222f1e0f988428a557d00116b42e9c48d7b58 -->

```csharp
public bool InnoEngine.Rendering.RenderGeometrySection.Equals(InnoEngine.Rendering.RenderGeometrySection other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L16).

## `Equals`

<a id="api-64567c6e127566b5"></a>
<!-- api: M:InnoEngine.Rendering.RenderGeometrySection.Equals(System.Object) ab63a92eac0844416679f4af34499007e926eec7244981aa029cf1f643b1fa55 -->

```csharp
public override bool InnoEngine.Rendering.RenderGeometrySection.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L16).

## `GetHashCode`

<a id="api-dc7724f7640e9b0b"></a>
<!-- api: M:InnoEngine.Rendering.RenderGeometrySection.GetHashCode 35d394ac18f59ec224f71ef9fbdb625ce60c3075f8d158adfc93fb792c005b8f -->

```csharp
public override int InnoEngine.Rendering.RenderGeometrySection.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L16).

## `op_Equality`

<a id="api-97e3deabfc8ec715"></a>
<!-- api: M:InnoEngine.Rendering.RenderGeometrySection.op_Equality(InnoEngine.Rendering.RenderGeometrySection,InnoEngine.Rendering.RenderGeometrySection) 2086565bd9d3312d76988eddea7e0e65fcdadbf29f1e39cc00f887c7234b3770 -->

```csharp
public static bool InnoEngine.Rendering.RenderGeometrySection.operator ==(InnoEngine.Rendering.RenderGeometrySection left, InnoEngine.Rendering.RenderGeometrySection right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L16).

## `op_Inequality`

<a id="api-88e4d8254edf516e"></a>
<!-- api: M:InnoEngine.Rendering.RenderGeometrySection.op_Inequality(InnoEngine.Rendering.RenderGeometrySection,InnoEngine.Rendering.RenderGeometrySection) 312cdf534d8fe999886eba9fb8119b283fb7cecbb4f0036d4d9c175d981490e8 -->

```csharp
public static bool InnoEngine.Rendering.RenderGeometrySection.operator !=(InnoEngine.Rendering.RenderGeometrySection left, InnoEngine.Rendering.RenderGeometrySection right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L16).

## `ToString`

<a id="api-817844a32427d993"></a>
<!-- api: M:InnoEngine.Rendering.RenderGeometrySection.ToString daa6601782850bd89d10c35f1b7d3afa166864ff8c17454a81842165608dcffe -->

```csharp
public override string InnoEngine.Rendering.RenderGeometrySection.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L16).

## `firstIndex`

<a id="api-ad44b5147ad63955"></a>
<!-- api: P:InnoEngine.Rendering.RenderGeometrySection.firstIndex c6b2a85703452fb7d081b68ed7da4716304e0388a0472c043a460e03c53b97f9 -->

```csharp
public int InnoEngine.Rendering.RenderGeometrySection.firstIndex { get; }
```

Gets the first index in the shared index buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L40).

## `indexCount`

<a id="api-3701c13d61b52144"></a>
<!-- api: P:InnoEngine.Rendering.RenderGeometrySection.indexCount d4bf170d1a776f70b2a949d77710130c8de13813741d155e064eb2a655a599fd -->

```csharp
public int InnoEngine.Rendering.RenderGeometrySection.indexCount { get; }
```

Gets the number of indices in this range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L45).
