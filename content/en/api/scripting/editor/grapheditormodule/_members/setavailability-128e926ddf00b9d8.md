---
uid: api.128e926ddf00b9d8188a4b597b0df285a4dea0737ab54776c5e481b04cce4726
symbol: "scripting:Inno.Editor.Graph:M:InnoEditor.Graph.GraphEditorModule.SetAvailability(System.Guid,System.Boolean)"
source: xml
reviewed: 8fd83399a39c8235517fe21d0677cbb901ec85f9485d1467b4418f983e610493
title: "SetAvailability"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: editor-script
apiScope: Editor
---

Marks a temporarily Missing source without discarding its graph or advancing its History stack.

**Parameter `documentId`:** The persistent identity of an open document.

**Parameter `available`:** Whether its source can be resolved in the current generation.
