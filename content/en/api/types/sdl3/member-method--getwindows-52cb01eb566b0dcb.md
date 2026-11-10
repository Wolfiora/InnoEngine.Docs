---
title: "SDLContext.RawApi — Method: GetWindows"
description: "Exact Method: GetWindows contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.52cb01eb566b0dcb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindows

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindows`

<a id="api-ccc2e60a091e1f59"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindows(System.Int32*) ed3bbece307dd36949d624282ef95edf852dd441b418996ff43c5b0b13b1381c -->

```csharp
public Inno.Native.Sdl3.SDLWindow** Inno.Native.Sdl3.SDLContext.RawApi.GetWindows(int* count)
```

Get a list of valid windows.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `count`:** a pointer filled in with the number of windows returned, may
be NULL.

**Returns:** a NULL terminated array of SDL_Window pointers or NULL on failure;
call SDL_GetError() for more information. This is a single
allocation that should be freed with SDL_free() when it is no
longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26047).
