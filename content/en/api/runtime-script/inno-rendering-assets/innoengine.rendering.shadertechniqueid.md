---
title: "ShaderTechniqueId"
description: "Reference for ShaderTechniqueId in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.9a33d217ce35b9fe
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderTechniqueId`

This reference describes `ShaderTechniqueId` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.ShaderTechniqueId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e2a1fc72e834ceb5) | Method |
| [`Equals`](#api-a6c848bb00d5be7c) | Method |
| [`Equals`](#api-1510df61dc098958) | Method |
| [`GetHashCode`](#api-547473dfdb5a7922) | Method |
| [`op_Equality`](#api-13e5673c2b14ba68) | Method |
| [`op_Inequality`](#api-677167e44b1def3a) | Method |
| [`ToString`](#api-9e61278ef34b0afd) | Method |
| [`isValid`](#api-9229e3ed16ac7dc8) | Property |
| [`value`](#api-acf791a1743b65fb) | Property |

## Type declaration

<a id="api-9a33d217ce35b9fe"></a>
<!-- api: T:InnoEngine.Rendering.ShaderTechniqueId e7cdd3c2725db431c18c930012f243fdd9cc692b59135a24bb3133c396c0373c -->

```csharp
public struct InnoEngine.Rendering.ShaderTechniqueId : System.IEquatable<InnoEngine.Rendering.ShaderTechniqueId>
```

Identifies one material-selectable technique in a shader.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L17).

## `#ctor`

<a id="api-e2a1fc72e834ceb5"></a>
<!-- api: M:InnoEngine.Rendering.ShaderTechniqueId.#ctor(System.String) 3d3b660c574195bb1b26f6a845b340bd474e3d39e2f5ee6c1b0d6f488a1d2c31 -->

```csharp
public InnoEngine.Rendering.ShaderTechniqueId.ShaderTechniqueId(string value)
```

Creates a shader technique identifier.

**Parameter `value`:** Stable technique value within a shader.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L25).

## `Equals`

<a id="api-a6c848bb00d5be7c"></a>
<!-- api: M:InnoEngine.Rendering.ShaderTechniqueId.Equals(InnoEngine.Rendering.ShaderTechniqueId) a221531f65bb1048e14032817ee082248a0b06124cb16c8f27e26b5d0bba89f2 -->

```csharp
public bool InnoEngine.Rendering.ShaderTechniqueId.Equals(InnoEngine.Rendering.ShaderTechniqueId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L17).

## `Equals`

<a id="api-1510df61dc098958"></a>
<!-- api: M:InnoEngine.Rendering.ShaderTechniqueId.Equals(System.Object) cd8241e4997641d677edc349d0ef3992e2f4009f61bef378aa31e3968312c335 -->

```csharp
public override bool InnoEngine.Rendering.ShaderTechniqueId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L17).

## `GetHashCode`

<a id="api-547473dfdb5a7922"></a>
<!-- api: M:InnoEngine.Rendering.ShaderTechniqueId.GetHashCode 54737c20e8d2e8fc015e45435ac3491da2387c545c977848ca0810ea90776924 -->

```csharp
public override int InnoEngine.Rendering.ShaderTechniqueId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L17).

## `op_Equality`

<a id="api-13e5673c2b14ba68"></a>
<!-- api: M:InnoEngine.Rendering.ShaderTechniqueId.op_Equality(InnoEngine.Rendering.ShaderTechniqueId,InnoEngine.Rendering.ShaderTechniqueId) c6c7cb204e7a3142543584a876ac3d3cece488f44ce0713fe7a318c4d8aadcec -->

```csharp
public static bool InnoEngine.Rendering.ShaderTechniqueId.operator ==(InnoEngine.Rendering.ShaderTechniqueId left, InnoEngine.Rendering.ShaderTechniqueId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L17).

## `op_Inequality`

<a id="api-677167e44b1def3a"></a>
<!-- api: M:InnoEngine.Rendering.ShaderTechniqueId.op_Inequality(InnoEngine.Rendering.ShaderTechniqueId,InnoEngine.Rendering.ShaderTechniqueId) cbe06c5924dbbac47ac4d27eaaf5f7206b25e23c7c2dd7580381110515fad68a -->

```csharp
public static bool InnoEngine.Rendering.ShaderTechniqueId.operator !=(InnoEngine.Rendering.ShaderTechniqueId left, InnoEngine.Rendering.ShaderTechniqueId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L17).

## `ToString`

<a id="api-9e61278ef34b0afd"></a>
<!-- api: M:InnoEngine.Rendering.ShaderTechniqueId.ToString 8a167d014973c893b3fabcc9a4e238af63445651f746b150f99f5073e3d502bc -->

```csharp
public override string InnoEngine.Rendering.ShaderTechniqueId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L47).

## `isValid`

<a id="api-9229e3ed16ac7dc8"></a>
<!-- api: P:InnoEngine.Rendering.ShaderTechniqueId.isValid 1904d3c339f37330e3f517c240c432b88e50336ee9445d33d11c6b35968a851d -->

```csharp
public bool InnoEngine.Rendering.ShaderTechniqueId.isValid { get; }
```

Gets whether the identifier has a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L39).

## `value`

<a id="api-acf791a1743b65fb"></a>
<!-- api: P:InnoEngine.Rendering.ShaderTechniqueId.value 3aea7a75ca7a3c2d6265812abb19a03a6336a5f70f3e00050e1556b0883a530c -->

```csharp
public string InnoEngine.Rendering.ShaderTechniqueId.value { get; set; }
```

Gets or sets the stable technique value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L34).
