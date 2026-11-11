---
title: "ShaderGraphLiteral"
description: "Reference for ShaderGraphLiteral in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.41e63c2e17cf5fad
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphLiteral`

This reference describes `ShaderGraphLiteral` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c5f2833626f138b9) | Method |
| [`Emit`](#api-7a4c323f51989203) | Method |
| [`GetScalarTypes`](#api-8918f9ee99691b59) | Method |
| [`Zero`](#api-a0defaf74ee1efc1) | Method |
| [`scalarBits`](#api-85a917b117803461) | Property |
| [`type`](#api-45ae1433903b5e11) | Property |

## Type declaration

<a id="api-41e63c2e17cf5fad"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphLiteral 0067123cc496c0b526a4053aa990004efc0ea49b756ccf5fcfcd54d1ad4c32ef -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphLiteral : Inno.Core.Serialization.ISerializable
```

Stores an exact typed value for an unconnected node input, independently of source-language syntax.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphLiteral.cs#L10).

## `#ctor`

<a id="api-c5f2833626f138b9"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphLiteral.#ctor cc9955ed595405dbe9f32f01eacb29930dc215992281821f48fb1c2754e0bee9 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphLiteral.ShaderGraphLiteral()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphLiteral.cs#L10).

## `Emit`

<a id="api-7a4c323f51989203"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphLiteral.Emit(Inno.Rendering.Shaders.ShaderIrBuilder,Inno.Rendering.Shaders.ShaderSourceType) 4f409e16929f5e7daa3d8f0aaf1a2adf2841cc78a697dcf64982eae4ef1f4bad -->

```csharp
public Inno.Rendering.Shaders.ShaderIrValue Inno.Rendering.Shaders.ShaderGraphLiteral.Emit(Inno.Rendering.Shaders.ShaderIrBuilder builder, Inno.Rendering.Shaders.ShaderSourceType expectedType)
```

Emits ordinary typed constants and aggregate construction into the common IR.

**Parameter `builder`:** Current region's instruction owner.

**Parameter `expectedType`:** Current port type; stale defaults never undergo implicit conversion.

**Returns:** A value owned by the supplied builder.

**Throws `System.InvalidOperationException`:** The stored type, component count or boolean bits are invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphLiteral.cs#L76).

## `GetScalarTypes`

<a id="api-8918f9ee99691b59"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphLiteral.GetScalarTypes 949a655ba6f1f9ee66eee2332e479fb5517af28f6904aae0d0925a99e581d211 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Rendering.Shaders.ShaderGraphLiteral.GetScalarTypes()
```

Gets the exact scalar type of each stored component for shared Inspector value controls.

**Returns:** Detached scalar identities in the same order as the bit patterns.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphLiteral.cs#L47).

## `Zero`

<a id="api-a0defaf74ee1efc1"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphLiteral.Zero(Inno.Rendering.Shaders.ShaderSourceType) 8d24a2f5f03939c7d34b5c1c1b43d797247802e38683e624a43dd31d3cc21415 -->

```csharp
public static Inno.Rendering.Shaders.ShaderGraphLiteral Inno.Rendering.Shaders.ShaderGraphLiteral.Zero(Inno.Rendering.Shaders.ShaderSourceType type)
```

Creates an explicit zero value for a supported scalar, vector, matrix, structure or array.

**Parameter `type`:** Complete numeric or boolean value type; resources and effect tokens are not values.

**Returns:** A detached zero literal with an exact type and component count.

**Throws `System.NotSupportedException`:** The type is opaque or exceeds the bounded literal size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphLiteral.cs#L33).

## `scalarBits`

<a id="api-85a917b117803461"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphLiteral.scalarBits 6bedcdbbf18700bdfeb00aff53c9f1c24aa3a89f499db45f268b83780d0337ab -->

```csharp
public uint[] Inno.Rendering.Shaders.ShaderGraphLiteral.scalarBits { get; set; }
```

Gets or sets scalar bit patterns in declaration order; matrices use column-major order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphLiteral.cs#L19).

## `type`

<a id="api-45ae1433903b5e11"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphLiteral.type 148434a5e4477e4797eb250b65f618c2236938c82cacd4a29a65bd26377631f6 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphType Inno.Rendering.Shaders.ShaderGraphLiteral.type { get; set; }
```

Gets or sets the complete value type, including named aggregates and fixed arrays.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphLiteral.cs#L15).
