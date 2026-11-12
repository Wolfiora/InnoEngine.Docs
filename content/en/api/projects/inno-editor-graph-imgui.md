---
title: Inno.Editor.Graph.ImGui
description: "Neutral graph geometry, pointer intent and borrowed UI drawing independent of shader or panel semantics."
uid: project.inno-editor-graph-imgui
kind: project
owners: [Inno.Editor.Graph.ImGui]
---
# Inno.Editor.Graph.ImGui

Neutral graph geometry, pointer intent and borrowed UI drawing independent of shader or panel semantics.

## Separate geometry from domain mutation

[Present a graph canvas](../../extending/graph-canvas.md) explains frozen view transforms, atomic layout snapshots, input routing, current-frame draw borrowing and one-edit gesture completion. Pure geometry/hit/pointer contracts do not require native drawing; drawing itself requires the correct UI session/context/window/frame.

The controller returns intent. The consuming feature validates and commits through its domain/History owner, including operation-preparation notifications before Save/Close/Play/Reload. Cancel does not edit the document; failure preserves retryable input.

No long-lived state may retain domain instances, plugin types or callbacks. Draw callbacks balance their own scopes; this layer restores only the clip it owns and propagates exceptions. Invalid navigation or nonfinite/negative geometry fails rather than being repaired silently.

## Source boundary

[Source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Inno.Editor.Graph.ImGui.csproj). Declarations, script selection and runtime behavior require separate matching evidence.

## API reference

[Types and exact member contracts](../types/editor-presentation/inno-editor-graph-imgui/index.md) retain the engine-owned declarations and captured XML.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Editor script API](../editor-script/inno-editor-graph-imgui/index.md)
