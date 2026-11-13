---
title: Logs and diagnostics
description: Use the Editor Console to distinguish historical events from problems that remain active.
uid: manual.editor.console
kind: how-to
owners:
  - Inno.Editor.Panel.Logging
  - Inno.Editor.Diagnostics
aliases:
  - console
  - logging
  - diagnostics
  - 控制台
  - 日志
---
# Logs and diagnostics

The Editor Console combines two different kinds of information: **logs record what happened**, while **diagnostics describe problems that are still active**. Clearing the log does not resolve an active diagnostic.

## Find the entries you need

Use the level controls and search field together. Search performs case-insensitive substring matching across the message and available source, file, code, category, and stack-trace information.

Enable **Collapse** to group matching occurrences. Filtering applies before grouping, and expanded details and copy operations refer to the same matching group. Occurrences from different Play/Edit sessions remain separate even when their text is identical.

The entry region follows new messages only when you are already at the bottom. Scrolling upward to inspect older entries prevents new output from taking over your scroll position.

## Read an entry

The header identifies its level and source, such as `[Info] [Log]` or `[Error] [Issue]`. Expanded details distinguish `Log` from `Diagnostic` and display the available file, source, session, time, and stack trace.

Use keyboard navigation to select entries and Enter to expand one. The primary modifier+C copies the message; primary modifier+Shift+C copies the full entry. The primary modifier follows the host's keyboard policy.

## Copy useful diagnostics

Open the entry's context menu:

| Action | Result |
| --- | --- |
| **Copy Message** | The message, including the diagnostic code when present. |
| **Copy Full Entry** | The complete available record, including source information and metadata. |

Use the full entry when reporting a problem whose location, session, or stack trace matters. A historical exception log may remain after the corresponding current diagnostic has been resolved; this preserves the event history.

## Clear logs and control Play sessions

**Clear** removes ordinary logs. Current diagnostics remain until their producer updates or clears them.

The **Clear on Play** setting is located at `Editor/Diagnostics/Console/Clear on Play` and defaults to enabled. When a Play request enters compilation, the logging router is flushed and ordinary logs from the previous session are cleared. Current compiler, importer, and rendering diagnostics remain.

After Play stops, its logs remain available for inspection. The next Play request clears them according to the setting. Applying, undoing, or redoing this setting updates the Console behavior immediately.

Collapse is a layout preference. Log contents, expanded entries, and transient filters are not persistent project data.

## Resolve a current problem

1. Identify the diagnostic's producer and source location.
2. Correct the reported problem.
3. Run the corresponding operation again.
4. Confirm that the producer removes or replaces its current diagnostic.

Script compilation uses the `Script Compiler` group and replaces its complete diagnostic set after each compilation. A clean compilation removes old compiler diagnostics. Reload uses its own `Script Reload` group, so compilation and state-transition failures remain distinct.

Do not use Clear as a substitute for resolving a diagnostic. Asset, project, panel, workspace, and persistence producers own their current state.

## Extension boundaries

Scripts write through the exported Core Logging API. The Console panel consumes that same stream; it does not provide an additional script facade. Runtime lifecycle messages are emitted when runtime lifecycle actually runs, not merely when an enabled flag changes in Edit Mode.

To produce those records, follow [write and retain logs](../diagnostics/write-logs.md) or [report and resolve current issues](../diagnostics/report-current-issues.md). The choice depends on whether you are recording history or maintaining a recoverable current condition.

The host creates and drives the panel. Extensions must not invoke its drawing lifecycle manually. For presentation changes, read [customize the Console](../../extending/customize-console.md).

For grouping, native entry identity, layout and retirement mechanisms, read the [Console project explanation](../../architecture/projects/inno-editor-panel-logging.md).
