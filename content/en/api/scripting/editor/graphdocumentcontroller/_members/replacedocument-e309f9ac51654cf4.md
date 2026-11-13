---
uid: api.e309f9ac51654cf4adcde68adcaa4b18c1900388a7eb34d1fa10671afac0b3b6
symbol: "scripting:Inno.Editor.Graph:M:InnoEditor.Graph.GraphDocumentController.ReplaceDocument(InnoEngine.Graphs.GraphDocument,System.String,System.String)"
source: xml
reviewed: 1de7c853c23b6e33b85a5898a3a5f0f1188c756f88bf33de44f34f9b3504bf21
title: "ReplaceDocument"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: editor-script
apiScope: Editor
---

Replaces the complete neutral document as one atomic, undoable authoring operation.

**Parameter `replacement`:** Complete replacement document copied by the operation.

**Parameter `historyName`:** Concise artist-facing history entry name.

**Parameter `gestureId`:** Unique active gesture identity for continuous samples, or null for an independent edit.
