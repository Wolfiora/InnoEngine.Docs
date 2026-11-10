---
title: "SDLContext.RawApi — Method: SetAppMetadataProperty"
description: "Exact Method: SetAppMetadataProperty contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.122fd20bc354278e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetAppMetadataProperty

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetAppMetadataProperty`

<a id="api-1011c6cb02e354fb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetAppMetadataProperty(System.SByte*,System.SByte*) 8e4d93686371de964a898402c2ad317406fe582f77eee8fc74e54ff20c320c8e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetAppMetadataProperty(sbyte* name, sbyte* value)
```

Specify metadata about your app through a set of properties.
You can optionally provide metadata about your app to SDL. This is not
required, but strongly encouraged.
There are several locations where SDL can make use of metadata (an "About"
box in the macOS menu bar, the name of the app can be shown on some audio
mixers, etc). Any piece of metadata can be left out, if a specific detail
doesn't make sense for the app.
This function should be called as early as possible, before SDL_Init.
Multiple calls to this function are allowed, but various state might not
change once it has been set up with a previous call to this function.
Once set, this metadata can be read using SDL_GetAppMetadataProperty().
These are the supported properties:
- `SDL_PROP_APP_METADATA_NAME_STRING`: The human-readable name of the
application, like "My Game 2: Bad Guy's Revenge!". This will show up
anywhere the OS shows the name of the application separately from window
titles, such as volume control applets, etc. This defaults to "SDL
Application".
- `SDL_PROP_APP_METADATA_VERSION_STRING`: The version of the app that is
running; there are no rules on format, so "1.0.3beta2" and "April 22nd,
2024" and a git hash are all valid options. This has no default.
- `SDL_PROP_APP_METADATA_IDENTIFIER_STRING`: A unique string that
identifies this app. This must be in reverse-domain format, like
"com.example.mygame2". This string is used by desktop compositors to
identify and group windows together, as well as match applications with
associated desktop settings and icons. If you plan to package your
application in a container such as Flatpak, the app ID should match the
name of your Flatpak container as well. This has no default.
- `SDL_PROP_APP_METADATA_CREATOR_STRING`: The human-readable name of the
creator/developer/maker of this app, like "MojoWorkshop, LLC"
- `SDL_PROP_APP_METADATA_COPYRIGHT_STRING`: The human-readable copyright
notice, like "Copyright (c) 2024 MojoWorkshop, LLC" or whatnot. Keep this
to one line, don't paste a copy of a whole software license in here. This
has no default.
- `SDL_PROP_APP_METADATA_URL_STRING`: A URL to the app on the web. Maybe a
product page, or a storefront, or even a GitHub repository, for user's
further information This has no default.
- `SDL_PROP_APP_METADATA_TYPE_STRING`: The type of application this is.
Currently this string can be "game" for a video game, "mediaplayer" for a
media player, or generically "application" if nothing else applies.
Future versions of SDL might add new types. This defaults to
"application".

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetAppMetadataProperty

**See also:** SDL_SetAppMetadata

**Parameter `name`:** the name of the metadata property to set.

**Parameter `value`:** the value of the property, or NULL to remove that property.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32536).
