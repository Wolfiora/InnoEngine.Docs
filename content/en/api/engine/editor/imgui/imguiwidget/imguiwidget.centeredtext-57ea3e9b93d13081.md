---
uid: api.57ea3e9b93d1308149df0cc48dd828166b513aad0f4ac25c73ddb44dc2a48398
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CenteredText(System.String,System.Numerics.Vector2)"
source: xml
reviewed: 24762f197974827e4364f71b156e2ff7619a25b83f5a1ad344cba82b97ce28d2
title: "ImGuiWidget.CenteredText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws non-interactive text centered inside a reserved layout area.

## Parameters

**Parameter `text`:** Visible text.

**Parameter `areaSize`:** Size of the layout area that contains the text.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when either component of `areaSize` is not positive.
