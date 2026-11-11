---
title: Compose lifecycle layers and overlays
description: Order host callbacks, isolate event subscriptions and unwind successfully prepared rendering state.
uid: extending.lifecycle-layers
kind: how-to
owners:
  - Inno.Core.Layers
contracts:
  - project.inno-core-layers#attachment-and-frame-contract
exampleMode: host
exampleProjects:
  - Inno.Core.Layers
---
# Compose lifecycle layers and overlays

Use `LayerStack` when a host needs an ordered set of lifecycle participants with separate event scopes. It handles layer/overlay order and frame unwind; it does not create a window, graphics device, runtime session or application service.

This host-only boundary is separate from an [Editor panel](editor-panels.md), the application Shell and the RuntimeSession feature pipeline. Select the owner that actually controls your extension's lifecycle.

## Attach a layer with its own event scope

The factory must return a distinct `EventHub` for each attachment. The following host example creates an overlay, advances its update and rendering phases, then detaches it when the stack is disposed.

```csharp
using Inno.Core.Events;
using Inno.Core.Layers;

static void RunOverlayFrame()
{
    var dispatcher = new EventDispatcher();
    using var layers = new LayerStack(() => dispatcher.CreateHub());
    layers.PushOverlay(new ConsoleOverlay());
    layers.OnUpdate(1.0f / 60.0f);
    layers.RenderFrame(1.0f / 60.0f);
}

public sealed class ConsoleOverlay : Layer
{
    public ConsoleOverlay() : base("Console") { }

    public override void OnAttach()
    {
        _ = Listen<ApplicationQuitEvent>(OnQuitRequested);
    }

    private static void OnQuitRequested(ApplicationQuitEvent evnt)
    {
        evnt.HandleInHub();
    }
}
```

`Listen` and `ListenOnce` register attachment-owned subscriptions, and their returned tokens allow early removal. `Announce` dispatches immediately only within the layer's own hub. `HandleInHub` has the [event system's local consumption semantics](../manual/events/route-events.md); it is not a global quit veto.

## Understand callback order

Base layers always precede overlays. Adding a base layer while overlays exist inserts it below those overlays. Updates, late updates, render preparation and render submission run from bottom to top. Higher layers receive higher event-hub order, giving overlays priority during cross-hub dispatch.

`RenderFrame` calls `OnAfterRender` in reverse order only for layers whose `OnBeforeRender` completed successfully. If preparation or submission fails, already prepared layers still unwind. A preparation callback that fails partway must compensate its own partial work because it has not entered the successfully prepared set.

The host must serialize stack mutation and frame execution, and must not change stack membership from an active frame callback. The stack does not take a concurrent immutable frame snapshot. A layer instance cannot hold two attachments or be inserted twice.

## Retire an attachment safely

When `OnAttach` fails, the registered entry remains owned while `OnDetach` compensates partial startup. The event scope is removed only after eligible compensation completes.

Detachment first unregisters attachment subscriptions, then invokes `OnDetach`. Make completed cleanup steps retry-safe: a pending retirement signal preserves the current entry, its event hub and lower dependencies. Push/pop and frame calls are rejected until the host resumes `Clear` or `Dispose` successfully. The stack itself does not spin or create a separate timeout mechanism; the outer host can use the shared [retirement barrier](../architecture/execution-and-retirement.md).

Ordinary cleanup errors allow other eligible entries to retire in reverse order and remain reportable across later retries. `Clear` restores a reusable empty stack only after retirement completes. `Dispose` closes it permanently and is idempotent after completion, but pending cleanup cannot be represented as disposed.

Keep generation-owned layer instances and callbacks inside their actual owner. Save cross-generation state as stable identities and neutral values. The layer's diagnostic `name` is not a persistent identity.

See the [Layers reference](../api/projects/inno-core-layers.md) for callbacks, protected subscription helpers and stack operations.
