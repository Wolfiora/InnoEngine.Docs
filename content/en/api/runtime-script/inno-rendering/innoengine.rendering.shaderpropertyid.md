---
title: "ShaderPropertyId"
description: "Reference for ShaderPropertyId in Inno.Rendering."
uid: api.inno.rendering.runtime-script.497169e1f596235b
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `ShaderPropertyId`

This reference describes `ShaderPropertyId` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.ShaderPropertyId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8c03424d9b78b4ab) | Method |
| [`Equals`](#api-81be9c4783847f8a) | Method |
| [`Equals`](#api-d5e946efba1d1e43) | Method |
| [`GetHashCode`](#api-f5eb75839354b796) | Method |
| [`op_Equality`](#api-a6403575e00f9e61) | Method |
| [`op_Inequality`](#api-be0e26067ec671d7) | Method |
| [`ToString`](#api-d5057621cb53080d) | Method |
| [`isValid`](#api-f1cdf22a1804a624) | Property |
| [`value`](#api-1c2bd0be98e791b3) | Property |

## Type declaration

<a id="api-497169e1f596235b"></a>
<!-- api: T:InnoEngine.Rendering.ShaderPropertyId 2905de31a8f154cddc4465863ff397f67a89ec6eaf1d28b899234c15b1889aec -->

```csharp
public struct InnoEngine.Rendering.ShaderPropertyId : System.IEquatable<InnoEngine.Rendering.ShaderPropertyId>
```

Identifies a material property using a stable serialized string.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L14).

## `#ctor`

<a id="api-8c03424d9b78b4ab"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPropertyId.#ctor(System.String) 21cfdc73b397b3112c39395126f1a76ade1b2c54fe529d325e6715bcc253a181 -->

```csharp
public InnoEngine.Rendering.ShaderPropertyId.ShaderPropertyId(string value)
```

Creates a stable shader property identifier.

**Parameter `value`:** Stable manifest property identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L22).

## `Equals`

<a id="api-81be9c4783847f8a"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPropertyId.Equals(InnoEngine.Rendering.ShaderPropertyId) 85ef92bcb76cd2e3f91450f79ad7d85aa568800b1d318a4a062dcf0f9d25df21 -->

```csharp
public bool InnoEngine.Rendering.ShaderPropertyId.Equals(InnoEngine.Rendering.ShaderPropertyId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L14).

## `Equals`

<a id="api-d5e946efba1d1e43"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPropertyId.Equals(System.Object) 9fc3b77c700a9ec9096e93ff880b96b7a2b6b733ac82d8e280163c12090f93da -->

```csharp
public override bool InnoEngine.Rendering.ShaderPropertyId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L14).

## `GetHashCode`

<a id="api-f5eb75839354b796"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPropertyId.GetHashCode 60d5f398305a463103c17f9e0033532933e9b7d399f3c2d2fdef898fdae53667 -->

```csharp
public override int InnoEngine.Rendering.ShaderPropertyId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L14).

## `op_Equality`

<a id="api-a6403575e00f9e61"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPropertyId.op_Equality(InnoEngine.Rendering.ShaderPropertyId,InnoEngine.Rendering.ShaderPropertyId) b472218bb7c4f37101965e45e07d529a28e2156b947deb992456d6eb26b482c9 -->

```csharp
public static bool InnoEngine.Rendering.ShaderPropertyId.operator ==(InnoEngine.Rendering.ShaderPropertyId left, InnoEngine.Rendering.ShaderPropertyId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L14).

## `op_Inequality`

<a id="api-be0e26067ec671d7"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPropertyId.op_Inequality(InnoEngine.Rendering.ShaderPropertyId,InnoEngine.Rendering.ShaderPropertyId) 1df9bf1ac034766e672bb542d0af05f22d7417cae3bef79f43fa05f4343cefad -->

```csharp
public static bool InnoEngine.Rendering.ShaderPropertyId.operator !=(InnoEngine.Rendering.ShaderPropertyId left, InnoEngine.Rendering.ShaderPropertyId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L14).

## `ToString`

<a id="api-d5057621cb53080d"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPropertyId.ToString 74e4c1e1368c038bf667b2a1a0e3f76b6ad223bad38f140c014a8da1c327ee81 -->

```csharp
public override string InnoEngine.Rendering.ShaderPropertyId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L44).

## `isValid`

<a id="api-f1cdf22a1804a624"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPropertyId.isValid 616fce5bb08d255b7417708b6d0b8d4bac274cc232ef8fba6e93f07e89e7915a -->

```csharp
public bool InnoEngine.Rendering.ShaderPropertyId.isValid { get; }
```

Gets whether this identifier has a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L36).

## `value`

<a id="api-1c2bd0be98e791b3"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPropertyId.value 035f93be74843ec247c41014cb352daf54b063421bb29c6d76862d0a58d0e1c2 -->

```csharp
public string InnoEngine.Rendering.ShaderPropertyId.value { get; set; }
```

Gets or sets the stable manifest property identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L31).
