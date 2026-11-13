---
title: Backend boundaries
description: Understand how third-party implementations fit behind InnoEngine's neutral contracts.
uid: backends.home
kind: explanation
---
# Backend boundaries

[SDL3 platform integration](sdl3.md) provides a concrete guide to application ownership, native windows, event routing and binding deployment.

[MiniAudio audio integration](miniaudio.md) explains audible and hardwareless native processing, clip preparation and device ownership.

[FreeType and HarfBuzz text integration](text.md) explains font faces, Unicode shaping, coverage pixels and the current typography boundaries.

[RmlUi document integration](rmlui.md) separates source authoring, native layout, runtime ownership and renderer consumption.

A backend owns a concrete implementation of an engine capability. Its runtime code, native facade, binding configuration, build recipe, and component-specific tests belong to that implementation boundary.

## Neutral contracts and concrete limits

The engine service describes neutral behavior. The backend explains its third-party limitations, handles, threads, callbacks, and target requirements. An upstream feature is not automatically an InnoEngine API promise.

Platform-specific system integration stays with the platform. Sharing a backend across products still requires verification of the actual target ABI, SDK, surface, threading, and lifecycle.

## Current backend areas

The source contains backend areas for Bgfx, DotNet, FileSystem, ImGui, Interop, MiniAudio, RmlUi, Sdl3, and Text. Consult the actual selected product and API surface instead of assuming that every area participates in every deployment.

## Native ownership

The [BGFX](projects/inno-native-bgfx.md), [ImGui](projects/inno-native-imgui.md) and [ImGuizmo](projects/inno-native-imguizmo.md) implementation overviews locate the engine's rendering and Editor presentation boundaries without mirroring third-party API references.

Use the engine facade and its documented ownership protocol. Do not directly call an upstream function or release its handle merely because the native library exports it. Bindings expose an ABI; they do not erase the facade's threading, borrowing, or shutdown constraints.

Native generation and deployment belong to the build pipeline. Runtime loaders consume explicitly deployed files and do not repair builds by probing source caches.

## Dynamic declaration access

[The DotNet serialization adapter](dotnet-serialization.md) supplies explicit reflection metadata for authoring hosts. Static products use generated declarations.

## Integrate and diagnose a concrete backend

- [Use BGFX](bgfx.md) for frame submission and safe surface retirement.
- [Compile shader assets](bgfx-shaders.md) for frozen source analysis and target limits.
- [Load dynamic modules](dotnet-modules.md) for explicit host discovery and collectible generations.
- [Publish a managed deployment](dotnet-publishing.md) for SDK and process diagnostics.
- [Prepare a content cache](file-content-cache.md) for verified publication and concurrent readers.
- [Present Editor UI](imgui-rendering.md) for color transfer and viewport lifetime.

## Project integration reference

[Backend project guides](projects/index.md) collect the integration owners without reproducing excluded native or binding API references.
