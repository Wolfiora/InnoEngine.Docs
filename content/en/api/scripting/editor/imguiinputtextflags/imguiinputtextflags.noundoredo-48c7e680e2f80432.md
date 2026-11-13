---
uid: api.48c7e680e2f80432866edd0e6fdf76a8cb43a1558f8d4f62b6bc6519c6509af7
symbol: "scripting:Inno.Editor.ImGui:F:InnoEditor.ImGui.ImGuiInputTextFlags.NoUndoRedo"
source: xml
reviewed: 0d79c7a7fc551c1aaa9f60c4ca22304c8ab9eb36885caa01990a2c10cecbc375
title: "ImGuiInputTextFlags.NoUndoRedo"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Disable undo/redo. Note that input text owns the text data while active, if you want to provide your own undo/redo stack you need e.g. to call ClearActiveID().
