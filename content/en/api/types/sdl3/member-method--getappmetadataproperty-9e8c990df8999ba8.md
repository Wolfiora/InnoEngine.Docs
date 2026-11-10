---
title: "SDLContext.RawApi — Method: GetAppMetadataProperty"
description: "Exact Method: GetAppMetadataProperty contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9e8c990df8999ba8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAppMetadataProperty

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAppMetadataProperty`

<a id="api-1c2f452225b9a657"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAppMetadataProperty(System.SByte*) d750128d2b0695a8d0c033572b02f4e57477f903ff53a24d2b26960996911553 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetAppMetadataProperty(sbyte* name)
```

Get metadata about your app.
This returns metadata previously set using SDL_SetAppMetadata() or
SDL_SetAppMetadataProperty(). See SDL_SetAppMetadataProperty() for the list
of available properties and their meanings.

**Thread safety:** It is safe to call this function from any thread, although
the string returned is not protected and could potentially be
freed if you call SDL_SetAppMetadataProperty() to set that
property from another thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetAppMetadata

**See also:** SDL_SetAppMetadataProperty

**Parameter `name`:** the name of the metadata property to get.

**Returns:** the current value of the metadata property, or the default if it
is not set, NULL for properties with no default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35199).
