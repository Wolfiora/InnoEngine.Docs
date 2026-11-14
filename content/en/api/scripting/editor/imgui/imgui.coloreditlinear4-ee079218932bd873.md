---
uid: api.ee079218932bd87399dddf1a36daca78596eda8dfc680c6a65b6cbbe26a507ad
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.ColorEditLinear4(System.String,System.Numerics.Vector4@,InnoEditor.ImGui.ImGuiColorEditFlags)"
source: xml
reviewed: 32233434239022599f101006f20c44ce89b205326eec05b7cf7bfa678e50a340
title: "ImGui.ColorEditLinear4"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Displays a linear RGBA color through a display-sRGB picker and returns edits in linear space.

**Parameter `label`:** The stable identity and visible label of the color control.

**Parameter `value`:** Linear RGB and alpha; only changed RGB channels are decoded, while alpha is never transfer-encoded.

**Parameter `flags`:** Dear ImGui color-edit flags; display modes interpret sRGB values and input storage must be RGB.

**Returns:** True if the display color changed and `value` contains decoded linear RGB.

**Exception `T:System.ArgumentException`:** HSV input storage conflicts with the linear-RGB value contract.
