---
title: Inno.Adapter.Input
description: Compose input providers and route neutral events to isolated session backends.
uid: project.inno-adapter-input
kind: project
owners:
  - Inno.Adapter.Input
---
# Inno.Adapter.Input

This project supplies an open input-provider catalog and an event-backed implementation using Core Events. Platform adapters translate native events into that shared protocol. The event source, backend and bundled provider do not depend on SDL or Native bindings.

## Provider composition

`InputBackendCatalog` captures a provider set without creating a service. IDs are open, stable values; the bundled provider uses `inno.input.events`. Null providers, unassigned IDs and duplicate registrations fail at construction. An unknown selected ID fails explicitly, and a provider must not return a null source.

The composition owner retains provider lifetime. A caller owns each created `IInputEventSource`, and each backend created from that source has its own session owner. The catalog does not become a second service lifetime manager.

## Event and window contract

`EventInputSource` uses Core Events to distribute translated events to independently subscribed session backends. A nonzero window ID accepts that window; zero accepts all windows. `CreateBackend` starts receiving subsequent events and rejects calls after source disposal.

`EventInputBackend.ProcessEvent` ignores globally consumed events and events outside its window policy. Keyboard, pointer, wheel and text use the same neutral entry. Non-repeat key presses create transitions; capture clears transient transitions and deltas after producing the immutable snapshot. Repeated queries of that snapshot do not consume its values.

Focus loss, hidden windows and application suspension release held keys/buttons, clear pending presses, text and deltas, and reset modifiers. While suspended, key, mouse and text events do not accumulate. These rules prevent a held key from remaining stuck after the application loses its active input surface.

The Editor's presentation boundary additionally filters GameView input. A modal, popup or foreground window can prevent input from reaching the underlying game. Physical input does not decide Editor focus policy itself.

## Ownership and threading

Each session backend owns its subscription. Disposing it removes that backend while other sessions remain usable. Disposing a source disconnects its backends and rejects later delivery; backend owners still retain their own disposal obligations. Disconnecting the source is not a transfer of session ownership.

The backend synchronizes event accumulation and capture. The source's composition and subscription lifecycle remain host-controlled; do not infer that all source/catalog operations are freely concurrent because the backend locks its state. Native window and event-pump thread restrictions belong to the platform adapter.

## Validation and extension

A new provider implements the neutral creation boundary and registers a stable ID in the actual composition. Do not add a second event bus or have every session consume a global destructive queue. Input runtime, Shell lifecycle and Editor GameView capture tests cover different parts of consumption, focus, window and session isolation.

See [frame snapshots](inno-input.md) and [runtime ownership](inno-input-runtime.md) before implementing a provider. Native translation needs the relevant platform integration evidence in addition to neutral tests.

## API reference

The exact reference includes provider, source, backend and catalog contracts. Registration describes a capability; it does not certify a platform device.

[Browse input adapter types](../../api/engine/adapter/input/index.md).
