---
uid: api.6d51ae46c20732fbefeea430f2668877fe1a2b7df94c745312535ca189dafa3a
symbol: "engine:Inno.Editor.ImGui:F:Inno.Editor.ImGui.ImGuiInputTextFlags.NoUndoRedo"
source: xml
reviewed: 92d77eb2278aaac99e5d49b53409fbc47e0dbe20ceac775c0f318f8e803c47a3
title: "NoUndoRedo"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Disable undo/redo. Note that input text owns the text data while active, if you want to provide your own undo/redo stack you need e.g. to call ClearActiveID().
