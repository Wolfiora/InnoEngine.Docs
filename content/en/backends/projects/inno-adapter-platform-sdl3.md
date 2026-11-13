---
title: Inno.Adapter.Platform.Sdl3
description: "Explicit SDL host integration, owned and adopted windows, native folder selection and neutral event routing."
uid: project.inno-adapter-platform-sdl3
kind: project
owners: [Inno.Adapter.Platform.Sdl3]
---
# Inno.Adapter.Platform.Sdl3

Explicit SDL host integration, owned and adopted windows, native folder selection and neutral event routing.

Read the linked task or ownership explanation before using the exact API below.

## Create a host with explicit integration

[SDL platform ownership](../sdl3.md) describes ISdl3HostIntegration, capabilities, owner-thread operation, native-surface borrowing and shutdown. Sdl3PlatformBackendProvider only registers capability descriptions; CreateApplication returns an owned application without making host-OS policy implicit.

Created windows belong to the application. Adopted windows remain borrowed; release invalidates registration before the external owner destroys them. Wrapper failure destroys only newly owned windows. GetWindows is local to this application. Native SDL handles/event unions remain in the adapter; neutral services do not consume them.

## Route existing events and interactions

Background/foreground notifications map to application suspension. Hidden and minimized causes are tracked independently before emitting visibility changes, including browser events. Folder selection borrows a live application, pumps owner-thread events and retains its callback until completion: success returns a directory, cancellation returns null and an SDL error throws. It does not create a project or another event bus.

Sdl3WindowOperations always releases temporary properties and transfers a created handle to the application. Browser integration supplies its explicit Canvas selector and OpenGL/focus policy; Windows/macOS surface rules remain their own integration responsibility.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Inno.Adapter.Platform.Sdl3.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](inno-adapter-platform-sdl3.md) retain declarations and source XML from the recorded engine capture.
