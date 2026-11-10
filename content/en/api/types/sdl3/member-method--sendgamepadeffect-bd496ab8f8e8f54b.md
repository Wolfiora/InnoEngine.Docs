---
title: "SDLContext.RawApi — Method: SendGamepadEffect"
description: "Exact Method: SendGamepadEffect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bd496ab8f8e8f54b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SendGamepadEffect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SendGamepadEffect`

<a id="api-4d2d51817b565cdc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SendGamepadEffect(Inno.Native.Sdl3.SDLGamepad*,System.Void*,System.Int32) 25d219f3d139e962d9504c41cd532e27c035101396f69a9d9fbe14cd8a67c58a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SendGamepadEffect(Inno.Native.Sdl3.SDLGamepad* gamepad, void* data, int size)
```

Send a gamepad specific effect packet.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `gamepad`:** the gamepad to affect.

**Parameter `data`:** the data to send to the gamepad.

**Parameter `size`:** the size of the data to send to the gamepad.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28680).
