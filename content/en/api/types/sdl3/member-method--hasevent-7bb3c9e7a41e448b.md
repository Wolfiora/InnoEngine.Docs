---
title: "SDLContext — Method: HasEvent"
description: "Exact Method: HasEvent contracts in SDLContext."
uid: api.inno.native.sdl3.7bb3c9e7a41e448b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasEvent

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasEvent`

<a id="api-25126f7ad71a1cf1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasEvent(System.UInt32) acc4d1c02920f451b90524197e47ec41d674aeb138cf252f798f645e440c77e2 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasEvent(uint type)
```

Check for the existence of a certain event type in the event queue.
If you need to check for a range of event types, use SDL_HasEvents()
instead.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasEvents

**Parameter `type`:** the type of event to be queried; see SDL_EventType for details.

**Returns:** true if events matching `type` are present, or false if events
matching `type` are not present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13304).
