---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.29e18c63b8586ef0817ecc267c1a8f186c7edf439f3121664afa85c48a703a37
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CollapsingCard(System.String,System.String,System.Action,System.Action,System.Boolean,System.Boolean,System.Single,System.Action)
title: ImGuiWidget.CollapsingCard
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 09d1d94d6b40524bd90f1b82c2204f44b5a960be4abfc62022521a7ac9921204
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The stable card identifier.

**Parameter `title`:** The visible card title.

**Parameter `drawLeadingControl`:** An optional control drawn before the title.

**Parameter `drawTrailingControl`:** An optional control aligned to the right edge.

**Parameter `defaultOpen`:** Whether the card starts expanded.

**Parameter `dimmed`:** Whether header controls and title use the inactive text color.

**Parameter `trailingControlWidth`:** The optional width reserved for the trailing control group.

**Parameter `drawContextMenu`:** An optional callback that binds a context menu to the complete header item.

## Returns

`true` when card content should be drawn; otherwise, `false`.
