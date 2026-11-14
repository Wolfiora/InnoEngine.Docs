---
uid: api.directory.engine.core.diagnostics
title: "Diagnostics"
kind: landing
owners: []
---

# Diagnostics

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [Diagnostic](diagnostic/index.md) | Represents one current issue reported by a compiler, importer, validator, or other diagnostic producer. |
| [DiagnosticHub](diagnostichub/index.md) | Owns one host&#39;s complete diagnostic state and its presentation subscriptions. |
| [DiagnosticLocation](diagnosticlocation/index.md) | Identifies an optional source location associated with a diagnostic. |
| [DiagnosticReport](diagnosticreport/index.md) | Represents the complete current diagnostic state published by one source. |
| [DiagnosticReporter](diagnosticreporter/index.md) | Owns one revocable diagnostic producer registration and releases its current report on retirement. |
| [Diagnostics](diagnostics/index.md) | Provides concise state-oriented diagnostic publication for the calling type. |
| [DiagnosticSeverity](diagnosticseverity/index.md) | Defines the presentation severity of a diagnostic. |
| [DiagnosticSource](diagnosticsource/index.md) | Identifies one independent producer whose diagnostics replace its previous publication. |
| [IDiagnosticReporter](idiagnosticreporter/index.md) | Publishes current issues through an owner-bound producer, independently of presentation sinks. |
| [IDiagnosticSink](idiagnosticsink/index.md) | Receives complete diagnostic-state changes from a T:Inno.Core.Diagnostics.DiagnosticHub. |

