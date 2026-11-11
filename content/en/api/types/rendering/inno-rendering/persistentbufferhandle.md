---
title: "PersistentBufferHandle"
description: "Reference for PersistentBufferHandle in Inno.Rendering."
uid: api.inno.rendering.c7ca9847c31fd315
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `PersistentBufferHandle`

This reference describes `PersistentBufferHandle` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.PersistentBufferHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-40faac0e88be6524) | Method |
| [`Equals`](#api-0addca786eb40386) | Method |
| [`GetHashCode`](#api-f0e5a58b6642ffb3) | Method |
| [`op_Equality`](#api-3580b91d1ec8c356) | Method |
| [`op_Inequality`](#api-4f3bf4172a1f5e1f) | Method |
| [`ToString`](#api-221ca15fc4b4a609) | Method |
| [`isValid`](#api-06c03535e65729a9) | Property |

## Type declaration

<a id="api-c7ca9847c31fd315"></a>
<!-- api: T:Inno.Rendering.PersistentBufferHandle 0914b56482b8d87bd99327df316bca6d40b3b6152c8b8b8189e71f0dc246f9ba -->

```csharp
public readonly record struct Inno.Rendering.PersistentBufferHandle : System.IEquatable<Inno.Rendering.PersistentBufferHandle>
```

Identifies a persistent device buffer without exposing a backend-native handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L515).

## `Equals`

<a id="api-40faac0e88be6524"></a>
<!-- api: M:Inno.Rendering.PersistentBufferHandle.Equals(Inno.Rendering.PersistentBufferHandle) 9272e0547a398280dd4d9259d5a6e05d9213f812a48e2b7d85bece31a2bb202d -->

```csharp
public bool Inno.Rendering.PersistentBufferHandle.Equals(Inno.Rendering.PersistentBufferHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L515).

## `Equals`

<a id="api-0addca786eb40386"></a>
<!-- api: M:Inno.Rendering.PersistentBufferHandle.Equals(System.Object) 1632562e87c53cee4dfbd25e1b145269cef08bc59830bf504f9fefb656a188b8 -->

```csharp
public override bool Inno.Rendering.PersistentBufferHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L515).

## `GetHashCode`

<a id="api-f0e5a58b6642ffb3"></a>
<!-- api: M:Inno.Rendering.PersistentBufferHandle.GetHashCode ce4359eb631e9bc3f414797e185c42559f249c332ff33b0933865f1bcf26cdd9 -->

```csharp
public override int Inno.Rendering.PersistentBufferHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L515).

## `op_Equality`

<a id="api-3580b91d1ec8c356"></a>
<!-- api: M:Inno.Rendering.PersistentBufferHandle.op_Equality(Inno.Rendering.PersistentBufferHandle,Inno.Rendering.PersistentBufferHandle) 11ebb4b0bb0d679d35a075eb8d2b3f365afb2f3fbb19577d80ab548e4552eaad -->

```csharp
public static bool Inno.Rendering.PersistentBufferHandle.operator ==(Inno.Rendering.PersistentBufferHandle left, Inno.Rendering.PersistentBufferHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L515).

## `op_Inequality`

<a id="api-4f3bf4172a1f5e1f"></a>
<!-- api: M:Inno.Rendering.PersistentBufferHandle.op_Inequality(Inno.Rendering.PersistentBufferHandle,Inno.Rendering.PersistentBufferHandle) 727b1d39bb6847a8c0fb59380172029d8ca1f0fbf049010e6cb62a1417c42efd -->

```csharp
public static bool Inno.Rendering.PersistentBufferHandle.operator !=(Inno.Rendering.PersistentBufferHandle left, Inno.Rendering.PersistentBufferHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L515).

## `ToString`

<a id="api-221ca15fc4b4a609"></a>
<!-- api: M:Inno.Rendering.PersistentBufferHandle.ToString 31460c643dd005a878b5bdc87cd68864ee900e3a5bac893ed4fc6781dd4e786e -->

```csharp
public override string Inno.Rendering.PersistentBufferHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L515).

## `isValid`

<a id="api-06c03535e65729a9"></a>
<!-- api: P:Inno.Rendering.PersistentBufferHandle.isValid 5a8accf19513685f19ceba3cf3f7cb2eb1eefc124580d1ccb6af353433507a27 -->

```csharp
public bool Inno.Rendering.PersistentBufferHandle.isValid { get; }
```

Gets whether the handle identifies a device buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L531).
