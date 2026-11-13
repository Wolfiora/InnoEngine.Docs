---
title: Inno.Shell
description: "One owner-thread application loop for platform, input, rendering and product retirement."
uid: project.inno-shell
kind: project
owners: [Inno.Shell]
exampleMode: host
exampleProjects: [Inno.Shell]
---
# Inno.Shell

One owner-thread application loop for platform, input, rendering and product retirement.

Start with [composing a runtime host](../../extending/runtime-host.md) and [runtime lifetime](../runtime-lifetime.md).

## State and product ownership

Shell is a backend-neutral composition host, not a global singleton. It owns the platform application, primary window, input event source, render device and common run loop. Derived products initialize shared adapter resources after their own non-window bootstrap and implement bounded product hooks.

Normal states progress Created → Ready → Running/Suspended → Stopping → Stopped. Initialization, execution or retirement failure enters Faulted; successful release enters Disposed. A Shell runs once. Partial initialization rolls back acquired render/input/window/application resources.

Dispose retires product resources before shared adapters, then releases rendering, input, window and platform in reverse ownership order. Ordinary cleanup errors are aggregated; pending product retirement preserves adapter dependencies.

## One frame and scheduling contract

The sole run entry uses IShellFrameDriver with a frame callback on the window/render owner thread. PollingShellFrameDriver allows blocking pacing; ScheduledShellFrameDriver waits for external frame opportunities without blocking its host. They share the same frame implementation, cancellation, stopping notifications and retirement. A null scheduler is rejected; false from the frame callback ends scheduling and callback failures propagate.

Per-Shell FramePacingOptions controls VSync and an optional software frame-rate cap; zero means no software cap. Apply SetVerticalSync on the first frame and only when selection changes. Record the applied value only after success. This does not change fixed-step simulation. Editor defaults to VSync off.

Native modal resize redraws use the same clock, frame index and Begin/Update/LateUpdate/Render/End boundaries without recursively pumping events. Reentrancy protection prevents entering an active frame twice. Presentation can synchronize size and request a draw, not replay Editor draw callbacks independently. Native callback failures remain inside the adapter until the controlled event loop can rethrow them.

## Suspension and bounded journeys

ApplicationSuspensionChangedEvent and the optional primary-window-hidden policy are independent suspension reasons; hiding an additional window does not change the main-window policy. Repeated notifications do not repeat the transition hook. While suspended, keep pumping events and exit requests but do not run product, presentation or resize-redraw frames.

Stop the Shell clock without catching up background time on resume. Polling drivers wait finitely rather than busy-looping. Suspension clears held/transient input and rejects background input. OnSuspensionChanged runs at the owner-thread event-pump safe point and can notify Session services through Core Events.

OnSmokeCompleted runs only after the requested number of actual frames completes. Early window close or RequestExit still cleans up normally but must not produce a smoke-success marker. Validation checks both that marker and the exit code. Cancellation propagates; simultaneous execution/stopping failures retain both errors. Every run outcome removes the redraw subscription.

## Retirement barrier

Shell retries product retirement on the owner thread through the shared Core RetirementBarrier, with the existing 30-second product shutdown bound. The same barrier's deadline does not reset on each Dispose retry. A timeout remains incomplete retirement and propagates without destroying its rendering/input/window dependencies. This is a resource-lifetime bound, not a build-duration deadline.

Editor first quiesces its Play Mode loop, then dismantles module/layer resources. Diagnostic producers outlive the owners they serve. Preserve Pending/Faulted semantics instead of treating them as successful shutdown.

## Host usage

Supply live, explicitly owned dependencies as described above. These examples compile against the host contract; they do not initialize a complete product or verify a device.

```csharp
using Inno.Adapter;
using Inno.Shell;

internal sealed class GameHost : Shell
{
    internal GameHost(
        IAdapterCatalog adapters,
        ShellOptions options
    ) : base(adapters, options)
    {
        InitializeAdapterResources();
    }

    protected override void OnFrame(ShellFrame frame)
    {
        // Advance the product-owned runtime session here.
    }
}
```
```csharp
using System.Threading;
using System.Threading.Tasks;
using Inno.Shell;

static Task RunPreparedShell(
    Shell shell,
    CancellationToken cancellationToken
) {
    return shell.RunAsync(new PollingShellFrameDriver(), smokeFrameLimit: 60, cancellationToken);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Inno.Shell.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse exact types and members](../../api/engine/shell/index.md).
