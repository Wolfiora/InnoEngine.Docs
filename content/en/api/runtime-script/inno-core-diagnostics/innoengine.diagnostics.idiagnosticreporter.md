---
title: "IDiagnosticReporter"
description: "Reference for IDiagnosticReporter in Inno.Core.Diagnostics."
uid: api.inno.core.diagnostics.runtime-script.aef1a9197f4b18ae
kind: api
owners:
  - Inno.Core.Diagnostics
apiSurface: runtime-script
contracts:
  - project.inno-core-diagnostics#producer-and-presentation-contract
  - manual.scripting.use-script-api
---
# `IDiagnosticReporter`

This reference describes `IDiagnosticReporter` in `Inno.Core.Diagnostics`. Read the [shared contract](../../projects/inno-core-diagnostics.md#producer-and-presentation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`Publish`](#api-7efba376289e7457) | Method |
| [`Replace`](#api-2844a8644cce34b2) | Method |
| [`Resolve`](#api-c169c4b9d05a3342) | Method |

## Type declaration

<a id="api-aef1a9197f4b18ae"></a>
<!-- api: T:InnoEngine.Diagnostics.IDiagnosticReporter cd6470f3278c02ec5d61ac3c4a4c3f9f4d6bf34b0001d7555e73549234b487c9 -->

```csharp
public interface InnoEngine.Diagnostics.IDiagnosticReporter
```

Publishes current issues through an owner-bound producer, independently of presentation sinks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/IDiagnosticReporter.cs#L9).

## `Publish`

<a id="api-7efba376289e7457"></a>
<!-- api: M:InnoEngine.Diagnostics.IDiagnosticReporter.Publish(InnoEngine.Diagnostics.Diagnostic) d03b27f2a69fa98a53361f91e367c93c879c4176a793a6cc82657fd385645648 -->

```csharp
void InnoEngine.Diagnostics.IDiagnosticReporter.Publish(InnoEngine.Diagnostics.Diagnostic diagnostic)
```

Replaces the issue with the same code and target, without using its message as identity.

**Parameter `diagnostic`:** The immutable current issue.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/IDiagnosticReporter.cs#L17).

## `Replace`

<a id="api-2844a8644cce34b2"></a>
<!-- api: M:InnoEngine.Diagnostics.IDiagnosticReporter.Replace(System.Collections.Generic.IEnumerable{InnoEngine.Diagnostics.Diagnostic}) e8687a3b86458dbcc5aa62221925c029c1ed7a1afc21f357a1a2816ae2e84806 -->

```csharp
void InnoEngine.Diagnostics.IDiagnosticReporter.Replace(System.Collections.Generic.IEnumerable<InnoEngine.Diagnostics.Diagnostic> diagnostics)
```

Atomically replaces this producer's complete current issue set.

**Parameter `diagnostics`:** The full immutable issue set; empty clears the report.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/IDiagnosticReporter.cs#L43).

## `Resolve`

<a id="api-c169c4b9d05a3342"></a>
<!-- api: M:InnoEngine.Diagnostics.IDiagnosticReporter.Resolve(System.String,System.String,System.Nullable{System.Guid}) 17a6691cc63746df476bf01d3a5aaed9244240eb21b750cdf469f53f621ddf43 -->

```csharp
void InnoEngine.Diagnostics.IDiagnosticReporter.Resolve(string code, string? semanticId = null, System.Guid? objectId = null)
```

Resolves an issue after the represented condition no longer exists.

**Parameter `code`:** The stable issue code.

**Parameter `semanticId`:** The optional protocol identifier used at publication.

**Parameter `objectId`:** The optional persistent object identity used at publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/IDiagnosticReporter.cs#L31).
