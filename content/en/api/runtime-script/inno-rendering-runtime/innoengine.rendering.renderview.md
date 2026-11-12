---
title: "RenderView"
description: "Reference for RenderView in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.3e2912b3c2c3522d
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderView`

This reference describes `RenderView` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderView>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1cba61069be5a1ef) | Method |
| [`Equals`](#api-c550bbbc1ec2be78) | Method |
| [`Equals`](#api-eb14b9117eb45bb5) | Method |
| [`GetHashCode`](#api-7a33892c1fb0386b) | Method |
| [`op_Equality`](#api-e3bfd4c07906341a) | Method |
| [`op_Inequality`](#api-67292407babb0609) | Method |
| [`ToString`](#api-9799d4c23ff6c263) | Method |
| [`id`](#api-6a4759fec75dc734) | Property |
| [`projectionMatrix`](#api-b5498bee38ac723f) | Property |
| [`viewMatrix`](#api-91b3c41e8cfd4317) | Property |
| [`viewport`](#api-69b64f11d4390808) | Property |
| [`visibilityMask`](#api-de85c81abbd6f34d) | Property |

## Type declaration

<a id="api-3e2912b3c2c3522d"></a>
<!-- api: T:InnoEngine.Rendering.RenderView 691457d7648e6ae0843bc84c64ab39c399af5386e77eee3deebfab167308114d -->

```csharp
public readonly struct InnoEngine.Rendering.RenderView : System.IEquatable<InnoEngine.Rendering.RenderView>
```

Describes one backend-neutral view produced by a rendering model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L14).

## `#ctor`

<a id="api-1cba61069be5a1ef"></a>
<!-- api: M:InnoEngine.Rendering.RenderView.#ctor(System.String,InnoEngine.Rendering.RenderViewport,InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Matrix,System.UInt64) c16c7243099dbcc72f0128c3774c327bdbc486417500536303dd7ea95e9a846e -->

```csharp
public InnoEngine.Rendering.RenderView.RenderView(string id, InnoEngine.Rendering.RenderViewport viewport, InnoEngine.Mathematics.Matrix viewMatrix, InnoEngine.Mathematics.Matrix projectionMatrix, ulong visibilityMask = 18446744073709551615)
```

Creates the exact view used to render content into a viewport.

**Parameter `id`:** Stable identity within the current output session.

**Parameter `viewport`:** Destination pixel rectangle.

**Parameter `viewMatrix`:** World-to-view transform.

**Parameter `projectionMatrix`:** View-to-clip transform.

**Parameter `visibilityMask`:** Model-defined visible content bits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L34).

## `Equals`

<a id="api-c550bbbc1ec2be78"></a>
<!-- api: M:InnoEngine.Rendering.RenderView.Equals(InnoEngine.Rendering.RenderView) 225b3512e92c07139e0ee44354a07362843f5bbde2ad56673f3deff503807d2d -->

```csharp
public bool InnoEngine.Rendering.RenderView.Equals(InnoEngine.Rendering.RenderView other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L14).

## `Equals`

<a id="api-eb14b9117eb45bb5"></a>
<!-- api: M:InnoEngine.Rendering.RenderView.Equals(System.Object) 19f9aeb8528a651298e4735f066ddf2b96732981088c3a57670cb93a89192877 -->

```csharp
public override bool InnoEngine.Rendering.RenderView.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L14).

## `GetHashCode`

<a id="api-7a33892c1fb0386b"></a>
<!-- api: M:InnoEngine.Rendering.RenderView.GetHashCode 9fac54b2dc77bf3ba8f0d3cc54f1e8945db14a4d9c0cd93d2ce8d2ef541f1b09 -->

```csharp
public override int InnoEngine.Rendering.RenderView.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L14).

## `op_Equality`

<a id="api-e3bfd4c07906341a"></a>
<!-- api: M:InnoEngine.Rendering.RenderView.op_Equality(InnoEngine.Rendering.RenderView,InnoEngine.Rendering.RenderView) 78734869068102841af96433856c619a0a3376917f96b9293ac38ca6773c9a68 -->

```csharp
public static bool InnoEngine.Rendering.RenderView.operator ==(InnoEngine.Rendering.RenderView left, InnoEngine.Rendering.RenderView right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L14).

## `op_Inequality`

<a id="api-67292407babb0609"></a>
<!-- api: M:InnoEngine.Rendering.RenderView.op_Inequality(InnoEngine.Rendering.RenderView,InnoEngine.Rendering.RenderView) 91b819235b44beda42b8c56d05dffca8e357557a64f234e3db6c2b717a2f8ef3 -->

```csharp
public static bool InnoEngine.Rendering.RenderView.operator !=(InnoEngine.Rendering.RenderView left, InnoEngine.Rendering.RenderView right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L14).

## `ToString`

<a id="api-9799d4c23ff6c263"></a>
<!-- api: M:InnoEngine.Rendering.RenderView.ToString 172c964362959f44ff675eeb788d628812d6780877eeb15417afb330b94376ae -->

```csharp
public override string InnoEngine.Rendering.RenderView.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L14).

## `id`

<a id="api-6a4759fec75dc734"></a>
<!-- api: P:InnoEngine.Rendering.RenderView.id 4d678063b09dcd42962808564cee53b5a68aea48d67e5159204c0f8d7e5ff720 -->

```csharp
public string InnoEngine.Rendering.RenderView.id { get; }
```

Gets the view identity within its output session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L52).

## `projectionMatrix`

<a id="api-b5498bee38ac723f"></a>
<!-- api: P:InnoEngine.Rendering.RenderView.projectionMatrix 6620b5b291cd807b5eebb9df38cda03719e30d4d6f01cc122fbd125402778f7e -->

```csharp
public InnoEngine.Mathematics.Matrix InnoEngine.Rendering.RenderView.projectionMatrix { get; }
```

Gets the view-to-clip transform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L67).

## `viewMatrix`

<a id="api-91b3c41e8cfd4317"></a>
<!-- api: P:InnoEngine.Rendering.RenderView.viewMatrix 0746d3f5cab98bf0d58209d209aff8baa97fb310ffedde94b5b8bbc75e9d129c -->

```csharp
public InnoEngine.Mathematics.Matrix InnoEngine.Rendering.RenderView.viewMatrix { get; }
```

Gets the world-to-view transform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L62).

## `viewport`

<a id="api-69b64f11d4390808"></a>
<!-- api: P:InnoEngine.Rendering.RenderView.viewport a1a075a8be3223aab712c5a62eef54f21da9bfa1c97aa8a75c348da3b033aede -->

```csharp
public InnoEngine.Rendering.RenderViewport InnoEngine.Rendering.RenderView.viewport { get; }
```

Gets the destination pixel rectangle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L57).

## `visibilityMask`

<a id="api-de85c81abbd6f34d"></a>
<!-- api: P:InnoEngine.Rendering.RenderView.visibilityMask e9adb740b7380d484cf2d00e0d76cd7438a48c8d704a270aa5250e4217d36c26 -->

```csharp
public ulong InnoEngine.Rendering.RenderView.visibilityMask { get; }
```

Gets the model-defined visible content bits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L72).
