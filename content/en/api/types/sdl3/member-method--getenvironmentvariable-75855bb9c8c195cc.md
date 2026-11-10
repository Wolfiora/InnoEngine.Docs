---
title: "SDLContext.RawApi — Method: GetEnvironmentVariable"
description: "Exact Method: GetEnvironmentVariable contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.75855bb9c8c195cc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetEnvironmentVariable

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetEnvironmentVariable`

<a id="api-d079df5e18eac1e2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetEnvironmentVariable(Inno.Native.Sdl3.SDLEnvironment*,System.SByte*) 199c2a43f58eff86fa7e9a600123088d61b1690ce7f0c078e53a68ec77de8864 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetEnvironmentVariable(Inno.Native.Sdl3.SDLEnvironment* env, sbyte* name)
```

Get the value of a variable in the environment.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetEnvironment

**See also:** SDL_CreateEnvironment

**See also:** SDL_GetEnvironmentVariables

**See also:** SDL_SetEnvironmentVariable

**See also:** SDL_UnsetEnvironmentVariable

**Parameter `env`:** the environment to query.

**Parameter `name`:** the name of the variable to get.

**Returns:** a pointer to the value of the variable or NULL if it can't be
found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40844).
