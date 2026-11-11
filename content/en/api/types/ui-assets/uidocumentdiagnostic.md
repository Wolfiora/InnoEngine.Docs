---
title: "UiDocumentDiagnostic"
description: "Reference for UiDocumentDiagnostic in Inno.UI.Assets."
uid: api.inno.ui.assets.40e6e893c3c97988
kind: api
owners:
  - Inno.UI.Assets
apiSurface: source-clr
contracts:
  - project.inno-ui-assets#import-and-generation-contract
---
# `UiDocumentDiagnostic`

This reference describes `UiDocumentDiagnostic` in `Inno.UI.Assets`. Read the [shared contract](../../projects/inno-ui-assets.md#import-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.UI.Assets.UiDocumentDiagnostic>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-94f76afbdde49a90) | Method |
| [`Deconstruct`](#api-4b7e544b5a8adbce) | Method |
| [`Equals`](#api-d17eb9b348cbfb87) | Method |
| [`Equals`](#api-bf68766c5e548788) | Method |
| [`GetHashCode`](#api-9f9a86951a9247c2) | Method |
| [`op_Equality`](#api-10d1297a8dd62b9a) | Method |
| [`op_Inequality`](#api-d119972c4042c999) | Method |
| [`ToString`](#api-1998f52398caf77e) | Method |
| [`code`](#api-78026b04e8059836) | Property |
| [`column`](#api-f837e1c91ce96ba5) | Property |
| [`line`](#api-07ffd182a1340210) | Property |
| [`message`](#api-466b81dac3ac165f) | Property |

## Type declaration

<a id="api-40e6e893c3c97988"></a>
<!-- api: T:Inno.UI.Assets.UiDocumentDiagnostic 5b2325ac8b1f919202e2ab7651e82a38e0adc01aa467c43c320d96cf9407c18d -->

```csharp
public sealed record Inno.UI.Assets.UiDocumentDiagnostic : System.IEquatable<Inno.UI.Assets.UiDocumentDiagnostic>
```

Reports a language-neutral source problem.

**Parameter `code`:** Stable diagnostic code.

**Parameter `message`:** Actionable description.

**Parameter `line`:** One-based source line.

**Parameter `column`:** One-based source column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L43).

## `#ctor`

<a id="api-94f76afbdde49a90"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentDiagnostic.#ctor(System.String,System.String,System.Int32,System.Int32) 2f49c3b2553cb4f098ca7de4f931f8cdd009eadd4d9acd88da7f2c8399f67043 -->

```csharp
public Inno.UI.Assets.UiDocumentDiagnostic.UiDocumentDiagnostic(string code, string message, int line, int column)
```

Reports a language-neutral source problem.

**Parameter `code`:** Stable diagnostic code.

**Parameter `message`:** Actionable description.

**Parameter `line`:** One-based source line.

**Parameter `column`:** One-based source column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L43).

## `Deconstruct`

<a id="api-4b7e544b5a8adbce"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentDiagnostic.Deconstruct(System.String@,System.String@,System.Int32@,System.Int32@) b9a9cf635056f84abeba5ff88747fb06c19301f8a19085ffb54a954fd73ffa72 -->

```csharp
public void Inno.UI.Assets.UiDocumentDiagnostic.Deconstruct(out string code, out string message, out int line, out int column)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L43).

## `Equals`

<a id="api-d17eb9b348cbfb87"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentDiagnostic.Equals(Inno.UI.Assets.UiDocumentDiagnostic) 6d46a98819d439d0b389199d1108577d15e24a1d99365dd32c13946820713cae -->

```csharp
public bool Inno.UI.Assets.UiDocumentDiagnostic.Equals(Inno.UI.Assets.UiDocumentDiagnostic? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L43).

## `Equals`

<a id="api-bf68766c5e548788"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentDiagnostic.Equals(System.Object) 1962d8bb24ca798415b281653e69b428a8d1dfa7870dde4113039d0e08abdcbd -->

```csharp
public override bool Inno.UI.Assets.UiDocumentDiagnostic.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L43).

## `GetHashCode`

<a id="api-9f9a86951a9247c2"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentDiagnostic.GetHashCode d3928961aa7d640ddb5d19c9ee7763efa7c0fd97d6e848b14d73b702f83ed4f9 -->

```csharp
public override int Inno.UI.Assets.UiDocumentDiagnostic.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L43).

## `op_Equality`

<a id="api-10d1297a8dd62b9a"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentDiagnostic.op_Equality(Inno.UI.Assets.UiDocumentDiagnostic,Inno.UI.Assets.UiDocumentDiagnostic) d197cfc9384d640e162f9c8396df4a4ff87a114562ed0361339e0893fec1acf5 -->

```csharp
public static bool Inno.UI.Assets.UiDocumentDiagnostic.operator ==(Inno.UI.Assets.UiDocumentDiagnostic? left, Inno.UI.Assets.UiDocumentDiagnostic? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L43).

## `op_Inequality`

<a id="api-d119972c4042c999"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentDiagnostic.op_Inequality(Inno.UI.Assets.UiDocumentDiagnostic,Inno.UI.Assets.UiDocumentDiagnostic) 859b60dc241e36ee9241d3a1518e4dac6c3033e0f23c3c0bfc27751fdbf5af76 -->

```csharp
public static bool Inno.UI.Assets.UiDocumentDiagnostic.operator !=(Inno.UI.Assets.UiDocumentDiagnostic? left, Inno.UI.Assets.UiDocumentDiagnostic? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L43).

## `ToString`

<a id="api-1998f52398caf77e"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentDiagnostic.ToString 0689257f351000264afb8e6e01a8ca64e7ce7463331005fb45817fb213b68824 -->

```csharp
public override string Inno.UI.Assets.UiDocumentDiagnostic.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L43).

## `code`

<a id="api-78026b04e8059836"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentDiagnostic.code 3bbfc51563a090d0fdbc597e590126da802724519f447e32a834cb8340084577 -->

```csharp
public string Inno.UI.Assets.UiDocumentDiagnostic.code { get; init; }
```

Stable diagnostic code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L44).

## `column`

<a id="api-f837e1c91ce96ba5"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentDiagnostic.column 63d064ae1cb763e5970498e771fce006e4b7d91a9bba9db84750ff98dc9d685c -->

```csharp
public int Inno.UI.Assets.UiDocumentDiagnostic.column { get; init; }
```

One-based source column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L47).

## `line`

<a id="api-07ffd182a1340210"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentDiagnostic.line b8db3f37e11816db4e64fa61a3bbe1d995ab7c81457681e0bcc412ee5558e445 -->

```csharp
public int Inno.UI.Assets.UiDocumentDiagnostic.line { get; init; }
```

One-based source line.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L46).

## `message`

<a id="api-466b81dac3ac165f"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentDiagnostic.message 84ed351bdeaca477c1e08c37ce69094187e82e72ac3bb0beadb691228d973f80 -->

```csharp
public string Inno.UI.Assets.UiDocumentDiagnostic.message { get; init; }
```

Actionable description.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L45).
