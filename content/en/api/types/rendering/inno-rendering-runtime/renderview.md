---
title: "RenderView"
description: "Reference for RenderView in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.b63529ca165e3d1b
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderView`

This reference describes `RenderView` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Runtime.RenderView>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-93069f90a3a5442b) | Method |
| [`Equals`](#api-a0e0ee13cd4918aa) | Method |
| [`Equals`](#api-d1d2780580da5857) | Method |
| [`GetHashCode`](#api-19973bf30936f41b) | Method |
| [`op_Equality`](#api-356afd7c867f3f50) | Method |
| [`op_Inequality`](#api-15c6d37c96772f7d) | Method |
| [`ToString`](#api-671b73d368168a14) | Method |
| [`id`](#api-57c95fd439c66545) | Property |
| [`projectionMatrix`](#api-216dcfb2e5193033) | Property |
| [`viewMatrix`](#api-84814aa928a264fe) | Property |
| [`viewport`](#api-650923d3718f02f3) | Property |
| [`visibilityMask`](#api-10683a23a288c896) | Property |

## Type declaration

<a id="api-b63529ca165e3d1b"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderView b7fb19c63e365f0a514f721762c2ed3a67c47304ea5d111f21e81b897e11dec2 -->

```csharp
public readonly record struct Inno.Rendering.Runtime.RenderView : System.IEquatable<Inno.Rendering.Runtime.RenderView>
```

Describes one backend-neutral view produced by a rendering model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L14).

## `#ctor`

<a id="api-93069f90a3a5442b"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderView.#ctor(System.String,Inno.Rendering.RenderViewport,Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Matrix,System.UInt64) 22106a9cfd994a18cbe152ac384e0617917c0c1693e7088c94145d632eba1040 -->

```csharp
public Inno.Rendering.Runtime.RenderView.RenderView(string id, Inno.Rendering.RenderViewport viewport, Inno.Core.Mathematics.Matrix viewMatrix, Inno.Core.Mathematics.Matrix projectionMatrix, ulong visibilityMask = 18446744073709551615)
```

Creates the exact view used to render content into a viewport.

**Parameter `id`:** Stable identity within the current output session.

**Parameter `viewport`:** Destination pixel rectangle.

**Parameter `viewMatrix`:** World-to-view transform.

**Parameter `projectionMatrix`:** View-to-clip transform.

**Parameter `visibilityMask`:** Model-defined visible content bits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L34).

## `Equals`

<a id="api-a0e0ee13cd4918aa"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderView.Equals(Inno.Rendering.Runtime.RenderView) 054772bf545e571023deb43e58a680668dc500958a42307e4f7e2e6a4477a166 -->

```csharp
public bool Inno.Rendering.Runtime.RenderView.Equals(Inno.Rendering.Runtime.RenderView other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L14).

## `Equals`

<a id="api-d1d2780580da5857"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderView.Equals(System.Object) 8e027a855b912a377e10c352a152bd5b1caa43e0578fa201e54f8f5739ea737a -->

```csharp
public override bool Inno.Rendering.Runtime.RenderView.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L14).

## `GetHashCode`

<a id="api-19973bf30936f41b"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderView.GetHashCode 944275da68bb451b35eaa5db34a7a201bf53e94456c77257cfe61fd4d6435d3b -->

```csharp
public override int Inno.Rendering.Runtime.RenderView.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L14).

## `op_Equality`

<a id="api-356afd7c867f3f50"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderView.op_Equality(Inno.Rendering.Runtime.RenderView,Inno.Rendering.Runtime.RenderView) 5dda01c46826d964805b7a16d1b6c5032214d521054b6016849f3bc53b4dbdc3 -->

```csharp
public static bool Inno.Rendering.Runtime.RenderView.operator ==(Inno.Rendering.Runtime.RenderView left, Inno.Rendering.Runtime.RenderView right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L14).

## `op_Inequality`

<a id="api-15c6d37c96772f7d"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderView.op_Inequality(Inno.Rendering.Runtime.RenderView,Inno.Rendering.Runtime.RenderView) c95115ab0dd9f96a9f2fbb584aba2643cae97d3ff6f4dc8bbfe5d482c3649340 -->

```csharp
public static bool Inno.Rendering.Runtime.RenderView.operator !=(Inno.Rendering.Runtime.RenderView left, Inno.Rendering.Runtime.RenderView right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L14).

## `ToString`

<a id="api-671b73d368168a14"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderView.ToString 6087c2615773f6ac8d5494042de4b85880c7ee946aaa9c7c1cc4f54bdaa3b0a0 -->

```csharp
public override string Inno.Rendering.Runtime.RenderView.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L14).

## `id`

<a id="api-57c95fd439c66545"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderView.id 776c59224c887f4c7c1938844b90c290ac170e6723042f716189c30968c54009 -->

```csharp
public string Inno.Rendering.Runtime.RenderView.id { get; }
```

Gets the view identity within its output session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L52).

## `projectionMatrix`

<a id="api-216dcfb2e5193033"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderView.projectionMatrix 284782ddbaa865b94aef2a5a90b72cfe7afd29062f7339af6754372c073e1afa -->

```csharp
public Inno.Core.Mathematics.Matrix Inno.Rendering.Runtime.RenderView.projectionMatrix { get; }
```

Gets the view-to-clip transform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L67).

## `viewMatrix`

<a id="api-84814aa928a264fe"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderView.viewMatrix 6302e5a3235dab069e616458b54555d441011adf66f83f26a4a5ea33727619b6 -->

```csharp
public Inno.Core.Mathematics.Matrix Inno.Rendering.Runtime.RenderView.viewMatrix { get; }
```

Gets the world-to-view transform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L62).

## `viewport`

<a id="api-650923d3718f02f3"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderView.viewport c4ca38d0a47df10e64b61a338439295f2b72bcfdbe94a045eb20729cec20872c -->

```csharp
public Inno.Rendering.RenderViewport Inno.Rendering.Runtime.RenderView.viewport { get; }
```

Gets the destination pixel rectangle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L57).

## `visibilityMask`

<a id="api-10683a23a288c896"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderView.visibilityMask ccef4772d547c5083efb27bbcb90e9afc724947ea5d60d70ead66086b430b732 -->

```csharp
public ulong Inno.Rendering.Runtime.RenderView.visibilityMask { get; }
```

Gets the model-defined visible content bits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L72).
