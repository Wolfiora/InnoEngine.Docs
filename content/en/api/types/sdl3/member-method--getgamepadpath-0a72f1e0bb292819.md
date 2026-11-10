---
title: "SDLContext.RawApi — Method: GetGamepadPath"
description: "Exact Method: GetGamepadPath contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0a72f1e0bb292819
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadPath

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadPath`

<a id="api-8707453915bd729a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadPath(Inno.Native.Sdl3.SDLGamepad*) 0c65f27a911f3113ee31289aeac77074b1bcff9b7d9f3da0cfa6b65749fed996 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadPath(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the implementation-dependent path for an opened gamepad.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadPathForID

**Parameter `gamepad`:** a gamepad identifier previously returned by
SDL_OpenGamepad().

**Returns:** the implementation dependent path for the gamepad, or NULL if
there is no path or the identifier passed is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47875).
