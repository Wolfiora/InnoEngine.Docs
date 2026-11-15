---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c892bb125b0951f3f2a84d68acbfb77d7ad789976121d46ada16f2c5619db4cc
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.GetMouseDragDelta(InnoEditor.ImGui.ImGuiMouseButton,System.Single)
title: ImGui.GetMouseDragDelta
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: adbacb37362f8b7e56a6893beccd32cb3ae1cdd6aa3f65bf1c3ee72dccf0e9f5
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `button`:** The button that owns the drag.

**Parameter `threshold`:** Movement required to start dragging, or a negative value to use the Editor's configured threshold.

## Returns

Displacement in UI coordinates, or zero before the drag threshold is crossed or when no drag is available. The value is cumulative; it must be applied to a captured starting value, not added again each frame.
