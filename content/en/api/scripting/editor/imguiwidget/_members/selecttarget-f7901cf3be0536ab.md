---
uid: api.f7901cf3be0536ab79bfe7581b4532c9e3745a52e8b32e7fd309e9537207fdd9
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.SelectTarget(InnoEditor.Interactions.EditorInteractions,InnoEngine.Core.IdentityObject,System.Collections.Generic.IReadOnlyList{InnoEngine.Core.RuntimeIdentity})"
source: xml
reviewed: 530d72887c28675a53bb9ff3e469e414f1305361f9af21fd40359c93da1bc3b0
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
