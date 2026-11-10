---
title: "SDLContext.RawApi — Method: LockProperties"
description: "Exact Method: LockProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.74e6272419b67292
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LockProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LockProperties`

<a id="api-7208daaf05f97303"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LockProperties(System.UInt32) 07b40d91165733cdab7e92179b699f2a2dce64e4edf09af808f7153272c61a01 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.LockProperties(uint props)
```

Lock a group of properties.
Obtain a multi-threaded lock for these properties. Other threads will wait
while trying to lock these properties until they are unlocked. Properties
must be unlocked before they are destroyed.
The lock is automatically taken when setting individual properties, this
function is only needed when you want to set several properties atomically
or want to guarantee that properties being queried aren't freed in another
thread.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_UnlockProperties

**Parameter `props`:** the properties to lock.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48545).
