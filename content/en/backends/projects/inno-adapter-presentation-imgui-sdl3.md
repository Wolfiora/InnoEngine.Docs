---
title: Inno.Adapter.Presentation.ImGui.Sdl3
description: "Managed SDL/ImGui context, frame, font and viewport ownership with an explicitly selected renderer."
uid: project.inno-adapter-presentation-imgui-sdl3
kind: project
owners: [Inno.Adapter.Presentation.ImGui.Sdl3]
---
# Inno.Adapter.Presentation.ImGui.Sdl3

Managed SDL/ImGui context, frame, font and viewport ownership with an explicitly selected renderer.

Read the linked task or ownership explanation before using the exact API below.

## Compose and retire a context

[Own an ImGui context](../imgui-context.md) explains explicit application/window/interaction inputs, successful renderer transfer, frame borrowing, callback quiescence and retryable retirement. The adapter does not infer platform policy or duplicate window/event ownership.

## Prepare before the first frame

Custom font styles require an explicit deployed file with the required glyphs and license. Register on the owner thread before the first RenderFrame; the native atlas owns loaded data. The engine's English default styles merge licensed icons but do not scan installed fonts or supply an automatic localization fallback. Game shaping belongs to Text.

Render preparation runs after context/metric selection but before NewFrame. Reentry/Dispose is rejected during the operation. Failed drawing closes only the owned frame and never publishes partial data; callers balance their own scopes. Draw pointers expire on the next frame/retirement.

## Preserve the engine boundary

The complete source extraction retains the generated ImGuiIcon catalog for provenance. A capture-bound reviewed exclusion omits its upstream glyph member reference while retaining all managed adapter contracts. Inno and Shader icon usage remains explained in the context/widget guides; source signatures are not changed. Native tests and deployment/lifetime integrity remain required.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Inno.Adapter.Presentation.ImGui.Sdl3.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Context, frame, font and renderer contracts](inno-adapter-presentation-imgui-sdl3.md) retain the engine-owned declarations and captured XML.
