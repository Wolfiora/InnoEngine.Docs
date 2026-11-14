---
uid: api.ee80065545a1c20bd308b7a52a9cafaad027661b30eefc854dcfcf327e742b7b
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryChange.#ctor(System.String,InnoEditor.Interactions.EditorHistoryPayload,System.String)"
source: xml
reviewed: c930735ce5185ea3263955bd9a17ab95cec1b406e89b27d4123bf9241100a94b
title: "EditorHistoryChange.Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates a neutral history change.

## Parameters

**Parameter `kind`:** The stable globally unique handler protocol identifier.

**Parameter `payload`:** The immutable neutral payload interpreted by the handler.

**Parameter `mergeKey`:** An optional stable key used by the handler to merge adjacent changes.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `kind` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `payload` is `null`.
