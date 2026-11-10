---
title: "SDLContext.RawApi — Method: WasInit"
description: "Exact Method: WasInit contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8ad31cdd5a567db9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WasInit

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WasInit`

<a id="api-6fcc0e3c51ae6999"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WasInit(System.UInt32) e50a506c5962f3ed7a0454b3ab4889a8c33aa2fe8cda2042baaacdae34673ddb -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.WasInit(uint flags)
```

Get a mask of the specified subsystems which are currently initialized.

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_Init

**See also:** SDL_InitSubSystem

**Parameter `flags`:** any of the flags used by SDL_Init(); see SDL_Init for details.

**Returns:** a mask of all initialized subsystems if `flags` is 0, otherwise it
returns the initialization status of the specified subsystems.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19199).
