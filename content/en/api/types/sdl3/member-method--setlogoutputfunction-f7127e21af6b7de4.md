---
title: "SDLContext.RawApi — Method: SetLogOutputFunction"
description: "Exact Method: SetLogOutputFunction contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f7127e21af6b7de4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetLogOutputFunction

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetLogOutputFunction`

<a id="api-a32618b77cd9844e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetLogOutputFunction(,System.Void*) 1c3e6931f0e6f5e74df27d3d047be1643bcda66016621760392c9888274a0ff7 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetLogOutputFunction(delegate* unmanaged[Cdecl]<void*, int, Inno.Native.Sdl3.SDLLogPriority, sbyte*, void> callback, void* userdata)
```

Replace the default log output function with one of your own.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDefaultLogOutputFunction

**See also:** SDL_GetLogOutputFunction

**Parameter `callback`:** an SDL_LogOutputFunction to call instead of the default.

**Parameter `userdata`:** a pointer that is passed to `callback`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30763).
