---
uid: api.f7901cf3be0536ab79bfe7581b4532c9e3745a52e8b32e7fd309e9537207fdd9
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.SelectTarget(InnoEditor.Interactions.EditorInteractions,InnoEngine.Core.IdentityObject,System.Collections.Generic.IReadOnlyList{InnoEngine.Core.RuntimeIdentity})"
source: xml
reviewed: d5625cc08ba1a49b9f167eeac5c235dc02c9708d4e268e88a15bd0c79eff5cd2
title: "SelectTarget"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Applies ordinary, additive or visible-range selection using the active keyboard modifiers.

**Parameter `interactions`:** The session's authoritative interaction service.

**Parameter `target`:** The freshly resolved clicked target.

**Parameter `visibleTargets`:** Current runtime-identity view order; collapsed or filtered items must be omitted.
