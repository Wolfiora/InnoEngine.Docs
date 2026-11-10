---
title: "SDLContext.RawApi — Method: GamepadConnected"
description: "Exact Method: GamepadConnected contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.18d97a93ecf8fa9c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GamepadConnected

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GamepadConnected`

<a id="api-96317459f0878e43"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GamepadConnected(Inno.Native.Sdl3.SDLGamepad*) f219a769bc028ed7277836b18cc82ce1c29266ad9e13a1622ab938c9fe6a91fe -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GamepadConnected(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Check if a gamepad has been opened and is currently connected.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `gamepad`:** a gamepad identifier previously returned by
SDL_OpenGamepad().

**Returns:** true if the gamepad has been opened and is currently connected, or
false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27241).
