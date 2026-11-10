---
title: "SDLContext.RawApi — Method: UnsetEnvironmentVariable"
description: "Exact Method: UnsetEnvironmentVariable contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f873283e3ac7820c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UnsetEnvironmentVariable

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnsetEnvironmentVariable`

<a id="api-c10a8a6fda51191d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UnsetEnvironmentVariable(Inno.Native.Sdl3.SDLEnvironment*,System.SByte*) 375c8dbb78a21df05bcb6da15f72872d0acdf1014bda07fc955519098ee4935f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.UnsetEnvironmentVariable(Inno.Native.Sdl3.SDLEnvironment* env, sbyte* name)
```

Clear a variable from the environment.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetEnvironment

**See also:** SDL_CreateEnvironment

**See also:** SDL_GetEnvironmentVariable

**See also:** SDL_GetEnvironmentVariables

**See also:** SDL_SetEnvironmentVariable

**See also:** SDL_UnsetEnvironmentVariable

**Parameter `env`:** the environment to modify.

**Parameter `name`:** the name of the variable to unset.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42471).
