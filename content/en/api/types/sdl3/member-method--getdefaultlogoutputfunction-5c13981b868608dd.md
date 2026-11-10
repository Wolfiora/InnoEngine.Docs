---
title: "SDLContext.RawApi — Method: GetDefaultLogOutputFunction"
description: "Exact Method: GetDefaultLogOutputFunction contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5c13981b868608dd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetDefaultLogOutputFunction

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDefaultLogOutputFunction`

<a id="api-410c998235fe2fe7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetDefaultLogOutputFunction 9dfcd572da3a131f66729be6041a0e83a71287c32b4ceb400ddf6f08ddbda367 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, int, Inno.Native.Sdl3.SDLLogPriority, sbyte*, void> Inno.Native.Sdl3.SDLContext.RawApi.GetDefaultLogOutputFunction()
```

Get the default log output function.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetLogOutputFunction

**See also:** SDL_GetLogOutputFunction

**Returns:** the default log output callback. It should be called with NULL for
the userdata argument.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41209).
