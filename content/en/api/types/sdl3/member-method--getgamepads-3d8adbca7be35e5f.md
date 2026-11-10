---
title: "SDLContext.RawApi — Method: GetGamepads"
description: "Exact Method: GetGamepads contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3d8adbca7be35e5f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepads

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepads`

<a id="api-9d712392c739e297"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepads(System.Int32*) ad22963d045fd7792f42297e406e9e7b555060c928462dbf070a0c4b10b86830 -->

```csharp
public uint* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepads(int* count)
```

Get a list of currently connected gamepads.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasGamepad

**See also:** SDL_OpenGamepad

**Parameter `count`:** a pointer filled in with the number of gamepads returned, may
be NULL.

**Returns:** a 0 terminated array of joystick instance IDs or NULL on failure;
call SDL_GetError() for more information. This should be freed
with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38133).
