---
uid: api.1769d8f0a65b6da7f698f40cbf79d5dc9540e4cf3af27e1717e05c6340083861
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.Enqueue(System.String,System.Object)"
source: xml
reviewed: d819fa24e1c5eee505333c934b6aa1d62f90b50bb4a5a6d6af18688372fb9416
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
