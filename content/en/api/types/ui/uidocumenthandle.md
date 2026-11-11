---
title: "UiDocumentHandle"
description: "Reference for UiDocumentHandle in Inno.UI."
uid: api.inno.ui.28d865ee3c467859
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiDocumentHandle`

This reference describes `UiDocumentHandle` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.UI.UiDocumentHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-43707c37302ded9d) | Method |
| [`Deconstruct`](#api-f50eaf31e73fd7bf) | Method |
| [`Equals`](#api-405e4b35076bfd73) | Method |
| [`Equals`](#api-a3368b294ebef5dc) | Method |
| [`GetHashCode`](#api-1f8ddb34f13771b8) | Method |
| [`op_Equality`](#api-9949e4955ed2fb2a) | Method |
| [`op_Inequality`](#api-1f6dedb6f3483ea6) | Method |
| [`ToString`](#api-39f4e9a86d98ef81) | Method |
| [`isValid`](#api-43f3d1d1476d3de2) | Property |
| [`value`](#api-1397cc1d7ba80bb6) | Property |

## Type declaration

<a id="api-28d865ee3c467859"></a>
<!-- api: T:Inno.UI.UiDocumentHandle 01df9214392752c40509af939633954c497c2e6c24361d3d6f9783d891ed24ce -->

```csharp
public readonly record struct Inno.UI.UiDocumentHandle : System.IEquatable<Inno.UI.UiDocumentHandle>
```

Identifies one document owned by a UI context.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `#ctor`

<a id="api-43707c37302ded9d"></a>
<!-- api: M:Inno.UI.UiDocumentHandle.#ctor(System.UInt64) d8b48f182e0d7aeb9c7d541b080ba8bed9047b687f4926094b66d7a5bab81e89 -->

```csharp
public Inno.UI.UiDocumentHandle.UiDocumentHandle(ulong value)
```

Identifies one document owned by a UI context.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `Deconstruct`

<a id="api-f50eaf31e73fd7bf"></a>
<!-- api: M:Inno.UI.UiDocumentHandle.Deconstruct(System.UInt64@) 1e39a5d6673e92542092b3a8e71d9541f54cb82ee76a42c149d5f0dcb31c44d6 -->

```csharp
public void Inno.UI.UiDocumentHandle.Deconstruct(out ulong value)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `Equals`

<a id="api-405e4b35076bfd73"></a>
<!-- api: M:Inno.UI.UiDocumentHandle.Equals(Inno.UI.UiDocumentHandle) 1b3dfe4c0ebf52d150c5e41de478b16c3b01d33df3b76411c708558dbe82faef -->

```csharp
public bool Inno.UI.UiDocumentHandle.Equals(Inno.UI.UiDocumentHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `Equals`

<a id="api-a3368b294ebef5dc"></a>
<!-- api: M:Inno.UI.UiDocumentHandle.Equals(System.Object) 5a67ad65384a10f3b8908e3e584a0cf7e4ed01e9a477895ca2f110f00e97c4cb -->

```csharp
public override bool Inno.UI.UiDocumentHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `GetHashCode`

<a id="api-1f8ddb34f13771b8"></a>
<!-- api: M:Inno.UI.UiDocumentHandle.GetHashCode fe427785e35f29b675346340bf84c021e0c29055cafb907612539aaa34911a24 -->

```csharp
public override int Inno.UI.UiDocumentHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `op_Equality`

<a id="api-9949e4955ed2fb2a"></a>
<!-- api: M:Inno.UI.UiDocumentHandle.op_Equality(Inno.UI.UiDocumentHandle,Inno.UI.UiDocumentHandle) bc1058469234514d90192e63741e91454adaeba41593ee42448d53d8b83f4de7 -->

```csharp
public static bool Inno.UI.UiDocumentHandle.operator ==(Inno.UI.UiDocumentHandle left, Inno.UI.UiDocumentHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `op_Inequality`

<a id="api-1f6dedb6f3483ea6"></a>
<!-- api: M:Inno.UI.UiDocumentHandle.op_Inequality(Inno.UI.UiDocumentHandle,Inno.UI.UiDocumentHandle) be5d24abd84433c8e8295b8e61768b44885609eca335d549b73da8af93956e0c -->

```csharp
public static bool Inno.UI.UiDocumentHandle.operator !=(Inno.UI.UiDocumentHandle left, Inno.UI.UiDocumentHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `ToString`

<a id="api-39f4e9a86d98ef81"></a>
<!-- api: M:Inno.UI.UiDocumentHandle.ToString ac04a91059f82991e70f39466e9cd5b6df5eb8a9b4b854c9a8a2f384baff804b -->

```csharp
public override string Inno.UI.UiDocumentHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `isValid`

<a id="api-43f3d1d1476d3de2"></a>
<!-- api: P:Inno.UI.UiDocumentHandle.isValid 6ede06fd6d17bc39ea10a8083a7dfba1c04b755895952150b0710314bca46627 -->

```csharp
public bool Inno.UI.UiDocumentHandle.isValid { get; }
```

Gets whether this handle identifies a live document candidate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L28).

## `value`

<a id="api-1397cc1d7ba80bb6"></a>
<!-- api: P:Inno.UI.UiDocumentHandle.value 9cd9e0ed29bc2331a97008bb71a57ff9ef37e87e8a1a1664337d56b2af678f11 -->

```csharp
public ulong Inno.UI.UiDocumentHandle.value { get; init; }
```

The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L23).
