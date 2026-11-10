---
title: "SDLContext.RawApi — Method: GetMice"
description: "Exact Method: GetMice contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.effd60b733941c29
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetMice

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetMice`

<a id="api-0985cef3be1f6938"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetMice(System.Int32*) 233f140da08e139ec804e0821ef63c5c07a5cfb6d776b1c598c7243246bc601d -->

```csharp
public uint* Inno.Native.Sdl3.SDLContext.RawApi.GetMice(int* count)
```

Get a list of currently connected mice.
Note that this will include any device or virtual driver that includes
mouse functionality, including some game controllers, KVM switches, etc.
You should wait for input from a device before you consider it actively in
use.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetMouseNameForID

**See also:** SDL_HasMouse

**Parameter `count`:** a pointer filled in with the number of mice returned, may be
NULL.

**Returns:** a 0 terminated array of mouse instance IDs or NULL on failure;
call SDL_GetError() for more information. This should be freed
with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25326).
