---
title: "SDLContext.RawApi — Method: PollEvent"
description: "Exact Method: PollEvent contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f098dfa7ec01cc2f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: PollEvent

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PollEvent`

<a id="api-f46c511c177e072b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.PollEvent(Inno.Native.Sdl3.SDLEvent*) b9ba69caeff4d076349e5aad4fabedee32b1970c12eefb2225bf9fcc10813d2e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.PollEvent(Inno.Native.Sdl3.SDLEvent* @event)
```

Poll for currently pending events.
If `event` is not NULL, the next event is removed from the queue and stored
in the SDL_Event structure pointed to by `event`.
If `event` is NULL, it simply returns true if there is an event in the
queue, but will not remove it from the queue.
As this function may implicitly call SDL_PumpEvents(), you can only call
this function in the thread that initialized the video subsystem.
SDL_PollEvent() is the favored way of receiving system events since it can
be done from the main loop and does not suspend the main loop while waiting
on an event to be posted.
The common practice is to fully process the event queue once every frame,
usually as a first step before updating the game's state:
```c
while (game_is_still_running) {
SDL_Event event;
while (SDL_PollEvent(
&event
)) {  // poll until all events are handled!
// decide what to do with this event.
}
// update game state, draw the current frame
}
```
Note that Windows (and possibly other platforms) has a quirk about how it
handles events while dragging/resizing a window, which can cause this
function to block for significant amounts of time. Technical explanations
and solutions are discussed on the wiki:
https://wiki.libsdl.org/SDL3/AppFreezeDuringDrag

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PushEvent

**See also:** SDL_WaitEvent

**See also:** SDL_WaitEventTimeout

**Parameter `event`:** the SDL_Event structure to be filled with the next event from
the queue, or NULL.

**Returns:** true if this got an event or false if there are none available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34823).
