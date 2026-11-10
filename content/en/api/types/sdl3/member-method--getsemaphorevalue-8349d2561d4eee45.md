---
title: "SDLContext.RawApi — Method: GetSemaphoreValue"
description: "Exact Method: GetSemaphoreValue contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8349d2561d4eee45
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSemaphoreValue

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSemaphoreValue`

<a id="api-5c4ce3fc760f0cab"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSemaphoreValue(Inno.Native.Sdl3.SDLSemaphore*) 68f6509096c388e2d473b31c50f326c8a1927a6d4267df977de1d7a5ddfa2c8f -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetSemaphoreValue(Inno.Native.Sdl3.SDLSemaphore* sem)
```

Get the current value of a semaphore.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `sem`:** the semaphore to query.

**Returns:** the current value of the semaphore.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33538).
