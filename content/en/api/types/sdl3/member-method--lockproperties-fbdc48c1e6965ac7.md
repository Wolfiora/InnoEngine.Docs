---
title: "SDLContext — Method: LockProperties"
description: "Exact Method: LockProperties contracts in SDLContext."
uid: api.inno.native.sdl3.fbdc48c1e6965ac7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: LockProperties

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LockProperties`

<a id="api-23540283f2c2eabf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.LockProperties(System.UInt32) 8e91cc1c2e19628f260b65d8bd40e47e2359ff83ef56386b9856f3efca69e5c7 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.LockProperties(uint props)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15960).
