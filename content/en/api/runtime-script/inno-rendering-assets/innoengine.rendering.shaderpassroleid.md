---
title: "ShaderPassRoleId"
description: "Reference for ShaderPassRoleId in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.550b3964b222f39e
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderPassRoleId`

This reference describes `ShaderPassRoleId` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.ShaderPassRoleId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a5341c90ea88af3f) | Method |
| [`Equals`](#api-266256d48a4a66c7) | Method |
| [`Equals`](#api-63721ee819b79c2f) | Method |
| [`GetHashCode`](#api-0c73a6a456101c36) | Method |
| [`op_Equality`](#api-2cc27a38ef7bfba9) | Method |
| [`op_Inequality`](#api-75d1b5d5d75d0e63) | Method |
| [`ToString`](#api-b502d7eb2c55ac0b) | Method |
| [`isValid`](#api-fced01ab2021b868) | Property |
| [`value`](#api-e98909705833f5a2) | Property |

## Type declaration

<a id="api-550b3964b222f39e"></a>
<!-- api: T:InnoEngine.Rendering.ShaderPassRoleId efa2bf968f89b76634deb8ab92f24834b3e969f1fdcdf392845904be3c175720 -->

```csharp
public struct InnoEngine.Rendering.ShaderPassRoleId : System.IEquatable<InnoEngine.Rendering.ShaderPassRoleId>
```

Identifies an open pass purpose defined by a rendering provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L17).

## `#ctor`

<a id="api-a5341c90ea88af3f"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPassRoleId.#ctor(System.String) aef44e1508f9a36119fb5d8808073669120f3b57c0fe02d92cf000cf810204a4 -->

```csharp
public InnoEngine.Rendering.ShaderPassRoleId.ShaderPassRoleId(string value)
```

Creates a shader pass role identifier.

**Parameter `value`:** Stable role value within a contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L25).

## `Equals`

<a id="api-266256d48a4a66c7"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPassRoleId.Equals(InnoEngine.Rendering.ShaderPassRoleId) db6f2127e8b4c74fd6c3fdb538f637c4e272decf98927ab24838ed86f36bb1c3 -->

```csharp
public bool InnoEngine.Rendering.ShaderPassRoleId.Equals(InnoEngine.Rendering.ShaderPassRoleId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L17).

## `Equals`

<a id="api-63721ee819b79c2f"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPassRoleId.Equals(System.Object) cacb2b0b1b35cad6881e17808b4298ade5e7588ba00389f74e0ba6601b833f6a -->

```csharp
public override bool InnoEngine.Rendering.ShaderPassRoleId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L17).

## `GetHashCode`

<a id="api-0c73a6a456101c36"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPassRoleId.GetHashCode b5d1569c013a36d41cfddd418df68d53ada5f97a48be68e526828cabdcea91e1 -->

```csharp
public override int InnoEngine.Rendering.ShaderPassRoleId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L17).

## `op_Equality`

<a id="api-2cc27a38ef7bfba9"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPassRoleId.op_Equality(InnoEngine.Rendering.ShaderPassRoleId,InnoEngine.Rendering.ShaderPassRoleId) 62fd4a9bb546d540bdeb537ab34353b69a8e4c81a57281658513f4f9e7ed09b7 -->

```csharp
public static bool InnoEngine.Rendering.ShaderPassRoleId.operator ==(InnoEngine.Rendering.ShaderPassRoleId left, InnoEngine.Rendering.ShaderPassRoleId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L17).

## `op_Inequality`

<a id="api-75d1b5d5d75d0e63"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPassRoleId.op_Inequality(InnoEngine.Rendering.ShaderPassRoleId,InnoEngine.Rendering.ShaderPassRoleId) e93aeab3ad6e575728be1ea68928a51d80367f9d996d473312dee70b64b83522 -->

```csharp
public static bool InnoEngine.Rendering.ShaderPassRoleId.operator !=(InnoEngine.Rendering.ShaderPassRoleId left, InnoEngine.Rendering.ShaderPassRoleId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L17).

## `ToString`

<a id="api-b502d7eb2c55ac0b"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPassRoleId.ToString d2f87a116adda0c8e688677048b7b83c9d40626cb95fd0b549c6ca093e433d76 -->

```csharp
public override string InnoEngine.Rendering.ShaderPassRoleId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L47).

## `isValid`

<a id="api-fced01ab2021b868"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPassRoleId.isValid 8f453af6e0a919a8b81c2210f538a7214301624f5def87d4e29bbf507c5abeae -->

```csharp
public bool InnoEngine.Rendering.ShaderPassRoleId.isValid { get; }
```

Gets whether the identifier has a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L39).

## `value`

<a id="api-e98909705833f5a2"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPassRoleId.value 4cc9d4e2babe75ee4d4bdf9a32cec7283af7d27825927213732b6629a41f8b0a -->

```csharp
public string InnoEngine.Rendering.ShaderPassRoleId.value { get; set; }
```

Gets or sets the stable role value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L34).
