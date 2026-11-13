---
uid: api.1769d8f0a65b6da7f698f40cbf79d5dc9540e4cf3af27e1717e05c6340083861
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.Enqueue(System.String,System.Object)"
source: xml
reviewed: 87d75162d5e2963ce316707d4a9171ea5c68b47ae8925a368bb1188de423fed7
title: "Enqueue"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Queues an action until the current UI traversal completes.

**Parameter `action`:** The stable action name.

**Parameter `argument`:** An optional action argument.

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
