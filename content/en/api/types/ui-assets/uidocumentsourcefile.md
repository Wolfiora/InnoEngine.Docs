---
title: "UiDocumentSourceFile"
description: "Reference for UiDocumentSourceFile in Inno.UI.Assets."
uid: api.inno.ui.assets.ad728b8164c50f97
kind: api
owners:
  - Inno.UI.Assets
apiSurface: source-clr
contracts:
  - project.inno-ui-assets#import-and-generation-contract
---
# `UiDocumentSourceFile`

This reference describes `UiDocumentSourceFile` in `Inno.UI.Assets`. Read the [shared contract](../../projects/inno-ui-assets.md#import-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.UI.Assets.UiDocumentSourceFile>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-927754b5c2e8d43a) | Method |
| [`Deconstruct`](#api-f78ff940ad5c2551) | Method |
| [`Equals`](#api-cbe6599870fa361e) | Method |
| [`Equals`](#api-2187dadc1b15a4f2) | Method |
| [`GetHashCode`](#api-ec5cb0f34a1ba69f) | Method |
| [`op_Equality`](#api-131e925e222773e4) | Method |
| [`op_Inequality`](#api-e5b583bc411642a8) | Method |
| [`ToString`](#api-27cb5233f2602fa0) | Method |
| [`assetPath`](#api-71ca497a650373c8) | Property |
| [`readSource`](#api-cb77609cac7e32d9) | Property |
| [`text`](#api-1f9fdc91d8bfaeab) | Property |

## Type declaration

<a id="api-ad728b8164c50f97"></a>
<!-- api: T:Inno.UI.Assets.UiDocumentSourceFile f2383280f1dda31e18ca77119fda765d2488ab39ec2ae6633c838c392734b6f5 -->

```csharp
public sealed record Inno.UI.Assets.UiDocumentSourceFile : System.IEquatable<Inno.UI.Assets.UiDocumentSourceFile>
```

Contains immutable source text supplied to a UI language frontend.

**Parameter `assetPath`:** Original asset mount path.

**Parameter `text`:** Strictly decoded UTF-8 text.

**Parameter `readSource`:** Reads and records an optional isolated source dependency.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L22).

## `#ctor`

<a id="api-927754b5c2e8d43a"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentSourceFile.#ctor(System.String,System.String,System.Func{Inno.Assets.AssetPath,System.String}) 2213ad37c20073cd8fc21b25044af1a2aae427f3bb146ba6a95b79b342b09db1 -->

```csharp
public Inno.UI.Assets.UiDocumentSourceFile.UiDocumentSourceFile(string assetPath, string text, System.Func<Inno.Assets.AssetPath, string>? readSource = null)
```

Contains immutable source text supplied to a UI language frontend.

**Parameter `assetPath`:** Original asset mount path.

**Parameter `text`:** Strictly decoded UTF-8 text.

**Parameter `readSource`:** Reads and records an optional isolated source dependency.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L22).

## `Deconstruct`

<a id="api-f78ff940ad5c2551"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentSourceFile.Deconstruct(System.String@,System.String@,System.Func{Inno.Assets.AssetPath,System.String}@) 019728f9de6cad94bf8c44708b35dada5352db9838b4b1f3529ca25032479edb -->

```csharp
public void Inno.UI.Assets.UiDocumentSourceFile.Deconstruct(out string assetPath, out string text, out System.Func<Inno.Assets.AssetPath, string>? readSource)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L22).

## `Equals`

<a id="api-cbe6599870fa361e"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentSourceFile.Equals(Inno.UI.Assets.UiDocumentSourceFile) b7840f291eee0b28600b25fc17ab4bff34d8ebc007a00dff56b404101da2424a -->

```csharp
public bool Inno.UI.Assets.UiDocumentSourceFile.Equals(Inno.UI.Assets.UiDocumentSourceFile? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L22).

## `Equals`

<a id="api-2187dadc1b15a4f2"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentSourceFile.Equals(System.Object) 84a1a2f167f29119a3267cd47f47430ce35458011c69a7627064b9ef93809cf4 -->

```csharp
public override bool Inno.UI.Assets.UiDocumentSourceFile.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L22).

## `GetHashCode`

<a id="api-ec5cb0f34a1ba69f"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentSourceFile.GetHashCode 4d728ec991cc2568239400e4b05d98878190ebd4b38438405b0c974d4ca01a73 -->

```csharp
public override int Inno.UI.Assets.UiDocumentSourceFile.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L22).

## `op_Equality`

<a id="api-131e925e222773e4"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentSourceFile.op_Equality(Inno.UI.Assets.UiDocumentSourceFile,Inno.UI.Assets.UiDocumentSourceFile) 1c957ae55dd1b4b36141b369b033ee673ff1d6b17e001bdb1b1029625580d091 -->

```csharp
public static bool Inno.UI.Assets.UiDocumentSourceFile.operator ==(Inno.UI.Assets.UiDocumentSourceFile? left, Inno.UI.Assets.UiDocumentSourceFile? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L22).

## `op_Inequality`

<a id="api-e5b583bc411642a8"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentSourceFile.op_Inequality(Inno.UI.Assets.UiDocumentSourceFile,Inno.UI.Assets.UiDocumentSourceFile) df55ed9253c142b2920deaac91bc7771038cf5af05dd14875522a8bf779ebe71 -->

```csharp
public static bool Inno.UI.Assets.UiDocumentSourceFile.operator !=(Inno.UI.Assets.UiDocumentSourceFile? left, Inno.UI.Assets.UiDocumentSourceFile? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L22).

## `ToString`

<a id="api-27cb5233f2602fa0"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentSourceFile.ToString 6e79f5b913165cb2b4e5386a558dd7d478f82ac9f95584c09ce11f23a8baf9bb -->

```csharp
public override string Inno.UI.Assets.UiDocumentSourceFile.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L22).

## `assetPath`

<a id="api-71ca497a650373c8"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentSourceFile.assetPath 96274507ecb17a662eac82606f1cdf5b99fe88b0d47b5fcc3ace745206f13212 -->

```csharp
public string Inno.UI.Assets.UiDocumentSourceFile.assetPath { get; init; }
```

Original asset mount path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L23).

## `readSource`

<a id="api-cb77609cac7e32d9"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentSourceFile.readSource 6a1f88d147615246fd233a9b81f92a35af2caf8a327c3586e886e8aef8b1463e -->

```csharp
public System.Func<Inno.Assets.AssetPath, string>? Inno.UI.Assets.UiDocumentSourceFile.readSource { get; init; }
```

Reads and records an optional isolated source dependency.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L25).

## `text`

<a id="api-1f9fdc91d8bfaeab"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentSourceFile.text aca47049ef1f2dcd1958bd9b678a9850a348ac292eb3aae49963fab55d2678d0 -->

```csharp
public string Inno.UI.Assets.UiDocumentSourceFile.text { get; init; }
```

Strictly decoded UTF-8 text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L24).
