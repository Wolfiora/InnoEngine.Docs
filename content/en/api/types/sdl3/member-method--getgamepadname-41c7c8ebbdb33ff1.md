---
title: "SDLContext.RawApi — Method: GetGamepadName"
description: "Exact Method: GetGamepadName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.41c7c8ebbdb33ff1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadName`

<a id="api-b1437d35560dc695"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadName(Inno.Native.Sdl3.SDLGamepad*) 3540f1a1fe6b9a0db4202c245d8f9cbb2488d9a2e48e84deddeea0e1275883b1 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadName(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the implementation-dependent name for an opened gamepad.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadNameForID

**Parameter `gamepad`:** a gamepad identifier previously returned by
SDL_OpenGamepad().

**Returns:** the implementation dependent name for the gamepad, or NULL if
there is no name or the identifier passed is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50902).
