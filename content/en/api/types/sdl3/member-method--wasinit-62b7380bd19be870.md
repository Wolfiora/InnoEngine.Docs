---
title: "SDLContext — Method: WasInit"
description: "Exact Method: WasInit contracts in SDLContext."
uid: api.inno.native.sdl3.62b7380bd19be870
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: WasInit

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WasInit`

<a id="api-c87269f30c8b6518"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.WasInit(Inno.Native.Sdl3.SDLInitFlags) 5f529584c224065d803ff05558ff72c50b046c71f0c03b94c4146e0b2c21f774 -->

```csharp
public Inno.Native.Sdl3.SDLInitFlags Inno.Native.Sdl3.SDLContext.WasInit(Inno.Native.Sdl3.SDLInitFlags flags)
```

Get a mask of the specified subsystems which are currently initialized.

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_Init

**See also:** SDL_InitSubSystem

**Parameter `flags`:** any of the flags used by SDL_Init(); see SDL_Init for details.

**Returns:** a mask of all initialized subsystems if `flags` is 0, otherwise it
returns the initialization status of the specified subsystems.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11878).
