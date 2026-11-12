---
title: "PersistentBufferHandle"
description: "Reference for PersistentBufferHandle in Inno.Rendering."
uid: api.inno.rendering.runtime-script.b775d11bc2c0bfca
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `PersistentBufferHandle`

This reference describes `PersistentBufferHandle` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.PersistentBufferHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-6462ee1fe2060a44) | Method |
| [`Equals`](#api-5a5b489598a1889d) | Method |
| [`GetHashCode`](#api-aaff094088370ac7) | Method |
| [`op_Equality`](#api-f1b9d0373a1341d4) | Method |
| [`op_Inequality`](#api-e970e9affc6ec158) | Method |
| [`ToString`](#api-b16d86e34fc3a919) | Method |
| [`isValid`](#api-4d8041c8f052455a) | Property |

## Type declaration

<a id="api-b775d11bc2c0bfca"></a>
<!-- api: T:InnoEngine.Rendering.PersistentBufferHandle b04b6738b685941d2e462899f54ffab6cd3e05c2dec3f1b51f925d4c15a3d4de -->

```csharp
public readonly struct InnoEngine.Rendering.PersistentBufferHandle : System.IEquatable<InnoEngine.Rendering.PersistentBufferHandle>
```

Identifies a persistent device buffer without exposing a backend-native handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L515).

## `Equals`

<a id="api-6462ee1fe2060a44"></a>
<!-- api: M:InnoEngine.Rendering.PersistentBufferHandle.Equals(InnoEngine.Rendering.PersistentBufferHandle) 7bf5c8ac9f67299b757ff82fe82c88c6322ba8aa6886e58c1055b60aab22440b -->

```csharp
public bool InnoEngine.Rendering.PersistentBufferHandle.Equals(InnoEngine.Rendering.PersistentBufferHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L515).

## `Equals`

<a id="api-5a5b489598a1889d"></a>
<!-- api: M:InnoEngine.Rendering.PersistentBufferHandle.Equals(System.Object) 0ffdd08f55fc886b02d78072e853924daf2865dabb299fca3a86a885271140ab -->

```csharp
public override bool InnoEngine.Rendering.PersistentBufferHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L515).

## `GetHashCode`

<a id="api-aaff094088370ac7"></a>
<!-- api: M:InnoEngine.Rendering.PersistentBufferHandle.GetHashCode 2252103d79d4fa6b1ff7028c168010b64fbc52b4933740a16b403b6be2da1fbe -->

```csharp
public override int InnoEngine.Rendering.PersistentBufferHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L515).

## `op_Equality`

<a id="api-f1b9d0373a1341d4"></a>
<!-- api: M:InnoEngine.Rendering.PersistentBufferHandle.op_Equality(InnoEngine.Rendering.PersistentBufferHandle,InnoEngine.Rendering.PersistentBufferHandle) db3baafb27ecbc76da4f924cb0e1477fa3fbc8625b4e5dc6d27e97d5d155e626 -->

```csharp
public static bool InnoEngine.Rendering.PersistentBufferHandle.operator ==(InnoEngine.Rendering.PersistentBufferHandle left, InnoEngine.Rendering.PersistentBufferHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L515).

## `op_Inequality`

<a id="api-e970e9affc6ec158"></a>
<!-- api: M:InnoEngine.Rendering.PersistentBufferHandle.op_Inequality(InnoEngine.Rendering.PersistentBufferHandle,InnoEngine.Rendering.PersistentBufferHandle) 1a842a81c49e4d479871a12ea043ddfdba45da6a86d0f7771fd07f95695041f3 -->

```csharp
public static bool InnoEngine.Rendering.PersistentBufferHandle.operator !=(InnoEngine.Rendering.PersistentBufferHandle left, InnoEngine.Rendering.PersistentBufferHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L515).

## `ToString`

<a id="api-b16d86e34fc3a919"></a>
<!-- api: M:InnoEngine.Rendering.PersistentBufferHandle.ToString 6a6ca07b0be6ff2d859554de506ff9f56fa3fe4d3c7302ca4dd4e6f32f957fe9 -->

```csharp
public override string InnoEngine.Rendering.PersistentBufferHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L515).

## `isValid`

<a id="api-4d8041c8f052455a"></a>
<!-- api: P:InnoEngine.Rendering.PersistentBufferHandle.isValid 48f274cb944436d487d60378bbc33843b0a8c71ab71cd423fbeaf4378f1f7da8 -->

```csharp
public bool InnoEngine.Rendering.PersistentBufferHandle.isValid { get; }
```

Gets whether the handle identifies a device buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L531).
