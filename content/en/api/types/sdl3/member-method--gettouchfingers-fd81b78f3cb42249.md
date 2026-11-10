---
title: "SDLContext.RawApi — Method: GetTouchFingers"
description: "Exact Method: GetTouchFingers contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fd81b78f3cb42249
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTouchFingers

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTouchFingers`

<a id="api-a45913f6378674ef"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTouchFingers(System.UInt64,System.Int32*) 627da7d1962615e02ca52d5b4db06c56927cb4b12ff210ba6906eaf7244e569e -->

```csharp
public Inno.Native.Sdl3.SDLFinger** Inno.Native.Sdl3.SDLContext.RawApi.GetTouchFingers(ulong touchID, int* count)
```

Get a list of active fingers for a given touch device.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `touchID`:** the ID of a touch device.

**Parameter `count`:** a pointer filled in with the number of fingers returned, can
be NULL.

**Returns:** a NULL terminated array of SDL_Finger pointers or NULL on failure;
call SDL_GetError() for more information. This is a single
allocation that should be freed with SDL_free() when it is no
longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30311).
