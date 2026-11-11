---
title: "RenderPersistentResourceId"
description: "Reference for RenderPersistentResourceId in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.ddae5a9cb65fa10b
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderPersistentResourceId`

This reference describes `RenderPersistentResourceId` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Runtime.RenderPersistentResourceId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f42f0c468828486c) | Method |
| [`Equals`](#api-c14877fcf81304ad) | Method |
| [`Equals`](#api-dd96737948b0bf5a) | Method |
| [`GetHashCode`](#api-e267fb1af40a1316) | Method |
| [`op_Equality`](#api-2a60720d3b2c485c) | Method |
| [`op_Inequality`](#api-9b55eed424c9c5ba) | Method |
| [`ToString`](#api-f8010f2ef111cad2) | Method |
| [`isValid`](#api-30cdd3940621b160) | Property |
| [`value`](#api-3d8e92835234f6dd) | Property |

## Type declaration

<a id="api-ddae5a9cb65fa10b"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderPersistentResourceId 98e2a67f64b8b4834db0e1418395bcc8a27a690fdfddd38131aaa531f29cb84e -->

```csharp
public readonly record struct Inno.Rendering.Runtime.RenderPersistentResourceId : System.IEquatable<Inno.Rendering.Runtime.RenderPersistentResourceId>
```

Identifies one provider-owned persistent GPU resource without exposing a native handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L16).

## `#ctor`

<a id="api-f42f0c468828486c"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPersistentResourceId.#ctor(System.String) 5823736104958384bed7424cfbdcedfec1b8a3d9ca0a2269753b10213d127341 -->

```csharp
public Inno.Rendering.Runtime.RenderPersistentResourceId.RenderPersistentResourceId(string value)
```

Creates a globally stable persistent resource identifier.

**Parameter `value`:** Provider-qualified stable identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L24).

## `Equals`

<a id="api-c14877fcf81304ad"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPersistentResourceId.Equals(Inno.Rendering.Runtime.RenderPersistentResourceId) 16aab8b51081ee46792340e446350c40b9cc53704380fe34a200c22b9086cf33 -->

```csharp
public bool Inno.Rendering.Runtime.RenderPersistentResourceId.Equals(Inno.Rendering.Runtime.RenderPersistentResourceId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L16).

## `Equals`

<a id="api-dd96737948b0bf5a"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPersistentResourceId.Equals(System.Object) 18a3f1edaba584205722e2e7e87ec362b39de4ba31890937a64f5e6a49691717 -->

```csharp
public override bool Inno.Rendering.Runtime.RenderPersistentResourceId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L16).

## `GetHashCode`

<a id="api-e267fb1af40a1316"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPersistentResourceId.GetHashCode 2a020fac2e53e05a1f26d71cd7b18aabd801b4f7317226e8e485c30d8352bfad -->

```csharp
public override int Inno.Rendering.Runtime.RenderPersistentResourceId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L16).

## `op_Equality`

<a id="api-2a60720d3b2c485c"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPersistentResourceId.op_Equality(Inno.Rendering.Runtime.RenderPersistentResourceId,Inno.Rendering.Runtime.RenderPersistentResourceId) b315bc732fa32ff0499030fc68ea138c6260d257a36fcffc2652a024df42c246 -->

```csharp
public static bool Inno.Rendering.Runtime.RenderPersistentResourceId.operator ==(Inno.Rendering.Runtime.RenderPersistentResourceId left, Inno.Rendering.Runtime.RenderPersistentResourceId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L16).

## `op_Inequality`

<a id="api-9b55eed424c9c5ba"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPersistentResourceId.op_Inequality(Inno.Rendering.Runtime.RenderPersistentResourceId,Inno.Rendering.Runtime.RenderPersistentResourceId) c648a345ed6cec8c0825691aaf70f8b44f010c64f43e2e1551e0f2152a3a085a -->

```csharp
public static bool Inno.Rendering.Runtime.RenderPersistentResourceId.operator !=(Inno.Rendering.Runtime.RenderPersistentResourceId left, Inno.Rendering.Runtime.RenderPersistentResourceId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L16).

## `ToString`

<a id="api-f8010f2ef111cad2"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPersistentResourceId.ToString d9d050fd09580e9e7921495bb4a1f15305e89cbf525c1071a2aadfa34cfea66c -->

```csharp
public override string Inno.Rendering.Runtime.RenderPersistentResourceId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L46).

## `isValid`

<a id="api-30cdd3940621b160"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderPersistentResourceId.isValid 351fa87ee8999e8779b570d6e7d743f55f3509331ba69f0414812e603ad64a7f -->

```csharp
public bool Inno.Rendering.Runtime.RenderPersistentResourceId.isValid { get; }
```

Gets whether the identifier contains a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L38).

## `value`

<a id="api-3d8e92835234f6dd"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderPersistentResourceId.value e9c990191267f53733a2a79c2ab84a7ef3f821be5b437a4399b272d3a1fcf43c -->

```csharp
public string Inno.Rendering.Runtime.RenderPersistentResourceId.value { get; }
```

Gets the provider-qualified stable identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L33).
