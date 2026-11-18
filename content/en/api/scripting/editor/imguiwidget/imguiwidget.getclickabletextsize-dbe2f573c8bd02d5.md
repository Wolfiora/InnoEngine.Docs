---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.dbe2f573c8bd02d56ef5b3f2c61754ea2fd842d71f9bdc42c184791281f912eb
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.GetClickableTextSize(System.String,System.Numerics.Vector2)
title: ImGuiWidget.GetClickableTextSize
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: 1ca0e78bbabc013b6eda5fa04e87ba21dd9f71aed9460ee00a826626ebc25e1c
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `text`:** Visible text whose dimensions determine the content size.

**Parameter `padding`:** Horizontal and vertical padding surrounding the text.

## Returns

The complete transparent interaction area size.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when either component of `padding` is negative.
