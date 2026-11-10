---
title: "SDLContext.RawApi — Method: GetEnvironment"
description: "Exact Method: GetEnvironment contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.894f9d589f9b3fde
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetEnvironment

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetEnvironment`

<a id="api-1fddf6dd1c607bc1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetEnvironment 8b19f1ecd25d0f2b29d58075c2f89155478da286fd15e0a3a93d101ec5e23f50 -->

```csharp
public Inno.Native.Sdl3.SDLEnvironment* Inno.Native.Sdl3.SDLContext.RawApi.GetEnvironment()
```

Get the process environment.
This is initialized at application start and is not affected by setenv()
and unsetenv() calls after that point. Use SDL_SetEnvironmentVariable() and
SDL_UnsetEnvironmentVariable() if you want to modify this environment, or
SDL_setenv_unsafe() or SDL_unsetenv_unsafe() if you want changes to persist
in the C runtime environment after SDL_Quit().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetEnvironmentVariable

**See also:** SDL_GetEnvironmentVariables

**See also:** SDL_SetEnvironmentVariable

**See also:** SDL_UnsetEnvironmentVariable

**Returns:** a pointer to the environment for the process or NULL on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17097).
