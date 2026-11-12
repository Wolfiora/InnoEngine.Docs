---
title: "AnimationPlaybackHandle"
description: "Reference for AnimationPlaybackHandle in Inno.Animation."
uid: api.inno.animation.runtime-script.b7b1385db5a000de
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationPlaybackHandle`

This reference describes `AnimationPlaybackHandle` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Animation.AnimationPlaybackHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-4039c84aa37cecd6) | Method |
| [`Equals`](#api-d3cdc2c7cdfec205) | Method |
| [`GetHashCode`](#api-6484c800f79eba7a) | Method |
| [`op_Equality`](#api-f1db902490948e52) | Method |
| [`op_Inequality`](#api-e6bc78575355e697) | Method |
| [`ToString`](#api-535dda4aeacdab58) | Method |
| [`isValid`](#api-223ad31e12ae4b29) | Property |
| [`runtimeGeneration`](#api-5798428aadb4160b) | Property |

## Type declaration

<a id="api-b7b1385db5a000de"></a>
<!-- api: T:InnoEngine.Animation.AnimationPlaybackHandle 133796e80228994e6070994d69fd0bc49188d62db286a49b31a12a87c1254ad8 -->

```csharp
public readonly struct InnoEngine.Animation.AnimationPlaybackHandle : System.IEquatable<InnoEngine.Animation.AnimationPlaybackHandle>
```

Identifies one generation-checked animation playback owned by a runtime service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L296).

## `Equals`

<a id="api-4039c84aa37cecd6"></a>
<!-- api: M:InnoEngine.Animation.AnimationPlaybackHandle.Equals(InnoEngine.Animation.AnimationPlaybackHandle) 4aeddb70b15f4ea8886f1f85318b86d24217069260073c0e6b9f96f8ed324bef -->

```csharp
public bool InnoEngine.Animation.AnimationPlaybackHandle.Equals(InnoEngine.Animation.AnimationPlaybackHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L296).

## `Equals`

<a id="api-d3cdc2c7cdfec205"></a>
<!-- api: M:InnoEngine.Animation.AnimationPlaybackHandle.Equals(System.Object) dbac5f8ba7dfa185a6eccd88a2a3264874139ce52d8fc42ab1247aaf5180c6e3 -->

```csharp
public override bool InnoEngine.Animation.AnimationPlaybackHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L296).

## `GetHashCode`

<a id="api-6484c800f79eba7a"></a>
<!-- api: M:InnoEngine.Animation.AnimationPlaybackHandle.GetHashCode cd68870f266c3d1e22a8acb16519bc096b5b1405b9dfc18372d420e2fbd0fed6 -->

```csharp
public override int InnoEngine.Animation.AnimationPlaybackHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L296).

## `op_Equality`

<a id="api-f1db902490948e52"></a>
<!-- api: M:InnoEngine.Animation.AnimationPlaybackHandle.op_Equality(InnoEngine.Animation.AnimationPlaybackHandle,InnoEngine.Animation.AnimationPlaybackHandle) 75983ba7a05eaa969ef0ee31ef8654ab97caf3df3e758e38ea7cb9aa6ac2b8c2 -->

```csharp
public static bool InnoEngine.Animation.AnimationPlaybackHandle.operator ==(InnoEngine.Animation.AnimationPlaybackHandle left, InnoEngine.Animation.AnimationPlaybackHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L296).

## `op_Inequality`

<a id="api-e6bc78575355e697"></a>
<!-- api: M:InnoEngine.Animation.AnimationPlaybackHandle.op_Inequality(InnoEngine.Animation.AnimationPlaybackHandle,InnoEngine.Animation.AnimationPlaybackHandle) c76eb42962f6cc1dc35a05cc080a060971d02fa78b4a0027fd5a3cc327f5b6c1 -->

```csharp
public static bool InnoEngine.Animation.AnimationPlaybackHandle.operator !=(InnoEngine.Animation.AnimationPlaybackHandle left, InnoEngine.Animation.AnimationPlaybackHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L296).

## `ToString`

<a id="api-535dda4aeacdab58"></a>
<!-- api: M:InnoEngine.Animation.AnimationPlaybackHandle.ToString 608c128b85a23d6c3d8d55c092581edb5d280ea35ce44e1efcfbf2a04bbe12d7 -->

```csharp
public override string InnoEngine.Animation.AnimationPlaybackHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L296).

## `isValid`

<a id="api-223ad31e12ae4b29"></a>
<!-- api: P:InnoEngine.Animation.AnimationPlaybackHandle.isValid 525de6650f12a1dae5cfd62c1b9b1ead60e275143183452226971c6fa03539f7 -->

```csharp
public bool InnoEngine.Animation.AnimationPlaybackHandle.isValid { get; }
```

Gets whether the handle was initialized by an animation service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L309).

## `runtimeGeneration`

<a id="api-5798428aadb4160b"></a>
<!-- api: P:InnoEngine.Animation.AnimationPlaybackHandle.runtimeGeneration cf578cfa2c31f2fcbd29951a6a0e50ce54327544130f57be2d107f2617ce48b1 -->

```csharp
public uint InnoEngine.Animation.AnimationPlaybackHandle.runtimeGeneration { get; }
```

Gets the isolated runtime generation that created this handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L316).
