---
uid: api.128e926ddf00b9d8188a4b597b0df285a4dea0737ab54776c5e481b04cce4726
symbol: "scripting:Inno.Editor.Graph:M:InnoEditor.Graph.GraphEditorModule.SetAvailability(System.Guid,System.Boolean)"
source: xml
reviewed: 204bf7282e36928b15c29084b4ca897f2f1b1737dd1c2e3670f8d5188cbe5dd9
title: "SetAvailability"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: editor-script
apiScope: Editor
---

Marks a temporarily Missing source without discarding its graph or advancing its History stack.

**Parameter `documentId`:** The persistent identity of an open document.

**Parameter `available`:** Whether its source can be resolved in the current generation.
