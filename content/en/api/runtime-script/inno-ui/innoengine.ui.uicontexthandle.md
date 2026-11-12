---
title: "UiContextHandle"
description: "Reference for UiContextHandle in Inno.UI."
uid: api.inno.ui.runtime-script.a2036b2a539fcbd1
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiContextHandle`

This reference describes `UiContextHandle` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.UI.UiContextHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4a503cb54212c1b7) | Method |
| [`Deconstruct`](#api-0b3bbcdb156c8fa9) | Method |
| [`Equals`](#api-59804b5598af0154) | Method |
| [`Equals`](#api-a7e720ca2b09e385) | Method |
| [`GetHashCode`](#api-381da211009ad729) | Method |
| [`op_Equality`](#api-857b54c1add125c2) | Method |
| [`op_Inequality`](#api-c6e77b97eae6836e) | Method |
| [`ToString`](#api-fb81940d75c57a7f) | Method |
| [`isValid`](#api-1c41e163cdb39036) | Property |
| [`value`](#api-6227bcefe58b0a3c) | Property |

## Type declaration

<a id="api-a2036b2a539fcbd1"></a>
<!-- api: T:InnoEngine.UI.UiContextHandle 386ac59fe6ab3c2f009a421438340ef62e99a7f82d014d136700bb2844bc8601 -->

```csharp
public readonly struct InnoEngine.UI.UiContextHandle : System.IEquatable<InnoEngine.UI.UiContextHandle>
```

Identifies one UI context owned by the active UI service generation.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `#ctor`

<a id="api-4a503cb54212c1b7"></a>
<!-- api: M:InnoEngine.UI.UiContextHandle.#ctor(System.UInt64) e572fff3a6c7599995cd25ea703a4672d0f9d6e535bde76d0b39d6ad0ad61781 -->

```csharp
public InnoEngine.UI.UiContextHandle.UiContextHandle(ulong value)
```

Identifies one UI context owned by the active UI service generation.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `Deconstruct`

<a id="api-0b3bbcdb156c8fa9"></a>
<!-- api: M:InnoEngine.UI.UiContextHandle.Deconstruct(System.UInt64@) f61c15cad52a10e46c8d5b22866ab5d7919e2be5a44e3ec13846bb954ce47f7c -->

```csharp
public void InnoEngine.UI.UiContextHandle.Deconstruct(out ulong value)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `Equals`

<a id="api-59804b5598af0154"></a>
<!-- api: M:InnoEngine.UI.UiContextHandle.Equals(InnoEngine.UI.UiContextHandle) e72b992bd63817dc7cd52e8fced43b29670abb71055fafb0a1f5fc5569796c3f -->

```csharp
public bool InnoEngine.UI.UiContextHandle.Equals(InnoEngine.UI.UiContextHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `Equals`

<a id="api-a7e720ca2b09e385"></a>
<!-- api: M:InnoEngine.UI.UiContextHandle.Equals(System.Object) 56c7c5d5f9e1682b8227838d39fe4a99c073f479d75faee6ab24c2041fcd4d38 -->

```csharp
public override bool InnoEngine.UI.UiContextHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `GetHashCode`

<a id="api-381da211009ad729"></a>
<!-- api: M:InnoEngine.UI.UiContextHandle.GetHashCode 975c2257851aa3d0038725ebb59c5b0f7be0584739ed4638a96aa4608b15e1a0 -->

```csharp
public override int InnoEngine.UI.UiContextHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `op_Equality`

<a id="api-857b54c1add125c2"></a>
<!-- api: M:InnoEngine.UI.UiContextHandle.op_Equality(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiContextHandle) b4c812922e3dd4e009ddcd061cf3f34a4757647c7b8be44fd434c6ee077ff18c -->

```csharp
public static bool InnoEngine.UI.UiContextHandle.operator ==(InnoEngine.UI.UiContextHandle left, InnoEngine.UI.UiContextHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `op_Inequality`

<a id="api-c6e77b97eae6836e"></a>
<!-- api: M:InnoEngine.UI.UiContextHandle.op_Inequality(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiContextHandle) 3c4a8d4c4dea01806c3d51eddf0df75e00ad14d7fc5f4bde1203acb75c5bf581 -->

```csharp
public static bool InnoEngine.UI.UiContextHandle.operator !=(InnoEngine.UI.UiContextHandle left, InnoEngine.UI.UiContextHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `ToString`

<a id="api-fb81940d75c57a7f"></a>
<!-- api: M:InnoEngine.UI.UiContextHandle.ToString aaf193f78540ff68afc63e42111b5fa0182a4f5f7de56ecd567b86ea2435a609 -->

```csharp
public override string InnoEngine.UI.UiContextHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `isValid`

<a id="api-1c41e163cdb39036"></a>
<!-- api: P:InnoEngine.UI.UiContextHandle.isValid a5c5986a48b7acde77651d3673efad7125f4736450b7dc432d69313b34646313 -->

```csharp
public bool InnoEngine.UI.UiContextHandle.isValid { get; }
```

Gets whether this handle identifies a live context candidate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L14).

## `value`

<a id="api-6227bcefe58b0a3c"></a>
<!-- api: P:InnoEngine.UI.UiContextHandle.value ae6f8a06a386ed227a93e08c79d6c4b4578fa9c4d7d01a8a4d7c875dec7a7a8a -->

```csharp
public ulong InnoEngine.UI.UiContextHandle.value { get; set; }
```

The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L9).
