---
title: Inno.Editor.Panel.GameView
description: "Internal host for routed game outputs and focused Play input."
uid: project.inno-editor-panel-gameview
kind: project
owners: [Inno.Editor.Panel.GameView]
---
# Inno.Editor.Panel.GameView

Internal host for routed game outputs and focused Play input.

Start with the task linked below; assembly names are secondary implementation reference.

## User workflow

[Use the Game View](../../manual/editor/game-view.md) for aspect ratio, HiDPI, input routing and presented-world selection. This panel implements the open kind inno.editor.viewport.game, not a Camera or Scene renderer.

## Implementation and ownership

The panel obtains a content scope from IEditorGameScenePresentation and submits view size and input to the matching output contributors/models. A drawing-only presentation scope selects Play Identity/UI/audio services and restores Edit on exit. It does not move Editor updates or script activation into the Play scope.

EditorGameInputCapture reports viewport identity, image rectangle, foreground hit and focus. The host resolves the actual platform window through IPresentationContext. Held input is released on focus loss/hide/close.

Composition targets resize at a render safe point and are displayed as opaque presentation textures without CPU readback. Pixel-density and content-aspect policy match the deployed Player's GamePresentationSettings. No implicit global Scene is supplied to Rendering Runtime.

## Extension boundary

This project has no public CLR types in the captured source. Extend the content source, output contributor or render model through their owning contracts rather than referencing a private panel implementation. Resource/device and interactive product checks remain separate from an empty public API set.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.GameView/Inno.Editor.Panel.GameView.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.
