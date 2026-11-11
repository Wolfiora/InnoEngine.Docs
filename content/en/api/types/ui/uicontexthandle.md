---
title: "UiContextHandle"
description: "Reference for UiContextHandle in Inno.UI."
uid: api.inno.ui.2c2a20f36cb6f8f5
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiContextHandle`

This reference describes `UiContextHandle` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.UI.UiContextHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-906415154e29c936) | Method |
| [`Deconstruct`](#api-f3b8f55f0f93bcaf) | Method |
| [`Equals`](#api-73f495ade56cfcc6) | Method |
| [`Equals`](#api-9cf51e08e9cfc2f2) | Method |
| [`GetHashCode`](#api-4b5477b07cd7560e) | Method |
| [`op_Equality`](#api-2f0940335e1e0861) | Method |
| [`op_Inequality`](#api-34567ae1c1191531) | Method |
| [`ToString`](#api-8a0b0b342de652ec) | Method |
| [`isValid`](#api-cfaadefe9f041856) | Property |
| [`value`](#api-978c841eb195c63a) | Property |

## Type declaration

<a id="api-2c2a20f36cb6f8f5"></a>
<!-- api: T:Inno.UI.UiContextHandle a581b69f367dadc5ddb963af950d968fd82156529b613f304f21b04014b97956 -->

```csharp
public readonly record struct Inno.UI.UiContextHandle : System.IEquatable<Inno.UI.UiContextHandle>
```

Identifies one UI context owned by the active UI service generation.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `#ctor`

<a id="api-906415154e29c936"></a>
<!-- api: M:Inno.UI.UiContextHandle.#ctor(System.UInt64) 22aa387dcadf50f0fb3c2a856e1d363ef6c0260efdcd07a8a015d64c14ba1cce -->

```csharp
public Inno.UI.UiContextHandle.UiContextHandle(ulong value)
```

Identifies one UI context owned by the active UI service generation.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `Deconstruct`

<a id="api-f3b8f55f0f93bcaf"></a>
<!-- api: M:Inno.UI.UiContextHandle.Deconstruct(System.UInt64@) bcf6136a05e1bf1a902fec61e46dd8e2b2875ae3c974e05a5d6c462c1365f74f -->

```csharp
public void Inno.UI.UiContextHandle.Deconstruct(out ulong value)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `Equals`

<a id="api-73f495ade56cfcc6"></a>
<!-- api: M:Inno.UI.UiContextHandle.Equals(Inno.UI.UiContextHandle) aea48b6b19879c9b331612ef41b226e5010fcd486e2cd0fff4e642f8b456394b -->

```csharp
public bool Inno.UI.UiContextHandle.Equals(Inno.UI.UiContextHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `Equals`

<a id="api-9cf51e08e9cfc2f2"></a>
<!-- api: M:Inno.UI.UiContextHandle.Equals(System.Object) 99e258f321a20f1a6926356d244d4df2c85cb6bf48d9b67783750dc2330081c2 -->

```csharp
public override bool Inno.UI.UiContextHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `GetHashCode`

<a id="api-4b5477b07cd7560e"></a>
<!-- api: M:Inno.UI.UiContextHandle.GetHashCode d995e3bb565dd6358c9fcec920110e74b17073884898af6ad5b56503455cf374 -->

```csharp
public override int Inno.UI.UiContextHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `op_Equality`

<a id="api-2f0940335e1e0861"></a>
<!-- api: M:Inno.UI.UiContextHandle.op_Equality(Inno.UI.UiContextHandle,Inno.UI.UiContextHandle) bc603460fe95adb8173700c73b2529bab5bc778b499f7858bcdf81f0d9441444 -->

```csharp
public static bool Inno.UI.UiContextHandle.operator ==(Inno.UI.UiContextHandle left, Inno.UI.UiContextHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `op_Inequality`

<a id="api-34567ae1c1191531"></a>
<!-- api: M:Inno.UI.UiContextHandle.op_Inequality(Inno.UI.UiContextHandle,Inno.UI.UiContextHandle) d92bd78898db56b6e5fd8b73fc8a40f8c08f6f957b80c8932041f77c231d60ce -->

```csharp
public static bool Inno.UI.UiContextHandle.operator !=(Inno.UI.UiContextHandle left, Inno.UI.UiContextHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `ToString`

<a id="api-8a0b0b342de652ec"></a>
<!-- api: M:Inno.UI.UiContextHandle.ToString de372c952a68001e70105efe4ba268672567323cb14f0cab43971cc8506ee0e2 -->

```csharp
public override string Inno.UI.UiContextHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L9).

## `isValid`

<a id="api-cfaadefe9f041856"></a>
<!-- api: P:Inno.UI.UiContextHandle.isValid 63761975eb4f1dbf4ae91ecbadd10f48fad3e128d35fc46e193fcabfa0d211ef -->

```csharp
public bool Inno.UI.UiContextHandle.isValid { get; }
```

Gets whether this handle identifies a live context candidate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L14).

## `value`

<a id="api-978c841eb195c63a"></a>
<!-- api: P:Inno.UI.UiContextHandle.value 5871c120ba6c47e73297068ed37bcbb29896bdf11b07cd69100692c10d535078 -->

```csharp
public ulong Inno.UI.UiContextHandle.value { get; init; }
```

The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiHandles.cs#L9).
