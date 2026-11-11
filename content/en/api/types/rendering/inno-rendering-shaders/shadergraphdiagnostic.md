---
title: "ShaderGraphDiagnostic"
description: "Reference for ShaderGraphDiagnostic in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.8ab368e5851ba32f
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphDiagnostic`

This reference describes `ShaderGraphDiagnostic` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Shaders.ShaderGraphDiagnostic>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d4f1f223d0bcfa03) | Method |
| [`Deconstruct`](#api-dc0f1c5e135f9857) | Method |
| [`Equals`](#api-a2795128924fe995) | Method |
| [`Equals`](#api-a34580dc9413c05f) | Method |
| [`GetHashCode`](#api-069d92db806b489f) | Method |
| [`op_Equality`](#api-fd46c7cadecd802d) | Method |
| [`op_Inequality`](#api-6ab20b0da452db5e) | Method |
| [`ToString`](#api-bf51c4a125bbd07d) | Method |
| [`code`](#api-a15ba4f096d2045b) | Property |
| [`message`](#api-24373cb2a43d04c2) | Property |
| [`nodeId`](#api-995996b209a81e13) | Property |
| [`portId`](#api-cb1d0e4a1901505a) | Property |
| [`severity`](#api-e1ed83c2442a5008) | Property |

## Type declaration

<a id="api-8ab368e5851ba32f"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphDiagnostic 7837acff347f1d06016a28e8118a944504e538b75296accbbc98783cfd90d493 -->

```csharp
public sealed record Inno.Rendering.Shaders.ShaderGraphDiagnostic : System.IEquatable<Inno.Rendering.Shaders.ShaderGraphDiagnostic>
```

Identifies a graph compilation problem without retaining a node or compiler instance.

**Parameter `code`:** Stable diagnostic identity.

**Parameter `severity`:** Diagnostic severity.

**Parameter `message`:** Human-readable explanation.

**Parameter `nodeId`:** Affected node identity when known.

**Parameter `portId`:** Affected semantic port when known.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L90).

## `#ctor`

<a id="api-d4f1f223d0bcfa03"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphDiagnostic.#ctor(System.String,Inno.Core.Diagnostics.DiagnosticSeverity,System.String,System.Nullable{Inno.Core.Graphs.GraphNodeId},System.String) f130ddb6824c98543e3149c1bf4445e4a5959665ad62e1c12aaaa8835c9eb168 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphDiagnostic.ShaderGraphDiagnostic(string code, Inno.Core.Diagnostics.DiagnosticSeverity severity, string message, Inno.Core.Graphs.GraphNodeId? nodeId = null, string? portId = null)
```

Identifies a graph compilation problem without retaining a node or compiler instance.

**Parameter `code`:** Stable diagnostic identity.

**Parameter `severity`:** Diagnostic severity.

**Parameter `message`:** Human-readable explanation.

**Parameter `nodeId`:** Affected node identity when known.

**Parameter `portId`:** Affected semantic port when known.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L90).

## `Deconstruct`

<a id="api-dc0f1c5e135f9857"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphDiagnostic.Deconstruct(System.String@,Inno.Core.Diagnostics.DiagnosticSeverity@,System.String@,System.Nullable{Inno.Core.Graphs.GraphNodeId}@,System.String@) 936aa4e6f03a6096928dd0c39cd714d880b28d103de24598a02e3dd9c79bc4d6 -->

```csharp
public void Inno.Rendering.Shaders.ShaderGraphDiagnostic.Deconstruct(out string code, out Inno.Core.Diagnostics.DiagnosticSeverity severity, out string message, out Inno.Core.Graphs.GraphNodeId? nodeId, out string? portId)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L90).

## `Equals`

<a id="api-a2795128924fe995"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphDiagnostic.Equals(Inno.Rendering.Shaders.ShaderGraphDiagnostic) d699f43d3c46a0f9013bb0abfb40dbdf090f29eb6c24898dd02d89a06aeb635a -->

```csharp
public bool Inno.Rendering.Shaders.ShaderGraphDiagnostic.Equals(Inno.Rendering.Shaders.ShaderGraphDiagnostic? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L90).

## `Equals`

<a id="api-a34580dc9413c05f"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphDiagnostic.Equals(System.Object) 4e99b77cc2472809e3cc8ea9b3e051cb32890d59ff06062be715f58e3b66ed8f -->

```csharp
public override bool Inno.Rendering.Shaders.ShaderGraphDiagnostic.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L90).

## `GetHashCode`

<a id="api-069d92db806b489f"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphDiagnostic.GetHashCode efefb79a27589330911363ba59d2860256bc7cd50d2dee94233b756a81872c23 -->

```csharp
public override int Inno.Rendering.Shaders.ShaderGraphDiagnostic.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L90).

## `op_Equality`

<a id="api-fd46c7cadecd802d"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphDiagnostic.op_Equality(Inno.Rendering.Shaders.ShaderGraphDiagnostic,Inno.Rendering.Shaders.ShaderGraphDiagnostic) 508a0ca9cf14d1278cfd99a02dcf8a11bb94eb9332bb512b0c10a799ad900a31 -->

```csharp
public static bool Inno.Rendering.Shaders.ShaderGraphDiagnostic.operator ==(Inno.Rendering.Shaders.ShaderGraphDiagnostic? left, Inno.Rendering.Shaders.ShaderGraphDiagnostic? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L90).

## `op_Inequality`

<a id="api-6ab20b0da452db5e"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphDiagnostic.op_Inequality(Inno.Rendering.Shaders.ShaderGraphDiagnostic,Inno.Rendering.Shaders.ShaderGraphDiagnostic) 53efef2f792fd1d7e558579e5fc4f192a6299d18ad2110aaef15a4d4f7ff9d4f -->

```csharp
public static bool Inno.Rendering.Shaders.ShaderGraphDiagnostic.operator !=(Inno.Rendering.Shaders.ShaderGraphDiagnostic? left, Inno.Rendering.Shaders.ShaderGraphDiagnostic? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L90).

## `ToString`

<a id="api-bf51c4a125bbd07d"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphDiagnostic.ToString 65fbd9ee04e78eeee85905755fb21ca9dd2d1f7ed8511b31d1109ab00745d1db -->

```csharp
public override string Inno.Rendering.Shaders.ShaderGraphDiagnostic.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L90).

## `code`

<a id="api-a15ba4f096d2045b"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphDiagnostic.code dbc75aba75aef2be1ffe9266efbc96610a1a67134bb1f795a6a6b1202a758e79 -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphDiagnostic.code { get; init; }
```

Stable diagnostic identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L91).

## `message`

<a id="api-24373cb2a43d04c2"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphDiagnostic.message bcccda7ffdf00b5e4bc6fccec6d82efc54b2d987c4e324fdc6cd8f0671d581df -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphDiagnostic.message { get; init; }
```

Human-readable explanation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L93).

## `nodeId`

<a id="api-995996b209a81e13"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphDiagnostic.nodeId 4470250267995a9410c455e7113407b220a013fe6fb29de6c6e5dda86720e38e -->

```csharp
public Inno.Core.Graphs.GraphNodeId? Inno.Rendering.Shaders.ShaderGraphDiagnostic.nodeId { get; init; }
```

Affected node identity when known.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L94).

## `portId`

<a id="api-cb1d0e4a1901505a"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphDiagnostic.portId 10194821cc32ec7e3fe39a81d30b540712dc29f31e7075ed4988660b2c10b76e -->

```csharp
public string? Inno.Rendering.Shaders.ShaderGraphDiagnostic.portId { get; init; }
```

Affected semantic port when known.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L95).

## `severity`

<a id="api-e1ed83c2442a5008"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphDiagnostic.severity f3a22db2d0ec5b72c7e9f8ae72b026d68ee8c09d3e1254d619d6b7fdabfb8e47 -->

```csharp
public Inno.Core.Diagnostics.DiagnosticSeverity Inno.Rendering.Shaders.ShaderGraphDiagnostic.severity { get; init; }
```

Diagnostic severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L92).
