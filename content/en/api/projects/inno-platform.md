---
title: Inno.Platform
description: "Neutral application, window and frame-pacing contracts without native handles."
uid: project.inno-platform
kind: project
owners: [Inno.Platform]
exampleMode: host
exampleProjects: [Inno.Platform]
---
# Inno.Platform

Neutral application, window and frame-pacing contracts without native handles.

Start with [owning windows and surfaces](../../platforms/window-lifetime.md) and [presentation context ownership](../../extending/presentation-context.md).

## Application and window ownership

IPlatformApplication owns one platform session, its event pump and tracked windows. CreateWindow returns a session-owned window that its caller may release early. GetWindows returns a snapshot of current windows, including tracked secondary viewports. PollEvent returns false and null when no event is available. Application operations reject use after disposal.

RequestClose marks a request; it does not destroy the window immediately. The host stops product work, releases rendering and input, then windows and finally the application. A normal Editor or Player already has a Shell event loop; feature code must not start a competing one.

## Coordinates and suspension

Width/height describe logical layout and input units. Pixel dimensions describe the GPU drawable and may differ under HiDPI. Separate Core Events report logical and pixel resizing, focus, visibility and application suspension.

Shell combines suspension reasons, stops frames and releases input state while suspended. Resume does not turn background elapsed time into one oversized frame. Hidden acceptance windows use the explicit suspendWhenHidden policy. redrawRequested runs on the event-pump thread; its handler requests a complete host frame without polling again or reentering an active frame.

## Frame pacing

FramePacingOptions is mutable per Shell. Apply vertical synchronization at a complete-frame safe point. maximumFrameRate must be nonnegative; zero disables the software cap. PlatformWindowOptions defaults to a visible, resizable, high-density 1280×720 window titled Inno Window. These defaults do not establish physical display behavior on every platform.

This project depends only on required Core Events contracts. It contains no SDL pointer, graphics backend or Editor type. Native surface exchange belongs to the paired adapters; script and persisted state retain neutral identities.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using Inno.Core.Events;
using Inno.Platform;

static void PumpOnce(IPlatformApplication application)
{
    using IPlatformWindow window = application.CreateWindow(new PlatformWindowOptions
    {
        title = "Example",
        width = 1280,
        height = 720
    });
    while (application.PollEvent(out Event? e))
    {
        if (e is ApplicationQuitEvent)
            window.RequestClose();
    }
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/Inno.Platform.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Browse types and members](../types/platform-boundaries/inno-platform/index.md).
