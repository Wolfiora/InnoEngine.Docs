---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.96d90fb9e6be7efcf3fbb4a3a5a6ce873ed1c556e1946e0ad0a6c901a480c2e5
symbol: engine:Inno.Editor.Exporting:M:Inno.Editor.Exporting.EditorExportProgress.#ctor(System.Int64,System.Nullable{System.Single},System.String,System.String,System.Boolean,System.Boolean)
title: EditorExportProgress.Constructor
kind: api
owners:
- Inno.Editor.Exporting
apiSurface: source-clr
sourceFingerprint: 6da533f13d1819c55a41a67bc26b3fbcfb5e00c37703c98f11de3ff162f96a40
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `operationID`:** The export identity within this service.

**Parameter `fraction`:** The last measured completion fraction, or null while the active phase has no measured total.

**Parameter `status`:** The actual stage or outcome message.

**Parameter `error`:** The current failure diagnostic, or empty.

**Parameter `isBusy`:** Whether work still owns resources.

**Parameter `cancellationRequested`:** Whether cancellation is draining work.
