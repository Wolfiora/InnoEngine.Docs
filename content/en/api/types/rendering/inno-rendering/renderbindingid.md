---
title: "RenderBindingId"
description: "Reference for RenderBindingId in Inno.Rendering."
uid: api.inno.rendering.0e56b6fd37a0a6fc
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderBindingId`

This reference describes `RenderBindingId` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderBindingId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4d04987c51d96a21) | Method |
| [`Equals`](#api-c87abeb6a59f1901) | Method |
| [`Equals`](#api-fd61dccb1d600bcf) | Method |
| [`GetHashCode`](#api-1f7568578974b4a0) | Method |
| [`op_Equality`](#api-26cbc3fbc1e7abf7) | Method |
| [`op_Inequality`](#api-709f50081f2be7b5) | Method |
| [`ToString`](#api-a647d99350cfa074) | Method |
| [`isValid`](#api-1f4078de00bba2d1) | Property |
| [`value`](#api-69abc29619de3104) | Property |

## Type declaration

<a id="api-0e56b6fd37a0a6fc"></a>
<!-- api: T:Inno.Rendering.RenderBindingId ec6480f5aa418490c712e9f94e884fbb6189cddc92f9db8bc0799adedb2fc773 -->

```csharp
public readonly record struct Inno.Rendering.RenderBindingId : System.IEquatable<Inno.Rendering.RenderBindingId>
```

Identifies a shader binding by stable manifest name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L8).

## `#ctor`

<a id="api-4d04987c51d96a21"></a>
<!-- api: M:Inno.Rendering.RenderBindingId.#ctor(System.String) 3d509c32fe33fd76e3d57b47025a57da1feb70878df8ceca961175990dca6f76 -->

```csharp
public Inno.Rendering.RenderBindingId.RenderBindingId(string value)
```

Creates a stable shader binding identifier.

**Parameter `value`:** Stable manifest binding name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L16).

## `Equals`

<a id="api-c87abeb6a59f1901"></a>
<!-- api: M:Inno.Rendering.RenderBindingId.Equals(Inno.Rendering.RenderBindingId) 77192963f2ff6e98e5f984635a820ce8391e1cb41ff5d532d71008b3cc49dd59 -->

```csharp
public bool Inno.Rendering.RenderBindingId.Equals(Inno.Rendering.RenderBindingId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L8).

## `Equals`

<a id="api-fd61dccb1d600bcf"></a>
<!-- api: M:Inno.Rendering.RenderBindingId.Equals(System.Object) 7046e761acf44b37f35f0f9b8df69879a5524cd99c7f22df27c54eec72a59bb6 -->

```csharp
public override bool Inno.Rendering.RenderBindingId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L8).

## `GetHashCode`

<a id="api-1f7568578974b4a0"></a>
<!-- api: M:Inno.Rendering.RenderBindingId.GetHashCode 8ddddaaa8f32d322bc2c59986c8b9ed1d7f1b903f7e214543d61990895a2caae -->

```csharp
public override int Inno.Rendering.RenderBindingId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L8).

## `op_Equality`

<a id="api-26cbc3fbc1e7abf7"></a>
<!-- api: M:Inno.Rendering.RenderBindingId.op_Equality(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderBindingId) fcaed65911d2fe512f63df3da454f85924627f9af4cf9c47ecf4d18108215329 -->

```csharp
public static bool Inno.Rendering.RenderBindingId.operator ==(Inno.Rendering.RenderBindingId left, Inno.Rendering.RenderBindingId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L8).

## `op_Inequality`

<a id="api-709f50081f2be7b5"></a>
<!-- api: M:Inno.Rendering.RenderBindingId.op_Inequality(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderBindingId) 4c605f0bc319524d2b18387a6dc0be334e5376e0b0f2a0d49e47d7cce3e37f12 -->

```csharp
public static bool Inno.Rendering.RenderBindingId.operator !=(Inno.Rendering.RenderBindingId left, Inno.Rendering.RenderBindingId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L8).

## `ToString`

<a id="api-a647d99350cfa074"></a>
<!-- api: M:Inno.Rendering.RenderBindingId.ToString 5e10a7691086210fcd2a1ae8d344d78c4d36b1b9291f4d1eda4bced217a6c310 -->

```csharp
public override string Inno.Rendering.RenderBindingId.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L8).

## `isValid`

<a id="api-1f4078de00bba2d1"></a>
<!-- api: P:Inno.Rendering.RenderBindingId.isValid 6ca95b1a4fdeb512a861d006bafd75a06f28b51d7cc62b0f596f30e353bad878 -->

```csharp
public bool Inno.Rendering.RenderBindingId.isValid { get; }
```

Gets whether the identifier contains a stable manifest name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L30).

## `value`

<a id="api-69abc29619de3104"></a>
<!-- api: P:Inno.Rendering.RenderBindingId.value c06c4d4100b68ae7ec8fef2779ce3158828f3b38ba9de7b77ab138369ae7b810 -->

```csharp
public string Inno.Rendering.RenderBindingId.value { get; }
```

Gets the stable manifest binding name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L25).
