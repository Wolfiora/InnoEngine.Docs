---
title: "Diagnostic"
description: "Reference for Diagnostic in Inno.Core.Diagnostics."
uid: api.inno.core.diagnostics.runtime-script.8cb2b1c161541b61
kind: api
owners:
  - Inno.Core.Diagnostics
apiSurface: runtime-script
contracts:
  - project.inno-core-diagnostics#producer-and-presentation-contract
  - manual.scripting.use-script-api
---
# `Diagnostic`

This reference describes `Diagnostic` in `Inno.Core.Diagnostics`. Read the [shared contract](../../projects/inno-core-diagnostics.md#producer-and-presentation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d68a468c5c25754f) | Method |
| [`Error`](#api-bb605afb05b24242) | Method |
| [`Info`](#api-f251d0cb51432e4d) | Method |
| [`Warning`](#api-f4bdc9bac7699846) | Method |
| [`code`](#api-c6412441c4695cce) | Property |
| [`location`](#api-57b1a2cf3ed4987f) | Property |
| [`message`](#api-9cdc229eb1e25451) | Property |
| [`objectId`](#api-77fdced953076916) | Property |
| [`semanticId`](#api-27dbb60b08f2431c) | Property |
| [`severity`](#api-b1a5f641e7c170e7) | Property |

## Type declaration

<a id="api-8cb2b1c161541b61"></a>
<!-- api: T:InnoEngine.Diagnostics.Diagnostic 7c24c2e3f99cd2a15a8dfa3ded1c2ae7bec164e93ecdc8d5c476184838400e74 -->

```csharp
public sealed class InnoEngine.Diagnostics.Diagnostic
```

Represents one current issue reported by a compiler, importer, validator, or other diagnostic producer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L8).

## `#ctor`

<a id="api-d68a468c5c25754f"></a>
<!-- api: M:InnoEngine.Diagnostics.Diagnostic.#ctor(System.String,System.String,InnoEngine.Diagnostics.DiagnosticSeverity,System.String,System.Nullable{System.Guid},System.Nullable{InnoEngine.Diagnostics.DiagnosticLocation}) c3029e4e419438c027d7459e81b24fadd154396d4a058c9dc8087b0f23ef1115 -->

```csharp
public InnoEngine.Diagnostics.Diagnostic.Diagnostic(string code, string message, InnoEngine.Diagnostics.DiagnosticSeverity severity, string? semanticId = null, System.Guid? objectId = null, InnoEngine.Diagnostics.DiagnosticLocation? location = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L37).

## `Error`

<a id="api-bb605afb05b24242"></a>
<!-- api: M:InnoEngine.Diagnostics.Diagnostic.Error(System.String,System.String,System.Nullable{InnoEngine.Diagnostics.DiagnosticLocation}) a77ee09ef2c614222650f6b3d53d321d9af6c27918ba8066660b1bae24a6a681 -->

```csharp
public static InnoEngine.Diagnostics.Diagnostic InnoEngine.Diagnostics.Diagnostic.Error(string code, string message, InnoEngine.Diagnostics.DiagnosticLocation? location = null)
```

Creates an error diagnostic value without publishing it.

**Parameter `code`:** The stable producer-defined code, or an empty string when no code is available.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `location`:** The related source location, or `null` when unavailable.

**Returns:** An immutable error diagnostic that can be supplied to `InnoEngine.Diagnostics.Diagnostics.Set(System.String,InnoEngine.Diagnostics.Diagnostic)`.

**Throws `System.ArgumentNullException`:** Thrown when `message` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L132).

## `Info`

<a id="api-f251d0cb51432e4d"></a>
<!-- api: M:InnoEngine.Diagnostics.Diagnostic.Info(System.String,System.String,System.Nullable{InnoEngine.Diagnostics.DiagnosticLocation}) a3026a0fe32b3a7a33a45f2c86f2ec72fba65b84fc27221416c3f2ea29871e0e -->

```csharp
public static InnoEngine.Diagnostics.Diagnostic InnoEngine.Diagnostics.Diagnostic.Info(string code, string message, InnoEngine.Diagnostics.DiagnosticLocation? location = null)
```

Creates an informational diagnostic value without publishing it.

**Parameter `code`:** The stable producer-defined code, or an empty string when no code is available.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `location`:** The related source location, or `null` when unavailable.

**Returns:** An immutable informational diagnostic that can be supplied to `InnoEngine.Diagnostics.Diagnostics.Set(System.String,InnoEngine.Diagnostics.Diagnostic)`.

**Throws `System.ArgumentNullException`:** Thrown when `message` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L82).

## `Warning`

<a id="api-f4bdc9bac7699846"></a>
<!-- api: M:InnoEngine.Diagnostics.Diagnostic.Warning(System.String,System.String,System.Nullable{InnoEngine.Diagnostics.DiagnosticLocation}) 450c8d9a0b864aea38edacc26ccf8b964437d3c455948f64f6bc15f60448ae80 -->

```csharp
public static InnoEngine.Diagnostics.Diagnostic InnoEngine.Diagnostics.Diagnostic.Warning(string code, string message, InnoEngine.Diagnostics.DiagnosticLocation? location = null)
```

Creates a warning diagnostic value without publishing it.

**Parameter `code`:** The stable producer-defined code, or an empty string when no code is available.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `location`:** The related source location, or `null` when unavailable.

**Returns:** An immutable warning diagnostic that can be supplied to `InnoEngine.Diagnostics.Diagnostics.Set(System.String,InnoEngine.Diagnostics.Diagnostic)`.

**Throws `System.ArgumentNullException`:** Thrown when `message` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L107).

## `code`

<a id="api-c6412441c4695cce"></a>
<!-- api: P:InnoEngine.Diagnostics.Diagnostic.code 8c0d4e72225e235de0a6234a64536da699a9e892a66c7a5c394feb472b0a6f8a -->

```csharp
public string InnoEngine.Diagnostics.Diagnostic.code { get; }
```

Gets the stable producer-defined code, or an empty string when unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L160).

## `location`

<a id="api-57b1a2cf3ed4987f"></a>
<!-- api: P:InnoEngine.Diagnostics.Diagnostic.location 4f0cd9473c92ac9fd489f195a5986930b38c8cd224879e54ad70892727b573b8 -->

```csharp
public InnoEngine.Diagnostics.DiagnosticLocation? InnoEngine.Diagnostics.Diagnostic.location { get; }
```

Gets the related source location, or `null` when unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L170).

## `message`

<a id="api-9cdc229eb1e25451"></a>
<!-- api: P:InnoEngine.Diagnostics.Diagnostic.message 229f3566d586d020ab7b67e2e75817a07641175d215f9fe5dca708334a9dfc29 -->

```csharp
public string InnoEngine.Diagnostics.Diagnostic.message { get; }
```

Gets the human-readable diagnostic message.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L165).

## `objectId`

<a id="api-77fdced953076916"></a>
<!-- api: P:InnoEngine.Diagnostics.Diagnostic.objectId bd02d323f752e3f1351689e5ee38f0ab8b06ff869093f15dab5db6e68a72a7f4 -->

```csharp
public System.Guid? InnoEngine.Diagnostics.Diagnostic.objectId { get; }
```

Gets the related persistent object identity, or null for a non-object issue.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L62).

## `semanticId`

<a id="api-27dbb60b08f2431c"></a>
<!-- api: P:InnoEngine.Diagnostics.Diagnostic.semanticId 2046531523aaa3f9d47c72bf2ab5964d8dae7c2a1db45a2533481cd951da15c4 -->

```csharp
public string? InnoEngine.Diagnostics.Diagnostic.semanticId { get; }
```

Gets the related protocol identifier without treating it as a source file.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L57).

## `severity`

<a id="api-b1a5f641e7c170e7"></a>
<!-- api: P:InnoEngine.Diagnostics.Diagnostic.severity 3123b7a67bfef092a3130d761bea8c2b80b68b4c3ee1551555aa57b5c6f8cf3f -->

```csharp
public InnoEngine.Diagnostics.DiagnosticSeverity InnoEngine.Diagnostics.Diagnostic.severity { get; }
```

Gets the diagnostic severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/Diagnostic.cs#L155).
