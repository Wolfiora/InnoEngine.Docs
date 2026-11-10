---
title: "SDLContext.RawApi — Method: HasKeyboard"
description: "Exact Method: HasKeyboard contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9dcd94ebc044003a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasKeyboard

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasKeyboard`

<a id="api-3889e8cdf64bf672"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasKeyboard dcb2997947b4751d75e81a21a62cebbde8aba46616a086b40f9a210f39da87fd -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasKeyboard()
```

Return whether a keyboard is currently connected.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetKeyboards

**Returns:** true if a keyboard is connected, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28606).
