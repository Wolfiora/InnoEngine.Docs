---
title: Inno.Editor.Shaders.ImGui
description: "Reusable shader-node, material and parameter inspection presentation over shared authoring services."
uid: project.inno-editor-shaders-imgui
kind: project
owners: [Inno.Editor.Shaders.ImGui]
---
# Inno.Editor.Shaders.ImGui

Reusable shader-node, material and parameter inspection presentation over shared authoring services.

## Extend presentation without owning a panel

ShaderNodeDrawerAttribute and ShaderNodeDrawer describe node presentation using stable definition identity. ShaderNodeDrawContext supplies current node identity, neutral property access, gestures and borrowed previews. These types belong to this presentation library, not the headless Shaders module or ShaderEditor Panel.

Use DrawProperty for the common edit gesture, or the current merge key for a custom continuous input. Never retain the context, canonical asset or stale preview. Material inspectors use the shared draft service; ShaderPropertyInspector handles actual parameter types and mixed values, and ShaderPreviews displays only results supplied by the preview owner.

## Respect generation boundaries

Product composition explicitly deploys the assembly; registries follow the current type generation and reject invalid candidates before replacement. UI calls require the current owner-thread session/context. Stable IDs and neutral values may persist; plugin types, draw delegates and instances retire with their generation. See [Shader Editor](../../manual/editor/shader-editor.md), [material drafts](../../manual/editor/material-drafts.md) and [shared drawers](../../extending/inspectors.md).

## Source boundary

[Source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Inno.Editor.Shaders.ImGui.csproj). Declarations, script selection and runtime behavior require separate matching evidence.

## API reference

[Types and exact member contracts](../types/editor-presentation/inno-editor-shaders-imgui/index.md) retain the engine-owned declarations and captured XML.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Editor script API](../editor-script/inno-editor-shaders-imgui/index.md)
