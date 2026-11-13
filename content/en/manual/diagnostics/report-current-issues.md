---
title: Report and resolve current issues
description: Publish owner-bound diagnostic state, replace complete reports, and
  resolve problems without erasing log history.
uid: manual.diagnostics.report-current-issues
kind: how-to
owners:
  - Inno.Core.Diagnostics
contracts:
  - project.inno-core-diagnostics#producer-and-presentation-contract
exampleMode: host
exampleProjects:
  - Inno.Core.Diagnostics
---
# Report and resolve current issues

Publish a diagnostic when a problem has an owner and a meaningful recovery point: a failed import, unavailable output device or unrecoverable document state. Resolve it when that condition stops existing. Keep historical events and full exception details in [logs](write-logs.md).

## Own a producer registration

The host owns one `DiagnosticHub`. A producer owns the `DiagnosticReporter` returned by `CreateReporter`; services can receive the narrower `IDiagnosticReporter` interface. The following host example borrows the hub and releases only its own registration.

```csharp
using Inno.Core.Diagnostics;

public static class DeviceIssueExample
{
    public static void ReportAndRecover(DiagnosticHub hub)
    {
        using DiagnosticReporter reporter = hub.CreateReporter(
            new DiagnosticSource("example.audio.output", "Audio output"));
        reporter.Publish(new Diagnostic(
            "audio.device.unavailable",
            "The selected output device is unavailable.",
            DiagnosticSeverity.Warning));

        // Resolve only after the owning operation has actually recovered.
        reporter.Resolve("audio.device.unavailable");
    }
}
```

The example demonstrates publication and explicit resolution; it does not perform device recovery. In a real service, retain the reporter while the producer is active and call `Resolve` only after observing recovery.

## Choose stable issue identity

An issue within one reporter is identified by `code`, optional `semanticId`, and optional persistent `objectId`. Its message, severity and source location are descriptive state. Updating a message replaces the existing issue; it does not create another identity.

Use a protocol identifier for `semanticId`, a persistent object GUID for `objectId`, and `DiagnosticLocation` for a file position. Do not substitute a path or runtime hash code for durable object identity. Locations use one-based lines and columns when present.

`Publish` updates one issue. Identical content does not notify sinks again. `Resolve` removes the corresponding identity. `Replace` freezes and replaces the entire set, rejects duplicate identities, and clears it when the set is empty. Collect all issues from a validation pass before replacing the set; repeated one-item replacements would erase earlier issues.

## Survive producer replacement

Creating a reporter for the same source ID revokes the older registration and clears its report. Retiring the old reporter cannot clear a newer producer's state. New writes from a retired registration are invalid; do not retain a reporter across its owner's generation boundary.

`DiagnosticSource` is a publicly constructible value with a nonempty stable ID and display name. Equality follows the ID; a display-name change does not create a new producer. It is the caller's responsibility to choose an owner-qualified ID.

## Consume complete snapshots

An `IDiagnosticSink` implements `Replace(DiagnosticReport)` and `Clear(DiagnosticSource)`. Register it with the hub to receive current reports immediately and later changes synchronously. `Replace` means a complete report, not an append operation.

If the initial replay fails, registration throws and the sink is not installed. A later failing sink is removed and reported through `sinkFailed`; healthy consumers can continue. Keep callbacks short and do not assume they run on a UI thread. Unregister the sink before retiring its presentation owner; the hub does not dispose it for you.

The Editor Console supplies presentation, filtering, copy and navigation. A diagnostic producer does not own those UI operations. [Logs and diagnostics in the Editor](../editor/console.md) explains the reader's view.

## Host scopes and script callers

The host-only `Diagnostics.Set/Clear` facade uses the current `DiagnosticHub.EnterScope()` and derives an ID from assembly, logical caller type and group, optionally adding a stable target GUID. Group names describe a continuing responsibility. Setting and clearing must use the same owner type/group; display names do not participate in identity. Caller resolution uses runtime stack metadata and can fail when that metadata is unavailable; prefer an explicit reporter when you already own the producer boundary.

The actual Runtime script projection exports `Diagnostic`, `DiagnosticSeverity`, `DiagnosticLocation` and `IDiagnosticReporter` under `InnoEngine.Diagnostics`. It does not export the hub, reporter implementation, source value or static facade. Scripts receive a reporter from the owning API rather than constructing a global diagnostic manager.

## Troubleshoot unexpected state

- An issue disappeared after another publication: check whether you used whole-set replacement for a one-issue update.
- Two producers overwrite each other: inspect their explicit source IDs or the facade's caller/group/target identity.
- A retired producer fails to publish: obtain the registration belonging to the current owner; do not revive the old token.
- A newly opened tool lacks a report: confirm sink registration replay succeeded and the producer has not resolved or retired it.

[Diagnostic contracts](../../architecture/projects/inno-core-diagnostics.md) explain direct hub publication, failure-channel limitations and exact APIs.
