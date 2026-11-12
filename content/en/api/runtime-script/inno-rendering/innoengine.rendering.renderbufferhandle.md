---
title: "RenderBufferHandle"
description: "Reference for RenderBufferHandle in Inno.Rendering."
uid: api.inno.rendering.runtime-script.12c336e9ce0174eb
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderBufferHandle`

This reference describes `RenderBufferHandle` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderBufferHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-31fa6d9e9000d279) | Method |
| [`Equals`](#api-46adaa893ef1bea0) | Method |
| [`GetHashCode`](#api-ced0d53cb451cd4d) | Method |
| [`op_Equality`](#api-0332734c14fbdb2b) | Method |
| [`op_Inequality`](#api-f4979975d5100416) | Method |
| [`ToString`](#api-60e4c4f9a62fa065) | Method |
| [`isValid`](#api-59dfcd19f3dca511) | Property |

## Type declaration

<a id="api-12c336e9ce0174eb"></a>
<!-- api: T:InnoEngine.Rendering.RenderBufferHandle 3affc732d494fa09934024d7bd4ec4bbcf9bbb204a90e0ea71ec2ccd0ff98b1d -->

```csharp
public readonly struct InnoEngine.Rendering.RenderBufferHandle : System.IEquatable<InnoEngine.Rendering.RenderBufferHandle>
```

Identifies a frame-scoped render-graph buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L468).

## `Equals`

<a id="api-31fa6d9e9000d279"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferHandle.Equals(InnoEngine.Rendering.RenderBufferHandle) 935ce29f1f37bcbea77194ea828ac4073cb1abcee1c133c5f588ad1d3b0e9631 -->

```csharp
public bool InnoEngine.Rendering.RenderBufferHandle.Equals(InnoEngine.Rendering.RenderBufferHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L468).

## `Equals`

<a id="api-46adaa893ef1bea0"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferHandle.Equals(System.Object) 3c36d100410b6dd17b7048e2f4bcab9d4a6364640a10097c80af54250b056a5c -->

```csharp
public override bool InnoEngine.Rendering.RenderBufferHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L468).

## `GetHashCode`

<a id="api-ced0d53cb451cd4d"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferHandle.GetHashCode a7c404295ee0c2b364df3af80e42bc02a730e9fec8bca5804d8115126c171f96 -->

```csharp
public override int InnoEngine.Rendering.RenderBufferHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L468).

## `op_Equality`

<a id="api-0332734c14fbdb2b"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferHandle.op_Equality(InnoEngine.Rendering.RenderBufferHandle,InnoEngine.Rendering.RenderBufferHandle) e9de156174f34de54597691222b1e375736b548a320daedf0064b38731563cfd -->

```csharp
public static bool InnoEngine.Rendering.RenderBufferHandle.operator ==(InnoEngine.Rendering.RenderBufferHandle left, InnoEngine.Rendering.RenderBufferHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L468).

## `op_Inequality`

<a id="api-f4979975d5100416"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferHandle.op_Inequality(InnoEngine.Rendering.RenderBufferHandle,InnoEngine.Rendering.RenderBufferHandle) caee79a7293ffd63c097a303187f4592b605539f1e58ed395a930eb10bee3fb8 -->

```csharp
public static bool InnoEngine.Rendering.RenderBufferHandle.operator !=(InnoEngine.Rendering.RenderBufferHandle left, InnoEngine.Rendering.RenderBufferHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L468).

## `ToString`

<a id="api-60e4c4f9a62fa065"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferHandle.ToString cf4125cf490ae962006051c17d3bbee8199c8898a3171032ab98051fd1e7ea0b -->

```csharp
public override string InnoEngine.Rendering.RenderBufferHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L468).

## `isValid`

<a id="api-59dfcd19f3dca511"></a>
<!-- api: P:InnoEngine.Rendering.RenderBufferHandle.isValid b50adc92dac63e5648a342f9247aefa5e8c71bfff44c6e62227c0d23b86c92c6 -->

```csharp
public bool InnoEngine.Rendering.RenderBufferHandle.isValid { get; }
```

Gets whether the handle was created by a render graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L487).
