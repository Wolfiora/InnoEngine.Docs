---
uid: api.b31c3101953fedfdd75a30de461d064fa37fbba4d0ab6234a61d35226e33d1cf
symbol: "engine:Inno.Editor.ImGui:F:Inno.Editor.ImGui.ImGuiSliderFlags.ClampZeroRange"
source: xml
reviewed: f9f8177aff8339a255b4dec8658804e23745e1bcc11292b31b680b9f96a47a10
title: "ClampZeroRange"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Clamp even if min==max==0.0f. Otherwise due to legacy reason DragXXX functions don't clamp with those values. When your clamping limits are dynamic you almost always want to use it.
