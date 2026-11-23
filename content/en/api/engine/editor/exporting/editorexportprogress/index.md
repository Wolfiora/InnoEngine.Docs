---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.editor.exporting.4954455ade0e3688
symbol: engine:Inno.Editor.Exporting:T:Inno.Editor.Exporting.EditorExportProgress
title: EditorExportProgress
kind: api
owners:
- Inno.Editor.Exporting
apiSurface: source-clr
sourceFingerprint: 8e226c6cf4730b5b6897738e7155ed2489f50c074b80b53c21dbc040e314ef7b
contracts:
- project.inno-editor-exporting

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Parameters

**Parameter `operationID`:** The export identity within this service.

**Parameter `fraction`:** The last measured completion fraction, or null while the active phase has no measured total.

**Parameter `status`:** The actual stage or outcome message.

**Parameter `error`:** The current failure diagnostic, or empty.

**Parameter `isBusy`:** Whether work still owns resources.

**Parameter `cancellationRequested`:** Whether cancellation is draining work.
