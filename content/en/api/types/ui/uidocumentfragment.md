---
title: "UiDocumentFragment"
description: "Reference for UiDocumentFragment in Inno.UI."
uid: api.inno.ui.b0b1504a7118f5fc
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiDocumentFragment`

This reference describes `UiDocumentFragment` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.UI.UiDocumentFragment>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5f35b3b1872eb444) | Method |
| [`Equals`](#api-40bac34594693a56) | Method |
| [`Equals`](#api-0fa2ea401044294c) | Method |
| [`GetHashCode`](#api-27f204c19a6c0e2a) | Method |
| [`op_Equality`](#api-7463dd86466aadae) | Method |
| [`op_Inequality`](#api-7c64095745762ab6) | Method |
| [`ToString`](#api-98ea156f7b4c504e) | Method |
| [`language`](#api-14e4cd760b9002e8) | Property |
| [`text`](#api-22f4706ec5fda69e) | Property |

## Type declaration

<a id="api-b0b1504a7118f5fc"></a>
<!-- api: T:Inno.UI.UiDocumentFragment c22ce03bc1dbf915cab29f8cce46c70ec068455e9d3b1fc384cda607803794d2 -->

```csharp
public readonly record struct Inno.UI.UiDocumentFragment : System.IEquatable<Inno.UI.UiDocumentFragment>
```

Contains a language-tagged fragment for a backend-specific document mutation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L112).

## `#ctor`

<a id="api-5f35b3b1872eb444"></a>
<!-- api: M:Inno.UI.UiDocumentFragment.#ctor(Inno.UI.UiDocumentLanguageId,System.String) 5448e528367bbb8a18f6c4e403fae39052c6c58e1b8fdfe694a0270d2b9f0fb0 -->

```csharp
public Inno.UI.UiDocumentFragment.UiDocumentFragment(Inno.UI.UiDocumentLanguageId language, string text)
```

Creates a validated source fragment.

**Parameter `language`:** Explicit fragment language.

**Parameter `text`:** Complete fragment text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L123).

## `Equals`

<a id="api-40bac34594693a56"></a>
<!-- api: M:Inno.UI.UiDocumentFragment.Equals(Inno.UI.UiDocumentFragment) 4f17a5495c6718d7e130a5707c0895100a187d3ea16ef3816775a97eb853d2bb -->

```csharp
public bool Inno.UI.UiDocumentFragment.Equals(Inno.UI.UiDocumentFragment other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L112).

## `Equals`

<a id="api-0fa2ea401044294c"></a>
<!-- api: M:Inno.UI.UiDocumentFragment.Equals(System.Object) ebe1f543b3d9d5731873563dffa1d8009b61a4a31ba3ee4290c1a889033cde85 -->

```csharp
public override bool Inno.UI.UiDocumentFragment.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L112).

## `GetHashCode`

<a id="api-27f204c19a6c0e2a"></a>
<!-- api: M:Inno.UI.UiDocumentFragment.GetHashCode 8d004a48f08c35da5935b1f82827f83b4a20e99d71b36d401c7742b4ccd23105 -->

```csharp
public override int Inno.UI.UiDocumentFragment.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L112).

## `op_Equality`

<a id="api-7463dd86466aadae"></a>
<!-- api: M:Inno.UI.UiDocumentFragment.op_Equality(Inno.UI.UiDocumentFragment,Inno.UI.UiDocumentFragment) 0af0bdde7dad18b7bf06c7fe229def39448f42301bc73cddcfbb24a4bdc9fad1 -->

```csharp
public static bool Inno.UI.UiDocumentFragment.operator ==(Inno.UI.UiDocumentFragment left, Inno.UI.UiDocumentFragment right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L112).

## `op_Inequality`

<a id="api-7c64095745762ab6"></a>
<!-- api: M:Inno.UI.UiDocumentFragment.op_Inequality(Inno.UI.UiDocumentFragment,Inno.UI.UiDocumentFragment) ca0c67aef1ddb5e7ea8b6e2467fbc39b3c7ffb8d11b78db6dc638d8f0549e759 -->

```csharp
public static bool Inno.UI.UiDocumentFragment.operator !=(Inno.UI.UiDocumentFragment left, Inno.UI.UiDocumentFragment right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L112).

## `ToString`

<a id="api-98ea156f7b4c504e"></a>
<!-- api: M:Inno.UI.UiDocumentFragment.ToString 158183ec683d04b6448ab7338690ba8fbc35e4828faf8a6068dd013d9201e0ec -->

```csharp
public override string Inno.UI.UiDocumentFragment.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L112).

## `language`

<a id="api-14e4cd760b9002e8"></a>
<!-- api: P:Inno.UI.UiDocumentFragment.language af86d1d233707cdfef5f21dffbc025ddb0d884831c394276f38c6e4ee0a0e863 -->

```csharp
public Inno.UI.UiDocumentLanguageId Inno.UI.UiDocumentFragment.language { get; }
```

Gets the explicitly selected fragment language.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L137).

## `text`

<a id="api-22f4706ec5fda69e"></a>
<!-- api: P:Inno.UI.UiDocumentFragment.text 901a6f214e2c27ae7bc59658c90e4601429c9f645e51bf50c9838bee537969f0 -->

```csharp
public string Inno.UI.UiDocumentFragment.text { get; }
```

Gets the complete fragment text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L141).
