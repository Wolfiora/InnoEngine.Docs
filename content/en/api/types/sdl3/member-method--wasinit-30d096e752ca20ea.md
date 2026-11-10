---
title: "SDL — Method: WasInit"
description: "Exact Method: WasInit contracts in SDL."
uid: api.inno.native.sdl3.30d096e752ca20ea
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: WasInit

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WasInit`

<a id="api-794854658b52057a"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.WasInit(Inno.Native.Sdl3.SDLInitFlags) e61efaff1c793e3826c81f39ec2a4bbbbe09bac4688aef65c6b4c884efb91883 -->

```csharp
public static Inno.Native.Sdl3.SDLInitFlags Inno.Native.Sdl3.SDL.WasInit(Inno.Native.Sdl3.SDLInitFlags flags)
```

Get a mask of the specified subsystems which are currently initialized.

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_Init

**See also:** SDL_InitSubSystem

**Parameter `flags`:** any of the flags used by SDL_Init(); see SDL_Init for details.

**Returns:** a mask of all initialized subsystems if `flags` is 0, otherwise it
returns the initialization status of the specified subsystems.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L449).
