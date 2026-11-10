---
title: "SDLContext.RawApi — Method: GetPrimaryDisplay"
description: "Exact Method: GetPrimaryDisplay contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2d16a3913abe9aed
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetPrimaryDisplay

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPrimaryDisplay`

<a id="api-99989ddf2b0b6c60"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetPrimaryDisplay 512db8dd2dfc233e6679a5033039a148b1412e591b47141c38c93afb8cf0267b -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetPrimaryDisplay()
```

Return the primary display.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplays

**Returns:** the instance ID of the primary display on success or 0 on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37423).
