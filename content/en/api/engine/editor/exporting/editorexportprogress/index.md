---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.editor.exporting.4954455ade0e3688
symbol: engine:Inno.Editor.Exporting:T:Inno.Editor.Exporting.EditorExportProgress
title: EditorExportProgress
kind: api
owners:
- Inno.Editor.Exporting
apiSurface: source-clr
reviewed: e61224ac25c068e740f7aa8474f174f4b4a07650a706dacf4dcf1ea0651584c8
contracts:
- project.inno-editor-exporting

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Parameters

**Parameter `operationId`:** The export identity within this service.

**Parameter `fraction`:** The last measured completion fraction, or null while the active phase has no measured total.

**Parameter `status`:** The actual stage or outcome message.

**Parameter `error`:** The current failure diagnostic, or empty.

**Parameter `isBusy`:** Whether work still owns resources.

**Parameter `cancellationRequested`:** Whether cancellation is draining work.
