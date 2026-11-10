---
title: "SDLContext.RawApi — Method: DestroyEnvironment"
description: "Exact Method: DestroyEnvironment contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8b2cf82dcdddc8a1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyEnvironment

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyEnvironment`

<a id="api-e1ae5f8e4c3f996d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyEnvironment(Inno.Native.Sdl3.SDLEnvironment*) b294457b92fa3e1d695371c0e7a2567c2859f812a15e9b352eb97b8fe8fb2523 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyEnvironment(Inno.Native.Sdl3.SDLEnvironment* env)
```

Destroy a set of environment variables.

**Thread safety:** It is safe to call this function from any thread, as long as
the environment is no longer in use.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateEnvironment

**Parameter `env`:** the environment to destroy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44257).
