---
uid: api.8e3c242dd119c4cb3c895bbd0dc99ee0b817b678ff9a391c98a97a1f99e472d5
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CenteredWrappedText(System.String,System.Numerics.Vector2,System.Numerics.Vector2)"
source: xml
reviewed: 14257286c4e9a70c53a77de7d0369cfad6f4969b40308565bd438aa9e7535904
title: "CenteredWrappedText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws wrapped non-interactive text as a centered block inside a padded layout area.

**Parameter `text`:** The literal text to wrap and draw.

**Parameter `areaSize`:** The complete area reserved by the widget.

**Parameter `padding`:** The minimum horizontal and vertical distance retained from the area edges whenever space permits.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when an area component is not positive or a padding component is negative.
