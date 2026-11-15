---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e54801b3bb9e00bfbe570b6c07a8c83dec969d171d82c07860dd72c5db10a604
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.CenteredWrappedText(System.String,System.Numerics.Vector2,System.Numerics.Vector2)
title: ImGuiWidget.CenteredWrappedText
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: a30b9cd3bd60e25f857676d4b8ae55e092de2895b329a33aa49a7ccf10164ffd
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `text`:** The literal text to wrap and draw.

**Parameter `areaSize`:** The complete area reserved by the widget.

**Parameter `padding`:** The minimum horizontal and vertical distance retained from the area edges whenever space permits.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when an area component is not positive or a padding component is negative.
