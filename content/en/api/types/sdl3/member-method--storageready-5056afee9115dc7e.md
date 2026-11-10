---
title: "SDLContext.RawApi — Method: StorageReady"
description: "Exact Method: StorageReady contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5056afee9115dc7e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: StorageReady

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `StorageReady`

<a id="api-69ec0b4b2f861209"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.StorageReady(Inno.Native.Sdl3.SDLStorage*) 5cebf90683b98f05aebb86066f96d53d7bfda6b36a56924bebafc0e4a8787cb6 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.StorageReady(Inno.Native.Sdl3.SDLStorage* storage)
```

Checks if the storage container is ready to use.
This function should be called in regular intervals until it returns true -
however, it is not recommended to spinwait on this call, as the backend may
depend on a synchronous message loop. You might instead poll this in your
game's main loop while processing events and drawing a loading screen.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `storage`:** a storage container to query.

**Returns:** true if the container is ready, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39554).
