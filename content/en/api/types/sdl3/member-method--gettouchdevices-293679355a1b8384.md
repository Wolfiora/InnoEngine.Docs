---
title: "SDLContext.RawApi — Method: GetTouchDevices"
description: "Exact Method: GetTouchDevices contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.293679355a1b8384
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTouchDevices

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTouchDevices`

<a id="api-2029919cddef3dc5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTouchDevices(System.Int32*) e3e1d247213e2fecb34bb9381c82803e55ae7c0184ab3850a5858617b3a76104 -->

```csharp
public ulong* Inno.Native.Sdl3.SDLContext.RawApi.GetTouchDevices(int* count)
```

Get a list of registered touch devices.
On some platforms SDL first sees the touch device if it was actually used.
Therefore the returned list might be empty, although devices are available.
After using all devices at least once the number will be correct.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `count`:** a pointer filled in with the number of devices returned, may
be NULL.

**Returns:** a 0 terminated array of touch device IDs or NULL on failure; call
SDL_GetError() for more information. This should be freed with
SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35100).
