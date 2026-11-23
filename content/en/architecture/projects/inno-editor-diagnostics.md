---
# Generated metadata. Maintained by project synchronization tooling.
uid: api.projects.inno-editor-diagnostics
symbol: project:Inno.Editor.Diagnostics
title: Inno.Editor.Diagnostics
kind: project
owners:
- Inno.Editor.Diagnostics
sourceFingerprint: b734f8ff9646d070850b4987c4f00bd37b70cad4d3c31cdc576b0f4ad105c93e
contracts:
- manual.editor.console
- architecture.ownership
outdatedFor: dec14e329341ced68f2785d420d585b8e97fcf143baeccc1be14fb3ae8439e31

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- The bounded Console backend, immutable occurrences and current diagnostic lifetime.
outdated: false
---
# Inno.Editor.Diagnostics

This project owns the Console's history, current diagnostic state, grouping and Clear-on-Play policy. It implements logging and diagnostic sink contracts without drawing ImGui. The application composition root owns `EditorConsole`; panels and features read through `IEditorConsole` and immutable snapshots.

## Read the Console

[Logs and diagnostics](../../manual/editor/console.md) explains filtering, collapse and current issues. [Console presentation](inno-editor-panel-logging.md) explains the separate panel implementation.

The timeline and collapsed groups are ordered by occurrence sequence, oldest first. A new error appearing at the bottom is normal chronological behavior. The view follows new output only while the user is already at the bottom or explicitly requests it.

## Current state is not historical logging

Ordinary logs retain past occurrences. Diagnostics belong to the reporting producer until it replaces or clears its report. `Clear()` removes historical logs; it does not claim ownership of producer diagnostics. Re-publishing an unchanged issue does not move it to a new timeline position. Recoverable rendering issues reconcile after a successful frame rather than accumulating as permanent logs.

Grouping includes entry kind, severity, source, code, message, location, stack identity and `LogSessionID`. Equivalent nonadjacent occurrences can group within one session. Matching text from different Edit/Play sessions remains distinct.

## Lifetime and policy

The host creates and starts the Console with its logging router, diagnostic hub and Play Mode source. Start registers sinks and a state-change subscription; failed startup compensates those registrations. Dispose ends those subscriptions and ownership. Snapshot models do not transfer ownership of the producing services to a panel.

Ordinary log capacity is bounded and clamps to at least 16 entries. The default Clear-on-Play policy is enabled. Its user-facing persisted value lives at `Editor/Diagnostics/Console/Clear on Play`; the panel does not maintain another toolbar or layout preference for it. Apply, Undo and Redo update the backend through the Settings owner.

## API reference

Reference types cover the service, read-only interface, snapshot, group, occurrence and Log/Diagnostic kind. Internal queues, grouping helpers and buffers remain implementation details. Source declarations and XML do not make every public CLR type a script export.

[Browse Console backend types](../../api/engine/editor/diagnostics/index.md).
