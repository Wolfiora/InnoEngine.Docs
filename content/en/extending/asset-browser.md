---
title: Extend asset browsing and presentation
description: Add source actions, type/extension icons and inspection without coupling panels or taking over file transactions.
uid: extending.asset-browser
kind: how-to
owners: [Inno.Editor.Assets.ImGui, Inno.Editor.Panel.FileBrowser]
contracts: [project.inno-editor-assets-imgui, project.inno-editor-assets]
---
# Extend asset browsing and presentation

Asset editing, browser presentation and the File Browser panel have separate owners. Add reusable discovery/presentation through Assets.ImGui and source mutations through Assets. The panel consumes those services; public extension contracts do not belong to its internal window implementation.

## Validate behavior without moving files yourself

An AssetEditor can validate Open/Rename/Delete/Drag and observe committed operations. AssetPipeline still owns source/metadata transactions, including changes coming from outside the Editor. Do not move source/meta/artifact files directly from a presentation callback.

Use ordinary typed Editor actions and menus for extra commands. Tree/List/Grid submit the same area and AssetFileEntry target, so one declaration reaches all views. Context menus combine containing-directory creation actions with selected-entry operations; a file's Create context is its parent directory, while a directory targets itself.

Create templates remain [the asset creation protocol](asset-drafts.md). Use the shared source creation and rename request for Shader/Material/custom assets so undo restores the original persistent ID. Navigation, selection and best-effort notifications are not a second mutation transaction.

## Declare one icon policy

Apply AssetIconAttribute to any discoverable declaration container. It has no instance role and can carry multiple type or extension mappings. Type specificity takes precedence; otherwise choose the longest matching extension suffix, then priority. Extensions are case-insensitive, may omit the initial dot and can include a compound suffix.

A selected declaration can contain a registered full Settings path or a literal glyph. Settings-backed icons read the actual serialized value object; the Settings foundation does not implement an icon resolver. Registry replacement follows the current type generation, and removed mappings release their old types before falling back to less-specific built-ins or the generic file icon.

All browser views and Inspector headers share the feature's icon provider. Do not duplicate type switches in individual panels. Embedded hosts must supply required Appearance settings; missing Folder/icon configuration is an error, not permission to borrow another host's state.

## Keep styles and transient values scoped

AssetBrowserStyle captures current user Zoom before drawing. It does not retain a UI session or multiply DPI twice. Browser-specific grid/icon/breadcrumb/column choices stay here; generic pane/splitter/toolbar metrics remain shared. Reacquire a style value after the frame-boundary scale update.

Use controls only in the current UI session, owner thread and context. Persist stable IDs and neutral navigation values, not plugin instances, types or draw delegates. Missing, read-only and unassigned are distinct states. The [File Browser manual](../manual/editor/files.md) describes user-visible root, rename, sample and move behavior.
