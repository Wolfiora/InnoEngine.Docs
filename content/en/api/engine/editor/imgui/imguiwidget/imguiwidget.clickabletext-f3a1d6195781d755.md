---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f3a1d6195781d7553241824559bbe6a4af6d4a4cf99390de979f922dbc8b6717
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClickableText(System.String,System.String,System.String)
title: ImGuiWidget.ClickableText
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: a3f51b9addbff51a5ca254ba47d1e4e94c96544c854076f79775b8eb4b82dbaf
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `text`:** Visible text or icon glyph.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

## Returns

`true` when the text is pressed.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.
