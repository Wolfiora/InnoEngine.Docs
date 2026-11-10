---
title: "SDLContext.RawApi — Method: OpenTitleStorage"
description: "Exact Method: OpenTitleStorage contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.60518e929900d1a5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OpenTitleStorage

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OpenTitleStorage`

<a id="api-e2b3fb5589f6ba07"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OpenTitleStorage(System.SByte*,System.UInt32) e0dd3b0b648ef8e758ca704543f5e906a7cc1dd9a2ad91a52aeb9eba7ccb8c0b -->

```csharp
public Inno.Native.Sdl3.SDLStorage* Inno.Native.Sdl3.SDLContext.RawApi.OpenTitleStorage(sbyte* @override, uint props)
```

Opens up a read-only container for the application's filesystem.
By default, SDL_OpenTitleStorage uses the generic storage implementation.
When the path override is not provided, the generic implementation will use
the output of SDL_GetBasePath as the base path.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CloseStorage

**See also:** SDL_GetStorageFileSize

**See also:** SDL_OpenUserStorage

**See also:** SDL_ReadStorageFile

**Parameter `override`:** a path to override the backend's default title root.

**Parameter `props`:** a property list that may contain backend-specific information.

**Returns:** a title storage container on success or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51832).
