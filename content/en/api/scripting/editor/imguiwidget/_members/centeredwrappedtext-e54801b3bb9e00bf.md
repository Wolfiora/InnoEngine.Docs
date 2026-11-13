---
uid: api.e54801b3bb9e00bfbe570b6c07a8c83dec969d171d82c07860dd72c5db10a604
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.CenteredWrappedText(System.String,System.Numerics.Vector2,System.Numerics.Vector2)"
source: xml
reviewed: 331007f05d6191ec2a3e7b7d1d8a66db1c9e55159980cae4d964a252311ff4f3
title: "CenteredWrappedText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws wrapped non-interactive text as a centered block inside a padded layout area.

**Parameter `text`:** The literal text to wrap and draw.

**Parameter `areaSize`:** The complete area reserved by the widget.

**Parameter `padding`:** The minimum horizontal and vertical distance retained from the area edges whenever space permits.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when an area component is not positive or a padding component is negative.
