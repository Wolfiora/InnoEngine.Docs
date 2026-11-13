---
uid: api.ee80065545a1c20bd308b7a52a9cafaad027661b30eefc854dcfcf327e742b7b
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryChange.#ctor(System.String,InnoEditor.Interactions.EditorHistoryPayload,System.String)"
source: xml
reviewed: 59983647244f34ff8f5adb277bf7857a4b5bde8eba46596bb762ca2be6ce54c8
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates a neutral history change.

**Parameter `kind`:** The stable globally unique handler protocol identifier.

**Parameter `payload`:** The immutable neutral payload interpreted by the handler.

**Parameter `mergeKey`:** An optional stable key used by the handler to merge adjacent changes.

**Exception `T:System.ArgumentException`:** Thrown when `kind` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `payload` is `null`.
