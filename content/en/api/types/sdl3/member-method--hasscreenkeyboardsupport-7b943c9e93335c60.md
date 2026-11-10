---
title: "SDLContext.RawApi — Method: HasScreenKeyboardSupport"
description: "Exact Method: HasScreenKeyboardSupport contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7b943c9e93335c60
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasScreenKeyboardSupport

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasScreenKeyboardSupport`

<a id="api-8ce3b1063e0c8afb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasScreenKeyboardSupport 153bb1c171def4382ab03190e17b9cf8936ca5267f5b057b55046e867f8476aa -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasScreenKeyboardSupport()
```

Check whether the platform has screen keyboard support.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_StartTextInput

**See also:** SDL_ScreenKeyboardShown

**Returns:** true if the platform has some screen keyboard support or false if
not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25515).
