---
uid: api.6d51ae46c20732fbefeea430f2668877fe1a2b7df94c745312535ca189dafa3a
symbol: "engine:Inno.Editor.ImGui:F:Inno.Editor.ImGui.ImGuiInputTextFlags.NoUndoRedo"
source: xml
reviewed: c434cd1b28196433fe0a059369168318aa6d89b12f09580481c16a5cf9e41cc3
title: "ImGuiInputTextFlags.NoUndoRedo"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Disable undo/redo. Note that input text owns the text data while active, if you want to provide your own undo/redo stack you need e.g. to call ClearActiveID().
