---
title: "DiagnosticSeverity"
description: "Reference for DiagnosticSeverity in Inno.Core.Diagnostics."
uid: api.inno.core.diagnostics.runtime-script.72981616fab99eef
kind: api
owners:
  - Inno.Core.Diagnostics
apiSurface: runtime-script
contracts:
  - project.inno-core-diagnostics#producer-and-presentation-contract
  - manual.scripting.use-script-api
---
# `DiagnosticSeverity`

This reference describes `DiagnosticSeverity` in `Inno.Core.Diagnostics`. Read the [shared contract](../../projects/inno-core-diagnostics.md#producer-and-presentation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Error`](#api-24a61fd72db688a9) | Field |
| [`Info`](#api-9b8c784ce4905d89) | Field |
| [`Warning`](#api-dbb56c4742d181a7) | Field |

## Type declaration

<a id="api-72981616fab99eef"></a>
<!-- api: T:InnoEngine.Diagnostics.DiagnosticSeverity 65df4a3f4398abc801ec38c5e77d7a4ba4dbc822b2c6aa85343553ae9206e6c3 -->

```csharp
public enum InnoEngine.Diagnostics.DiagnosticSeverity : int
```

Defines the presentation severity of a diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSeverity.cs#L6).

## `Error`

<a id="api-24a61fd72db688a9"></a>
<!-- api: F:InnoEngine.Diagnostics.DiagnosticSeverity.Error a395baffdfcbaea4ebe2309505644867d23b4e53e6736366126c8f221f0ec6b5 -->

```csharp
InnoEngine.Diagnostics.DiagnosticSeverity.Error = 2
```

Describes an issue that prevents the associated operation from succeeding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSeverity.cs#L21).

## `Info`

<a id="api-9b8c784ce4905d89"></a>
<!-- api: F:InnoEngine.Diagnostics.DiagnosticSeverity.Info 07354982d24205829b11fd40a437239f114f161d402d93c8bb36a5d1a02b92b3 -->

```csharp
InnoEngine.Diagnostics.DiagnosticSeverity.Info = 0
```

Describes useful information that does not indicate a problem.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSeverity.cs#L11).

## `Warning`

<a id="api-dbb56c4742d181a7"></a>
<!-- api: F:InnoEngine.Diagnostics.DiagnosticSeverity.Warning 7ab979f095c4f70fd5c505f8d59854c15eed7d2398cda993c23cebb9b3cd50c8 -->

```csharp
InnoEngine.Diagnostics.DiagnosticSeverity.Warning = 1
```

Describes a recoverable issue that should be reviewed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSeverity.cs#L16).
