---
title: Inno.Core.Diagnostics
description: Host-owned current issue state, revocable producers and complete-report presentation.
uid: project.inno-core-diagnostics
kind: project
owners:
  - Inno.Core.Diagnostics
---
# Inno.Core.Diagnostics

This project stores the current problems reported by compiler, importer, validator, runtime and Editor owners. It does not execute their operations or retain a log history. Start with [reporting and resolving issues](../../manual/diagnostics/report-current-issues.md).

## Producer and presentation contract

`DiagnosticHub` owns reports and presentation registrations. `DiagnosticReporter` owns one revocable producer epoch. `IDiagnosticReporter` describes production; `IDiagnosticSink` describes consumption. These roles are deliberately separate.

Reporter issue identity combines code, semantic ID and persistent object ID. `Publish` suppresses unchanged updates; `Replace` rejects duplicate identities and replaces the complete set. Disposal releases only the reporter's epoch. The hub's direct public `Set/Clear` operations are lower-level whole-report operations; they do not provide the reporter's per-issue de-duplication or producer-epoch ownership. Do not mix these publication paths for the same producer unless the host explicitly coordinates them.

Reports freeze the collection before publication and expose neutral immutable values. Source equality uses its stable ID. `DiagnosticSource` and `DiagnosticReport` are public contracts; there is no current `DiagnosticManager` type or hidden-manager-only source constructor.

## Synchronization and failure

The hub synchronizes state and synchronously invokes presentation callbacks. Initial registration replays existing reports before installation; a replay failure throws and leaves the sink unregistered. Later failing sinks are quarantined. Callbacks are not marshalled onto a UI thread, and registration/unregistration does not transfer sink disposal ownership.

The current diagnostic failure path writes to `Console.Error` when no failure observer exists or an observer itself fails. Unlike Logging's protected secondary reporting path, a throwing diagnostic stderr writer can propagate. This is an implementation limitation, not an unconditional guarantee that every secondary failure is isolated. A reliable host should register a nonthrowing failure observer and retain its own recovery policy.

Execution scopes are caller-owned and strictly last-in-first-out. Scope binding does not dispose a borrowed hub. Retire producer tokens and presentation callbacks before unloading the owning generation.

## Model and surfaces

Use diagnostics for persistent current conditions and [Logging](inno-core-logging.md) for append-only occurrences. `DiagnosticLogSink`, owned by Logging, projects changed issues into log entries without becoming another diagnostic state owner. Diagnostics does not use EventHub because it must retain state and replay it to late subscribers.

`Diagnostic`, severity, location and `IDiagnosticReporter` are actual Runtime script exports. Hub composition, direct publication, source identity, reporter implementation and the static caller-resolving facade remain host-side APIs.

## Reference

[Browse exact diagnostic, producer and sink declarations](../types/core-diagnostics/index.md).

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../runtime-script/inno-core-diagnostics/index.md)
