---
title: "RenderTextureReadbackHandle"
description: "Reference for RenderTextureReadbackHandle in Inno.Rendering."
uid: api.inno.rendering.runtime-script.675014ce8ed8a438
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderTextureReadbackHandle`

This reference describes `RenderTextureReadbackHandle` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderTextureReadbackHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-d4e3e07bccb8fae3) | Method |
| [`Equals`](#api-ae11f5675acbf658) | Method |
| [`GetHashCode`](#api-70377bfdfa71aa83) | Method |
| [`op_Equality`](#api-3c0db8157f780500) | Method |
| [`op_Inequality`](#api-2dd3885a58add804) | Method |
| [`ToString`](#api-87770cca24cd480f) | Method |
| [`isValid`](#api-3bc34c15d074e812) | Property |

## Type declaration

<a id="api-675014ce8ed8a438"></a>
<!-- api: T:InnoEngine.Rendering.RenderTextureReadbackHandle 61853d3200ea6b82142e03d36a939a43277bb5e926f742914c8d77b398a60f41 -->

```csharp
public readonly struct InnoEngine.Rendering.RenderTextureReadbackHandle : System.IEquatable<InnoEngine.Rendering.RenderTextureReadbackHandle>
```

Identifies one backend-neutral asynchronous texture readback operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L8).

## `Equals`

<a id="api-d4e3e07bccb8fae3"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureReadbackHandle.Equals(InnoEngine.Rendering.RenderTextureReadbackHandle) 5e81424c6e16cb5587db47f86cb3dacbf478c41a3be2e57d864ccb89d0ead54f -->

```csharp
public bool InnoEngine.Rendering.RenderTextureReadbackHandle.Equals(InnoEngine.Rendering.RenderTextureReadbackHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L8).

## `Equals`

<a id="api-ae11f5675acbf658"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureReadbackHandle.Equals(System.Object) e48949673a07326e1fe51dc8988ee9e9209b7c453a0c406d7c400924416fd654 -->

```csharp
public override bool InnoEngine.Rendering.RenderTextureReadbackHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L8).

## `GetHashCode`

<a id="api-70377bfdfa71aa83"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureReadbackHandle.GetHashCode f82a1f6243107db0188d66dfe9b357c12017e215512bf70c0e229e8d0a28d0ce -->

```csharp
public override int InnoEngine.Rendering.RenderTextureReadbackHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L8).

## `op_Equality`

<a id="api-3c0db8157f780500"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureReadbackHandle.op_Equality(InnoEngine.Rendering.RenderTextureReadbackHandle,InnoEngine.Rendering.RenderTextureReadbackHandle) 429a12973bc513d9f10aa26d8824e4dbb127ffadcf2763541811216773080320 -->

```csharp
public static bool InnoEngine.Rendering.RenderTextureReadbackHandle.operator ==(InnoEngine.Rendering.RenderTextureReadbackHandle left, InnoEngine.Rendering.RenderTextureReadbackHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L8).

## `op_Inequality`

<a id="api-2dd3885a58add804"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureReadbackHandle.op_Inequality(InnoEngine.Rendering.RenderTextureReadbackHandle,InnoEngine.Rendering.RenderTextureReadbackHandle) a6e4eabd4aa14b1680043405b171b686a2830c5774694be46d1512f614ee5eb2 -->

```csharp
public static bool InnoEngine.Rendering.RenderTextureReadbackHandle.operator !=(InnoEngine.Rendering.RenderTextureReadbackHandle left, InnoEngine.Rendering.RenderTextureReadbackHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L8).

## `ToString`

<a id="api-87770cca24cd480f"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureReadbackHandle.ToString 50e1d706d5e9a608cd2da9c945032837a3242a1b59393c31160a1007314515ca -->

```csharp
public override string InnoEngine.Rendering.RenderTextureReadbackHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L8).

## `isValid`

<a id="api-3bc34c15d074e812"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureReadbackHandle.isValid fea2837f948b5e8959609baf53c57b84cced9fe27c21160cf4f5ef48c543b1be -->

```csharp
public bool InnoEngine.Rendering.RenderTextureReadbackHandle.isValid { get; }
```

Gets whether the handle identifies a device readback operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L24).
