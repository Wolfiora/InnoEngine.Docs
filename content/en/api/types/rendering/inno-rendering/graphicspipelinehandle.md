---
title: "GraphicsPipelineHandle"
description: "Reference for GraphicsPipelineHandle in Inno.Rendering."
uid: api.inno.rendering.7e90102b8e67963f
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `GraphicsPipelineHandle`

This reference describes `GraphicsPipelineHandle` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.GraphicsPipelineHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-49bf7628c437198c) | Method |
| [`Equals`](#api-c62f660733c26c97) | Method |
| [`GetHashCode`](#api-8b16eb02212d6937) | Method |
| [`op_Equality`](#api-c5d922bca0b1c352) | Method |
| [`op_Inequality`](#api-c7782c5b3188a153) | Method |
| [`ToString`](#api-bd2ee162fe3459ef) | Method |
| [`isValid`](#api-301e565bd7d82bfc) | Property |

## Type declaration

<a id="api-7e90102b8e67963f"></a>
<!-- api: T:Inno.Rendering.GraphicsPipelineHandle d9ef714aa883f9f84b9206833a1a62e1914c3b38f2bc4eecfadf7664740e3123 -->

```csharp
public readonly record struct Inno.Rendering.GraphicsPipelineHandle : System.IEquatable<Inno.Rendering.GraphicsPipelineHandle>
```

Identifies a backend-neutral graphics pipeline object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L36).

## `Equals`

<a id="api-49bf7628c437198c"></a>
<!-- api: M:Inno.Rendering.GraphicsPipelineHandle.Equals(Inno.Rendering.GraphicsPipelineHandle) af7f05ec4856d79d41cb1ece872a12294ce20c8a439fe99a64599f9b0cb79ca1 -->

```csharp
public bool Inno.Rendering.GraphicsPipelineHandle.Equals(Inno.Rendering.GraphicsPipelineHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L36).

## `Equals`

<a id="api-c62f660733c26c97"></a>
<!-- api: M:Inno.Rendering.GraphicsPipelineHandle.Equals(System.Object) 12b734b1e0048b54602b362aa261d6335a8f073d3286ee2aba6f41373f0bf679 -->

```csharp
public override bool Inno.Rendering.GraphicsPipelineHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L36).

## `GetHashCode`

<a id="api-8b16eb02212d6937"></a>
<!-- api: M:Inno.Rendering.GraphicsPipelineHandle.GetHashCode 7709f776c97ab069d2bbc943656c383b9c9beb599ce716bc22226a8ad2c5ec6e -->

```csharp
public override int Inno.Rendering.GraphicsPipelineHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L36).

## `op_Equality`

<a id="api-c5d922bca0b1c352"></a>
<!-- api: M:Inno.Rendering.GraphicsPipelineHandle.op_Equality(Inno.Rendering.GraphicsPipelineHandle,Inno.Rendering.GraphicsPipelineHandle) 16e480138542a4264ffd171cf88338e9fce6937bb0adde2dee006e55f156fb3d -->

```csharp
public static bool Inno.Rendering.GraphicsPipelineHandle.operator ==(Inno.Rendering.GraphicsPipelineHandle left, Inno.Rendering.GraphicsPipelineHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L36).

## `op_Inequality`

<a id="api-c7782c5b3188a153"></a>
<!-- api: M:Inno.Rendering.GraphicsPipelineHandle.op_Inequality(Inno.Rendering.GraphicsPipelineHandle,Inno.Rendering.GraphicsPipelineHandle) 968a325e05392d0fbf3ad2c0052b1b726e46b71c4007b0f7d57dfd650ffd7971 -->

```csharp
public static bool Inno.Rendering.GraphicsPipelineHandle.operator !=(Inno.Rendering.GraphicsPipelineHandle left, Inno.Rendering.GraphicsPipelineHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L36).

## `ToString`

<a id="api-bd2ee162fe3459ef"></a>
<!-- api: M:Inno.Rendering.GraphicsPipelineHandle.ToString a5be9a10b3c23033a7b0eecd19cd0103f22275247b4ea8eb6e6b99341a557763 -->

```csharp
public override string Inno.Rendering.GraphicsPipelineHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L36).

## `isValid`

<a id="api-301e565bd7d82bfc"></a>
<!-- api: P:Inno.Rendering.GraphicsPipelineHandle.isValid 650c708a853eaf708cd7c2a8bd4e5ae7098013aa45eb4d0f68f25eb8a920871b -->

```csharp
public bool Inno.Rendering.GraphicsPipelineHandle.isValid { get; }
```

Gets whether the handle identifies a graphics pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L52).
