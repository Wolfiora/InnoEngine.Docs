---
title: "SDLContext.RawApi — Method: FilterEvents"
description: "Exact Method: FilterEvents contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.51a02424d4c7f3ea
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: FilterEvents

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `FilterEvents`

<a id="api-cfda7bf0f4a98c8d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.FilterEvents(,System.Void*) d0de62bdd400c6bfe45568b35a86ec85b5633b3dba717f33fe5e3ada1ab357b3 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.FilterEvents(delegate* unmanaged[Cdecl]<void*, Inno.Native.Sdl3.SDLEvent*, byte> filter, void* userdata)
```

Run a specific filter function on the current event queue, removing any
events for which the filter returns false.
See SDL_SetEventFilter() for more information. Unlike SDL_SetEventFilter(),
this function does not change the filter permanently, it only uses the
supplied filter until this function returns.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetEventFilter

**See also:** SDL_SetEventFilter

**Parameter `filter`:** the SDL_EventFilter function to call when an event happens.

**Parameter `userdata`:** a pointer that is passed to `filter`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45023).
