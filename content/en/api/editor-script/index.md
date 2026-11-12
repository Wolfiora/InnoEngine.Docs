---
title: Editor script API
description: Exact logical declarations and required caller contracts for the editor-script surface.
uid: api.editor-script
kind: landing
contracts:
  - manual.scripting.use-script-api
---
# Editor script API

Use this surface from project Editor scripts. Editor references add authoring declarations to the Runtime script surface; their presence does not make them available to a running Player. The API catalog records the actual Editor compiler selection.

## Start with a task

- [Select and use the script API](../../manual/scripting/use-script-api.md).
- [Generate IDE projects and compile scripts](../../contributing/compile-project-scripts.md).
- [Understand compilation and activation](../../manual/scripting/compile-and-reload.md).

## Caller obligations

Keep the containing owner and generation alive while using borrowed objects. Logical names do not change resource ownership, threading or retirement obligations. Each type links its module contract and the script calling guide; read both before relying on a member.

A constructor labeled as an IDE projection artifact is not a supported construction path. Obtain that object from its documented owner or factory. An IDE completion entry does not prove runtime availability.

## Exact reference by owner

The owner list below is secondary navigation derived from the bound compiler capture. You do not need to know assembly names to follow the tasks above. Declaration coverage is separate from matching source and executable-example certification.

- [Inno.Assets.Pipeline](inno-assets-pipeline/index.md)
- [Inno.Core.Serialization](inno-core-serialization/index.md)
- [Inno.Editor.Assets](inno-editor-assets/index.md)
- [Inno.Editor.Assets.ImGui](inno-editor-assets-imgui/index.md)
- [Inno.Editor.Core](inno-editor-core/index.md)
- [Inno.Editor.Graph](inno-editor-graph/index.md)
- [Inno.Editor.Graph.ImGui](inno-editor-graph-imgui/index.md)
- [Inno.Editor.ImGui](inno-editor-imgui/index.md)
- [Inno.Editor.Inspection](inno-editor-inspection/index.md)
- [Inno.Editor.Interactions](inno-editor-interactions/index.md)
- [Inno.Editor.Panel.Hierarchy](inno-editor-panel-hierarchy/index.md)
- [Inno.Editor.Panel.Inspector](inno-editor-panel-inspector/index.md)
- [Inno.Editor.PlayMode](inno-editor-playmode/index.md)
- [Inno.Editor.Rendering](inno-editor-rendering/index.md)
- [Inno.Editor.Scene](inno-editor-scene/index.md)
- [Inno.Editor.Settings](inno-editor-settings/index.md)
- [Inno.Editor.Shaders](inno-editor-shaders/index.md)
- [Inno.Editor.Shaders.ImGui](inno-editor-shaders-imgui/index.md)
- [Inno.Rendering.Assets.Authoring](inno-rendering-assets-authoring/index.md)
- [Inno.Rendering.Shaders](inno-rendering-shaders/index.md)

## Related surfaces

See the [other script surface](../runtime-script/index.md) and [API reference overview](../index.md) before choosing a host or script declaration.
