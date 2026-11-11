---
title: "Diagnostic"
description: "Reference for Diagnostic in Inno.Core.Diagnostics."
uid: api.inno.core.diagnostics.fe8b5aba268b5f60
kind: api
owners:
  - Inno.Core.Diagnostics
apiSurface: source-clr
contracts:
  - project.inno-core-diagnostics#producer-and-presentation-contract
---
# `Diagnostic`

This reference describes `Diagnostic` in `Inno.Core.Diagnostics`. Read the [shared contract](../../projects/inno-core-diagnostics.md#producer-and-presentation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3361cf58aec66e78) | Method |
| [`Error`](#api-6b181e8f0c002838) | Method |
| [`Info`](#api-1a6bc4ff22b1b8cb) | Method |
| [`Warning`](#api-f73e9cddd00c9cc5) | Method |
| [`code`](#api-cc5f1d3f3b541fb0) | Property |
| [`location`](#api-0b52a53ac00e14c4) | Property |
| [`message`](#api-b21f83baeb5a16cb) | Property |
| [`objectId`](#api-fac126a2b0b7ccb9) | Property |
| [`semanticId`](#api-74432e56f69e9230) | Property |
| [`severity`](#api-a3191662f98a1f14) | Property |

## Type declaration

<a id="api-fe8b5aba268b5f60"></a>
<!-- api: T:Inno.Core.Diagnostics.Diagnostic e9494c94bbcc7407311461e629febbc0b82b7d0934d84debc7a094316edafb90 -->

```csharp
public sealed class Inno.Core.Diagnostics.Diagnostic
```

Represents one current issue reported by a compiler, importer, validator, or other diagnostic producer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L8).

## `#ctor`

<a id="api-3361cf58aec66e78"></a>
<!-- api: M:Inno.Core.Diagnostics.Diagnostic.#ctor(System.String,System.String,Inno.Core.Diagnostics.DiagnosticSeverity,System.String,System.Nullable{System.Guid},System.Nullable{Inno.Core.Diagnostics.DiagnosticLocation}) 472f5f3660d44531e98c40a9ea0a2664116e76f53467698b8ea7344005342471 -->

```csharp
public Inno.Core.Diagnostics.Diagnostic.Diagnostic(string code, string message, Inno.Core.Diagnostics.DiagnosticSeverity severity, string? semanticId = null, System.Guid? objectId = null, Inno.Core.Diagnostics.DiagnosticLocation? location = null)
```

Creates a neutral diagnostic while keeping protocol, object and file identities distinct.

**Parameter `code`:** The stable issue code within its producer.

**Parameter `message`:** The actionable human-readable message.

**Parameter `severity`:** The common engine impact classification.

**Parameter `semanticId`:** An optional extension or protocol identifier, never interpreted as a file path.

**Parameter `objectId`:** An optional persistent object identity, never a runtime handle.

**Parameter `location`:** An optional actual source file location.

**Throws `System.ArgumentException`:** The code is empty or an object identity is empty.

**Throws `System.ArgumentNullException`:** The message is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L37).

## `Error`

<a id="api-6b181e8f0c002838"></a>
<!-- api: M:Inno.Core.Diagnostics.Diagnostic.Error(System.String,System.String,System.Nullable{Inno.Core.Diagnostics.DiagnosticLocation}) 1995ee90e00faf1748569fd40f19232a4e254f5dd2886f9611b8a4a5ae1c1855 -->

```csharp
public static Inno.Core.Diagnostics.Diagnostic Inno.Core.Diagnostics.Diagnostic.Error(string code, string message, Inno.Core.Diagnostics.DiagnosticLocation? location = null)
```

Creates an error diagnostic value without publishing it.

**Parameter `code`:** The stable producer-defined code, or an empty string when no code is available.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `location`:** The related source location, or `null` when unavailable.

**Returns:** An immutable error diagnostic that can be supplied to `Inno.Core.Diagnostics.Diagnostics.Set(System.String,Inno.Core.Diagnostics.Diagnostic)`.

**Throws `System.ArgumentNullException`:** Thrown when `message` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L132).

## `Info`

<a id="api-1a6bc4ff22b1b8cb"></a>
<!-- api: M:Inno.Core.Diagnostics.Diagnostic.Info(System.String,System.String,System.Nullable{Inno.Core.Diagnostics.DiagnosticLocation}) 5d56b0fe363e032ed25e22bf6632b9702a22edce7127ebeeb588be4deae65ecf -->

```csharp
public static Inno.Core.Diagnostics.Diagnostic Inno.Core.Diagnostics.Diagnostic.Info(string code, string message, Inno.Core.Diagnostics.DiagnosticLocation? location = null)
```

Creates an informational diagnostic value without publishing it.

**Parameter `code`:** The stable producer-defined code, or an empty string when no code is available.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `location`:** The related source location, or `null` when unavailable.

**Returns:** An immutable informational diagnostic that can be supplied to `Inno.Core.Diagnostics.Diagnostics.Set(System.String,Inno.Core.Diagnostics.Diagnostic)`.

**Throws `System.ArgumentNullException`:** Thrown when `message` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L82).

## `Warning`

<a id="api-f73e9cddd00c9cc5"></a>
<!-- api: M:Inno.Core.Diagnostics.Diagnostic.Warning(System.String,System.String,System.Nullable{Inno.Core.Diagnostics.DiagnosticLocation}) 2d24d7f5dc96beae9348fa4db9c4f0aafc94df27329ff89dc33ada201c700286 -->

```csharp
public static Inno.Core.Diagnostics.Diagnostic Inno.Core.Diagnostics.Diagnostic.Warning(string code, string message, Inno.Core.Diagnostics.DiagnosticLocation? location = null)
```

Creates a warning diagnostic value without publishing it.

**Parameter `code`:** The stable producer-defined code, or an empty string when no code is available.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `location`:** The related source location, or `null` when unavailable.

**Returns:** An immutable warning diagnostic that can be supplied to `Inno.Core.Diagnostics.Diagnostics.Set(System.String,Inno.Core.Diagnostics.Diagnostic)`.

**Throws `System.ArgumentNullException`:** Thrown when `message` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L107).

## `code`

<a id="api-cc5f1d3f3b541fb0"></a>
<!-- api: P:Inno.Core.Diagnostics.Diagnostic.code cb18b1efba78edc9c59c362ed164aa7e2b0bdd9c6911b23d69efd9aad5982279 -->

```csharp
public string Inno.Core.Diagnostics.Diagnostic.code { get; }
```

Gets the stable producer-defined code, or an empty string when unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L160).

## `location`

<a id="api-0b52a53ac00e14c4"></a>
<!-- api: P:Inno.Core.Diagnostics.Diagnostic.location 2347c56de7ec08db8ee08a3554b6f793f35b215a5970bfa61ab4a24b9cc0b3c1 -->

```csharp
public Inno.Core.Diagnostics.DiagnosticLocation? Inno.Core.Diagnostics.Diagnostic.location { get; }
```

Gets the related source location, or `null` when unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L170).

## `message`

<a id="api-b21f83baeb5a16cb"></a>
<!-- api: P:Inno.Core.Diagnostics.Diagnostic.message af4b746658f831fe5de0556f5894918823febd4b276d5bd888d1502bb3548785 -->

```csharp
public string Inno.Core.Diagnostics.Diagnostic.message { get; }
```

Gets the human-readable diagnostic message.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L165).

## `objectId`

<a id="api-fac126a2b0b7ccb9"></a>
<!-- api: P:Inno.Core.Diagnostics.Diagnostic.objectId 177cd037f1b16333f8fbe08f095d117c7be15c6c37be22ca27e52775996cfc6f -->

```csharp
public System.Guid? Inno.Core.Diagnostics.Diagnostic.objectId { get; }
```

Gets the related persistent object identity, or null for a non-object issue.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L62).

## `semanticId`

<a id="api-74432e56f69e9230"></a>
<!-- api: P:Inno.Core.Diagnostics.Diagnostic.semanticId 078b9f73187c392da3a57305241bee34a07d0f89d81ba41dcbc0fade3f9f1e25 -->

```csharp
public string? Inno.Core.Diagnostics.Diagnostic.semanticId { get; }
```

Gets the related protocol identifier without treating it as a source file.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L57).

## `severity`

<a id="api-a3191662f98a1f14"></a>
<!-- api: P:Inno.Core.Diagnostics.Diagnostic.severity 987290e00a41c2ecc3676d3966b05de2f12aac3b020025b2103fccf2444ca260 -->

```csharp
public Inno.Core.Diagnostics.DiagnosticSeverity Inno.Core.Diagnostics.Diagnostic.severity { get; }
```

Gets the diagnostic severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L155).
