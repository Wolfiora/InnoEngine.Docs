---
title: "SDLContext.RawApi — Method: CreateEnvironment"
description: "Exact Method: CreateEnvironment contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2e7cf404b4469420
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateEnvironment

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateEnvironment`

<a id="api-193a1a7c8b111f33"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateEnvironment(System.Byte) 0d16ce6e931acc34cdb67795affc6506d0b6aba61b5169f37dae119fea9a33e4 -->

```csharp
public Inno.Native.Sdl3.SDLEnvironment* Inno.Native.Sdl3.SDLContext.RawApi.CreateEnvironment(byte populated)
```

Create a set of environment variables

**Thread safety:** If `populated` is false, it is safe to call this function
from any thread, otherwise it is safe if no other threads are
calling setenv() or unsetenv()

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetEnvironmentVariable

**See also:** SDL_GetEnvironmentVariables

**See also:** SDL_SetEnvironmentVariable

**See also:** SDL_UnsetEnvironmentVariable

**See also:** SDL_DestroyEnvironment

**Parameter `populated`:** true to initialize it from the C runtime environment,
false to create an empty environment.

**Returns:** a pointer to the new environment or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37693).
