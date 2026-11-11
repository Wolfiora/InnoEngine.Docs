---
title: "RenderDevice.DeviceHandleIdentity"
description: "Reference for RenderDevice.DeviceHandleIdentity in Inno.Rendering."
uid: api.inno.rendering.0a44a2b8e14174d0
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderDevice.DeviceHandleIdentity`

This reference describes `RenderDevice.DeviceHandleIdentity` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderDevice.DeviceHandleIdentity>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d887c7562a592805) | Method |
| [`Deconstruct`](#api-8164b6d20f485785) | Method |
| [`Equals`](#api-49ecf0a7b8515d42) | Method |
| [`Equals`](#api-afd7da4e5b637c5f) | Method |
| [`GetHashCode`](#api-1e7004dd3d4f9c1f) | Method |
| [`op_Equality`](#api-a5c18736234c345d) | Method |
| [`op_Inequality`](#api-03d4ad2ca0632f93) | Method |
| [`ToString`](#api-af3ec10cc0e15b99) | Method |
| [`generation`](#api-cdc13ab22eea0aee) | Property |
| [`value`](#api-75e0ea60b3ad8f78) | Property |

## Type declaration

<a id="api-0a44a2b8e14174d0"></a>
<!-- api: T:Inno.Rendering.RenderDevice.DeviceHandleIdentity 22608d065aaec601174877d4f2350ed3b07fbb5b2af985e35c793d51463f5743 -->

```csharp
protected readonly record struct Inno.Rendering.RenderDevice.DeviceHandleIdentity : System.IEquatable<Inno.Rendering.RenderDevice.DeviceHandleIdentity>
```

Stores one decoded persistent device identity for use inside a concrete backend.

**Parameter `value`:** The backend-owned non-zero resource identity.

**Parameter `generation`:** The device generation that owns the resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L21).

## `#ctor`

<a id="api-d887c7562a592805"></a>
<!-- api: M:Inno.Rendering.RenderDevice.DeviceHandleIdentity.#ctor(System.UInt64,System.UInt32) 536475d0f4b5721967977b9a4bc7a88ea45fe4845dab894f28f800919cd2b5d4 -->

```csharp
public Inno.Rendering.RenderDevice.DeviceHandleIdentity.DeviceHandleIdentity(ulong value, uint generation)
```

Stores one decoded persistent device identity for use inside a concrete backend.

**Parameter `value`:** The backend-owned non-zero resource identity.

**Parameter `generation`:** The device generation that owns the resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L21).

## `Deconstruct`

<a id="api-8164b6d20f485785"></a>
<!-- api: M:Inno.Rendering.RenderDevice.DeviceHandleIdentity.Deconstruct(System.UInt64@,System.UInt32@) 275bdb69f0147c2d318870ca72923fb3ceebfdb24c179a58416a8dff07bbb78b -->

```csharp
public void Inno.Rendering.RenderDevice.DeviceHandleIdentity.Deconstruct(out ulong value, out uint generation)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L21).

## `Equals`

<a id="api-49ecf0a7b8515d42"></a>
<!-- api: M:Inno.Rendering.RenderDevice.DeviceHandleIdentity.Equals(Inno.Rendering.RenderDevice.DeviceHandleIdentity) 015c1cc5969425c2ca9a35a520d329c089f3ac84e57098be2bddfbad175dde9a -->

```csharp
public bool Inno.Rendering.RenderDevice.DeviceHandleIdentity.Equals(Inno.Rendering.RenderDevice.DeviceHandleIdentity other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L21).

## `Equals`

<a id="api-afd7da4e5b637c5f"></a>
<!-- api: M:Inno.Rendering.RenderDevice.DeviceHandleIdentity.Equals(System.Object) 9d0a84bebf4cab1b3b742bd9d4b5831eb1488d0fbb61696868bbf5f1c315bb4d -->

```csharp
public override bool Inno.Rendering.RenderDevice.DeviceHandleIdentity.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L21).

## `GetHashCode`

<a id="api-1e7004dd3d4f9c1f"></a>
<!-- api: M:Inno.Rendering.RenderDevice.DeviceHandleIdentity.GetHashCode 0b638ef7e68913f933f87daea7b64f83ef0f73ee2de617990b937ee31ca9ed1b -->

```csharp
public override int Inno.Rendering.RenderDevice.DeviceHandleIdentity.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L21).

## `op_Equality`

<a id="api-a5c18736234c345d"></a>
<!-- api: M:Inno.Rendering.RenderDevice.DeviceHandleIdentity.op_Equality(Inno.Rendering.RenderDevice.DeviceHandleIdentity,Inno.Rendering.RenderDevice.DeviceHandleIdentity) 96c25f232a5ff5f66a28b84b2c0a5c360bb66756037d6f49bd342a2f429c7bc7 -->

```csharp
public static bool Inno.Rendering.RenderDevice.DeviceHandleIdentity.operator ==(Inno.Rendering.RenderDevice.DeviceHandleIdentity left, Inno.Rendering.RenderDevice.DeviceHandleIdentity right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L21).

## `op_Inequality`

<a id="api-03d4ad2ca0632f93"></a>
<!-- api: M:Inno.Rendering.RenderDevice.DeviceHandleIdentity.op_Inequality(Inno.Rendering.RenderDevice.DeviceHandleIdentity,Inno.Rendering.RenderDevice.DeviceHandleIdentity) c5faa6a418fa623966387d0dc4acfa5307aea84545de7ee32ca45382741bb150 -->

```csharp
public static bool Inno.Rendering.RenderDevice.DeviceHandleIdentity.operator !=(Inno.Rendering.RenderDevice.DeviceHandleIdentity left, Inno.Rendering.RenderDevice.DeviceHandleIdentity right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L21).

## `ToString`

<a id="api-af3ec10cc0e15b99"></a>
<!-- api: M:Inno.Rendering.RenderDevice.DeviceHandleIdentity.ToString 7781704e1754e6465f7e6e8e28881b85604c0fda7d2758b5c0a17f03de2f3e36 -->

```csharp
public override string Inno.Rendering.RenderDevice.DeviceHandleIdentity.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L21).

## `generation`

<a id="api-cdc13ab22eea0aee"></a>
<!-- api: P:Inno.Rendering.RenderDevice.DeviceHandleIdentity.generation 79a0a2aeab6171008dd44379691f36e134e4a2010aa994c55378928474d063ed -->

```csharp
public uint Inno.Rendering.RenderDevice.DeviceHandleIdentity.generation { get; init; }
```

The device generation that owns the resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L23).

## `value`

<a id="api-75e0ea60b3ad8f78"></a>
<!-- api: P:Inno.Rendering.RenderDevice.DeviceHandleIdentity.value 7c958107293b3a5042f1139fbce8f96f26fcff270d6977dc3fd862a98c52d85a -->

```csharp
public ulong Inno.Rendering.RenderDevice.DeviceHandleIdentity.value { get; init; }
```

The backend-owned non-zero resource identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDevice.cs#L22).
