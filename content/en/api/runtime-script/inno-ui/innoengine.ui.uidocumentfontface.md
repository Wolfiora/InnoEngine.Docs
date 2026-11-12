---
title: "UiDocumentFontFace"
description: "Reference for UiDocumentFontFace in Inno.UI."
uid: api.inno.ui.runtime-script.0e989392d00bc083
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiDocumentFontFace`

This reference describes `UiDocumentFontFace` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.UI.UiDocumentFontFace>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c9bb04148664cb12) | Method |
| [`Equals`](#api-27c6b5b987d3fc99) | Method |
| [`Equals`](#api-27db06026fa74966) | Method |
| [`GetHashCode`](#api-5ceef5483eecec93) | Method |
| [`op_Equality`](#api-72456dca964d6ad9) | Method |
| [`op_Inequality`](#api-7c8734313ee5b9bd) | Method |
| [`ToString`](#api-fd6f96d16f0f9854) | Method |
| [`assetId`](#api-1dfa280fe052a045) | Property |
| [`family`](#api-55d92e5190ffe902) | Property |
| [`style`](#api-ff5f1108877ffe38) | Property |
| [`weight`](#api-89eb4ac37accbf56) | Property |

## Type declaration

<a id="api-0e989392d00bc083"></a>
<!-- api: T:InnoEngine.UI.UiDocumentFontFace ae26bb1a69005e30b5e133d3bcc906f3d5140d907e644e445f07f18ca0f0da76 -->

```csharp
public readonly struct InnoEngine.UI.UiDocumentFontFace : System.IEquatable<InnoEngine.UI.UiDocumentFontFace>
```

Identifies one imported font face owned by a single UI document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L9).

## `#ctor`

<a id="api-c9bb04148664cb12"></a>
<!-- api: M:InnoEngine.UI.UiDocumentFontFace.#ctor(System.Guid,System.String,InnoEngine.Text.TextFontStyle,System.Int32) 50985d8e640be532fe6b6e37617017a7865c18a27a8c0f1861091815fd2fb1ec -->

```csharp
public InnoEngine.UI.UiDocumentFontFace.UiDocumentFontFace(System.Guid assetId, string family, InnoEngine.Text.TextFontStyle style, int weight)
```

Creates a font dependency with its document-private family.

**Parameter `assetId`:** Persistent font asset identity.

**Parameter `family`:** Private family referenced by canonical document text.

**Parameter `style`:** Declared face style.

**Parameter `weight`:** Declared face weight.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L26).

## `Equals`

<a id="api-27c6b5b987d3fc99"></a>
<!-- api: M:InnoEngine.UI.UiDocumentFontFace.Equals(InnoEngine.UI.UiDocumentFontFace) bd4ce44fb4f250a7062878da851f605b3948d0fc00bc7b8b0ac0973fdbbce6b5 -->

```csharp
public bool InnoEngine.UI.UiDocumentFontFace.Equals(InnoEngine.UI.UiDocumentFontFace other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L9).

## `Equals`

<a id="api-27db06026fa74966"></a>
<!-- api: M:InnoEngine.UI.UiDocumentFontFace.Equals(System.Object) 89faeebc0afe4d28f608778f6bf9b6aea7a1c860acb88aec69d96034e0a29e96 -->

```csharp
public override bool InnoEngine.UI.UiDocumentFontFace.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L9).

## `GetHashCode`

<a id="api-5ceef5483eecec93"></a>
<!-- api: M:InnoEngine.UI.UiDocumentFontFace.GetHashCode 68de5648ee62ef251be92d80fff047f0ce2ff307612775778027bddaabeaf820 -->

```csharp
public override int InnoEngine.UI.UiDocumentFontFace.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L9).

## `op_Equality`

<a id="api-72456dca964d6ad9"></a>
<!-- api: M:InnoEngine.UI.UiDocumentFontFace.op_Equality(InnoEngine.UI.UiDocumentFontFace,InnoEngine.UI.UiDocumentFontFace) 676fb0caaf5f6daad10e68411d1721c69ecd1f58767f8015febb644de86ba69c -->

```csharp
public static bool InnoEngine.UI.UiDocumentFontFace.operator ==(InnoEngine.UI.UiDocumentFontFace left, InnoEngine.UI.UiDocumentFontFace right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L9).

## `op_Inequality`

<a id="api-7c8734313ee5b9bd"></a>
<!-- api: M:InnoEngine.UI.UiDocumentFontFace.op_Inequality(InnoEngine.UI.UiDocumentFontFace,InnoEngine.UI.UiDocumentFontFace) 56fdd8e7eac474603cfc6d906ce35ebfeaf88ec2868d9e2e29fde94255cb4733 -->

```csharp
public static bool InnoEngine.UI.UiDocumentFontFace.operator !=(InnoEngine.UI.UiDocumentFontFace left, InnoEngine.UI.UiDocumentFontFace right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L9).

## `ToString`

<a id="api-fd6f96d16f0f9854"></a>
<!-- api: M:InnoEngine.UI.UiDocumentFontFace.ToString 986c8a1df5d7a772ade6e23bde503d6a71a37d2837cf6caa1c37f8fff557d58c -->

```csharp
public override string InnoEngine.UI.UiDocumentFontFace.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L9).

## `assetId`

<a id="api-1dfa280fe052a045"></a>
<!-- api: P:InnoEngine.UI.UiDocumentFontFace.assetId a7bf39404f3b6795ab6d403aee343117a41d165a25eaef580d55f1dfbf7b2935 -->

```csharp
public System.Guid InnoEngine.UI.UiDocumentFontFace.assetId { get; }
```

Gets the imported font asset identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L46).

## `family`

<a id="api-55d92e5190ffe902"></a>
<!-- api: P:InnoEngine.UI.UiDocumentFontFace.family 0301558d2ba4b15b1465a4923cf2c3093c54e142dd4ffed00a3d955f5561d3c5 -->

```csharp
public string InnoEngine.UI.UiDocumentFontFace.family { get; }
```

Gets the family referenced by the document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L50).

## `style`

<a id="api-ff5f1108877ffe38"></a>
<!-- api: P:InnoEngine.UI.UiDocumentFontFace.style 83be623a7697bd9577fc32311145332ba6680a7d76b4868b524ba739abc81779 -->

```csharp
public InnoEngine.Text.TextFontStyle InnoEngine.UI.UiDocumentFontFace.style { get; }
```

Gets the declared style.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L54).

## `weight`

<a id="api-89eb4ac37accbf56"></a>
<!-- api: P:InnoEngine.UI.UiDocumentFontFace.weight 2aeff5e3b0c092640752ef4a84a13b53a6d14f6bc71ea5d131212a96d6988901 -->

```csharp
public int InnoEngine.UI.UiDocumentFontFace.weight { get; }
```

Gets the declared weight.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L58).
