---
title: "ShaderContractId"
description: "Reference for ShaderContractId in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.2b38472fbfffbbdb
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderContractId`

This reference describes `ShaderContractId` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.ShaderContractId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7695028d2931e762) | Method |
| [`Equals`](#api-0ad3cf3b1efd9473) | Method |
| [`Equals`](#api-9f200933b88e5b41) | Method |
| [`GetHashCode`](#api-3864f7d0e0f5e366) | Method |
| [`op_Equality`](#api-01e033f082e6836f) | Method |
| [`op_Inequality`](#api-8988f5830addd84a) | Method |
| [`ToString`](#api-e6f77ddea11fcf91) | Method |
| [`isValid`](#api-13facedd3ff8103c) | Property |
| [`value`](#api-81dea126bdc3fde5) | Property |

## Type declaration

<a id="api-2b38472fbfffbbdb"></a>
<!-- api: T:InnoEngine.Rendering.ShaderContractId eddf0f3f7e13808e7e1e845ac28685a8d5be1cdd9403dd91a287949497735db5 -->

```csharp
public struct InnoEngine.Rendering.ShaderContractId : System.IEquatable<InnoEngine.Rendering.ShaderContractId>
```

Identifies an open shader and pipeline compatibility contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L17).

## `#ctor`

<a id="api-7695028d2931e762"></a>
<!-- api: M:InnoEngine.Rendering.ShaderContractId.#ctor(System.String) 14b3cb3f03e174752335ecb2109a59bac4811e9f8c30a11763fd17a64413b18b -->

```csharp
public InnoEngine.Rendering.ShaderContractId.ShaderContractId(string value)
```

Creates a shader contract identifier.

**Parameter `value`:** Globally stable contract value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L25).

## `Equals`

<a id="api-0ad3cf3b1efd9473"></a>
<!-- api: M:InnoEngine.Rendering.ShaderContractId.Equals(InnoEngine.Rendering.ShaderContractId) b6b03b79bb13b7de3aa0578529fd5127becfc349b000e4781590e2feaa0f5d7c -->

```csharp
public bool InnoEngine.Rendering.ShaderContractId.Equals(InnoEngine.Rendering.ShaderContractId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L17).

## `Equals`

<a id="api-9f200933b88e5b41"></a>
<!-- api: M:InnoEngine.Rendering.ShaderContractId.Equals(System.Object) 75934d9cfb83ef8c49c8a6beb1f8fe0dfaffecca665f178e422341a685f59a4a -->

```csharp
public override bool InnoEngine.Rendering.ShaderContractId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L17).

## `GetHashCode`

<a id="api-3864f7d0e0f5e366"></a>
<!-- api: M:InnoEngine.Rendering.ShaderContractId.GetHashCode d596b3e24a76f80520df8779766f4ba2951910bd2c92874d3af66f1fd41e0c80 -->

```csharp
public override int InnoEngine.Rendering.ShaderContractId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L17).

## `op_Equality`

<a id="api-01e033f082e6836f"></a>
<!-- api: M:InnoEngine.Rendering.ShaderContractId.op_Equality(InnoEngine.Rendering.ShaderContractId,InnoEngine.Rendering.ShaderContractId) f611a079ead277d6f58dce7a819b6cf48511c275f4a2f9fc1c06355a3a3aba2a -->

```csharp
public static bool InnoEngine.Rendering.ShaderContractId.operator ==(InnoEngine.Rendering.ShaderContractId left, InnoEngine.Rendering.ShaderContractId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L17).

## `op_Inequality`

<a id="api-8988f5830addd84a"></a>
<!-- api: M:InnoEngine.Rendering.ShaderContractId.op_Inequality(InnoEngine.Rendering.ShaderContractId,InnoEngine.Rendering.ShaderContractId) bad255aedcbfc36df57e243885485af71bfb59b0c82a57631dfe52978316c5bf -->

```csharp
public static bool InnoEngine.Rendering.ShaderContractId.operator !=(InnoEngine.Rendering.ShaderContractId left, InnoEngine.Rendering.ShaderContractId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L17).

## `ToString`

<a id="api-e6f77ddea11fcf91"></a>
<!-- api: M:InnoEngine.Rendering.ShaderContractId.ToString 189ff7758a28678a850bdc93ee20e4e4101ed9bc56f9ee4dd1104af4d16b4acd -->

```csharp
public override string InnoEngine.Rendering.ShaderContractId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L47).

## `isValid`

<a id="api-13facedd3ff8103c"></a>
<!-- api: P:InnoEngine.Rendering.ShaderContractId.isValid 634947a94af3a544883ccc450709c9677769f05c2e128a27b89d3618c541420d -->

```csharp
public bool InnoEngine.Rendering.ShaderContractId.isValid { get; }
```

Gets whether the identifier has a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L39).

## `value`

<a id="api-81dea126bdc3fde5"></a>
<!-- api: P:InnoEngine.Rendering.ShaderContractId.value b3a847c7ee827bc3fa289c8f55ef2e07f79c5db4fd2caf3b0f2a931e62c19d61 -->

```csharp
public string InnoEngine.Rendering.ShaderContractId.value { get; set; }
```

Gets or sets the globally stable contract value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L34).
