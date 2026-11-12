---
title: "UiDocumentHandle"
description: "Reference for UiDocumentHandle in Inno.UI."
uid: api.inno.ui.runtime-script.d77cc797b4df60b4
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiDocumentHandle`

This reference describes `UiDocumentHandle` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.UI.UiDocumentHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-219a7583fce048e4) | Method |
| [`Deconstruct`](#api-aba64f5f1815e743) | Method |
| [`Equals`](#api-2179e4b32a029c57) | Method |
| [`Equals`](#api-706bc415144acf2b) | Method |
| [`GetHashCode`](#api-33e30580b93bd1bc) | Method |
| [`op_Equality`](#api-d9bf684fb2053b49) | Method |
| [`op_Inequality`](#api-6c5dd3be7b5069c7) | Method |
| [`ToString`](#api-f1aac5f0393e2710) | Method |
| [`isValid`](#api-a743e441749a33d0) | Property |
| [`value`](#api-f8eb2d5305153c33) | Property |

## Type declaration

<a id="api-d77cc797b4df60b4"></a>
<!-- api: T:InnoEngine.UI.UiDocumentHandle 5d6db968f005fa6b2ea699d5684e0fe68a6d3c4d4739e873c9e5f0f6e1a4ccd0 -->

```csharp
public readonly struct InnoEngine.UI.UiDocumentHandle : System.IEquatable<InnoEngine.UI.UiDocumentHandle>
```

Identifies one document owned by a UI context.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `#ctor`

<a id="api-219a7583fce048e4"></a>
<!-- api: M:InnoEngine.UI.UiDocumentHandle.#ctor(System.UInt64) 707d53b27a210116e06904718958c2b169a55eb582d4e465e246e24bf8b396d0 -->

```csharp
public InnoEngine.UI.UiDocumentHandle.UiDocumentHandle(ulong value)
```

Identifies one document owned by a UI context.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `Deconstruct`

<a id="api-aba64f5f1815e743"></a>
<!-- api: M:InnoEngine.UI.UiDocumentHandle.Deconstruct(System.UInt64@) 8f19fb1e0fd4265f18817fe6620160681285d87588dc67b12b1dcdb268433b2c -->

```csharp
public void InnoEngine.UI.UiDocumentHandle.Deconstruct(out ulong value)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `Equals`

<a id="api-2179e4b32a029c57"></a>
<!-- api: M:InnoEngine.UI.UiDocumentHandle.Equals(InnoEngine.UI.UiDocumentHandle) a8f9627954c2d46535946b16d6c2594c17d5a5d1af40a99de89361bb483a86b8 -->

```csharp
public bool InnoEngine.UI.UiDocumentHandle.Equals(InnoEngine.UI.UiDocumentHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `Equals`

<a id="api-706bc415144acf2b"></a>
<!-- api: M:InnoEngine.UI.UiDocumentHandle.Equals(System.Object) 20f67f7f24ebbb592774dba409ac0ac768a8303bb111bbbefd76e11db4fa441c -->

```csharp
public override bool InnoEngine.UI.UiDocumentHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `GetHashCode`

<a id="api-33e30580b93bd1bc"></a>
<!-- api: M:InnoEngine.UI.UiDocumentHandle.GetHashCode a2ee2da2336b0fed497ee50384a01e0eccdfbce782f6d1f30009237908275182 -->

```csharp
public override int InnoEngine.UI.UiDocumentHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `op_Equality`

<a id="api-d9bf684fb2053b49"></a>
<!-- api: M:InnoEngine.UI.UiDocumentHandle.op_Equality(InnoEngine.UI.UiDocumentHandle,InnoEngine.UI.UiDocumentHandle) f059e7a3155bba78563aee9bbf01d0afaf8e9ee5d6f302a0719331fa370be376 -->

```csharp
public static bool InnoEngine.UI.UiDocumentHandle.operator ==(InnoEngine.UI.UiDocumentHandle left, InnoEngine.UI.UiDocumentHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `op_Inequality`

<a id="api-6c5dd3be7b5069c7"></a>
<!-- api: M:InnoEngine.UI.UiDocumentHandle.op_Inequality(InnoEngine.UI.UiDocumentHandle,InnoEngine.UI.UiDocumentHandle) 9b51a11d4e11c61b0a0e6d394c2611a104e77773d031f4cbd279c7b5fb449541 -->

```csharp
public static bool InnoEngine.UI.UiDocumentHandle.operator !=(InnoEngine.UI.UiDocumentHandle left, InnoEngine.UI.UiDocumentHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `ToString`

<a id="api-f1aac5f0393e2710"></a>
<!-- api: M:InnoEngine.UI.UiDocumentHandle.ToString d30293febd980027e119af792d16137771d9d93e0033db42f3f2f2b78e765b9e -->

```csharp
public override string InnoEngine.UI.UiDocumentHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L23).

## `isValid`

<a id="api-a743e441749a33d0"></a>
<!-- api: P:InnoEngine.UI.UiDocumentHandle.isValid f8e2c5658deeb950b8b22b40bb90c9efa47508ebf92886cf64101e5f34ccbbb9 -->

```csharp
public bool InnoEngine.UI.UiDocumentHandle.isValid { get; }
```

Gets whether this handle identifies a live document candidate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L28).

## `value`

<a id="api-f8eb2d5305153c33"></a>
<!-- api: P:InnoEngine.UI.UiDocumentHandle.value 11a25c830a5f16444330d1c44256c55e9e80a6f061f8c79686b131a6d2ca5a20 -->

```csharp
public ulong InnoEngine.UI.UiDocumentHandle.value { get; set; }
```

The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiHandles.cs#L23).
