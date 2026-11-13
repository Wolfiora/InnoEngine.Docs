---
title: Inno.Editor.Workbench
description: "Internal application-wide settings, commands, zoom and workflow presentation."
uid: project.inno-editor-workbench
kind: project
owners: [Inno.Editor.Workbench]
---
# Inno.Editor.Workbench

Internal application-wide settings, commands, zoom and workflow presentation.

Start with the task linked below; assembly names are secondary implementation reference.

## User workflow

[Adjust Editor scale, icons and pacing](../../manual/editor/appearance.md) explains applied preferences versus project zoom, shared glyphs and frame-safe pacing. Workbench is feature composition, not a dockable panel.

## Discovery and ownership

All definitions are internal and Attribute-discovered after the application loads this assembly. Settings and Action catalogs prepare them alongside scripts and activate them atomically in a candidate generation. Workbench owns built-in definitions; Settings and Interactions retain reusable mechanisms.

Actions use centralized internal GlobalInteractionIds so declaration, query, execution and presentation share identities. Built-ins include editor/undo, editor/redo, editor/select, editor/clear-selection and editor/toggle-panel. Zoom uses editor.ui.zoom-in, editor.ui.zoom-out and editor.ui.zoom-reset. These are internal host defaults, not a new public protocol. Feature-specific actions stay with their feature.

## Workflow presentation

Export forms/progress borrow EditorExportService state; scripting progress borrows IEditorScriptCompilation. Async operation resources remain service-owned. Menus, shortcuts and toolbars use the same Action Query/Execute result instead of duplicating enablement logic. Context-search caches reset on opening and release on popup/owner retirement.

Actual Size preference changes use Settings History. Zoom steps use Module state in editor.ini and do not create preference history. Shared glyph settings expose normal string values; there is no public icon resolver or path-constant layer. This assembly has no public CLR types in the captured source.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Workbench/Inno.Editor.Workbench.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.
