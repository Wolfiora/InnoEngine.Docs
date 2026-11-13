---
uid: api.4201d77e22abdcdb988009858dcf340e9cd0f2d75e763369ee27b2d471253551
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGui.ColorEditLinear4(System.String,System.Numerics.Vector4@,Inno.Editor.ImGui.ImGuiColorEditFlags)"
source: xml
reviewed: e93bde9bc17268e1308220017879f1d636cebb1ef5c79cb749f141fe40102bec
title: "ColorEditLinear4"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Displays a linear RGBA color through a display-sRGB picker and returns edits in linear space.

**Parameter `label`:** The stable identity and visible label of the color control.

**Parameter `value`:** Linear RGB and alpha; only changed RGB channels are decoded, while alpha is never transfer-encoded.

**Parameter `flags`:** Dear ImGui color-edit flags; display modes interpret sRGB values and input storage must be RGB.

**Returns:** True if the display color changed and `value` contains decoded linear RGB.

**Exception `T:System.ArgumentException`:** HSV input storage conflicts with the linear-RGB value contract.
