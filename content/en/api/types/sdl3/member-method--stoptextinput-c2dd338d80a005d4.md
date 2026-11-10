---
title: "SDLContext.RawApi — Method: StopTextInput"
description: "Exact Method: StopTextInput contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c2dd338d80a005d4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: StopTextInput

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `StopTextInput`

<a id="api-43fec27f453acadd"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.StopTextInput(Inno.Native.Sdl3.SDLWindow*) f27eeb0d9808a8f95f782e5e253a37bb82d5902aad0c943074d5d885be4afbcc -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.StopTextInput(Inno.Native.Sdl3.SDLWindow* window)
```

Stop receiving any text input events in a window.
If SDL_StartTextInput() showed the screen keyboard, this function will hide
it.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_StartTextInput

**Parameter `window`:** the window to disable text input.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17646).
