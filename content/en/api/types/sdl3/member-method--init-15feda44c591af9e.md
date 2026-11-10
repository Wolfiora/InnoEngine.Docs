---
title: "SDL — Method: Init"
description: "Exact Method: Init contracts in SDL."
uid: api.inno.native.sdl3.15feda44c591af9e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Init

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Init`

<a id="api-0ca657728fd006e6"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Init(Inno.Native.Sdl3.SDLInitFlags) 99de5daaf89105ad6ae8fe9863dbc22962b31117e96a4a2b167e95ce3c2546f1 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.Init(Inno.Native.Sdl3.SDLInitFlags flags)
```

Initialize the SDL library.
SDL_Init() simply forwards to calling SDL_InitSubSystem(). Therefore, the
two may be used interchangeably. Though for readability of your code
SDL_InitSubSystem() might be preferred.
The file I/O (for example: SDL_IOFromFile) and threading (SDL_CreateThread)
subsystems are initialized by default. Message boxes
(SDL_ShowSimpleMessageBox) also attempt to work without initializing the
video subsystem, in hopes of being useful in showing an error dialog when
SDL_Init fails. You must specifically initialize other subsystems if you
use them in your application.
Logging (such as SDL_Log) works without initialization, too.
`flags` may be any of the following OR'd together:
- `SDL_INIT_AUDIO`: audio subsystem; automatically initializes the events
subsystem
- `SDL_INIT_VIDEO`: video subsystem; automatically initializes the events
subsystem, should be initialized on the main thread.
- `SDL_INIT_JOYSTICK`: joystick subsystem; automatically initializes the
events subsystem
- `SDL_INIT_HAPTIC`: haptic (force feedback) subsystem
- `SDL_INIT_GAMEPAD`: gamepad subsystem; automatically initializes the
joystick subsystem
- `SDL_INIT_EVENTS`: events subsystem
- `SDL_INIT_SENSOR`: sensor subsystem; automatically initializes the events
subsystem
- `SDL_INIT_CAMERA`: camera subsystem; automatically initializes the events
subsystem
Subsystem initialization is ref-counted, you must call SDL_QuitSubSystem()
for each SDL_InitSubSystem() to correctly shutdown a subsystem manually (or
call SDL_Quit() to force shutdown). If a subsystem is already loaded then
this call will increase the ref-count and return.
Consider reporting some basic metadata about your application before
calling SDL_Init, using either SDL_SetAppMetadata() or
SDL_SetAppMetadataProperty().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetAppMetadata

**See also:** SDL_SetAppMetadataProperty

**See also:** SDL_InitSubSystem

**See also:** SDL_Quit

**See also:** SDL_SetMainReady

**See also:** SDL_WasInit

**Parameter `flags`:** subsystem initialization flags.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3319).
