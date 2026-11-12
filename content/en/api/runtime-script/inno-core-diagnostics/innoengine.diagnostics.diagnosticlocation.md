---
title: "DiagnosticLocation"
description: "Reference for DiagnosticLocation in Inno.Core.Diagnostics."
uid: api.inno.core.diagnostics.runtime-script.9d266bbf3acaed24
kind: api
owners:
  - Inno.Core.Diagnostics
apiSurface: runtime-script
contracts:
  - project.inno-core-diagnostics#producer-and-presentation-contract
  - manual.scripting.use-script-api
---
# `DiagnosticLocation`

This reference describes `DiagnosticLocation` in `Inno.Core.Diagnostics`. Read the [shared contract](../../projects/inno-core-diagnostics.md#producer-and-presentation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Diagnostics.DiagnosticLocation>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5b3b714d186bce53) | Method |
| [`Equals`](#api-97349d6b4476e27b) | Method |
| [`Equals`](#api-3bf712a9b528696e) | Method |
| [`GetHashCode`](#api-757b1dcbc8eb28f9) | Method |
| [`op_Equality`](#api-e433cce171591074) | Method |
| [`op_Inequality`](#api-d852d97f2615b51c) | Method |
| [`column`](#api-311bf88fdf2d671c) | Property |
| [`line`](#api-38154d52aa630eba) | Property |
| [`sourcePath`](#api-9823f76ab13234c0) | Property |

## Type declaration

<a id="api-9d266bbf3acaed24"></a>
<!-- api: T:InnoEngine.Diagnostics.DiagnosticLocation 91911baa003de5c0171b92fe5e64ae28c2d838f914032ccc934999dcf5c4a3ce -->

```csharp
public readonly struct InnoEngine.Diagnostics.DiagnosticLocation : System.IEquatable<InnoEngine.Diagnostics.DiagnosticLocation>
```

Identifies an optional source location associated with a diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L8).

## `#ctor`

<a id="api-5b3b714d186bce53"></a>
<!-- api: M:InnoEngine.Diagnostics.DiagnosticLocation.#ctor(System.String,System.Int32,System.Int32) 86e8b7809a88a67b8ac0c6c66eae06209bd6106af3cbc29a617e4db2ae0ff6dc -->

```csharp
public InnoEngine.Diagnostics.DiagnosticLocation.DiagnosticLocation(string sourcePath, int line = 0, int column = 0)
```

Creates a source location.

**Parameter `sourcePath`:** The source path associated with the diagnostic.

**Parameter `line`:** The one-based line number, or zero when it is unavailable.

**Parameter `column`:** The one-based column number, or zero when it is unavailable.

**Throws `System.ArgumentException`:** Thrown when `sourcePath` is empty or contains only whitespace.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `line` or `column` is negative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L28).

## `Equals`

<a id="api-97349d6b4476e27b"></a>
<!-- api: M:InnoEngine.Diagnostics.DiagnosticLocation.Equals(InnoEngine.Diagnostics.DiagnosticLocation) 053695e2f5dcec2c86965424a909422a2c9a4e0036ea223d335b8258cea5b172 -->

```csharp
public bool InnoEngine.Diagnostics.DiagnosticLocation.Equals(InnoEngine.Diagnostics.DiagnosticLocation other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `other`:** The value to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L68).

## `Equals`

<a id="api-3bf712a9b528696e"></a>
<!-- api: M:InnoEngine.Diagnostics.DiagnosticLocation.Equals(System.Object) 3ab7b47143aaaa7cbd275cc921fac098684b25690d6e4d4c1b61dce06fffd848 -->

```csharp
public override bool InnoEngine.Diagnostics.DiagnosticLocation.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L82).

## `GetHashCode`

<a id="api-757b1dcbc8eb28f9"></a>
<!-- api: M:InnoEngine.Diagnostics.DiagnosticLocation.GetHashCode da94e2f7838cd483556cfa63b7ea9105044ddf51a5e1f52413d19f8355682684 -->

```csharp
public override int InnoEngine.Diagnostics.DiagnosticLocation.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L90).

## `op_Equality`

<a id="api-e433cce171591074"></a>
<!-- api: M:InnoEngine.Diagnostics.DiagnosticLocation.op_Equality(InnoEngine.Diagnostics.DiagnosticLocation,InnoEngine.Diagnostics.DiagnosticLocation) 75c401e1d391867fa8e79a20718d9bf719e4fecdb4be37b0fb2140d86e95bf65 -->

```csharp
public static bool InnoEngine.Diagnostics.DiagnosticLocation.operator ==(InnoEngine.Diagnostics.DiagnosticLocation left, InnoEngine.Diagnostics.DiagnosticLocation right)
```

Determines whether two locations are equal.

**Parameter `left`:** The left location.

**Parameter `right`:** The right location.

**Returns:** `true` when both locations identify the same source position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L104).

## `op_Inequality`

<a id="api-d852d97f2615b51c"></a>
<!-- api: M:InnoEngine.Diagnostics.DiagnosticLocation.op_Inequality(InnoEngine.Diagnostics.DiagnosticLocation,InnoEngine.Diagnostics.DiagnosticLocation) 7d293d75376589a556dfb435ecaaa7e92eb0c3aedcdc3594b495bbf54144c0d5 -->

```csharp
public static bool InnoEngine.Diagnostics.DiagnosticLocation.operator !=(InnoEngine.Diagnostics.DiagnosticLocation left, InnoEngine.Diagnostics.DiagnosticLocation right)
```

Determines whether two locations are different.

**Parameter `left`:** The left location.

**Parameter `right`:** The right location.

**Returns:** `true` when the locations identify different source positions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L121).

## `column`

<a id="api-311bf88fdf2d671c"></a>
<!-- api: P:InnoEngine.Diagnostics.DiagnosticLocation.column a543fc3af4109178d3463dafcef5e4f6c2830586164e6fd8423873ae93a6f5fc -->

```csharp
public int InnoEngine.Diagnostics.DiagnosticLocation.column { get; }
```

Gets the one-based source column, or zero when it is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L57).

## `line`

<a id="api-38154d52aa630eba"></a>
<!-- api: P:InnoEngine.Diagnostics.DiagnosticLocation.line 289e6456b150cc117c5e00e13cd6e1a351001213d444a5f1daaeb193d7df8f98 -->

```csharp
public int InnoEngine.Diagnostics.DiagnosticLocation.line { get; }
```

Gets the one-based source line, or zero when it is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L52).

## `sourcePath`

<a id="api-9823f76ab13234c0"></a>
<!-- api: P:InnoEngine.Diagnostics.DiagnosticLocation.sourcePath 4dfc07840aac816c876a03847ceee48df42ee94dee85431b391a11419dbea7d3 -->

```csharp
public string InnoEngine.Diagnostics.DiagnosticLocation.sourcePath { get; }
```

Gets the source path associated with the diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/DiagnosticLocation.cs#L47).
