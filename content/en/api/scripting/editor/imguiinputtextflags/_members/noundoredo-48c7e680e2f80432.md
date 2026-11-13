---
uid: api.48c7e680e2f80432866edd0e6fdf76a8cb43a1558f8d4f62b6bc6519c6509af7
symbol: "scripting:Inno.Editor.ImGui:F:InnoEditor.ImGui.ImGuiInputTextFlags.NoUndoRedo"
source: xml
reviewed: 34baacdd3381a6b5247ce3d4750b94b88a0ee4e962a07e0ccea2b44ffa2a7940
title: "NoUndoRedo"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Disable undo/redo. Note that input text owns the text data while active, if you want to provide your own undo/redo stack you need e.g. to call ClearActiveID().
