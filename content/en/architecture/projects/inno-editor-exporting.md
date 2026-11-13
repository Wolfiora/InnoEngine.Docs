---
title: Inno.Editor.Exporting
description: "Presentation-independent export service, operation-scoped progress, cancellation and retirement."
uid: project.inno-editor-exporting
kind: project
owners: [Inno.Editor.Exporting]
---
# Inno.Editor.Exporting

Presentation-independent export service, operation-scoped progress, cancellation and retirement.

Read the linked task or ownership explanation before using the exact API below.

## Export through one owned service

[Export a game or plugin](../../manual/editor/export.md) explains the File-menu workflow, Support Pack preparation, owner-thread Build start and failure/commit boundaries. EditorExportService and EditorExportProgress are public contracts. The private forms/actions are not alternate Build APIs.

Workbench owns the UI. The service owns its tasks, queued progress and cancellation through the existing Build pipeline/lifetime scope, without referencing ImGui, Panel or Hosting. Project Assets remains the authoring source; temporary export settings and output do not rewrite project settings or source assets.

## Observe the operation you can cancel

The progress snapshot contains operation ID, optional fraction, status, error, busy and cancellation state. Unknown totals display activity rather than a fabricated percentage. Late records cannot replace another operation, and Cancel(operationId) acts only on the current owner.

Shutdown cancels preparation/build and waits for their cleanup before disposing state. Completed preparation during shutdown cannot launch a new build. Precommit failures preserve old installed output; postcommit backup cleanup failures preserve the valid new product and report the residual path.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Inno.Editor.Exporting.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](../../api/engine/editor/exporting/index.md) preserve captured declarations and source XML.
