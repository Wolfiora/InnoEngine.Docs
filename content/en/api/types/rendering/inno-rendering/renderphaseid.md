---
title: "RenderPhaseId"
description: "Reference for RenderPhaseId in Inno.Rendering."
uid: api.inno.rendering.940ed1ec362535e3
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderPhaseId`

This reference describes `RenderPhaseId` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderPhaseId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ed076e2b02f99561) | Method |
| [`Equals`](#api-055f0b7b70c77474) | Method |
| [`Equals`](#api-09309c6614d1451a) | Method |
| [`GetHashCode`](#api-6f91e1e80cde3e1d) | Method |
| [`op_Equality`](#api-e41e92645822a8fa) | Method |
| [`op_Inequality`](#api-2e16eb0f6ce6a136) | Method |
| [`ToString`](#api-f1732638605ac561) | Method |
| [`value`](#api-e57b06c9ed50c60b) | Property |

## Type declaration

<a id="api-940ed1ec362535e3"></a>
<!-- api: T:Inno.Rendering.RenderPhaseId 06f81349a65dc44aaf93d02ccb60e50f0082924d874bfec532a71e8ea13d9351 -->

```csharp
public readonly record struct Inno.Rendering.RenderPhaseId : System.IEquatable<Inno.Rendering.RenderPhaseId>
```

Identifies an open render phase protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L10).

## `#ctor`

<a id="api-ed076e2b02f99561"></a>
<!-- api: M:Inno.Rendering.RenderPhaseId.#ctor(System.String) 03c1158acae5a95eabfc15120a215e9789a5160022db98e306ddb4d882304431 -->

```csharp
public Inno.Rendering.RenderPhaseId.RenderPhaseId(string value)
```

Creates an open render phase identifier.

**Parameter `value`:** Globally stable phase value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L18).

## `Equals`

<a id="api-055f0b7b70c77474"></a>
<!-- api: M:Inno.Rendering.RenderPhaseId.Equals(Inno.Rendering.RenderPhaseId) e5bc761bf4192f82074e49c8bd8886895c554e2519ad6c2f2a8cd1c1a9bce24a -->

```csharp
public bool Inno.Rendering.RenderPhaseId.Equals(Inno.Rendering.RenderPhaseId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L10).

## `Equals`

<a id="api-09309c6614d1451a"></a>
<!-- api: M:Inno.Rendering.RenderPhaseId.Equals(System.Object) ee025187f7278a14b56f9c14d68cec4d45429cfc752f410d489f814029301c33 -->

```csharp
public override bool Inno.Rendering.RenderPhaseId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L10).

## `GetHashCode`

<a id="api-6f91e1e80cde3e1d"></a>
<!-- api: M:Inno.Rendering.RenderPhaseId.GetHashCode ae962da08fdeb3d32499e8ddcda1b3dd0e485fdb79a960324bba061ed8dabd16 -->

```csharp
public override int Inno.Rendering.RenderPhaseId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L10).

## `op_Equality`

<a id="api-e41e92645822a8fa"></a>
<!-- api: M:Inno.Rendering.RenderPhaseId.op_Equality(Inno.Rendering.RenderPhaseId,Inno.Rendering.RenderPhaseId) ce53cc925d74c14c0eecb76495a9a0bbae641f70a47582d4b637a471fa0e8873 -->

```csharp
public static bool Inno.Rendering.RenderPhaseId.operator ==(Inno.Rendering.RenderPhaseId left, Inno.Rendering.RenderPhaseId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L10).

## `op_Inequality`

<a id="api-2e16eb0f6ce6a136"></a>
<!-- api: M:Inno.Rendering.RenderPhaseId.op_Inequality(Inno.Rendering.RenderPhaseId,Inno.Rendering.RenderPhaseId) ce9aecfadc41427b830c73b7be0b4313637635bb6a4f6b376d4ce8db0121b138 -->

```csharp
public static bool Inno.Rendering.RenderPhaseId.operator !=(Inno.Rendering.RenderPhaseId left, Inno.Rendering.RenderPhaseId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L10).

## `ToString`

<a id="api-f1732638605ac561"></a>
<!-- api: M:Inno.Rendering.RenderPhaseId.ToString 14a62fa29c003c7871f104b4d4e12302bcc475dbc85ced64a5cf48dc1a3d37e3 -->

```csharp
public override string Inno.Rendering.RenderPhaseId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L35).

## `value`

<a id="api-e57b06c9ed50c60b"></a>
<!-- api: P:Inno.Rendering.RenderPhaseId.value f70efb42dd58d5bb2cab9c9a522a103583a6c2a80b6e61a23190f4c95091080a -->

```csharp
public string Inno.Rendering.RenderPhaseId.value { get; }
```

Gets the globally stable phase value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L27).
