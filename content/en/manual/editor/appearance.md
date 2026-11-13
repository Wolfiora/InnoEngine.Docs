---
title: Adjust Editor scale, icons and pacing
description: Distinguish applied preferences from temporary project zoom and
  device presentation limits.
uid: manual.editor.appearance
kind: how-to
owners:
  - Inno.Editor.Workbench
contracts:
  - project.inno-editor-workbench
---
# Adjust Editor scale, icons and pacing

The built-in Workbench contributes global Editor settings and actions through the same discovery and History mechanisms as other features. It is not a separate dockable panel or a public extension API.

## Set scale and temporary zoom

Change **Editor → Appearance → Accessibility → Actual Size** in Settings and Apply it through the shared settings transaction. **View → Zoom In**, **Zoom Out** and **Actual Size** adjust a project-session step relative to that baseline.

The zoom step is stored with module state in `editor.ini` and restored on restart. Resetting the step does not rewrite `Settings.Editor.inno` or create a preference History entry. Changing the Actual Size preference itself still uses Apply/Undo/Redo.

## Choose shared icons

**Editor → Appearance → Icons** defines shared glyph preferences for Scene, GameObject, Prefab, Layers, Folder, File, ShaderSource and RenderPipeline. File is the fallback; ShaderSource defaults to `RupeeSign` and RenderPipeline to `RupiahSign`.

Consumers read the complete setting path and its string `value`. One preference therefore updates matching File Browser, Hierarchy or Inspector presentation without separate icon stores. The selector aligns glyphs by their visible font bounds, including wider shapes.

These are Editor presentation preferences, not runtime asset identities. The Settings core stores values but does not interpret icons or provide a second path-constant facade.

## Set rendering pace

In **Editor → Rendering**, Vertical Sync defaults off. Maximum Frame Rate defaults to **0 (Unlimited)** and accepts a finite cap from 1 to 1000. Apply, Undo and Redo update the shared Shell pacing options; VSync is applied at the next device-frame safe point without a restart.

A higher cap can increase GPU load and power use. The operating-system compositor and display hardware can still limit observed presentation rate. A configured cap is not a guarantee of achieved frames per second.

## Keep global actions and feature actions separate

Workbench supplies shared Undo/Redo, selection and panel-toggle actions. A feature still owns its own commands and uses the same Action Query/Execute route for menu, shortcut and toolbar entry points. Hidden and disabled states come from the current action model.

Export and script-compilation modals show state owned by their workflow services; the modal does not take over asynchronous resource ownership. See [settings](settings.md), [shared History](../../extending/editor-history.md) and [Editor actions](../../extending/editor-actions.md).
