---
title: "SDLContext — Method: SetModState"
description: "Exact Method: SetModState contracts in SDLContext."
uid: api.inno.native.sdl3.91d65a75450d30ee
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: SetModState

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetModState`

<a id="api-9e2be3bacb7793d1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.SetModState(Inno.Native.Sdl3.SDLKeymod) 1fdf9ac58fb452454e416d7f8b2aaedae48e58dd041d758663e20254203826f1 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.SetModState(Inno.Native.Sdl3.SDLKeymod modstate)
```

Set the current key modifier state for the keyboard.
The inverse of SDL_GetModState(), SDL_SetModState() allows you to impose
modifier key states on your application. Simply pass your desired modifier
states into `modstate`. This value may be a bitwise, OR'd combination of
SDL_Keymod values.
This does not change the keyboard state, only the key modifier flags that
SDL reports.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetModState

**Parameter `modstate`:** the desired SDL_Keymod for the keyboard.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15458).
