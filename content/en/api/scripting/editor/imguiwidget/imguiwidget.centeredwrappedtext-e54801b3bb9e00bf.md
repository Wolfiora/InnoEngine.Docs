---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e54801b3bb9e00bfbe570b6c07a8c83dec969d171d82c07860dd72c5db10a604
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.CenteredWrappedText(System.String,System.Numerics.Vector2,System.Numerics.Vector2)
title: ImGuiWidget.CenteredWrappedText
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 40eac94aa090461ea573226a522a33779cdd409e9c286b0d535e8f925199fff5
apiScope: Editor
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
