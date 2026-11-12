---
title: "AnimationBindingId"
description: "Reference for AnimationBindingId in Inno.Animation."
uid: api.inno.animation.runtime-script.24c09296858b17d8
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationBindingId`

This reference describes `AnimationBindingId` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Animation.AnimationBindingId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0bc4f06f80f34e93) | Method |
| [`Equals`](#api-48dc69168dad386c) | Method |
| [`Equals`](#api-b1d59c7a622fe7c7) | Method |
| [`GetHashCode`](#api-03b5e603f9e086a6) | Method |
| [`op_Equality`](#api-fa0cb2da2a8164d2) | Method |
| [`op_Inequality`](#api-0a5ece451f8bed72) | Method |
| [`ToString`](#api-e24eef4de13bc3c2) | Method |
| [`isValid`](#api-81b2da357da78f57) | Property |
| [`value`](#api-d52e6a4ae8bfcc4d) | Property |

## Type declaration

<a id="api-24c09296858b17d8"></a>
<!-- api: T:InnoEngine.Animation.AnimationBindingId 8b0c15e694ddc69db6ee4d4f7df7027198f2ff6f965f66e2127baa11fd18d102 -->

```csharp
public readonly struct InnoEngine.Animation.AnimationBindingId : System.IEquatable<InnoEngine.Animation.AnimationBindingId>
```

Identifies one backend-neutral value destination inside an animation binding scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L10).

## `#ctor`

<a id="api-0bc4f06f80f34e93"></a>
<!-- api: M:InnoEngine.Animation.AnimationBindingId.#ctor(System.String) 33132dde8d7b5e10de85a74639396fb0d48b8f87c260f42716409716a5e8ee24 -->

```csharp
public InnoEngine.Animation.AnimationBindingId.AnimationBindingId(string value)
```

Creates a stable animation binding identifier.

**Parameter `value`:** The non-empty binding protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L18).

## `Equals`

<a id="api-48dc69168dad386c"></a>
<!-- api: M:InnoEngine.Animation.AnimationBindingId.Equals(InnoEngine.Animation.AnimationBindingId) 1a0c3ce91bcecba249a1cb7c561d003d103c3bfd02d5cb89a78e40cc33e2dc66 -->

```csharp
public bool InnoEngine.Animation.AnimationBindingId.Equals(InnoEngine.Animation.AnimationBindingId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L10).

## `Equals`

<a id="api-b1d59c7a622fe7c7"></a>
<!-- api: M:InnoEngine.Animation.AnimationBindingId.Equals(System.Object) 518198f1c41096956d2310f67e7a3a1313304af2f9d0131de3da38d482ff016e -->

```csharp
public override bool InnoEngine.Animation.AnimationBindingId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L10).

## `GetHashCode`

<a id="api-03b5e603f9e086a6"></a>
<!-- api: M:InnoEngine.Animation.AnimationBindingId.GetHashCode 7f703c362370a08e5550d79eb4ff6413b337fb8f11749a3fdd1fd2987325d63d -->

```csharp
public override int InnoEngine.Animation.AnimationBindingId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L10).

## `op_Equality`

<a id="api-fa0cb2da2a8164d2"></a>
<!-- api: M:InnoEngine.Animation.AnimationBindingId.op_Equality(InnoEngine.Animation.AnimationBindingId,InnoEngine.Animation.AnimationBindingId) 44827f6815c3b5e6c6e8f1e194b8ac6d0baf035866d07745999ac2ae03222b23 -->

```csharp
public static bool InnoEngine.Animation.AnimationBindingId.operator ==(InnoEngine.Animation.AnimationBindingId left, InnoEngine.Animation.AnimationBindingId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L10).

## `op_Inequality`

<a id="api-0a5ece451f8bed72"></a>
<!-- api: M:InnoEngine.Animation.AnimationBindingId.op_Inequality(InnoEngine.Animation.AnimationBindingId,InnoEngine.Animation.AnimationBindingId) c81310560a4176d3bdaf17fb774c42942c6a7b342bd268c9550ed352c266f3b8 -->

```csharp
public static bool InnoEngine.Animation.AnimationBindingId.operator !=(InnoEngine.Animation.AnimationBindingId left, InnoEngine.Animation.AnimationBindingId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L10).

## `ToString`

<a id="api-e24eef4de13bc3c2"></a>
<!-- api: M:InnoEngine.Animation.AnimationBindingId.ToString ea7e240db6639b3e0f74b3c3c08134d57f8d8622f369a4a6e580e9eee9d059a7 -->

```csharp
public override string InnoEngine.Animation.AnimationBindingId.ToString()
```

Formats this identifier for diagnostics and persistence.

**Returns:** The protocol value, or an empty string for an uninitialized identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L40).

## `isValid`

<a id="api-81b2da357da78f57"></a>
<!-- api: P:InnoEngine.Animation.AnimationBindingId.isValid bf20a6de9697ce0e6aa2f94f11e6a1f326d78e44e9dc5f8705a5e80f4b7b3a70 -->

```csharp
public bool InnoEngine.Animation.AnimationBindingId.isValid { get; }
```

Gets whether this identifier contains a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L32).

## `value`

<a id="api-d52e6a4ae8bfcc4d"></a>
<!-- api: P:InnoEngine.Animation.AnimationBindingId.value 970df015434c649d1fac918b5c2f95199b4a49e664cf8ca8952604239c35d66a -->

```csharp
public string InnoEngine.Animation.AnimationBindingId.value { get; }
```

Gets the stable binding protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L27).
