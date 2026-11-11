---
title: "DocumentationSymbolInfo"
description: "Reference for DocumentationSymbolInfo in Inno.Tooling.Documentation."
uid: api.inno.tooling.documentation.23c382091e047501
kind: api
owners:
  - Inno.Tooling.Documentation
apiSurface: source-clr
contracts:
  - project.inno-tooling-documentation#failure-and-ownership-boundaries
---
# `DocumentationSymbolInfo`

This reference describes `DocumentationSymbolInfo` in `Inno.Tooling.Documentation`. Read the [shared contract](../../projects/inno-tooling-documentation.md#failure-and-ownership-boundaries) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Tooling.Documentation.DocumentationSymbolInfo>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f76b82b0cc633d45) | Method |
| [`Deconstruct`](#api-f3dcd051c14c92ce) | Method |
| [`Equals`](#api-7ca65169953739c2) | Method |
| [`Equals`](#api-da6a6b3217ab9145) | Method |
| [`GetHashCode`](#api-37201e5e7f8fc299) | Method |
| [`op_Equality`](#api-45a25957c7a6af14) | Method |
| [`op_Inequality`](#api-3766d5359b3fb2de) | Method |
| [`ToString`](#api-f60c212f1d6d0548) | Method |
| [`anchor`](#api-7c747bff25515883) | Property |
| [`code`](#api-506764ac2cbb42bb) | Property |
| [`signatureIdentity`](#api-09345e0f6181e1d0) | Property |

## Type declaration

<a id="api-23c382091e047501"></a>
<!-- api: T:Inno.Tooling.Documentation.DocumentationSymbolInfo 27391b0f56c0c638977034b009002ce372b780b7fc6a7524035e69035993b256 -->

```csharp
public sealed record Inno.Tooling.Documentation.DocumentationSymbolInfo : System.IEquatable<Inno.Tooling.Documentation.DocumentationSymbolInfo>
```

Describes an authored symbol's canonical anchor, declared signature identity and visible code.
These facts support source comparisons; they do not certify behavioral prose or examples.

**Parameter `anchor`:** Explicit API anchor derived from the exact XML documentation identity.

**Parameter `signatureIdentity`:** Authored SHA-256 signature mapping to compare with the selected source manifest.

**Parameter `code`:** Original C# code fences within the symbol's section, or inline code in its legacy declaration row.
An empty list provides no visible-declaration evidence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationSymbolInfo.cs#L19).

## `#ctor`

<a id="api-f76b82b0cc633d45"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationSymbolInfo.#ctor(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String}) 88f3b1433cdde7bb9895f1168e80b1fa79e95161fc8d57882bfa605929a3a0b4 -->

```csharp
public Inno.Tooling.Documentation.DocumentationSymbolInfo.DocumentationSymbolInfo(string anchor, string signatureIdentity, System.Collections.Generic.IReadOnlyList<string> code)
```

Describes an authored symbol's canonical anchor, declared signature identity and visible code.
These facts support source comparisons; they do not certify behavioral prose or examples.

**Parameter `anchor`:** Explicit API anchor derived from the exact XML documentation identity.

**Parameter `signatureIdentity`:** Authored SHA-256 signature mapping to compare with the selected source manifest.

**Parameter `code`:** Original C# code fences within the symbol's section, or inline code in its legacy declaration row.
An empty list provides no visible-declaration evidence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationSymbolInfo.cs#L19).

## `Deconstruct`

<a id="api-f3dcd051c14c92ce"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationSymbolInfo.Deconstruct(System.String@,System.String@,System.Collections.Generic.IReadOnlyList{System.String}@) f3cde3603025658cf8d47e0e99906bfc83a2acb408c9072cfe0c1f8183011143 -->

```csharp
public void Inno.Tooling.Documentation.DocumentationSymbolInfo.Deconstruct(out string anchor, out string signatureIdentity, out System.Collections.Generic.IReadOnlyList<string> code)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationSymbolInfo.cs#L19).

## `Equals`

<a id="api-7ca65169953739c2"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationSymbolInfo.Equals(Inno.Tooling.Documentation.DocumentationSymbolInfo) 0bfc16a50f65eacc6912cf1b5e695eebb16c1bf37791b4f811700e127e0a2823 -->

```csharp
public bool Inno.Tooling.Documentation.DocumentationSymbolInfo.Equals(Inno.Tooling.Documentation.DocumentationSymbolInfo? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationSymbolInfo.cs#L19).

## `Equals`

<a id="api-da6a6b3217ab9145"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationSymbolInfo.Equals(System.Object) 25872a5e62fca0f185fc40a9371d7bd06d2fde39b9a6190274cfce3ff995b99a -->

```csharp
public override bool Inno.Tooling.Documentation.DocumentationSymbolInfo.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationSymbolInfo.cs#L19).

## `GetHashCode`

<a id="api-37201e5e7f8fc299"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationSymbolInfo.GetHashCode 27019d3cb40f4083aee6c4878b505612bddef30302272448d5e1612939d94fd2 -->

```csharp
public override int Inno.Tooling.Documentation.DocumentationSymbolInfo.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationSymbolInfo.cs#L19).

## `op_Equality`

<a id="api-45a25957c7a6af14"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationSymbolInfo.op_Equality(Inno.Tooling.Documentation.DocumentationSymbolInfo,Inno.Tooling.Documentation.DocumentationSymbolInfo) c26c5266533b01e3fa26105d56112654c689321bf00bacd142c41ec6d03bcdc7 -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationSymbolInfo.operator ==(Inno.Tooling.Documentation.DocumentationSymbolInfo? left, Inno.Tooling.Documentation.DocumentationSymbolInfo? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationSymbolInfo.cs#L19).

## `op_Inequality`

<a id="api-3766d5359b3fb2de"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationSymbolInfo.op_Inequality(Inno.Tooling.Documentation.DocumentationSymbolInfo,Inno.Tooling.Documentation.DocumentationSymbolInfo) 77e137588cd179dbcdd0a2d6fc3a0f0e3b85f502576156ef0538c9814b60b07c -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationSymbolInfo.operator !=(Inno.Tooling.Documentation.DocumentationSymbolInfo? left, Inno.Tooling.Documentation.DocumentationSymbolInfo? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationSymbolInfo.cs#L19).

## `ToString`

<a id="api-f60c212f1d6d0548"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationSymbolInfo.ToString 1b8fcb569815c583427307306b95f4163a41cf4be059a29f35a05005cd74eca6 -->

```csharp
public override string Inno.Tooling.Documentation.DocumentationSymbolInfo.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationSymbolInfo.cs#L19).

## `anchor`

<a id="api-7c747bff25515883"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationSymbolInfo.anchor 475fa62692acf3a47fb14920842e31f85d5b0e8338132deca74dcaf600611bf6 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationSymbolInfo.anchor { get; init; }
```

Explicit API anchor derived from the exact XML documentation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationSymbolInfo.cs#L20).

## `code`

<a id="api-506764ac2cbb42bb"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationSymbolInfo.code e90f07df54c271f197f11556e0b364d35024de98d2c3e2fe3f22c3dc2a21b902 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Tooling.Documentation.DocumentationSymbolInfo.code { get; init; }
```

Original C# code fences within the symbol's section, or inline code in its legacy declaration row.
An empty list provides no visible-declaration evidence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationSymbolInfo.cs#L22).

## `signatureIdentity`

<a id="api-09345e0f6181e1d0"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationSymbolInfo.signatureIdentity 3ac1725b283d521295eb5d64ed415664a646fce8225b589e142a991ef6798589 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationSymbolInfo.signatureIdentity { get; init; }
```

Authored SHA-256 signature mapping to compare with the selected source manifest.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationSymbolInfo.cs#L21).
