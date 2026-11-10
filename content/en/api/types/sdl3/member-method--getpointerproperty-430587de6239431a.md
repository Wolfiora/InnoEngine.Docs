---
title: "SDLContext.RawApi — Method: GetPointerProperty"
description: "Exact Method: GetPointerProperty contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.430587de6239431a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetPointerProperty

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPointerProperty`

<a id="api-8e91863cdbff9490"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetPointerProperty(System.UInt32,System.SByte*,System.Void*) cd253708291907604a3a21daf18d6c7c379a3bba9b18c789c35256e4ca9e207c -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.GetPointerProperty(uint props, sbyte* name, void* default_value)
```

Get a pointer property from a group of properties.
By convention, the names of properties that SDL exposes on objects will
start with "SDL.", and properties that SDL uses internally will start with
"SDL.internal.". These should be considered read-only and should not be
modified by applications.

**Thread safety:** It is safe to call this function from any thread, although
the data returned is not protected and could potentially be
freed if you call SDL_SetPointerProperty() or
SDL_ClearProperty() on these properties from another thread.
If you need to avoid this, use SDL_LockProperties() and
SDL_UnlockProperties().

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetBooleanProperty

**See also:** SDL_GetFloatProperty

**See also:** SDL_GetNumberProperty

**See also:** SDL_GetPropertyType

**See also:** SDL_GetStringProperty

**See also:** SDL_HasProperty

**See also:** SDL_SetPointerProperty

**Parameter `props`:** the properties to query.

**Parameter `name`:** the name of the property to query.

**Parameter `default_value`:** the default value of the property.

**Returns:** the value of the property, or `default_value` if it is not set or
not a pointer property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23508).
