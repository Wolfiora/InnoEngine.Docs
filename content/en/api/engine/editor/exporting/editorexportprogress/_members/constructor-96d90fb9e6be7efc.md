---
uid: api.96d90fb9e6be7efcf3fbb4a3a5a6ce873ed1c556e1946e0ad0a6c901a480c2e5
symbol: "engine:Inno.Editor.Exporting:M:Inno.Editor.Exporting.EditorExportProgress.#ctor(System.Int64,System.Nullable{System.Single},System.String,System.String,System.Boolean,System.Boolean)"
source: xml
reviewed: 615d0115d27cc15d0ed22ad2224589e5b461dfc6b625955e98dc5517475db0a4
title: "Constructor"
kind: api
owners: [Inno.Editor.Exporting]
apiSurface: source-clr
---

Contains one owner-thread export presentation snapshot.

**Parameter `operationId`:** The export identity within this service.

**Parameter `fraction`:** The last measured completion fraction, or null while the active phase has no measured total.

**Parameter `status`:** The actual stage or outcome message.

**Parameter `error`:** The current failure diagnostic, or empty.

**Parameter `isBusy`:** Whether work still owns resources.

**Parameter `cancellationRequested`:** Whether cancellation is draining work.
