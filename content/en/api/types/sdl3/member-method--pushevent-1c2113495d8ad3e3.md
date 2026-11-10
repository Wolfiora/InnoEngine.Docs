---
title: "SDLContext.RawApi — Method: PushEvent"
description: "Exact Method: PushEvent contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1c2113495d8ad3e3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: PushEvent

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PushEvent`

<a id="api-7d3bdaab7fca036f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.PushEvent(Inno.Native.Sdl3.SDLEvent*) 53f3b3fc7ef1d39516c0dc9247a410d3cf72233ad608284a63ae2506a864e9fc -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.PushEvent(Inno.Native.Sdl3.SDLEvent* @event)
```

Add an event to the event queue.
The event queue can actually be used as a two way communication channel.
Not only can events be read from the queue, but the user can also push
their own events onto it. `event` is a pointer to the event structure you
wish to push onto the queue. The event is copied into the queue, and the
caller may dispose of the memory pointed to after SDL_PushEvent() returns.
Note: Pushing device input events onto the queue doesn't modify the state
of the device within SDL.
Note: Events pushed onto the queue with SDL_PushEvent() get passed through
the event filter but events added with SDL_PeepEvents() do not.
For pushing application-specific events, please use SDL_RegisterEvents() to
get an event type that does not conflict with other code that also wants
its own custom event types.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PeepEvents

**See also:** SDL_PollEvent

**See also:** SDL_RegisterEvents

**Parameter `event`:** the SDL_Event to be added to the queue.

**Returns:** true on success, false if the event was filtered or on failure;
call SDL_GetError() for more information. A common reason for
error is the event queue being full.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47405).
