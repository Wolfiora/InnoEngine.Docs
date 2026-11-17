---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6c3c1eff1e4fa8fbe779927dfff1b4c21aefc466ad7c5053d815e2d4dc3400a8
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.CollapsingCard(System.String,System.String,System.Action,System.Action,System.Boolean,System.Boolean,System.Single,System.Action)
title: ImGuiWidget.CollapsingCard
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: c65b93bd4f7c4ee9d5eaa4938c3e5d265e06e4675d9eeb33807021dd31ec37c9
apiScope: Editor
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
