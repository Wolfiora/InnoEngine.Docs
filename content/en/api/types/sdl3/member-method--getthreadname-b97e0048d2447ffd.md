---
title: "SDLContext.RawApi — Method: GetThreadName"
description: "Exact Method: GetThreadName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b97e0048d2447ffd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetThreadName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetThreadName`

<a id="api-2b9d53f41f5be443"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetThreadName(Inno.Native.Sdl3.SDLThread*) 86dc9f34ffa34144a123fb3592d47750a3acbb2a7f1a2e4ef322ea48a8f59b65 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetThreadName(Inno.Native.Sdl3.SDLThread* thread)
```

Get the thread name as it was specified in SDL_CreateThread().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `thread`:** the thread to query.

**Returns:** a pointer to a UTF-8 string that names the specified thread, or
NULL if it doesn't have a name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24366).
