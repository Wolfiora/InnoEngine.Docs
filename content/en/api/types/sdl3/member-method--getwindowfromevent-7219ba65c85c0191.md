---
title: "SDLContext.RawApi — Method: GetWindowFromEvent"
description: "Exact Method: GetWindowFromEvent contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7219ba65c85c0191
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowFromEvent

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowFromEvent`

<a id="api-e45f98a150764586"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowFromEvent(Inno.Native.Sdl3.SDLEvent*) 4d91e33cf25f548bd6b500ad0fba841d773db52e83465512231535900a2629e6 -->

```csharp
public Inno.Native.Sdl3.SDLWindow* Inno.Native.Sdl3.SDLContext.RawApi.GetWindowFromEvent(Inno.Native.Sdl3.SDLEvent* @event)
```

Get window associated with an event.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PollEvent

**See also:** SDL_WaitEvent

**See also:** SDL_WaitEventTimeout

**Parameter `event`:** an event containing a `windowID`.

**Returns:** the associated window on success or NULL if there is none.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35275).
