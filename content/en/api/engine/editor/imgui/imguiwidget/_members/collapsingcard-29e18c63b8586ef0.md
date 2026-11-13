---
uid: api.29e18c63b8586ef0817ecc267c1a8f186c7edf439f3121664afa85c48a703a37
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CollapsingCard(System.String,System.String,System.Action,System.Action,System.Boolean,System.Boolean,System.Single,System.Action)"
source: xml
reviewed: ade723b58e71b995006cdcf1df74b08c5501f0266e64614768c4c553da902a0c
title: "CollapsingCard"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a component-style collapsible card header.

**Parameter `id`:** The stable card identifier.

**Parameter `title`:** The visible card title.

**Parameter `drawLeadingControl`:** An optional control drawn before the title.

**Parameter `drawTrailingControl`:** An optional control aligned to the right edge.

**Parameter `defaultOpen`:** Whether the card starts expanded.

**Parameter `dimmed`:** Whether header controls and title use the inactive text color.

**Parameter `trailingControlWidth`:** The optional width reserved for the trailing control group.

**Parameter `drawContextMenu`:** An optional callback that binds a context menu to the complete header item.

**Returns:** `true` when card content should be drawn; otherwise, `false`.
