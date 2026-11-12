---
title: "GraphicsPipelineHandle"
description: "Reference for GraphicsPipelineHandle in Inno.Rendering."
uid: api.inno.rendering.runtime-script.4545f3e7cf7061be
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `GraphicsPipelineHandle`

This reference describes `GraphicsPipelineHandle` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.GraphicsPipelineHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-d90ce32a18109868) | Method |
| [`Equals`](#api-217673f48cd3509a) | Method |
| [`GetHashCode`](#api-895a37d954a95199) | Method |
| [`op_Equality`](#api-c7535e65d3ad323e) | Method |
| [`op_Inequality`](#api-1837f28c109ee2a3) | Method |
| [`ToString`](#api-6532dc937abe1c50) | Method |
| [`isValid`](#api-caaba313435da687) | Property |

## Type declaration

<a id="api-4545f3e7cf7061be"></a>
<!-- api: T:InnoEngine.Rendering.GraphicsPipelineHandle 7304ecd6faa57e1f6014612a23ed454b1aa1e89959c7e363af8df1c1e2908e9d -->

```csharp
public readonly struct InnoEngine.Rendering.GraphicsPipelineHandle : System.IEquatable<InnoEngine.Rendering.GraphicsPipelineHandle>
```

Identifies a backend-neutral graphics pipeline object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L36).

## `Equals`

<a id="api-d90ce32a18109868"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsPipelineHandle.Equals(InnoEngine.Rendering.GraphicsPipelineHandle) 3d45f76871f8e9c24665af7b9f2434f6146e06e3f28a09681db4cedb43169f82 -->

```csharp
public bool InnoEngine.Rendering.GraphicsPipelineHandle.Equals(InnoEngine.Rendering.GraphicsPipelineHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L36).

## `Equals`

<a id="api-217673f48cd3509a"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsPipelineHandle.Equals(System.Object) e470c876b66535e928222e74076fe675e095562b26c426116f668d5a1c915c9e -->

```csharp
public override bool InnoEngine.Rendering.GraphicsPipelineHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L36).

## `GetHashCode`

<a id="api-895a37d954a95199"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsPipelineHandle.GetHashCode b955e41aa0b232e1964507ea6b1aa4da5fc112ba1bb26a08a84bb6fdbbf39eab -->

```csharp
public override int InnoEngine.Rendering.GraphicsPipelineHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L36).

## `op_Equality`

<a id="api-c7535e65d3ad323e"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsPipelineHandle.op_Equality(InnoEngine.Rendering.GraphicsPipelineHandle,InnoEngine.Rendering.GraphicsPipelineHandle) 58670d23a47050ddcd60c7f843193eaeac702be2363a486c71f37c059b1e2b84 -->

```csharp
public static bool InnoEngine.Rendering.GraphicsPipelineHandle.operator ==(InnoEngine.Rendering.GraphicsPipelineHandle left, InnoEngine.Rendering.GraphicsPipelineHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L36).

## `op_Inequality`

<a id="api-1837f28c109ee2a3"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsPipelineHandle.op_Inequality(InnoEngine.Rendering.GraphicsPipelineHandle,InnoEngine.Rendering.GraphicsPipelineHandle) af376ef385ec5f4693ace7f4f6b032e25578d3666fa68fed635b7e0a08ff2544 -->

```csharp
public static bool InnoEngine.Rendering.GraphicsPipelineHandle.operator !=(InnoEngine.Rendering.GraphicsPipelineHandle left, InnoEngine.Rendering.GraphicsPipelineHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L36).

## `ToString`

<a id="api-6532dc937abe1c50"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsPipelineHandle.ToString 5cf2367386a55a5f7f933806174fb7d029b488fd87bf463e93ccf3c88ef937f2 -->

```csharp
public override string InnoEngine.Rendering.GraphicsPipelineHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L36).

## `isValid`

<a id="api-caaba313435da687"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsPipelineHandle.isValid 82afa02896e43d1a886e396cd812e4faeb081b05dee685b8003811ba3928c715 -->

```csharp
public bool InnoEngine.Rendering.GraphicsPipelineHandle.isValid { get; }
```

Gets whether the handle identifies a graphics pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L52).
