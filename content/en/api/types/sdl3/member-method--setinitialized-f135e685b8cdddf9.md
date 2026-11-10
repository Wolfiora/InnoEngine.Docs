---
title: "SDLContext.RawApi — Method: SetInitialized"
description: "Exact Method: SetInitialized contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f135e685b8cdddf9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetInitialized

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetInitialized`

<a id="api-09b6d7549c359ba4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetInitialized(Inno.Native.Sdl3.SDLInitState*,System.Byte) 4a8b51584a7e422d9b01e7cd40750662d46093a08f98b3c3da8ed179b82fa6bd -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetInitialized(Inno.Native.Sdl3.SDLInitState* state, byte initialized)
```

Finish an initialization state transition.
This function sets the status of the passed in state to
`SDL_INIT_STATUS_INITIALIZED` or `SDL_INIT_STATUS_UNINITIALIZED` and allows
any threads waiting for the status to proceed.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ShouldInit

**See also:** SDL_ShouldQuit

**Parameter `state`:** the initialization state to check.

**Parameter `initialized`:** the new initialization state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27703).
