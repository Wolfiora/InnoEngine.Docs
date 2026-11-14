---
uid: api.5b056b8422a9caa531c9d01bd5969e3612b839d7fb77440ca6419be02d4b3d85
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorPalette.Lerp(System.Numerics.Vector4,System.Numerics.Vector4,System.Single)"
source: xml
reviewed: 77e701d5459d58cdde160d5636aecc32fa23e1e6733a40e60a8ee84bd6dcc4f9
title: "EditorPalette.Lerp"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Linearly interpolates two palette colors using a clamped amount.

**Parameter `from`:** The color returned when `amount` is zero.

**Parameter `to`:** The color returned when `amount` is one.

**Parameter `amount`:** The interpolation amount, clamped to the inclusive zero-to-one range.

**Returns:** The component-wise interpolated color.
