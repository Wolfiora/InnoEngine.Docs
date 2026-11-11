---
title: "DiagnosticReport"
description: "Reference for DiagnosticReport in Inno.Core.Diagnostics."
uid: api.inno.core.diagnostics.ff8ecd90f437a012
kind: api
owners:
  - Inno.Core.Diagnostics
apiSurface: source-clr
contracts:
  - project.inno-core-diagnostics#producer-and-presentation-contract
---
# `DiagnosticReport`

This reference describes `DiagnosticReport` in `Inno.Core.Diagnostics`. Read the [shared contract](../../projects/inno-core-diagnostics.md#producer-and-presentation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`diagnostics`](#api-b2115dd1c143fcfc) | Property |
| [`publishedAt`](#api-a76bb27e54ecf2ee) | Property |
| [`source`](#api-d7e42fd9bacf3ee5) | Property |

## Type declaration

<a id="api-ff8ecd90f437a012"></a>
<!-- api: T:Inno.Core.Diagnostics.DiagnosticReport 2c6e1555487eb567bae9f26c46e3582cc8019e40a104034524fe0cc3ec0d30a0 -->

```csharp
public sealed class Inno.Core.Diagnostics.DiagnosticReport
```

Represents the complete current diagnostic state published by one source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticReport.cs#L10).

## `diagnostics`

<a id="api-b2115dd1c143fcfc"></a>
<!-- api: P:Inno.Core.Diagnostics.DiagnosticReport.diagnostics 601ef13b3ad29bd7290f3c059967515f076a1cd4beb8feaaa08dfddbbd8349fd -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Diagnostics.Diagnostic> Inno.Core.Diagnostics.DiagnosticReport.diagnostics { get; }
```

Gets the immutable diagnostics currently reported by the producer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticReport.cs#L30).

## `publishedAt`

<a id="api-a76bb27e54ecf2ee"></a>
<!-- api: P:Inno.Core.Diagnostics.DiagnosticReport.publishedAt 6fc86856d0f3d1f08aa34169598c9679685ab8ea86baad79ad7d67f10c64b46f -->

```csharp
public System.DateTime Inno.Core.Diagnostics.DiagnosticReport.publishedAt { get; }
```

Gets the time at which the report was published.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticReport.cs#L35).

## `source`

<a id="api-d7e42fd9bacf3ee5"></a>
<!-- api: P:Inno.Core.Diagnostics.DiagnosticReport.source b637752f84eeb33d038e0c403ba84331e75996f1c8e2ea5500f1b301e04e7889 -->

```csharp
public Inno.Core.Diagnostics.DiagnosticSource Inno.Core.Diagnostics.DiagnosticReport.source { get; }
```

Gets the producer that owns this report.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticReport.cs#L25).
