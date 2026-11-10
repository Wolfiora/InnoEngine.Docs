---
title: "SDLContext.RawApi — Method: GetTls"
description: "Exact Method: GetTls contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1fe66a539e69f0ea
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTls

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTls`

<a id="api-a722beaae823ea7d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTls(Inno.Native.Sdl3.SDLAtomicInt*) acb5c63a32138477da524111e3d4df4784c35b836d63cbb43e456f65186c96d7 -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.GetTls(Inno.Native.Sdl3.SDLAtomicInt* id)
```

Get the current thread's value associated with a thread local storage ID.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetTLS

**Parameter `id`:** a pointer to the thread local storage ID, may not be NULL.

**Returns:** the value associated with the ID for the current thread or NULL if
no value has been set; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36724).
