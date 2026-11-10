---
title: "SDLContext.RawApi — Method: OpenUrl"
description: "Exact Method: OpenUrl contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4d354d4ace43eaaa
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OpenUrl

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OpenUrl`

<a id="api-24cf0a7d82eb342a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OpenUrl(System.SByte*) 811d5dc799d4a63c3da8339f1a8e6116db88f2b277e94fa685016c4630cbcc3c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.OpenUrl(sbyte* url)
```

Open a URL/URI in the browser or other appropriate external application.
Open a URL in a separate, system-provided application. How this works will
vary wildly depending on the platform. This will likely launch what makes
sense to handle a specific URL's protocol (a web browser for `http://`,
etc), but it might also be able to launch file managers for directories and
other things.
What happens when you open a URL varies wildly as well: your game window
may lose focus (and may or may not lose focus if your game was fullscreen
or grabbing input at the time). On mobile devices, your app will likely
move to the background or your process might be paused. Any given platform
may or may not handle a given URL.
If this is unimplemented (or simply unavailable) for a platform, this will
fail with an error. A successful result does not mean the URL loaded, just
that we launched _something_ to handle it (or at least believe we did).
All this to say: this function can be useful, but you should definitely
test it on every platform you target.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `url`:** a valid URL/URI to open. Use `file:///full/path/to/file` for
local files, if supported.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37869).
