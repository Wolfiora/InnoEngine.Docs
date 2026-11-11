---
title: "DiagnosticLocation"
description: "Reference for DiagnosticLocation in Inno.Core.Diagnostics."
uid: api.inno.core.diagnostics.82ba017f2a168173
kind: api
owners:
  - Inno.Core.Diagnostics
apiSurface: source-clr
contracts:
  - project.inno-core-diagnostics#producer-and-presentation-contract
---
# `DiagnosticLocation`

This reference describes `DiagnosticLocation` in `Inno.Core.Diagnostics`. Read the [shared contract](../../projects/inno-core-diagnostics.md#producer-and-presentation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Diagnostics.DiagnosticLocation>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f22b0d3ff5b1440a) | Method |
| [`Equals`](#api-5740a1db82a601ed) | Method |
| [`Equals`](#api-a6e23a90b560a62b) | Method |
| [`GetHashCode`](#api-68ec11e2111e412e) | Method |
| [`op_Equality`](#api-cb408902f7049ab4) | Method |
| [`op_Inequality`](#api-9a67e44078e8c953) | Method |
| [`column`](#api-b2cba54e309e3d63) | Property |
| [`line`](#api-bca3780f892aa73e) | Property |
| [`sourcePath`](#api-b6f86ef480b5a196) | Property |

## Type declaration

<a id="api-82ba017f2a168173"></a>
<!-- api: T:Inno.Core.Diagnostics.DiagnosticLocation 2e30ab56345d5991958df0c396fb17a62b92743cd01cc1b1fcb5619a1e86e3ea -->

```csharp
public readonly struct Inno.Core.Diagnostics.DiagnosticLocation : System.IEquatable<Inno.Core.Diagnostics.DiagnosticLocation>
```

Identifies an optional source location associated with a diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L8).

## `#ctor`

<a id="api-f22b0d3ff5b1440a"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticLocation.#ctor(System.String,System.Int32,System.Int32) 51d9b2e3589c14fedbc147c60f32b7ff3c17da784d505a1bf4cd6d007416e4d9 -->

```csharp
public Inno.Core.Diagnostics.DiagnosticLocation.DiagnosticLocation(string sourcePath, int line = 0, int column = 0)
```

Creates a source location.

**Parameter `sourcePath`:** The source path associated with the diagnostic.

**Parameter `line`:** The one-based line number, or zero when it is unavailable.

**Parameter `column`:** The one-based column number, or zero when it is unavailable.

**Throws `System.ArgumentException`:** Thrown when `sourcePath` is empty or contains only whitespace.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `line` or `column` is negative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L28).

## `Equals`

<a id="api-5740a1db82a601ed"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticLocation.Equals(Inno.Core.Diagnostics.DiagnosticLocation) 8369dffa8b5cc639eff8a21c677bcea9fe4b257a3c90f32d2cb960ef8ce320d6 -->

```csharp
public bool Inno.Core.Diagnostics.DiagnosticLocation.Equals(Inno.Core.Diagnostics.DiagnosticLocation other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `other`:** The value to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L68).

## `Equals`

<a id="api-a6e23a90b560a62b"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticLocation.Equals(System.Object) 9ae10fb9308589c626a28bae97455c16a7798b420ca6b7630f59f59b22fc3151 -->

```csharp
public override bool Inno.Core.Diagnostics.DiagnosticLocation.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L82).

## `GetHashCode`

<a id="api-68ec11e2111e412e"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticLocation.GetHashCode 53e5c87c4d7c424686752e32054dd28547fe5d0cf78bf4b859b2bf83cc16f100 -->

```csharp
public override int Inno.Core.Diagnostics.DiagnosticLocation.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L90).

## `op_Equality`

<a id="api-cb408902f7049ab4"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticLocation.op_Equality(Inno.Core.Diagnostics.DiagnosticLocation,Inno.Core.Diagnostics.DiagnosticLocation) 98c0696e17c2ee50a9c06f3494a1f283762c17092d7051c2256a925b6ba2874d -->

```csharp
public static bool Inno.Core.Diagnostics.DiagnosticLocation.operator ==(Inno.Core.Diagnostics.DiagnosticLocation left, Inno.Core.Diagnostics.DiagnosticLocation right)
```

Determines whether two locations are equal.

**Parameter `left`:** The left location.

**Parameter `right`:** The right location.

**Returns:** `true` when both locations identify the same source position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L104).

## `op_Inequality`

<a id="api-9a67e44078e8c953"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticLocation.op_Inequality(Inno.Core.Diagnostics.DiagnosticLocation,Inno.Core.Diagnostics.DiagnosticLocation) e5570fb7fb610568603f59280d2c7c64cafa948b9c1d744667640679de9dd162 -->

```csharp
public static bool Inno.Core.Diagnostics.DiagnosticLocation.operator !=(Inno.Core.Diagnostics.DiagnosticLocation left, Inno.Core.Diagnostics.DiagnosticLocation right)
```

Determines whether two locations are different.

**Parameter `left`:** The left location.

**Parameter `right`:** The right location.

**Returns:** `true` when the locations identify different source positions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L121).

## `column`

<a id="api-b2cba54e309e3d63"></a>
<!-- api: P:Inno.Core.Diagnostics.DiagnosticLocation.column 09e46406d1fcdedab362390a378ea6349bfcbcb1fd22311de1b6eb71a04cbf96 -->

```csharp
public int Inno.Core.Diagnostics.DiagnosticLocation.column { get; }
```

Gets the one-based source column, or zero when it is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L57).

## `line`

<a id="api-bca3780f892aa73e"></a>
<!-- api: P:Inno.Core.Diagnostics.DiagnosticLocation.line 426f49a6a89718191c915d7f8c90a1573b9abd5d9ba57a516a02d13f9a8f58b9 -->

```csharp
public int Inno.Core.Diagnostics.DiagnosticLocation.line { get; }
```

Gets the one-based source line, or zero when it is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L52).

## `sourcePath`

<a id="api-b6f86ef480b5a196"></a>
<!-- api: P:Inno.Core.Diagnostics.DiagnosticLocation.sourcePath 1fb67c1dc801fbbaa1f46828dffa45a0a4bc941fc56cf21ff8c57f05d804cf12 -->

```csharp
public string Inno.Core.Diagnostics.DiagnosticLocation.sourcePath { get; }
```

Gets the source path associated with the diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L47).
