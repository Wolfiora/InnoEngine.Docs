---
title: "SDLContext — Method: HasScreenKeyboardSupport"
description: "Exact Method: HasScreenKeyboardSupport contracts in SDLContext."
uid: api.inno.native.sdl3.bacdcebd5c27dab7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasScreenKeyboardSupport

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasScreenKeyboardSupport`

<a id="api-58aad1c54e2998da"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasScreenKeyboardSupport e382387a0530fb1ccbfeda10a23747c360a33971be950875b6f03ba1f8bb4bbb -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasScreenKeyboardSupport()
```

Check whether the platform has screen keyboard support.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_StartTextInput

**See also:** SDL_ScreenKeyboardShown

**Returns:** true if the platform has some screen keyboard support or false if
not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12753).
