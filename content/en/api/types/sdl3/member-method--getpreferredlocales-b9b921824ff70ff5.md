---
title: "SDLContext.RawApi — Method: GetPreferredLocales"
description: "Exact Method: GetPreferredLocales contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b9b921824ff70ff5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetPreferredLocales

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPreferredLocales`

<a id="api-e15f38cb5f9708f8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetPreferredLocales(System.Int32*) dd8975d19363a5be13a31ebc896a8d73ce5c312f9e9114f432df7386fcb38427 -->

```csharp
public Inno.Native.Sdl3.SDLLocale** Inno.Native.Sdl3.SDLContext.RawApi.GetPreferredLocales(int* count)
```

Report the user's preferred locale.
Returned language strings are in the format xx, where 'xx' is an ISO-639
language specifier (such as "en" for English, "de" for German, etc).
Country strings are in the format YY, where "YY" is an ISO-3166 country
code (such as "US" for the United States, "CA" for Canada, etc). Country
might be NULL if there's no specific guidance on them (so you might get {
"en", "US" } for American English, but { "en", NULL } means "English
language, generically"). Language strings are never NULL, except to
terminate the array.
Please note that not all of these strings are 2 characters; some are three
or more.
The returned list of locales are in the order of the user's preference. For
example, a German citizen that is fluent in US English and knows enough
Japanese to navigate around Tokyo might have a list like: { "de", "en_US",
"jp", NULL }. Someone from England might prefer British English (where
"color" is spelled "colour", etc), but will settle for anything like it: {
"en_GB", "en", NULL }.
This function returns NULL on error, including when the platform does not
supply this information at all.
This might be a "slow" call that has to query the operating system. It's
best to ask for this once and save the results. However, this list can
change, usually because the user has changed a system preference outside of
your program; SDL will send an SDL_EVENT_LOCALE_CHANGED event in this case,
if possible, and you can call this function again to get an updated copy of
preferred locales.

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `count`:** a pointer filled in with the number of locales returned, may
be NULL.

**Returns:** a NULL terminated array of locale pointers, or NULL on failure;
call SDL_GetError() for more information. This is a single
allocation that should be freed with SDL_free() when it is no
longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46591).
