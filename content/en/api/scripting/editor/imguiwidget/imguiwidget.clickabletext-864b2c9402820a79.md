---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.864b2c9402820a799302e0026886324faa8f81f75523bdf7488bfac733197c77
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.ClickableText(System.String,System.String,System.Numerics.Vector2,System.String)
title: ImGuiWidget.ClickableText
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: d445640f2ec971bca15c572edec33a845c8578b0fd453e977f655d01668f0347
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `text`:** Visible text or icon glyph.

**Parameter `controlSize`:** Size of the transparent interaction area.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

## Returns

`true` when the text is pressed.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when either component of `controlSize` is not positive.
