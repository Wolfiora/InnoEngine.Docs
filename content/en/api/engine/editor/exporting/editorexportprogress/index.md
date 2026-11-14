---
uid: api.inno.editor.exporting.4954455ade0e3688
symbol: "engine:Inno.Editor.Exporting:T:Inno.Editor.Exporting.EditorExportProgress"
source: xml
reviewed: e61224ac25c068e740f7aa8474f174f4b4a07650a706dacf4dcf1ea0651584c8
title: "EditorExportProgress"
kind: api
owners: [Inno.Editor.Exporting]
apiSurface: source-clr
contracts:
- project.inno-editor-exporting
aliases: []
---

Contains one owner-thread export presentation snapshot.

## Parameters

**Parameter `operationId`:** The export identity within this service.

**Parameter `fraction`:** The last measured completion fraction, or null while the active phase has no measured total.

**Parameter `status`:** The actual stage or outcome message.

**Parameter `error`:** The current failure diagnostic, or empty.

**Parameter `isBusy`:** Whether work still owns resources.

**Parameter `cancellationRequested`:** Whether cancellation is draining work.
