---
title: Inno.Adapter.Presentation.ImGui.Bgfx
description: "Editor draw-data rendering, correct output color transfer and protected BGFX viewport retirement."
uid: project.inno-adapter-presentation-imgui-bgfx
kind: project
owners: [Inno.Adapter.Presentation.ImGui.Bgfx]
---
# Inno.Adapter.Presentation.ImGui.Bgfx

Editor draw-data rendering, correct output color transfer and protected BGFX viewport retirement.

Read the linked task or ownership explanation before using the exact API below.

## Present Editor draw data

[ImGui rendering and viewport lifetime](../../backends/imgui-rendering.md) explains linear composition, explicit output encoding, shader product identity and safe retirement. This adapter is outside user Render Pipelines and ordinary game scripts.

The provider requires explicit interaction options and is explicitly registered in the authoring catalog. A successfully created platform context owns the renderer; an outer presentation wrapper must not dispose it again. Input continues through existing SDL/Core Events services.

## Close without racing submission

RetireViewport suppresses later draws and delegates to the device's surface-retirement task. DrainViewportRetirements runs on the owner thread at a closed-frame safe point. Retain GPU and window owners until their actual retirement completes. Embedded shader artifacts are validated build outputs; runtime does not compile or select a different target from host properties.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/Inno.Adapter.Presentation.ImGui.Bgfx.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](../types/backend-adapters/inno-adapter-presentation-imgui-bgfx/index.md) retain declarations and source XML from the recorded engine capture.
