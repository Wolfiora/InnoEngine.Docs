---
title: "SDLContext.RawApi — Method: HasEvent"
description: "Exact Method: HasEvent contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.94e206ef9258f408
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasEvent

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasEvent`

<a id="api-45a54d31f3f81f45"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasEvent(System.UInt32) 330d0389ba5b283cf521f277ec290a1c80902ec7d343095bd939d57d090e5b1e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasEvent(uint type)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29693).
