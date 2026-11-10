---
title: "SDLContext.RawApi — Method: GetGamepadProductVersion"
description: "Exact Method: GetGamepadProductVersion contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c34ad15c15bf83db
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadProductVersion

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadProductVersion`

<a id="api-4d710010d191c81d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadProductVersion(Inno.Native.Sdl3.SDLGamepad*) db5f4478d4c237f179bde5a7399fbff7ec923fe41f149f220d00c5d11f536a19 -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadProductVersion(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the product version of an opened gamepad, if available.
If the product version isn't available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadProductVersionForID

**Parameter `gamepad`:** the gamepad object to query.

**Returns:** the USB product version, or zero if unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42492).
