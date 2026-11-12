---
title: "RenderPersistentResourceId"
description: "Reference for RenderPersistentResourceId in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.c37ec3d73ffaa358
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderPersistentResourceId`

This reference describes `RenderPersistentResourceId` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderPersistentResourceId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-439bb0ec6c58626f) | Method |
| [`Equals`](#api-abcd373dc7e50ea8) | Method |
| [`Equals`](#api-76e3112abde301ec) | Method |
| [`GetHashCode`](#api-08954252980f36d0) | Method |
| [`op_Equality`](#api-7657f8b4f3e7756b) | Method |
| [`op_Inequality`](#api-7f9e798f39b79dbe) | Method |
| [`ToString`](#api-1b1b74fe2a059aaf) | Method |
| [`isValid`](#api-c6e510ea9c5522b7) | Property |
| [`value`](#api-ce107aa6159c8db4) | Property |

## Type declaration

<a id="api-c37ec3d73ffaa358"></a>
<!-- api: T:InnoEngine.Rendering.RenderPersistentResourceId 5b6fb979a31a373567c49f5bb77e406c48313150ea2cf314d05b35d9204b48ed -->

```csharp
public readonly struct InnoEngine.Rendering.RenderPersistentResourceId : System.IEquatable<InnoEngine.Rendering.RenderPersistentResourceId>
```

Identifies one provider-owned persistent GPU resource without exposing a native handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L16).

## `#ctor`

<a id="api-439bb0ec6c58626f"></a>
<!-- api: M:InnoEngine.Rendering.RenderPersistentResourceId.#ctor(System.String) 54b01fae93f897cbc111e58a412326be5e14cc445def4fdf7933c57fcb4e5273 -->

```csharp
public InnoEngine.Rendering.RenderPersistentResourceId.RenderPersistentResourceId(string value)
```

Creates a globally stable persistent resource identifier.

**Parameter `value`:** Provider-qualified stable identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L24).

## `Equals`

<a id="api-abcd373dc7e50ea8"></a>
<!-- api: M:InnoEngine.Rendering.RenderPersistentResourceId.Equals(InnoEngine.Rendering.RenderPersistentResourceId) 84c7482d546ab366b5f766ac278f902c49559d64080b43d2c8c33aff4bbd2405 -->

```csharp
public bool InnoEngine.Rendering.RenderPersistentResourceId.Equals(InnoEngine.Rendering.RenderPersistentResourceId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L16).

## `Equals`

<a id="api-76e3112abde301ec"></a>
<!-- api: M:InnoEngine.Rendering.RenderPersistentResourceId.Equals(System.Object) 528549c1bd3f05acd06f0bc1981a2ce5313d7a0438f4bdc47c7100dec1cfaf53 -->

```csharp
public override bool InnoEngine.Rendering.RenderPersistentResourceId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L16).

## `GetHashCode`

<a id="api-08954252980f36d0"></a>
<!-- api: M:InnoEngine.Rendering.RenderPersistentResourceId.GetHashCode 7a2dc9d1913150fee545ad7ce8c82a42574bd36889014d65ebb115ea88088a9b -->

```csharp
public override int InnoEngine.Rendering.RenderPersistentResourceId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L16).

## `op_Equality`

<a id="api-7657f8b4f3e7756b"></a>
<!-- api: M:InnoEngine.Rendering.RenderPersistentResourceId.op_Equality(InnoEngine.Rendering.RenderPersistentResourceId,InnoEngine.Rendering.RenderPersistentResourceId) 95872da60becb344c103474d8105142c51689cea07d1a346ce6ceb14223ce4d1 -->

```csharp
public static bool InnoEngine.Rendering.RenderPersistentResourceId.operator ==(InnoEngine.Rendering.RenderPersistentResourceId left, InnoEngine.Rendering.RenderPersistentResourceId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L16).

## `op_Inequality`

<a id="api-7f9e798f39b79dbe"></a>
<!-- api: M:InnoEngine.Rendering.RenderPersistentResourceId.op_Inequality(InnoEngine.Rendering.RenderPersistentResourceId,InnoEngine.Rendering.RenderPersistentResourceId) 1172892ebfe40d501ad6767bd2fb9e4f625767aa8df80ec4e812e4ea4521e00e -->

```csharp
public static bool InnoEngine.Rendering.RenderPersistentResourceId.operator !=(InnoEngine.Rendering.RenderPersistentResourceId left, InnoEngine.Rendering.RenderPersistentResourceId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L16).

## `ToString`

<a id="api-1b1b74fe2a059aaf"></a>
<!-- api: M:InnoEngine.Rendering.RenderPersistentResourceId.ToString 5854abdf63304e726b0745b4716275985fd03dde769fe906c623bf20dbc0caf9 -->

```csharp
public override string InnoEngine.Rendering.RenderPersistentResourceId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L46).

## `isValid`

<a id="api-c6e510ea9c5522b7"></a>
<!-- api: P:InnoEngine.Rendering.RenderPersistentResourceId.isValid dbdff2b2e29cbba1ce7bc97480a883352608a2fc7ff0f3504896fa24f4810d1e -->

```csharp
public bool InnoEngine.Rendering.RenderPersistentResourceId.isValid { get; }
```

Gets whether the identifier contains a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L38).

## `value`

<a id="api-ce107aa6159c8db4"></a>
<!-- api: P:InnoEngine.Rendering.RenderPersistentResourceId.value feb417bcf892534151a3a31c77559fdd8203d118d3ef153edbb8c1e23ee08fcf -->

```csharp
public string InnoEngine.Rendering.RenderPersistentResourceId.value { get; }
```

Gets the provider-qualified stable identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderPersistentResourceId.cs#L33).
