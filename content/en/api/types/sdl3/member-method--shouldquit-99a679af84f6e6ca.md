---
title: "SDLContext.RawApi — Method: ShouldQuit"
description: "Exact Method: ShouldQuit contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.99a679af84f6e6ca
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ShouldQuit

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ShouldQuit`

<a id="api-9b650f84dfd8f258"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ShouldQuit(Inno.Native.Sdl3.SDLInitState*) 678b71ccb2bbb0715852782326eb9c78d19f6d8cbcfe6fc8003a933bd2069f3b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ShouldQuit(Inno.Native.Sdl3.SDLInitState* state)
```

Return whether cleanup should be done.
This function checks the passed in state and if cleanup should be done,
sets the status to `SDL_INIT_STATUS_UNINITIALIZING` and returns true.
If this function returns true, the calling code must call
SDL_SetInitialized() to complete the cleanup.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetInitialized

**See also:** SDL_ShouldInit

**Parameter `state`:** the initialization state to check.

**Returns:** true if cleanup needs to be done, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41286).
