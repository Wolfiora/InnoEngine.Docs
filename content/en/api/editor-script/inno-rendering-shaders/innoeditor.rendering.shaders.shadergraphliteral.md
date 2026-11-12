---
title: "ShaderGraphLiteral"
description: "Reference for ShaderGraphLiteral in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.00ff18d832661bc4
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphLiteral`

This reference describes `ShaderGraphLiteral` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5480b3c8ff430560) | Method |
| [`Emit`](#api-e90de7ff5785d518) | Method |
| [`GetScalarTypes`](#api-8916224c06c13db0) | Method |
| [`Zero`](#api-fe7e24d3d972105d) | Method |
| [`scalarBits`](#api-e1b786a7d9b4d28d) | Property |
| [`type`](#api-1b613a1790f5725b) | Property |

## Type declaration

<a id="api-00ff18d832661bc4"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphLiteral ff758f536cdcec54fe6d51cf5ecd86be428c44a9be69fefdd1a304c0685921d9 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderGraphLiteral : InnoEngine.Serialization.ISerializable
```

Stores an exact typed value for an unconnected node input, independently of source-language syntax.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphLiteral.cs#L10).

## `#ctor`

<a id="api-5480b3c8ff430560"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphLiteral.#ctor af293f7a616611d81b93085d6303f48a2658ee06afb4b50ddb53ab10113e5622 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphLiteral.ShaderGraphLiteral()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphLiteral.cs#L10).

## `Emit`

<a id="api-e90de7ff5785d518"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphLiteral.Emit(InnoEditor.Rendering.Shaders.ShaderIrBuilder,InnoEditor.Rendering.Shaders.ShaderSourceType) 81bda027befa2fd1a55ac483f1be44adbe70dbadd5cbd0dfd1344b630d776902 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrValue InnoEditor.Rendering.Shaders.ShaderGraphLiteral.Emit(InnoEditor.Rendering.Shaders.ShaderIrBuilder builder, InnoEditor.Rendering.Shaders.ShaderSourceType expectedType)
```

Emits ordinary typed constants and aggregate construction into the common IR.

**Parameter `builder`:** Current region's instruction owner.

**Parameter `expectedType`:** Current port type; stale defaults never undergo implicit conversion.

**Returns:** A value owned by the supplied builder.

**Throws `System.InvalidOperationException`:** The stored type, component count or boolean bits are invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphLiteral.cs#L76).

## `GetScalarTypes`

<a id="api-8916224c06c13db0"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphLiteral.GetScalarTypes de2c5e84fa9af4ad1b14f3ee4ecc0c2fa43d97a5b5bdb4fba0c695db0647ba2c -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> InnoEditor.Rendering.Shaders.ShaderGraphLiteral.GetScalarTypes()
```

Gets the exact scalar type of each stored component for shared Inspector value controls.

**Returns:** Detached scalar identities in the same order as the bit patterns.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphLiteral.cs#L47).

## `Zero`

<a id="api-fe7e24d3d972105d"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphLiteral.Zero(InnoEditor.Rendering.Shaders.ShaderSourceType) 8392bded7d70d045a28f2aa997e6d5e443abfd97751e47833526dce3025270e0 -->

```csharp
public static InnoEditor.Rendering.Shaders.ShaderGraphLiteral InnoEditor.Rendering.Shaders.ShaderGraphLiteral.Zero(InnoEditor.Rendering.Shaders.ShaderSourceType type)
```

Creates an explicit zero value for a supported scalar, vector, matrix, structure or array.

**Parameter `type`:** Complete numeric or boolean value type; resources and effect tokens are not values.

**Returns:** A detached zero literal with an exact type and component count.

**Throws `System.NotSupportedException`:** The type is opaque or exceeds the bounded literal size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphLiteral.cs#L33).

## `scalarBits`

<a id="api-e1b786a7d9b4d28d"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphLiteral.scalarBits f07ea75d2bc374bae1ec1b4b9fa33c14a5ad2e28174c6f439ab1936895646359 -->

```csharp
public uint[] InnoEditor.Rendering.Shaders.ShaderGraphLiteral.scalarBits { get; set; }
```

Gets or sets scalar bit patterns in declaration order; matrices use column-major order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphLiteral.cs#L19).

## `type`

<a id="api-1b613a1790f5725b"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphLiteral.type 1b934f77139974fed636a75e7b7e74fb3a7764e2a7bc9ed02d2dcd771baa1bbd -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphType InnoEditor.Rendering.Shaders.ShaderGraphLiteral.type { get; set; }
```

Gets or sets the complete value type, including named aggregates and fixed arrays.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphLiteral.cs#L15).
