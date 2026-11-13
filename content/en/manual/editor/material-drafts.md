---
title: Edit a material source draft
description: Record detached material edits, preserve recovery and publish only
  through explicit saving.
uid: manual.editor.material-drafts
kind: how-to
owners:
  - Inno.Editor.Shaders
contracts:
  - project.inno-editor-shaders
---
# Edit a material source draft

Material authoring separates a draft from the Assets owner's canonical material and the published runtime value. The UI-free `MaterialDocuments` service manages edits and recovery; presentation controls and shader-node drawers belong to the ImGui feature layer.

## Read and replace a detached value

Open the source path, then read the document by persistent asset ID. `Read` returns a detached material. Change that candidate and call `Replace` to record the edit immediately. `ReplaceMany` prevalidates and records a multi-document sample atomically.

Continuous input uses a shared `EditorEditGesture`. Its merge key identifies one interaction; it does not save the source. Save, Revert and Close go through the common documents service so dirty state, recovery and neutral History agree.

## Keep presentation metadata separate

`ShaderParameterPresentation` describes Editor-only grouping, description, visibility and finite ranges. It uses Serialization, stable binding IDs and the owner's reference context. It does not change the runtime shader interface or existing parameter values.

## Preserve recovery on conflicts

Draft storage retains neutral bytes. Until an explicit save, it does not publish a replacement canonical asset. A source conflict retains the draft and diagnostic. Reopening recovers history by persistent ID; missing source/type information forms a recoverable barrier rather than discarding work.

Do not keep detached assets, types, preview instances or registries across callbacks. Shutdown clears the current generation's cache while preserving unsaved recovery. See [material runtime usage](../rendering/materials.md) and [MaterialDocuments contracts](../../architecture/projects/inno-editor-shaders.md).
