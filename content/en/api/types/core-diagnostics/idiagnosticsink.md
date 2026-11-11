---
title: "IDiagnosticSink"
description: "Reference for IDiagnosticSink in Inno.Core.Diagnostics."
uid: api.inno.core.diagnostics.0a7dcc6746c7a698
kind: api
owners:
  - Inno.Core.Diagnostics
apiSurface: source-clr
contracts:
  - project.inno-core-diagnostics#producer-and-presentation-contract
---
# `IDiagnosticSink`

This reference describes `IDiagnosticSink` in `Inno.Core.Diagnostics`. Read the [shared contract](../../projects/inno-core-diagnostics.md#producer-and-presentation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Clear`](#api-39173f013ea7c138) | Method |
| [`Replace`](#api-365d768efbed32b5) | Method |

## Type declaration

<a id="api-0a7dcc6746c7a698"></a>
<!-- api: T:Inno.Core.Diagnostics.IDiagnosticSink 6dc0fa90a9d47a7d75089dd908434abf878578b810b12e6ec755c51b01e75732 -->

```csharp
public interface Inno.Core.Diagnostics.IDiagnosticSink
```

Receives complete diagnostic-state changes from a `Inno.Core.Diagnostics.DiagnosticHub`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/IDiagnosticSink.cs#L6).

## `Clear`

<a id="api-39173f013ea7c138"></a>
<!-- api: M:Inno.Core.Diagnostics.IDiagnosticSink.Clear(Inno.Core.Diagnostics.DiagnosticSource) a613023fc00c2e9e09ef7dcbb496fd239fcd4d6a7c5ee013b7010b893654565c -->

```csharp
void Inno.Core.Diagnostics.IDiagnosticSink.Clear(Inno.Core.Diagnostics.DiagnosticSource source)
```

Removes the current report for one diagnostic source.

**Parameter `source`:** The source whose current report was cleared.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/IDiagnosticSink.cs#L22).

## `Replace`

<a id="api-365d768efbed32b5"></a>
<!-- api: M:Inno.Core.Diagnostics.IDiagnosticSink.Replace(Inno.Core.Diagnostics.DiagnosticReport) 37e59beb86c1ec513ea82e188e20bf1a3f07f32576c58869e26831f74386cc35 -->

```csharp
void Inno.Core.Diagnostics.IDiagnosticSink.Replace(Inno.Core.Diagnostics.DiagnosticReport report)
```

Replaces the current report for one diagnostic source.

**Parameter `report`:** The complete current report to store or present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/IDiagnosticSink.cs#L14).
