---
title: Inno.Editor.Panel.SceneView
description: "Internal Scene viewport host with neutral navigation and transactional transform editing."
uid: project.inno-editor-panel-sceneview
kind: project
owners: [Inno.Editor.Panel.SceneView]
---
# Inno.Editor.Panel.SceneView

Internal Scene viewport host with neutral navigation and transactional transform editing.

Start with the task linked below; assembly names are secondary implementation reference.

## User workflow

[Navigate and edit in Scene View](../../manual/editor/scene-view.md) explains controller-selected navigation, gizmos, Play isolation and unavailable-output states. The panel does not define a rendering worldview.

## Mechanism boundary

The host gathers active viewport contributors, captures ordered scenes and the active scene once, and supplies an explicit RenderContentScope. A controller-priority winner handles navigation and clicks while other contributors may still draw. Selection bounds and manipulation space belong to the contributor. The panel maps neutral manipulation space to the concrete UI integration.

Host navigation is serialized through Panel Capture/Restore into editor.ini, not into Scene, Undo or plugin persistent state. Each transform drag goes through SceneEdits as one transaction. During Play it uses the isolated runtime graph and History branch with persistence disabled.

The draw-only scope borrows the presented world's services and restores Edit afterward. Closing releases its offscreen target. Status text remains centered, padded and wrapping when contributions or targets are unavailable. Icons and model helper content do not change the underlying object coordinates to avoid overlap.

## Extension boundary

This captured assembly has no public CLR types. Extend through Editor Rendering's viewport contributor/navigation/manipulation protocols. Its dependency on Play presentation is implementation-only; it does not expose RuntimeSession as a panel API. Native manipulation options are scoped per call and restored afterward.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.SceneView/Inno.Editor.Panel.SceneView.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.
