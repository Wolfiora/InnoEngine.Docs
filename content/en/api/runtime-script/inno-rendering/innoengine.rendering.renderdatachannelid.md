---
title: "RenderDataChannelId"
description: "Reference for RenderDataChannelId in Inno.Rendering."
uid: api.inno.rendering.runtime-script.7036727dad70dbed
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderDataChannelId`

This reference describes `RenderDataChannelId` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderDataChannelId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d87c1cf2a54e29bf) | Method |
| [`Equals`](#api-a4fb069b9c283cfc) | Method |
| [`Equals`](#api-246e74fe822d678a) | Method |
| [`GetHashCode`](#api-c0838f19081dda44) | Method |
| [`op_Equality`](#api-fa8d5d58e6c2e575) | Method |
| [`op_Inequality`](#api-4c1d40800dbde969) | Method |
| [`ToString`](#api-dccdd831b10a453e) | Method |
| [`isValid`](#api-5d01e3e2a5ee083e) | Property |
| [`value`](#api-8ac4239054688dad) | Property |

## Type declaration

<a id="api-7036727dad70dbed"></a>
<!-- api: T:InnoEngine.Rendering.RenderDataChannelId 1643ead34a68a1713ac961d0dc8c59d2beb1d87976ed44c2189b2aa730d605c0 -->

```csharp
public readonly struct InnoEngine.Rendering.RenderDataChannelId : System.IEquatable<InnoEngine.Rendering.RenderDataChannelId>
```

Identifies one pipeline-owned frame-data channel without constraining its payload model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L44).

## `#ctor`

<a id="api-d87c1cf2a54e29bf"></a>
<!-- api: M:InnoEngine.Rendering.RenderDataChannelId.#ctor(System.String) e490b9f88b8bf5f4240341e3e54008934e3c3081b22507ca5cdfed9d4b9fc54f -->

```csharp
public InnoEngine.Rendering.RenderDataChannelId.RenderDataChannelId(string value)
```

Creates an open frame-data channel identifier.

**Parameter `value`:** Globally stable channel protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L52).

## `Equals`

<a id="api-a4fb069b9c283cfc"></a>
<!-- api: M:InnoEngine.Rendering.RenderDataChannelId.Equals(InnoEngine.Rendering.RenderDataChannelId) dbcc48e481071edb53841c296e5f2aa4aa0dbd32f484c4720831d87a068ad457 -->

```csharp
public bool InnoEngine.Rendering.RenderDataChannelId.Equals(InnoEngine.Rendering.RenderDataChannelId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L44).

## `Equals`

<a id="api-246e74fe822d678a"></a>
<!-- api: M:InnoEngine.Rendering.RenderDataChannelId.Equals(System.Object) a48e6d757e9c39f00e382968b3e7e63840c40a9bd2d671985ab35314ea6e068a -->

```csharp
public override bool InnoEngine.Rendering.RenderDataChannelId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L44).

## `GetHashCode`

<a id="api-c0838f19081dda44"></a>
<!-- api: M:InnoEngine.Rendering.RenderDataChannelId.GetHashCode ff6ec890e40d3c6a31ac3b17372c65f488a55bf99ddf8455e9b5ee39febd4407 -->

```csharp
public override int InnoEngine.Rendering.RenderDataChannelId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L44).

## `op_Equality`

<a id="api-fa8d5d58e6c2e575"></a>
<!-- api: M:InnoEngine.Rendering.RenderDataChannelId.op_Equality(InnoEngine.Rendering.RenderDataChannelId,InnoEngine.Rendering.RenderDataChannelId) 255d5e40ebfdd7a8c7c88b5f518ea5906c296ee7a3363a360ce6b8a4e33b8ee6 -->

```csharp
public static bool InnoEngine.Rendering.RenderDataChannelId.operator ==(InnoEngine.Rendering.RenderDataChannelId left, InnoEngine.Rendering.RenderDataChannelId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L44).

## `op_Inequality`

<a id="api-4c1d40800dbde969"></a>
<!-- api: M:InnoEngine.Rendering.RenderDataChannelId.op_Inequality(InnoEngine.Rendering.RenderDataChannelId,InnoEngine.Rendering.RenderDataChannelId) 0e9b8eddd2a9667b88432ed9fe0a28dbbb9c879b7a831c56f1974e1503ba543e -->

```csharp
public static bool InnoEngine.Rendering.RenderDataChannelId.operator !=(InnoEngine.Rendering.RenderDataChannelId left, InnoEngine.Rendering.RenderDataChannelId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L44).

## `ToString`

<a id="api-dccdd831b10a453e"></a>
<!-- api: M:InnoEngine.Rendering.RenderDataChannelId.ToString 4eb9056eddc2a3a1fe7c9ac355bb2351a925cffd2ac3523f44c2a3c844f132ae -->

```csharp
public override string InnoEngine.Rendering.RenderDataChannelId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L74).

## `isValid`

<a id="api-5d01e3e2a5ee083e"></a>
<!-- api: P:InnoEngine.Rendering.RenderDataChannelId.isValid 88bffc2c822b0f5acf95a39999857ee5fce95bf5e648d2490717ad821684c949 -->

```csharp
public bool InnoEngine.Rendering.RenderDataChannelId.isValid { get; }
```

Gets whether the identifier contains a protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L66).

## `value`

<a id="api-8ac4239054688dad"></a>
<!-- api: P:InnoEngine.Rendering.RenderDataChannelId.value f3afef1b1f16cffcc371ba2f2cbe1ef196b08ed73f8e0aeb47b2acbc7cf41754 -->

```csharp
public string InnoEngine.Rendering.RenderDataChannelId.value { get; }
```

Gets the globally stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L61).
