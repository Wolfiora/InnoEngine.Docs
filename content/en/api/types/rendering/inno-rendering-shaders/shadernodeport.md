---
title: "ShaderNodePort"
description: "Reference for ShaderNodePort in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.7f970da683c5cadc
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderNodePort`

This reference describes `ShaderNodePort` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Shaders.ShaderNodePort>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-764e05e150182397) | Method |
| [`Deconstruct`](#api-061902830e309261) | Method |
| [`Equals`](#api-6289e83387f5063f) | Method |
| [`Equals`](#api-39364d624b235191) | Method |
| [`GetHashCode`](#api-01665b321d2e21ac) | Method |
| [`op_Equality`](#api-0ffa210250958dd0) | Method |
| [`op_Inequality`](#api-196d13a215cb0695) | Method |
| [`ToString`](#api-9a7757df3e38835e) | Method |
| [`direction`](#api-066c352ef87a3c23) | Property |
| [`id`](#api-62bbd36632e4a619) | Property |
| [`required`](#api-3cf9879e9b86397f) | Property |
| [`type`](#api-683d1dab0a0131d3) | Property |

## Type declaration

<a id="api-7f970da683c5cadc"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderNodePort 46ceb16ff25aaa4fa68d679f2bccc90552c397018633ce33bc8a586da40d533e -->

```csharp
public sealed record Inno.Rendering.Shaders.ShaderNodePort : System.IEquatable<Inno.Rendering.Shaders.ShaderNodePort>
```

Declares a typed shader port independently of editor presentation and backend source syntax.

**Parameter `id`:** Stable node-local port identity.

**Parameter `type`:** Complete value type, including all aggregate fields.

**Parameter `direction`:** Input or output value flow.

**Parameter `required`:** Whether an input must be connected; alternative aggregate/member inputs validate in their compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `#ctor`

<a id="api-764e05e150182397"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodePort.#ctor(System.String,Inno.Rendering.Shaders.ShaderSourceType,Inno.Core.Graphs.GraphPortDirection,System.Boolean) 06461a8b639c03701572f884c714a989ea0fbebc3c03b9e4ec325fa75237aa1c -->

```csharp
public Inno.Rendering.Shaders.ShaderNodePort.ShaderNodePort(string id, Inno.Rendering.Shaders.ShaderSourceType type, Inno.Core.Graphs.GraphPortDirection direction, bool required = true)
```

Declares a typed shader port independently of editor presentation and backend source syntax.

**Parameter `id`:** Stable node-local port identity.

**Parameter `type`:** Complete value type, including all aggregate fields.

**Parameter `direction`:** Input or output value flow.

**Parameter `required`:** Whether an input must be connected; alternative aggregate/member inputs validate in their compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `Deconstruct`

<a id="api-061902830e309261"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodePort.Deconstruct(System.String@,Inno.Rendering.Shaders.ShaderSourceType@,Inno.Core.Graphs.GraphPortDirection@,System.Boolean@) 309c572b59f6449a2135f7353cd7bec4eb9f9f6979c7919f0211b8fe40c88281 -->

```csharp
public void Inno.Rendering.Shaders.ShaderNodePort.Deconstruct(out string id, out Inno.Rendering.Shaders.ShaderSourceType type, out Inno.Core.Graphs.GraphPortDirection direction, out bool required)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `Equals`

<a id="api-6289e83387f5063f"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodePort.Equals(Inno.Rendering.Shaders.ShaderNodePort) 06830f4843ca2121b4e24bf0049ec0306f30c379632c07593ce4fd0f66d8481f -->

```csharp
public bool Inno.Rendering.Shaders.ShaderNodePort.Equals(Inno.Rendering.Shaders.ShaderNodePort? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `Equals`

<a id="api-39364d624b235191"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodePort.Equals(System.Object) 0e1953375dd794ce95943a832e04f9afef98ec0b6627fedfcdf9c76e18272270 -->

```csharp
public override bool Inno.Rendering.Shaders.ShaderNodePort.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `GetHashCode`

<a id="api-01665b321d2e21ac"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodePort.GetHashCode 5b13c47abf792499edc1595b4dda76e8861c60e3a5e4fdd07f4282e0b0de9a0a -->

```csharp
public override int Inno.Rendering.Shaders.ShaderNodePort.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `op_Equality`

<a id="api-0ffa210250958dd0"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodePort.op_Equality(Inno.Rendering.Shaders.ShaderNodePort,Inno.Rendering.Shaders.ShaderNodePort) ed8f6f564d704cb41aa0f05f8244ed92095470e383fad730d2d142cc30c900b6 -->

```csharp
public static bool Inno.Rendering.Shaders.ShaderNodePort.operator ==(Inno.Rendering.Shaders.ShaderNodePort? left, Inno.Rendering.Shaders.ShaderNodePort? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `op_Inequality`

<a id="api-196d13a215cb0695"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodePort.op_Inequality(Inno.Rendering.Shaders.ShaderNodePort,Inno.Rendering.Shaders.ShaderNodePort) 13a22a606f0c33f9dd6c46bf785348ab25a4783b65ceb65db23d64be639f4ed3 -->

```csharp
public static bool Inno.Rendering.Shaders.ShaderNodePort.operator !=(Inno.Rendering.Shaders.ShaderNodePort? left, Inno.Rendering.Shaders.ShaderNodePort? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `ToString`

<a id="api-9a7757df3e38835e"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodePort.ToString dad751c3db7f57a727417be6a177a0609c6047793a4f744e04f866fddd8ab583 -->

```csharp
public override string Inno.Rendering.Shaders.ShaderNodePort.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `direction`

<a id="api-066c352ef87a3c23"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderNodePort.direction 3ad90bf84b7923d73ddeb78afc46036c5d006464d551bb784dcefc3a05c466ca -->

```csharp
public Inno.Core.Graphs.GraphPortDirection Inno.Rendering.Shaders.ShaderNodePort.direction { get; init; }
```

Input or output value flow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L28).

## `id`

<a id="api-62bbd36632e4a619"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderNodePort.id 0b0d08ce97b25540033750fff9e1187b6aaa6c421d0b1ff11df467825d037148 -->

```csharp
public string Inno.Rendering.Shaders.ShaderNodePort.id { get; init; }
```

Stable node-local port identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L26).

## `required`

<a id="api-3cf9879e9b86397f"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderNodePort.required f237913ed90b314c158e5af71329a745893c52a324c5e8bd995123586bf2470e -->

```csharp
public bool Inno.Rendering.Shaders.ShaderNodePort.required { get; init; }
```

Whether an input must be connected; alternative aggregate/member inputs validate in their compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L29).

## `type`

<a id="api-683d1dab0a0131d3"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderNodePort.type 189d675f50e301a14e70e3bd8033e31bc4c70b24c7651946c3a00130666a4d8f -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceType Inno.Rendering.Shaders.ShaderNodePort.type { get; init; }
```

Complete value type, including all aggregate fields.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L27).
