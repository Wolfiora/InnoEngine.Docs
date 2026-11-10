---
title: Inno.Editor.Panel.Logging
description: The host-driven Console panel that presents historical logs and current diagnostics.
uid: project.inno-editor-panel-logging
kind: project
owners:
  - Inno.Editor.Panel.Logging
contracts:
  - manual.editor.console
  - architecture.ownership
---
# Inno.Editor.Panel.Logging

This Editor project presents ordinary logs and current diagnostics in one Console. It subscribes to the independent Core Logging and Core Diagnostics mechanisms through the Editor Console service. It provides presentation and settings integration, with no separate public script facade.

Start with [logs and diagnostics](../../manual/editor/console.md) to use the Console, or [customize Console presentation](../../extending/customize-console.md) to change its internal appearance.

## Responsibility and API boundary

`Inno.Editor.Diagnostics` owns `EditorConsole`, including bounded log history, current diagnostics, fingerprint grouping and Play-session retention. The internal `ConsolePanel` reads immutable `IEditorConsole` snapshots and presents filtering, grouping, details and actions.

The current project declares no externally public types. The product Registry discovers its internal extensions, and the host creates and drives them. Do not manually invoke `OnDraw`. Scripts write through the exported Core Logging API; they do not reference an additional Console-panel facade.

The project and directory use `Logging` rather than `Log` to avoid collisions with output-directory or ignore conventions. This is a source-organization choice, not an API promise.

## Why logs and diagnostics remain separate

Logs record historical events. Diagnostics represent a producer's current unresolved state. The Console combines their presentation without giving a log-clear operation ownership of a diagnostic's lifetime.

When a producer recovers, its diagnostic card disappears. An exception logged when that failure first occurred may remain in history. This lets users inspect both the current problem and the sequence of past events without turning every diagnostic into an uncleared historical entry.

Current producers include Asset Import/Build/Catalog, Asset Source Database, Scene Workspace, Editor Workspace, Panel Activation and Project Persistence. Compiler and reload diagnostics use separate groups, so a new compilation cannot overwrite a state-migration failure.

## Snapshot processing and grouping

The derived view updates when snapshot revision, search text or level selection changes. It does not modify source diagnostic records. Case-insensitive substring search covers message, source, file, code, category and an existing stack trace. Level filtering and search both apply before Collapse groups matching occurrences.

The grouping fingerprint includes `LogSessionId`. Nonadjacent matching occurrences within one session can group globally; identical text from different Edit/Play sessions stays separate. Expanded details and copy actions use the same filtered group and retain its individual occurrences.

Copy targets belong to the current view and are released when Clear, filtering or panel retirement removes the target. The panel does not eagerly encode full copy text for every visible row. Keyboard navigation, Enter expansion and primary-modifier copy shortcuts use the same actions as the context menu.

## Presentation mechanisms

These details describe internal implementation and may change without creating a script or serialization contract.

### Styling and scrolling

Internal `Styling/ConsoleStyle` owns level colors, card backgrounds/borders, expansion controls and auto-scroll tolerance. Reusable controls and base dimensions come from `ImGuiWidget`, `EditorStyleMetrics` and `EditorPalette`; the general palette does not own Console-specific policy.

The root Panel and layout Child do not scroll. Only the entry region owns vertical scrolling. New output follows the bottom only when the user was already there; inspecting older entries does not surrender the user's position.

Adjacent cards use one standard `ItemSpacing`, without an additional spacer. Collapsed and expanded cards therefore retain consistent outer spacing. Variable-height measurements invalidate on content, width, scale and expansion changes. Retired records do not accumulate native child-window slots with operation count.

### Entry identity

An entry's internal identity combines its source kind and complete 64-bit sequence number. Log and Diagnostic counters are independent. ImGui scopes include the source plus the high and low sequence halves.

Do not substitute `long.GetHashCode()` for this identity. Distinct positive/negative sequence values can share a 32-bit hash and cause an auto-resizing child to reuse another card's layout state.

### Details and menus

Card headers show level and origin, such as `[Info] [Log]` or `[Error] [Issue]`. Expanded metadata follows Kind, File, Source, Session and Time; an unassigned Session row is omitted. Header and stack-trace separators derive from the same card color.

The label column measures the current font and explicitly reserves width, while values fill the remainder. It does not depend on the previous frame's measurement. Narrow cards place each label above its value. Logs and diagnostics share this layout; Shader diagnostics do not introduce a special style.

The global Editor Action/Menu system supplies context menus and correctly captures hover/input instead of passing right clicks through to the Panel behind them. Stable area/action IDs live in `LoggingInteractionIds`, and runtime menu models consume those strings directly.

## Settings and lifecycle

`Clear on Play` is one setting at `Editor/Diagnostics/Console/Clear on Play`, enabled by default. The Console toolbar does not keep a second switch. Apply, Undo and Redo update the backend immediately. Collapse is a panel-layout preference; messages, expansion and transient filters are not persisted.

When Play enters `Compiling`, the router flushes before clearing the preceding ordinary logs. Current diagnostics remain producer-owned. All levels from the current Play session remain after stopping; the next Play request applies the clearing policy again. Ordinary non-Play output remains until capacity eviction or manual Clear.

The host lifecycle bridge is the only caller of Console drawing. A drawing exception closes and quarantines the panel for the current generation while the runtime balances the window/menu stacks. Other panels continue to operate. Game lifecycle logs arise only when Scene runtime lifecycle executes; toggling enabled in Edit Mode does not synthesize `OnEnable`/`OnDisable` events.

## Project dependencies

This implementation has no externally visible CLR types and declares no script API. The supported service contract belongs to [Editor Diagnostics](inno-editor-diagnostics.md); styling and card helpers remain internal.

The following is explanatory project-reference ownership, not a separately maintained product-selection manifest.

| Role | Projects |
| --- | --- |
| Private compile dependencies | Inno.Editor.ImGui, Inno.Editor.Diagnostics, Inno.Editor.Interactions, Inno.Editor.PlayMode, Inno.Editor.Settings, Inno.Editor.Core, Inno.Core.Logging, Inno.Core.Diagnostics |
| Public compile references declared by the project | Inno.Extensibility.Catalogs, Inno.Core.Serialization |

See the [owning source project](https://github.com/Wolfiora/InnoEngine/tree/6315a9eea5a5004e352c8d709f7b5ff2b3469d9c/src/composition/editor/panels/Inno.Editor.Panel.Logging) for the implementation. The site's engine binding identifies the source snapshot used for documentation; this project overview is not proof of a newly executed full API or product matrix.
