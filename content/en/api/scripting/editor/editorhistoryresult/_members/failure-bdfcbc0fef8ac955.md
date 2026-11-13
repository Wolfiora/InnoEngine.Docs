---
uid: api.bdfcbc0fef8ac955d22611cb96a2f020d1efd0ba88fc680e1cd14f09ebbcb56a
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryResult.Failure(System.String)"
source: xml
reviewed: b520011c733164d74bdb27d9638e1e53b28f0071861c1097399c6bb22455c9d4
title: "Failure"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates a failed history result without changing the owning history stack.

**Parameter `message`:** The non-empty diagnostic explaining why the transition could not complete.

**Returns:** A result representing a rejected or failed transition.

**Exception `T:System.ArgumentException`:** Thrown when `message` is empty.
