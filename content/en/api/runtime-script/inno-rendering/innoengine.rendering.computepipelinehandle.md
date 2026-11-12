---
title: "ComputePipelineHandle"
description: "Reference for ComputePipelineHandle in Inno.Rendering."
uid: api.inno.rendering.runtime-script.6732a87fc824d794
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `ComputePipelineHandle`

This reference describes `ComputePipelineHandle` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.ComputePipelineHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-6f327d2647a1c6ea) | Method |
| [`Equals`](#api-dadbc0313a09bedb) | Method |
| [`GetHashCode`](#api-3181fe7bd46924bd) | Method |
| [`op_Equality`](#api-ae6ee5524d8bbd45) | Method |
| [`op_Inequality`](#api-ab8a1e7d5fa0fd24) | Method |
| [`ToString`](#api-42deac2145087a78) | Method |
| [`isValid`](#api-99326020b430badf) | Property |

## Type declaration

<a id="api-6732a87fc824d794"></a>
<!-- api: T:InnoEngine.Rendering.ComputePipelineHandle 7b6352d91a9f8c06e058df5d4370c6dd1549df2f92051dde83669cb1edaa4360 -->

```csharp
public readonly struct InnoEngine.Rendering.ComputePipelineHandle : System.IEquatable<InnoEngine.Rendering.ComputePipelineHandle>
```

Identifies a backend-neutral compute pipeline object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L58).

## `Equals`

<a id="api-6f327d2647a1c6ea"></a>
<!-- api: M:InnoEngine.Rendering.ComputePipelineHandle.Equals(InnoEngine.Rendering.ComputePipelineHandle) d315f6e23b7ecd3bef57e7fca7ed87f5fff69ff0ade8c8fe713ff1af9ff34b19 -->

```csharp
public bool InnoEngine.Rendering.ComputePipelineHandle.Equals(InnoEngine.Rendering.ComputePipelineHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L58).

## `Equals`

<a id="api-dadbc0313a09bedb"></a>
<!-- api: M:InnoEngine.Rendering.ComputePipelineHandle.Equals(System.Object) fd09b0a4f2e26ccd85a966927c2d1f93a1ccf21c7de8ad6950ba75626aee6798 -->

```csharp
public override bool InnoEngine.Rendering.ComputePipelineHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L58).

## `GetHashCode`

<a id="api-3181fe7bd46924bd"></a>
<!-- api: M:InnoEngine.Rendering.ComputePipelineHandle.GetHashCode 31dd22266bb5f8fb2711a8aeadf96204f1e6b6d33a13c334909271650e4d778b -->

```csharp
public override int InnoEngine.Rendering.ComputePipelineHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L58).

## `op_Equality`

<a id="api-ae6ee5524d8bbd45"></a>
<!-- api: M:InnoEngine.Rendering.ComputePipelineHandle.op_Equality(InnoEngine.Rendering.ComputePipelineHandle,InnoEngine.Rendering.ComputePipelineHandle) 78b55d9751b564f6a2e810459ed9ceb82b0aef507599c734d05b6fcdab81161c -->

```csharp
public static bool InnoEngine.Rendering.ComputePipelineHandle.operator ==(InnoEngine.Rendering.ComputePipelineHandle left, InnoEngine.Rendering.ComputePipelineHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L58).

## `op_Inequality`

<a id="api-ab8a1e7d5fa0fd24"></a>
<!-- api: M:InnoEngine.Rendering.ComputePipelineHandle.op_Inequality(InnoEngine.Rendering.ComputePipelineHandle,InnoEngine.Rendering.ComputePipelineHandle) 0e72b5c285153f6d5c537d58ae4875db347ce002edd100020dbc3651a004ed3d -->

```csharp
public static bool InnoEngine.Rendering.ComputePipelineHandle.operator !=(InnoEngine.Rendering.ComputePipelineHandle left, InnoEngine.Rendering.ComputePipelineHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L58).

## `ToString`

<a id="api-42deac2145087a78"></a>
<!-- api: M:InnoEngine.Rendering.ComputePipelineHandle.ToString 48e1ed8f48e7be37abf672bc6a286088f48e4e3a410e3fe1831f65dae84f86a5 -->

```csharp
public override string InnoEngine.Rendering.ComputePipelineHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L58).

## `isValid`

<a id="api-99326020b430badf"></a>
<!-- api: P:InnoEngine.Rendering.ComputePipelineHandle.isValid 8955c22cf141e8269e3cf938c366a0b716450bc31b68a38973a88241f60b530a -->

```csharp
public bool InnoEngine.Rendering.ComputePipelineHandle.isValid { get; }
```

Gets whether the handle identifies a compute pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L74).
