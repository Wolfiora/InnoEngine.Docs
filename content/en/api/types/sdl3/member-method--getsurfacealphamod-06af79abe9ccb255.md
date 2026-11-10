---
title: "SDLContext.RawApi — Method: GetSurfaceAlphaMod"
description: "Exact Method: GetSurfaceAlphaMod contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.06af79abe9ccb255
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSurfaceAlphaMod

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSurfaceAlphaMod`

<a id="api-103afe84151da5f2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSurfaceAlphaMod(Inno.Native.Sdl3.SDLSurface*,System.Byte*) 67fd9be8ca16104f804580c5bb17b33e73593101f70e554a1feda510bfc7ffaa -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetSurfaceAlphaMod(Inno.Native.Sdl3.SDLSurface* surface, byte* alpha)
```

Get the additional alpha value used in blit operations.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetSurfaceColorMod

**See also:** SDL_SetSurfaceAlphaMod

**Parameter `surface`:** the SDL_Surface structure to query.

**Parameter `alpha`:** a pointer filled in with the current alpha value.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26862).
