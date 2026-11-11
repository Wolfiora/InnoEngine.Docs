---
title: Export a game or plugin
description: Prepare a target Support Pack, run one owned export and diagnose cancellation or publication failures.
uid: manual.editor.export
kind: how-to
owners: [Inno.Editor.Exporting]
contracts: [project.inno-editor-exporting, project.inno-build]
---
# Export a game or plugin

Use the File menu's **Export as Game...** or **Export as Plugin...** workflow. The Editor owns interaction and progress; Build owns source snapshots, scripts, content compilation, packaging and atomic installation. Export output is not an authoring asset and is never written into the project's `Assets` directory.

## Choose a game target

The Game form copies defaults from `Settings.Build.inno`; its temporary edits do not write back to those defaults. Application identity comes from the current Project ID. Select an actual registered target and managed deployment strategy with the required Support Pack.

When Export starts, the settings form closes and a blocking progress modal supplies Cancel. Support Pack preparation runs asynchronously, validating target/deployment capability before external tools start. A valid Pack is reused. A corrupt Pack fails explicitly. Source-workspace composition can prepare a missing Pack; a distributed Editor without engine source must receive preinstalled Packs.

After preparation, the Editor starts `BuildGameAsync` from its owner-thread update. A normal asynchronous continuation does not authorize asset or script discovery on another thread. The pipeline freezes the composition generation, compiles target scripts/shaders/textures, exports the runtime asset closure and combines the verified Pack before final installation.

## Keep one export owner

Do not start another Game or Plugin export while one is active. `EditorExportService` owns the task, cancellation source, progress and cleanup through the existing Build pipeline and lifetime scope; Workbench owns forms and modals. Hiding a window does not abandon the operation.

Progress carries an operation ID. Unknown total work has a null fraction and displays activity instead of a fictional zero percent. Late records and ordinary progress after cancellation cannot overwrite the active operation. Cancel targets that operation ID; it does not directly destroy Build resources.

## Export a plugin

Plugin export uses `BuildPluginAsync`. Plugin/Build services validate dependency declarations, read-only installed content and source closure. Cancellation or failure cannot install a partial plugin. The same single-operation and shutdown ownership rules apply.

## Diagnose and close safely

Console receives success, cancellation and failure results. Typical failures include Pack publication, an undeployable startup scene, script diagnostics, corrupt artifacts and platform packaging. Precommit failure preserves the existing installed output. If cleanup of an old backup fails after commit, the complete new output remains valid and the residual backup path is reported.

Closing the host cancels preparation/build and waits through the Editor retirement barrier before disposing task state. A preparation that finishes during shutdown must not start a new build. Pending cleanup is not success. The progress modal closes after the operation completes, while the Console retains its outcome.

See [Support Packs](../../contributing/support-packs.md), [managed publishing diagnostics](../../backends/dotnet-publishing.md) and the [export service reference](../../api/projects/inno-editor-exporting.md).
