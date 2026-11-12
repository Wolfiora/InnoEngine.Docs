---
title: "UiMeshHandle"
description: "Reference for UiMeshHandle in Inno.UI."
uid: api.inno.ui.runtime-script.7e71982f7044721d
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiMeshHandle`

This reference describes `UiMeshHandle` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.UI.UiMeshHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-fe96a60a687ed41a) | Method |
| [`Deconstruct`](#api-6ed2f9f31dadf5d4) | Method |
| [`Equals`](#api-9d5c3138918723ed) | Method |
| [`Equals`](#api-b17dfa8a8a5196f7) | Method |
| [`GetHashCode`](#api-905d862e34954d79) | Method |
| [`op_Equality`](#api-58808219bba99afd) | Method |
| [`op_Inequality`](#api-24ebe40e6875cc7b) | Method |
| [`ToString`](#api-239d941d1c322be7) | Method |
| [`isValid`](#api-037fa2f7d11c5ab3) | Property |
| [`value`](#api-9153eb3e74046780) | Property |

## Type declaration

<a id="api-7e71982f7044721d"></a>
<!-- api: T:InnoEngine.UI.UiMeshHandle 0ae213caab4456763aec2882f837597a7cee1cb54790875ed2f1a5500e0627ed -->

```csharp
public readonly struct InnoEngine.UI.UiMeshHandle : System.IEquatable<InnoEngine.UI.UiMeshHandle>
```

Identifies one backend-owned immutable mesh generation.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `#ctor`

<a id="api-fe96a60a687ed41a"></a>
<!-- api: M:InnoEngine.UI.UiMeshHandle.#ctor(System.UInt64) de9f035215f0ea37552d70e29d31ddbeb2196c0d35f03b7f2b59a780e51c2605 -->

```csharp
public InnoEngine.UI.UiMeshHandle.UiMeshHandle(ulong value)
```

Identifies one backend-owned immutable mesh generation.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `Deconstruct`

<a id="api-6ed2f9f31dadf5d4"></a>
<!-- api: M:InnoEngine.UI.UiMeshHandle.Deconstruct(System.UInt64@) a0aee9d105d40ca739afb2c4fc60220cf22d8cf905b22d11050233897fb15c37 -->

```csharp
public void InnoEngine.UI.UiMeshHandle.Deconstruct(out ulong value)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `Equals`

<a id="api-9d5c3138918723ed"></a>
<!-- api: M:InnoEngine.UI.UiMeshHandle.Equals(InnoEngine.UI.UiMeshHandle) d180506b60ecd1fd5f0c8a6b6760e198969a579ceefb6acf92da53bce2d72c71 -->

```csharp
public bool InnoEngine.UI.UiMeshHandle.Equals(InnoEngine.UI.UiMeshHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `Equals`

<a id="api-b17dfa8a8a5196f7"></a>
<!-- api: M:InnoEngine.UI.UiMeshHandle.Equals(System.Object) 3ef630bec197e30f0d995b7121e06f70b89c133feda037f6a8910979c33f93ea -->

```csharp
public override bool InnoEngine.UI.UiMeshHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `GetHashCode`

<a id="api-905d862e34954d79"></a>
<!-- api: M:InnoEngine.UI.UiMeshHandle.GetHashCode 693ef4ef198a9893964003fc8cf52df1e8e6d9366bd3b57bea3e25cdb2be3dec -->

```csharp
public override int InnoEngine.UI.UiMeshHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `op_Equality`

<a id="api-58808219bba99afd"></a>
<!-- api: M:InnoEngine.UI.UiMeshHandle.op_Equality(InnoEngine.UI.UiMeshHandle,InnoEngine.UI.UiMeshHandle) 46410e3da9f83d96dac4c44144f63b7a2a4d71507a70321e34d931dde9996bd2 -->

```csharp
public static bool InnoEngine.UI.UiMeshHandle.operator ==(InnoEngine.UI.UiMeshHandle left, InnoEngine.UI.UiMeshHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `op_Inequality`

<a id="api-24ebe40e6875cc7b"></a>
<!-- api: M:InnoEngine.UI.UiMeshHandle.op_Inequality(InnoEngine.UI.UiMeshHandle,InnoEngine.UI.UiMeshHandle) d58ef1a38e85dd96658ebb68de105a1ff09756566e21b7cf0b4785806d9db648 -->

```csharp
public static bool InnoEngine.UI.UiMeshHandle.operator !=(InnoEngine.UI.UiMeshHandle left, InnoEngine.UI.UiMeshHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `ToString`

<a id="api-239d941d1c322be7"></a>
<!-- api: M:InnoEngine.UI.UiMeshHandle.ToString 5b5631a6f261a8832bd03c09b1556b99734a2df208cab272acbf6ee15ec94577 -->

```csharp
public override string InnoEngine.UI.UiMeshHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `isValid`

<a id="api-037fa2f7d11c5ab3"></a>
<!-- api: P:InnoEngine.UI.UiMeshHandle.isValid fcfe7e65ba5b68057100ca7cc5bb28f15f9ee0e1de24bc6bbb3b5c1ed9a82b6e -->

```csharp
public bool InnoEngine.UI.UiMeshHandle.isValid { get; }
```

Gets whether the handle identifies a mesh.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L55).

## `value`

<a id="api-9153eb3e74046780"></a>
<!-- api: P:InnoEngine.UI.UiMeshHandle.value e31861aacc1b3d65c5a63114ea35d21757b5b36249c0da668a87a5da86da02a0 -->

```csharp
public ulong InnoEngine.UI.UiMeshHandle.value { get; set; }
```

The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).
