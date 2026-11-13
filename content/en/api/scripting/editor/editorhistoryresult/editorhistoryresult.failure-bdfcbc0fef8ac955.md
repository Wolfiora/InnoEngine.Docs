---
uid: api.bdfcbc0fef8ac955d22611cb96a2f020d1efd0ba88fc680e1cd14f09ebbcb56a
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryResult.Failure(System.String)"
source: xml
reviewed: 28bbe3ed3945847734aceec5441c3198b02dd291470a1e2fff5b2122e6c1b266
title: "EditorHistoryResult.Failure"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates a failed history result without changing the owning history stack.

**Parameter `message`:** The non-empty diagnostic explaining why the transition could not complete.

**Returns:** A result representing a rejected or failed transition.

**Exception `T:System.ArgumentException`:** Thrown when `message` is empty.
