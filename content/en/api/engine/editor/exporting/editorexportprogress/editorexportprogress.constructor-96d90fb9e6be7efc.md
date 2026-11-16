---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.96d90fb9e6be7efcf3fbb4a3a5a6ce873ed1c556e1946e0ad0a6c901a480c2e5
symbol: engine:Inno.Editor.Exporting:M:Inno.Editor.Exporting.EditorExportProgress.#ctor(System.Int64,System.Nullable{System.Single},System.String,System.String,System.Boolean,System.Boolean)
title: EditorExportProgress.Constructor
kind: api
owners:
- Inno.Editor.Exporting
apiSurface: source-clr
reviewed: 4a182042384c47b8c68767ddbbc415d0ec79370fc0ddeffc386c63ddbc34ee85
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `operationId`:** The export identity within this service.

**Parameter `fraction`:** The last measured completion fraction, or null while the active phase has no measured total.

**Parameter `status`:** The actual stage or outcome message.

**Parameter `error`:** The current failure diagnostic, or empty.

**Parameter `isBusy`:** Whether work still owns resources.

**Parameter `cancellationRequested`:** Whether cancellation is draining work.
