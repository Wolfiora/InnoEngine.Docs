---
title: "SDLContext.RawApi — Method: CloseStorage"
description: "Exact Method: CloseStorage contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.62d31897b73a255e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CloseStorage

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CloseStorage`

<a id="api-817da19403e1df15"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CloseStorage(Inno.Native.Sdl3.SDLStorage*) c2fddbd44f3f85c8d604927f36f8647f4ea8c17fb9e674c733c62fd611e3af8d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.CloseStorage(Inno.Native.Sdl3.SDLStorage* storage)
```

Closes and frees a storage container.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenFileStorage

**See also:** SDL_OpenStorage

**See also:** SDL_OpenTitleStorage

**See also:** SDL_OpenUserStorage

**Parameter `storage`:** a storage container to close.

**Returns:** true if the container was freed with no errors, false otherwise;
call SDL_GetError() for more information. Even if the function
returns an error, the container data will be freed; the error is
only for informational purposes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20121).
