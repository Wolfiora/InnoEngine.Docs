---
title: "SDLContext.RawApi — Method: OpenGamepad"
description: "Exact Method: OpenGamepad contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.64a4a55105ec4957
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OpenGamepad

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OpenGamepad`

<a id="api-a4467417a82bd085"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OpenGamepad(System.UInt32) ba21f2f81880fd3a1474f36e38cc23acf54bb97f183b5afa4c00272d1b209a8f -->

```csharp
public Inno.Native.Sdl3.SDLGamepad* Inno.Native.Sdl3.SDLContext.RawApi.OpenGamepad(uint instance_id)
```

Open a gamepad for use.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CloseGamepad

**See also:** SDL_IsGamepad

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** a gamepad identifier or NULL if an error occurred; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23910).
