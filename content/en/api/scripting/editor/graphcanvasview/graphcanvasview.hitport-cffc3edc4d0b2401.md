---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cffc3edc4d0b240157e74c8f57c3b33c6615e41e58566a90b9d54b28278b8543
symbol: scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasView.HitPort(InnoEditor.Graph.GraphCanvasLayout,System.Numerics.Vector2,System.Single)
title: GraphCanvasView.HitPort
kind: api
owners:
- Inno.Editor.Graph.ImGui
apiSurface: editor-script
sourceFingerprint: cbb2cfca14b7b73cd45b6c5b03bd55654fa1e7f13e77ce95676f079a2967dda2
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `layout`:** The current document presentation snapshot.

**Parameter `point`:** The screen-space pointer.

**Parameter `radius`:** The nonnegative minimum socket hit radius in screen pixels.

## Returns

The hit neutral port, including Missing state, or null over non-port content.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** The radius is negative or nonfinite.
