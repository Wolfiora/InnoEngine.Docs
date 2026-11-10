---
title: "SDLContext.RawApi — Method: GetScancodeFromName"
description: "Exact Method: GetScancodeFromName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1c8bd1d5a42af550
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetScancodeFromName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetScancodeFromName`

<a id="api-498079fbfc6a37eb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetScancodeFromName(System.SByte*) 5e8c762f944cc90b8531ae4e49cc256fa5a789944a6ee7da113f3fd11adb4ff0 -->

```csharp
public Inno.Native.Sdl3.SDLScancode Inno.Native.Sdl3.SDLContext.RawApi.GetScancodeFromName(sbyte* name)
```

Get a scancode from a human-readable name.

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetKeyFromName

**See also:** SDL_GetScancodeFromKey

**See also:** SDL_GetScancodeName

**Parameter `name`:** the human-readable scancode name.

**Returns:** the SDL_Scancode, or `SDL_SCANCODE_UNKNOWN` if the name wasn't
recognized; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29482).
