---
title: Inno.Editor.Panel.ShaderEditor
description: "The internal shader graph canvas coordinating shared documents, graph edits, compilation and presentation."
uid: project.inno-editor-panel-shadereditor
kind: project
owners: [Inno.Editor.Panel.ShaderEditor]
---
# Inno.Editor.Panel.ShaderEditor

The internal shader graph canvas coordinating shared documents, graph edits, compilation and presentation.

## Author a shader explicitly

[Shader Editor tasks](../../manual/editor/shader-editor.md) explain source selection, graph edits, Save/Revert/Check, recovery, reusable graphs and current preview boundaries. This panel has no selected public/protected types. Node drawers live in Shaders.ImGui, compiler extensions in Rendering.Shaders and neutral editing in Graph.

A document resolves the asset persistent ID from its source entry rather than confusing file and asset identities. Its lifetime scope owns generation registries, headless document registration and dependent previews. Stop retains unsaved recovery and retires owners without saving source implicitly.

## Keep compilation and publication distinct

Check isolates the current draft and validates the actual candidate; Save publishes source independently. Subsequent edits invalidate the preview, and failure does not show last-good as proof of a successful new Check. Shared Console diagnostics own detailed results. Copy/subgraph source creation uses the existing asset/History transaction.

Input, port identity, required/optional semantics and stage constraints follow typed graph contracts. Missing ports remain visible rather than reconnecting by array position. UI wiring is not certification of every advanced node or device journey. The script drawer example below belongs to the presentation contract, not a new public panel API.

## Script examples

- [Explicit editor-script surface](../../extending/examples/inno-editor-panel-shadereditor-editor-script.md)

## Source boundary

[Source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.ShaderEditor/Inno.Editor.Panel.ShaderEditor.csproj). Declarations, script selection and runtime behavior require separate matching evidence.
