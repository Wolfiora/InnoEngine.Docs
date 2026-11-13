---
uid: api.0a226d3507b3f0113703414d06e85a3d9a423dae770ba6a9a2a39dd5eb04bff6
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SelectTarget(Inno.Editor.Interactions.EditorInteractions,Inno.Core.Identity.IdentityObject,System.Collections.Generic.IReadOnlyList{Inno.Core.Identity.RuntimeIdentity})"
source: xml
reviewed: fb84fe64d8df49a8b7a1bdb480e6afad9f8e8d8af1c1ef9cc621ac66ab99a35e
title: "SelectTarget"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Applies ordinary, additive or visible-range selection using the active keyboard modifiers.

**Parameter `interactions`:** The session's authoritative interaction service.

**Parameter `target`:** The freshly resolved clicked target.

**Parameter `visibleTargets`:** Current runtime-identity view order; collapsed or filtered items must be omitted.
