---
title: "RmlUiIdentifiers"
description: "Reference for RmlUiIdentifiers in Inno.Adapter.UI.RmlUi."
uid: api.inno.adapter.ui.rmlui.1f52b1a212643012
kind: api
owners:
  - Inno.Adapter.UI.RmlUi
apiSurface: source-clr
contracts:
  - project.inno-adapter-ui-rmlui#native-session-and-transfer-contract
---
# `RmlUiIdentifiers`

This reference describes `RmlUiIdentifiers` in `Inno.Adapter.UI.RmlUi`. Read the [shared contract](../../projects/inno-adapter-ui-rmlui.md#native-session-and-transfer-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`backend`](#api-1a3a82d04ccdbe3f) | Property |
| [`documentLanguage`](#api-2630f0d18c97fbe6) | Property |

## Type declaration

<a id="api-1f52b1a212643012"></a>
<!-- api: T:Inno.Adapter.UI.RmlUi.RmlUiIdentifiers 3c4d2a5bc585b399afb3993ef8216e543b0400904b4acaf8b1c46ece54c1108f -->

```csharp
public static class Inno.Adapter.UI.RmlUi.RmlUiIdentifiers
```

Publishes stable identities owned by the bundled RmlUi adapter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiIdentifiers.cs#L9).

## `backend`

<a id="api-1a3a82d04ccdbe3f"></a>
<!-- api: P:Inno.Adapter.UI.RmlUi.RmlUiIdentifiers.backend 8ab638a69d8ddfee1726d0e6021c0d5d44a99d30ad36250dd110da4bf6b77039 -->

```csharp
public static Inno.Adapter.UI.UiBackendId Inno.Adapter.UI.RmlUi.RmlUiIdentifiers.backend { get; }
```

Gets the runtime implementation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiIdentifiers.cs#L14).

## `documentLanguage`

<a id="api-2630f0d18c97fbe6"></a>
<!-- api: P:Inno.Adapter.UI.RmlUi.RmlUiIdentifiers.documentLanguage 455d9e6e7bfe1591b1189f77b68af09f0ee0f8c62a2f50e30f7d6a965f5150a5 -->

```csharp
public static Inno.UI.UiDocumentLanguageId Inno.Adapter.UI.RmlUi.RmlUiIdentifiers.documentLanguage { get; }
```

Gets the RML source-language identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiIdentifiers.cs#L19).
