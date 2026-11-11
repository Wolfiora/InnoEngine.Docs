---
title: "ComputePipelineHandle"
description: "Reference for ComputePipelineHandle in Inno.Rendering."
uid: api.inno.rendering.6b5add83d54e1877
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `ComputePipelineHandle`

This reference describes `ComputePipelineHandle` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.ComputePipelineHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-ba80df1a680d106f) | Method |
| [`Equals`](#api-e7700aeb7990c171) | Method |
| [`GetHashCode`](#api-ef9d54a8310052f3) | Method |
| [`op_Equality`](#api-d2dfd84fd37b7fb9) | Method |
| [`op_Inequality`](#api-5885db5d6b5126f5) | Method |
| [`ToString`](#api-5e8ec3fefe6786da) | Method |
| [`isValid`](#api-cf7f0ece490eedbb) | Property |

## Type declaration

<a id="api-6b5add83d54e1877"></a>
<!-- api: T:Inno.Rendering.ComputePipelineHandle 3ec47638fa87333e6662e5f08473457ecbbd9dedea03054c7ee8e1d25c7f1008 -->

```csharp
public readonly record struct Inno.Rendering.ComputePipelineHandle : System.IEquatable<Inno.Rendering.ComputePipelineHandle>
```

Identifies a backend-neutral compute pipeline object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L58).

## `Equals`

<a id="api-ba80df1a680d106f"></a>
<!-- api: M:Inno.Rendering.ComputePipelineHandle.Equals(Inno.Rendering.ComputePipelineHandle) 3233285f61d75d90ffaa56adb22cb83267d281e3fdb8ca5d77a8fe5d5ad1e8b0 -->

```csharp
public bool Inno.Rendering.ComputePipelineHandle.Equals(Inno.Rendering.ComputePipelineHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L58).

## `Equals`

<a id="api-e7700aeb7990c171"></a>
<!-- api: M:Inno.Rendering.ComputePipelineHandle.Equals(System.Object) 7c65d222f0a6d55f940cafa2c7626b735e429cab8159152a1a9917ba03fc44e5 -->

```csharp
public override bool Inno.Rendering.ComputePipelineHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L58).

## `GetHashCode`

<a id="api-ef9d54a8310052f3"></a>
<!-- api: M:Inno.Rendering.ComputePipelineHandle.GetHashCode 8d1ea2bee6e002b8badff5e4b2bd48e4850187fd64a71e2d14f11ac679ea683b -->

```csharp
public override int Inno.Rendering.ComputePipelineHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L58).

## `op_Equality`

<a id="api-d2dfd84fd37b7fb9"></a>
<!-- api: M:Inno.Rendering.ComputePipelineHandle.op_Equality(Inno.Rendering.ComputePipelineHandle,Inno.Rendering.ComputePipelineHandle) e378a137fa16b78d7269a6a3b3b5070f27b4d95a45753cf6fb1197386af1b2b9 -->

```csharp
public static bool Inno.Rendering.ComputePipelineHandle.operator ==(Inno.Rendering.ComputePipelineHandle left, Inno.Rendering.ComputePipelineHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L58).

## `op_Inequality`

<a id="api-5885db5d6b5126f5"></a>
<!-- api: M:Inno.Rendering.ComputePipelineHandle.op_Inequality(Inno.Rendering.ComputePipelineHandle,Inno.Rendering.ComputePipelineHandle) b9a5e1b4ba50c1a09debf078319de8d3306447635ab4c04458f35a7f76724190 -->

```csharp
public static bool Inno.Rendering.ComputePipelineHandle.operator !=(Inno.Rendering.ComputePipelineHandle left, Inno.Rendering.ComputePipelineHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L58).

## `ToString`

<a id="api-5e8ec3fefe6786da"></a>
<!-- api: M:Inno.Rendering.ComputePipelineHandle.ToString 555a0fa526150a037d68a1319af94e072e9b3aa1b33a805e1708a6021fdb0a77 -->

```csharp
public override string Inno.Rendering.ComputePipelineHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L58).

## `isValid`

<a id="api-cf7f0ece490eedbb"></a>
<!-- api: P:Inno.Rendering.ComputePipelineHandle.isValid 7b13223a4e5d9ea878aa1d2a2981fc4ee330a7f038165714064a6f166edda478 -->

```csharp
public bool Inno.Rendering.ComputePipelineHandle.isValid { get; }
```

Gets whether the handle identifies a compute pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L74).
