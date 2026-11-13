---
uid: api.e309f9ac51654cf4adcde68adcaa4b18c1900388a7eb34d1fa10671afac0b3b6
symbol: "scripting:Inno.Editor.Graph:M:InnoEditor.Graph.GraphDocumentController.ReplaceDocument(InnoEngine.Graphs.GraphDocument,System.String,System.String)"
source: xml
reviewed: bc782e3ef830be618fa002a70bf923d894162837f539f9325d9989bea00413f6
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
