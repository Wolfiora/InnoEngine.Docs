---
title: Present Editor UI through ImGui and BGFX
description: Keep linear composition, product shader identity and viewport
  retirement in the presentation adapter.
uid: backends.imgui-rendering
kind: explanation
owners:
  - Inno.Adapter.Presentation.ImGui.Bgfx
contracts:
  - project.inno-adapter-presentation-imgui-bgfx
---
# Present Editor UI through ImGui and BGFX

The ImGui/BGFX adapter presents Editor UI draw data. It is separate from a user's Render Pipeline and ordinary game script APIs. The platform context owns its renderer after successful creation; outer presentation wrappers must not dispose the same renderer again.

## Blend before the final color transfer

The built-in graph declares the `s_tex` texture and `outputEncoding` render-pass uniform. Windows capable of sRGB framebuffer writes blend in linear space and encode at the framebuffer boundary.

Additional Windows D3D11/D3D12 swapchains use UNORM render targets. Encoding each translucent primitive early would blend in the wrong space. The adapter first composes into a transient RGBA8 sRGB texture, then performs one fullscreen output transfer to the UNORM swapchain. Both paths share texture sampling and alpha-blending contracts.

## Consume the Editor's declared shader configuration

Platform Editor product properties supply `InnoImGuiShaderTarget` and `InnoImGuiShaderApis` through the common product-build properties. The adapter does not select a platform from the host OS, process CPU or a private target list. Editor and Player share the platform's common BGFX facts; the Player does not inherit Editor UI. Exporting a game for another target does not change the currently running Editor's shader configuration.

Each graphics API has target-isolated output and an integrity manifest. Tasks verify source, compiler closure, target/API and actual output hashes under a writer lease before atomic publication. Same-length, preserved-timestamp corruption still fails. Runtime consumes embedded compiled shaders only and never invokes an offline tool.

## Retire viewports at a safe point

`RetireViewport` removes future draws and delegates window-surface retirement to the device. `DrainViewportRetirements` runs only at an owner-thread safe point outside an open frame. Keep the device alive while GPU resources retire; a viewport close request is not immediate permission to destroy submitted resources or its window.

The provider requires explicit `ImGuiInteractionOptions`, and the authoring catalog receives an explicit provider list. Input continues through SDL and Core Events. See [the BGFX lifecycle](bgfx.md) and [presentation context ownership](../extending/presentation-context.md) for the enclosing owners and failure behavior.
