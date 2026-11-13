---
uid: api.inno.editor.exporting.4954455ade0e3688
symbol: "engine:Inno.Editor.Exporting:T:Inno.Editor.Exporting.EditorExportProgress"
source: xml
reviewed: 1f8707e1e27d11937bc6cd53c159ec0acd89f9c3f27b19340321cbde857455ca
title: "EditorExportProgress"
kind: api
owners: [Inno.Editor.Exporting]
apiSurface: source-clr
contracts:
- project.inno-editor-exporting
aliases: []
---

Contains one owner-thread export presentation snapshot.

**Parameter `operationId`:** The export identity within this service.

**Parameter `fraction`:** The last measured completion fraction, or null while the active phase has no measured total.

**Parameter `status`:** The actual stage or outcome message.

**Parameter `error`:** The current failure diagnostic, or empty.

**Parameter `isBusy`:** Whether work still owns resources.

**Parameter `cancellationRequested`:** Whether cancellation is draining work.
