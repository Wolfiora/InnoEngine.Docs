---
uid: api.6c3c1eff1e4fa8fbe779927dfff1b4c21aefc466ad7c5053d815e2d4dc3400a8
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.CollapsingCard(System.String,System.String,System.Action,System.Action,System.Boolean,System.Boolean,System.Single,System.Action)"
source: xml
reviewed: 6e41468debde7a886eacdb64063f13492eb8f5393f3e3abdeb68de45b31ec057
title: "ImGuiWidget.CollapsingCard"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
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
