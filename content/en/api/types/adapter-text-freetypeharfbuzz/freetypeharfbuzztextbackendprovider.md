---
title: "FreeTypeHarfBuzzTextBackendProvider"
description: "Reference for FreeTypeHarfBuzzTextBackendProvider in Inno.Adapter.Text.FreeTypeHarfBuzz."
uid: api.inno.adapter.text.freetypeharfbuzz.0eb247a373bd5fd5
kind: api
owners:
  - Inno.Adapter.Text.FreeTypeHarfBuzz
apiSurface: source-clr
contracts:
  - project.inno-adapter-text-freetypeharfbuzz#backend-lifetime-contract
---
# `FreeTypeHarfBuzzTextBackendProvider`

This reference describes `FreeTypeHarfBuzzTextBackendProvider` in `Inno.Adapter.Text.FreeTypeHarfBuzz`. Read the [shared contract](../../projects/inno-adapter-text-freetypeharfbuzz.md#backend-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Adapter.Text.TextBackendProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9f892dfd0d00cc0d) | Method |
| [`CreateBackend`](#api-4014dd5908b07829) | Method |

## Type declaration

<a id="api-0eb247a373bd5fd5"></a>
<!-- api: T:Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackendProvider 7a1475aebf461f77cf98dcca98a2a27bf4ebcc0e1aa5f2b248a969214255ed18 -->

```csharp
public sealed class Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackendProvider : Inno.Adapter.Text.TextBackendProvider
```

Supplies the FreeTypeHarfBuzz implementation through the neutral text creation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/runtime/Inno.Adapter.Text.FreeTypeHarfBuzz/FreeTypeHarfBuzzTextBackendProvider.cs#L9).

## `#ctor`

<a id="api-9f892dfd0d00cc0d"></a>
<!-- api: M:Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackendProvider.#ctor e5942de34737bfebc84d504b03968b151de1a6398333db658f7e5b9726a63f45 -->

```csharp
public Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackendProvider.FreeTypeHarfBuzzTextBackendProvider()
```

Creates an explicitly composed registration for the bundled implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/runtime/Inno.Adapter.Text.FreeTypeHarfBuzz/FreeTypeHarfBuzzTextBackendProvider.cs#L14).

## `CreateBackend`

<a id="api-4014dd5908b07829"></a>
<!-- api: M:Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackendProvider.CreateBackend 38a87f6e7844c307e251168118163de348971750190bd45953c1d9f80f93ed7b -->

```csharp
public override Inno.Text.ITextBackend Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackendProvider.CreateBackend()
```

Creates a caller-owned text service using this implementation.

**Returns:** A new service owned by the caller; providers must not return null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/runtime/Inno.Adapter.Text.FreeTypeHarfBuzz/FreeTypeHarfBuzzTextBackendProvider.cs#L17).
