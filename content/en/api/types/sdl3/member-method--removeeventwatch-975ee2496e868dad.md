---
title: "SDLContext.RawApi — Method: RemoveEventWatch"
description: "Exact Method: RemoveEventWatch contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.975ee2496e868dad
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RemoveEventWatch

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RemoveEventWatch`

<a id="api-1208127af57b5940"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RemoveEventWatch(,System.Void*) 923d04134458d74463055df9adc4bbde5e3473f014aec731b415b7c820bda0f7 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.RemoveEventWatch(delegate* unmanaged[Cdecl]<void*, Inno.Native.Sdl3.SDLEvent*, byte> filter, void* userdata)
```

Remove an event watch callback added with SDL_AddEventWatch().
This function takes the same input as SDL_AddEventWatch() to identify and
delete the corresponding callback.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AddEventWatch

**Parameter `filter`:** the function originally passed to SDL_AddEventWatch().

**Parameter `userdata`:** the pointer originally passed to SDL_AddEventWatch().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52751).
