---
uid: backends.projects
title: Backend integration guides
kind: landing
---

# Backend integration guides

Understand how native and managed integrations fit into InnoEngine. These guides explain engine-facing initialization, ownership, threading and shutdown; third-party and binding member references are outside the API documentation scope.

## Adapter

- [MiniAudio adapter tests](inno-adapter-audio-miniaudio-tests.md)
- [Inno.Adapter.Audio.MiniAudio](inno-adapter-audio-miniaudio.md)
- [Filesystem content-cache tests](inno-adapter-content-filesystem-tests.md)
- [Inno.Adapter.Content.FileSystem](inno-adapter-content-filesystem.md)
- [Inno.Adapter.Modules.DotNet](inno-adapter-modules-dotnet.md)
- [SDL window and surface tests](inno-adapter-platform-sdl3-tests.md)
- [Inno.Adapter.Platform.Sdl3](inno-adapter-platform-sdl3.md)
- [Inno.Adapter.Presentation.ImGui.Bgfx](inno-adapter-presentation-imgui-bgfx.md)
- [Inno.Adapter.Presentation.ImGui.Sdl3](inno-adapter-presentation-imgui-sdl3.md)
- [Rendering backend and surface tests](inno-adapter-rendering-bgfx-tests.md)
- [Inno.Adapter.Rendering.Bgfx](inno-adapter-rendering-bgfx.md)
- [Inno.Adapter.Serialization.DotNet](inno-adapter-serialization-dotnet.md)
- [Inno.Adapter.Storage.FileSystem](inno-adapter-storage-filesystem.md)
- [Inno.Adapter.Text.FreeTypeHarfBuzz](inno-adapter-text-freetypeharfbuzz.md)
- [Inno.Adapter.UI.RmlUi.Authoring](inno-adapter-ui-rmlui-authoring.md)
- [RmlUi document and native lifecycle tests](inno-adapter-ui-rmlui-tests.md)
- [Inno.Adapter.UI.RmlUi](inno-adapter-ui-rmlui.md)

## Build

- [Inno.Build.Managed.DotNet](inno-build-managed-dotnet.md)
- [Inno.Build.Toolchains.Bgfx.Shaders](inno-build-toolchains-bgfx-shaders.md)
- [Inno.Build.Toolchains.Bgfx.Tools](inno-build-toolchains-bgfx-tools.md)
- [Inno.Build.Toolchains.Bgfx](inno-build-toolchains-bgfx.md)
- [Inno.Build.Toolchains.ImGui](inno-build-toolchains-imgui.md)
- [Inno.Build.Toolchains.ImGuizmo](inno-build-toolchains-imguizmo.md)
- [Inno.Build.Toolchains.MiniAudio](inno-build-toolchains-miniaudio.md)
- [Inno.Build.Toolchains.Sdl3](inno-build-toolchains-sdl3.md)
- [Inno.Build.Toolchains.Text](inno-build-toolchains-text.md)
- [Inno.Build.Toolchains.UI](inno-build-toolchains-ui.md)

## Native

- [BGFX deployment smoke tests](inno-native-bgfx-tests.md)
- [BGFX implementation boundary](inno-native-bgfx.md)
- [ImGui deployment and ABI tests](inno-native-imgui-tests.md)
- [ImGui implementation boundary](inno-native-imgui.md)
- [ImGuizmo loading and borrowed-state tests](inno-native-imguizmo-tests.md)
- [ImGuizmo implementation boundary](inno-native-imguizmo.md)
- [Native deployment lookup boundary](inno-native-libraryloading.md)
- [MiniAudio loading and initialization tests](inno-native-miniaudio-tests.md)
- [MiniAudio implementation boundary](inno-native-miniaudio.md)
- [SDL loading and ABI tests](inno-native-sdl3-tests.md)
- [SDL3 implementation boundary](inno-native-sdl3.md)
- [Text backend implementation boundary](inno-native-text.md)
- [RmlUi implementation boundary](inno-native-ui.md)
