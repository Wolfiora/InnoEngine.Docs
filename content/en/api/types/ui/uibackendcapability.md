---
title: "UiBackendCapability"
description: "Reference for UiBackendCapability in Inno.UI."
uid: api.inno.ui.183d6257c3a3ee38
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiBackendCapability`

This reference describes `UiBackendCapability` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`FontCollectionFaceSelection`](#api-99b56aa279c0a45e) | Field |

## Type declaration

<a id="api-183d6257c3a3ee38"></a>
<!-- api: T:Inno.UI.UiBackendCapability 3550c9a0c8ef4f7cdf832044dd514289a1d30dea560c1cb3f6c39be58cfea6bf -->

```csharp
public enum Inno.UI.UiBackendCapability : int
```

Identifies an optional backend behavior requested by a caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiBackendCapabilities.cs#L61).

## `FontCollectionFaceSelection`

<a id="api-99b56aa279c0a45e"></a>
<!-- api: F:Inno.UI.UiBackendCapability.FontCollectionFaceSelection c3fd04a3abd4db3cbf27bd59082b7581e7c64d1b9a930f3a5fd2530f7642b437 -->

```csharp
Inno.UI.UiBackendCapability.FontCollectionFaceSelection = 0
```

Selecting an explicit face from a font collection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiBackendCapabilities.cs#L66).
