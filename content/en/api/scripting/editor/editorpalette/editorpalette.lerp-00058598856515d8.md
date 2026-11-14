---
uid: api.00058598856515d8434c6aadbd613f6d308f035f976c1cde2f62953f3a034289
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.EditorPalette.Lerp(System.Numerics.Vector4,System.Numerics.Vector4,System.Single)"
source: xml
reviewed: 4e1525079725d7472e54330cc9128fbd76c338e47ecacb49532754a6899ac68e
title: "EditorPalette.Lerp"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Linearly interpolates two palette colors using a clamped amount.

## Parameters

**Parameter `from`:** The color returned when `amount` is zero.

**Parameter `to`:** The color returned when `amount` is one.

**Parameter `amount`:** The interpolation amount, clamped to the inclusive zero-to-one range.

## Returns

The component-wise interpolated color.
