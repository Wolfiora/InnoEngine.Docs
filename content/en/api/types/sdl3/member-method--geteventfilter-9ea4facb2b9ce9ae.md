---
title: "SDLContext.RawApi — Method: GetEventFilter"
description: "Exact Method: GetEventFilter contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9ea4facb2b9ce9ae
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetEventFilter

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetEventFilter`

<a id="api-2eb6551521d4474d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetEventFilter(*,System.Void**) 57f2f1d565bd1af20642c9588fddfd28125a7a6db1462fd118fd085495025e56 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetEventFilter(delegate* unmanaged[Cdecl]<void*, Inno.Native.Sdl3.SDLEvent*, byte>* filter, void** userdata)
```

Query the current event filter.
This function can be used to "chain" filters, by saving the existing filter
before replacing it with a function that will call that saved filter.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetEventFilter

**Parameter `filter`:** the current callback function will be stored here.

**Parameter `userdata`:** the pointer that is passed to the current event filter will
be stored here.

**Returns:** true on success or false if there is no event filter set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35148).
