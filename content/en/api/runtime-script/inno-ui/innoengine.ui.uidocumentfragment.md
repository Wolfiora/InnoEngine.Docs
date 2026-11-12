---
title: "UiDocumentFragment"
description: "Reference for UiDocumentFragment in Inno.UI."
uid: api.inno.ui.runtime-script.51f20d53c3de35f8
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiDocumentFragment`

This reference describes `UiDocumentFragment` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.UI.UiDocumentFragment>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dcb151e930bc6b50) | Method |
| [`Equals`](#api-d5fc8ef7098cc8a2) | Method |
| [`Equals`](#api-12d52e5baa6ea70a) | Method |
| [`GetHashCode`](#api-cbef2d456bc890ac) | Method |
| [`op_Equality`](#api-278a495ccb4df283) | Method |
| [`op_Inequality`](#api-c9f1602baaed762b) | Method |
| [`ToString`](#api-d74bcebb857b2955) | Method |
| [`language`](#api-95f733bc1c1583e8) | Property |
| [`text`](#api-ecd9bb7b21ef3944) | Property |

## Type declaration

<a id="api-51f20d53c3de35f8"></a>
<!-- api: T:InnoEngine.UI.UiDocumentFragment 51b600e21a19cd6f9c4733f55ff4ff6e01c9b1ab8873a7d8340ca87ec3a3fa02 -->

```csharp
public readonly struct InnoEngine.UI.UiDocumentFragment : System.IEquatable<InnoEngine.UI.UiDocumentFragment>
```

Contains a language-tagged fragment for a backend-specific document mutation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L112).

## `#ctor`

<a id="api-dcb151e930bc6b50"></a>
<!-- api: M:InnoEngine.UI.UiDocumentFragment.#ctor(InnoEngine.UI.UiDocumentLanguageId,System.String) 1add25b1dc17d4d5cbfbfb88a4d674b6b5a81d35d4732da4fcc9b5b62cb82d1d -->

```csharp
public InnoEngine.UI.UiDocumentFragment.UiDocumentFragment(InnoEngine.UI.UiDocumentLanguageId language, string text)
```

Creates a validated source fragment.

**Parameter `language`:** Explicit fragment language.

**Parameter `text`:** Complete fragment text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L123).

## `Equals`

<a id="api-d5fc8ef7098cc8a2"></a>
<!-- api: M:InnoEngine.UI.UiDocumentFragment.Equals(InnoEngine.UI.UiDocumentFragment) 05ff06e08bc88aeef96959dab05c5cdd94eaff0b1f9098d53f7d09ab1ad387d0 -->

```csharp
public bool InnoEngine.UI.UiDocumentFragment.Equals(InnoEngine.UI.UiDocumentFragment other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L112).

## `Equals`

<a id="api-12d52e5baa6ea70a"></a>
<!-- api: M:InnoEngine.UI.UiDocumentFragment.Equals(System.Object) 59caa875271fc72408df73378a6035c33589aedd79169440979e3888b9d0d379 -->

```csharp
public override bool InnoEngine.UI.UiDocumentFragment.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L112).

## `GetHashCode`

<a id="api-cbef2d456bc890ac"></a>
<!-- api: M:InnoEngine.UI.UiDocumentFragment.GetHashCode bba4317613ebbf0642dd5e6dfcd76b8ed6efe4924f57087c8da8daffff2d5de4 -->

```csharp
public override int InnoEngine.UI.UiDocumentFragment.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L112).

## `op_Equality`

<a id="api-278a495ccb4df283"></a>
<!-- api: M:InnoEngine.UI.UiDocumentFragment.op_Equality(InnoEngine.UI.UiDocumentFragment,InnoEngine.UI.UiDocumentFragment) b23d49e01399f4f687ce735e1827e8485177d9e700e2e74b707014d2285d4751 -->

```csharp
public static bool InnoEngine.UI.UiDocumentFragment.operator ==(InnoEngine.UI.UiDocumentFragment left, InnoEngine.UI.UiDocumentFragment right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L112).

## `op_Inequality`

<a id="api-c9f1602baaed762b"></a>
<!-- api: M:InnoEngine.UI.UiDocumentFragment.op_Inequality(InnoEngine.UI.UiDocumentFragment,InnoEngine.UI.UiDocumentFragment) c0f99edae4d98cdc853bc39b63e4f817c77cdd5992eadf97f38f577e3d7757ed -->

```csharp
public static bool InnoEngine.UI.UiDocumentFragment.operator !=(InnoEngine.UI.UiDocumentFragment left, InnoEngine.UI.UiDocumentFragment right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L112).

## `ToString`

<a id="api-d74bcebb857b2955"></a>
<!-- api: M:InnoEngine.UI.UiDocumentFragment.ToString 080bdce82289be80cf28d5e7146c93218521122053b6e82b5f912b6cb10c0346 -->

```csharp
public override string InnoEngine.UI.UiDocumentFragment.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L112).

## `language`

<a id="api-95f733bc1c1583e8"></a>
<!-- api: P:InnoEngine.UI.UiDocumentFragment.language 157b8dafb9891845250d2b3bad73b176fb43b39eecfb62235fd00189dd35b4e4 -->

```csharp
public InnoEngine.UI.UiDocumentLanguageId InnoEngine.UI.UiDocumentFragment.language { get; }
```

Gets the explicitly selected fragment language.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L137).

## `text`

<a id="api-ecd9bb7b21ef3944"></a>
<!-- api: P:InnoEngine.UI.UiDocumentFragment.text 195a4b31aaf5da712f6607b43e560dbb5d0f78892c9fbde35a5f2403ec7fbbba -->

```csharp
public string InnoEngine.UI.UiDocumentFragment.text { get; }
```

Gets the complete fragment text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L141).
