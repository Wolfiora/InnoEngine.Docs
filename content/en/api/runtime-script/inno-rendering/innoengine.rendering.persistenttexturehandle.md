---
title: "PersistentTextureHandle"
description: "Reference for PersistentTextureHandle in Inno.Rendering."
uid: api.inno.rendering.runtime-script.43cc0e7f5409c9b9
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `PersistentTextureHandle`

This reference describes `PersistentTextureHandle` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.PersistentTextureHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-fa821306cd533ccc) | Method |
| [`Equals`](#api-1142106f82d9055e) | Method |
| [`GetHashCode`](#api-378d2bb14597d007) | Method |
| [`op_Equality`](#api-2163d1b6358ad75d) | Method |
| [`op_Inequality`](#api-44ced617158325fd) | Method |
| [`ToString`](#api-0dc5e6396632c72d) | Method |
| [`isValid`](#api-5bb1ae3dd0741a08) | Property |

## Type declaration

<a id="api-43cc0e7f5409c9b9"></a>
<!-- api: T:InnoEngine.Rendering.PersistentTextureHandle 3a3995a691d6b12759696566b27614c7c4901985442a2642ded966fcfe191620 -->

```csharp
public readonly struct InnoEngine.Rendering.PersistentTextureHandle : System.IEquatable<InnoEngine.Rendering.PersistentTextureHandle>
```

Identifies a persistent device texture without exposing a backend-native handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L493).

## `Equals`

<a id="api-fa821306cd533ccc"></a>
<!-- api: M:InnoEngine.Rendering.PersistentTextureHandle.Equals(InnoEngine.Rendering.PersistentTextureHandle) 7809fe0ea71255a2d3c8f7be03df19e556a699679b3518ae8a5811b46f045e0a -->

```csharp
public bool InnoEngine.Rendering.PersistentTextureHandle.Equals(InnoEngine.Rendering.PersistentTextureHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L493).

## `Equals`

<a id="api-1142106f82d9055e"></a>
<!-- api: M:InnoEngine.Rendering.PersistentTextureHandle.Equals(System.Object) 546a5b17553834e2bc1e6e57b788477b599cc7ce069c7a7cccc0ddb729990ce2 -->

```csharp
public override bool InnoEngine.Rendering.PersistentTextureHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L493).

## `GetHashCode`

<a id="api-378d2bb14597d007"></a>
<!-- api: M:InnoEngine.Rendering.PersistentTextureHandle.GetHashCode 5679710db137796388be135b388bcc38e4d6adb5ec2cccc032c4e09c9183d18d -->

```csharp
public override int InnoEngine.Rendering.PersistentTextureHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L493).

## `op_Equality`

<a id="api-2163d1b6358ad75d"></a>
<!-- api: M:InnoEngine.Rendering.PersistentTextureHandle.op_Equality(InnoEngine.Rendering.PersistentTextureHandle,InnoEngine.Rendering.PersistentTextureHandle) a352483c6b901b7e2f9164f33afd9b1e8de73e9e0fedbe8ea1aaca102aa35b00 -->

```csharp
public static bool InnoEngine.Rendering.PersistentTextureHandle.operator ==(InnoEngine.Rendering.PersistentTextureHandle left, InnoEngine.Rendering.PersistentTextureHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L493).

## `op_Inequality`

<a id="api-44ced617158325fd"></a>
<!-- api: M:InnoEngine.Rendering.PersistentTextureHandle.op_Inequality(InnoEngine.Rendering.PersistentTextureHandle,InnoEngine.Rendering.PersistentTextureHandle) 81ed186bdff50b328042b285d57bf68bf095052549a7f70c29b7cf435906cfca -->

```csharp
public static bool InnoEngine.Rendering.PersistentTextureHandle.operator !=(InnoEngine.Rendering.PersistentTextureHandle left, InnoEngine.Rendering.PersistentTextureHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L493).

## `ToString`

<a id="api-0dc5e6396632c72d"></a>
<!-- api: M:InnoEngine.Rendering.PersistentTextureHandle.ToString 36c69df2b814295c42914c262f3b22c696dde3af5eb4486afe12fd66be2507a6 -->

```csharp
public override string InnoEngine.Rendering.PersistentTextureHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L493).

## `isValid`

<a id="api-5bb1ae3dd0741a08"></a>
<!-- api: P:InnoEngine.Rendering.PersistentTextureHandle.isValid 01fe904a8d802bfb095e78ae10b96bba406b7b4caaf2d4da20b94f6bd5e1a25f -->

```csharp
public bool InnoEngine.Rendering.PersistentTextureHandle.isValid { get; }
```

Gets whether the handle identifies a device texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L509).
