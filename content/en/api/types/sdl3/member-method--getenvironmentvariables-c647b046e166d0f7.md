---
title: "SDLContext.RawApi — Method: GetEnvironmentVariables"
description: "Exact Method: GetEnvironmentVariables contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c647b046e166d0f7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetEnvironmentVariables

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetEnvironmentVariables`

<a id="api-2de69f145e0623ec"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetEnvironmentVariables(Inno.Native.Sdl3.SDLEnvironment*) 5c782389a01fca38f83034204f74cb7196c1e7c43851dcd22558bb9d7c703733 -->

```csharp
public sbyte** Inno.Native.Sdl3.SDLContext.RawApi.GetEnvironmentVariables(Inno.Native.Sdl3.SDLEnvironment* env)
```

Get all variables in the environment.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetEnvironment

**See also:** SDL_CreateEnvironment

**See also:** SDL_GetEnvironmentVariable

**See also:** SDL_SetEnvironmentVariable

**See also:** SDL_UnsetEnvironmentVariable

**Parameter `env`:** the environment to query.

**Returns:** a NULL terminated array of pointers to environment variables in
the form "variable=value" or NULL on failure; call SDL_GetError()
for more information. This is a single allocation that should be
freed with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29787).
