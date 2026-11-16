---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8e3c242dd119c4cb3c895bbd0dc99ee0b817b678ff9a391c98a97a1f99e472d5
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CenteredWrappedText(System.String,System.Numerics.Vector2,System.Numerics.Vector2)
title: ImGuiWidget.CenteredWrappedText
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: b9fbd59ecc703683f862f2ec3673480331120e020005bc0d5873294d74052bf3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `text`:** The literal text to wrap and draw.

**Parameter `areaSize`:** The complete area reserved by the widget.

**Parameter `padding`:** The minimum horizontal and vertical distance retained from the area edges whenever space permits.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when an area component is not positive or a padding component is negative.
