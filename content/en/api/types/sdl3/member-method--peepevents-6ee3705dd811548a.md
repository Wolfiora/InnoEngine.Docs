---
title: "SDLContext.RawApi — Method: PeepEvents"
description: "Exact Method: PeepEvents contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6ee3705dd811548a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: PeepEvents

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PeepEvents`

<a id="api-8871c1a3ca8ef13f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.PeepEvents(Inno.Native.Sdl3.SDLEvent*,System.Int32,Inno.Native.Sdl3.SDLEventAction,System.UInt32,System.UInt32) ad16e062043189a9639240f296911ab73e0cb1209fb8f48a6cc0c0a13ccf8700 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.PeepEvents(Inno.Native.Sdl3.SDLEvent* events, int numevents, Inno.Native.Sdl3.SDLEventAction action, uint minType, uint maxType)
```

Check the event queue for messages and optionally return them.
`action` may be any of the following:
- `SDL_ADDEVENT`: up to `numevents` events will be added to the back of the
event queue.
- `SDL_PEEKEVENT`: `numevents` events at the front of the event queue,
within the specified minimum and maximum type, will be returned to the
caller and will _not_ be removed from the queue. If you pass NULL for
`events`, then `numevents` is ignored and the total number of matching
events will be returned.
- `SDL_GETEVENT`: up to `numevents` events at the front of the event queue,
within the specified minimum and maximum type, will be returned to the
caller and will be removed from the queue.
You may have to call SDL_PumpEvents() before calling this function.
Otherwise, the events may not be ready to be filtered when you call
SDL_PeepEvents().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PollEvent

**See also:** SDL_PumpEvents

**See also:** SDL_PushEvent

**Parameter `events`:** destination buffer for the retrieved events, may be NULL to
leave the events in the queue and return the number of events
that would have been stored.

**Parameter `numevents`:** if action is SDL_ADDEVENT, the number of events to add
back to the event queue; if action is SDL_PEEKEVENT or
SDL_GETEVENT, the maximum number of events to retrieve.

**Parameter `action`:** action to take; see [Remarks](https://wiki.libsdl.org/SDL3/SDL_PeepEvents#remarks) for details.

**Parameter `minType`:** minimum value of the event type to be considered;
SDL_EVENT_FIRST is a safe choice.

**Parameter `maxType`:** maximum value of the event type to be considered;
SDL_EVENT_LAST is a safe choice.

**Returns:** the number of events actually stored or -1 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49297).
