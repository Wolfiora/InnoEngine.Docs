---
title: "SDLContext.RawApi — Method: ShouldInit"
description: "Exact Method: ShouldInit contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.023d290013447d27
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ShouldInit

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ShouldInit`

<a id="api-8d4f2bfe29867e19"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ShouldInit(Inno.Native.Sdl3.SDLInitState*) b2f5cf328a6a4eb96d0632883ea8a9fea1f0986f6b232d415995af2cd83bb151 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ShouldInit(Inno.Native.Sdl3.SDLInitState* state)
```

Return whether initialization should be done.
This function checks the passed in state and if initialization should be
done, sets the status to `SDL_INIT_STATUS_INITIALIZING` and returns true.
If another thread is already modifying this state, it will wait until
that's done before returning.
If this function returns true, the calling code must call
SDL_SetInitialized() to complete the initialization.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetInitialized

**See also:** SDL_ShouldQuit

**Parameter `state`:** the initialization state to check.

**Returns:** true if initialization needs to be done, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41313).
