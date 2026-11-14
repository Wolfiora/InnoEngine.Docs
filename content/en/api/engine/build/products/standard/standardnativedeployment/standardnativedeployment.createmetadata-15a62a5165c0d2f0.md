---
uid: api.15a62a5165c0d2f0154b564c72d50c2de84a4fe2a85119cd8fd0eb8d88cd72e7
symbol: "engine:Inno.Build.Products.Standard:M:Inno.Build.Products.Standard.StandardNativeDeployment.CreateMetadata(System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeBuildProduct},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})"
source: xml
reviewed: f964cd0cbd175683b6bc1fb93b94aee7ca624935b113a517f3fa8a64ca04df61
title: "StandardNativeDeployment.CreateMetadata"
kind: api
owners: [Inno.Build.Products.Standard]
apiSurface: source-clr
---

Encodes the exact runtime payload selected by the platform layout.

## Parameters

**Parameter `products`:** The validated product closure.

**Parameter `payloads`:** The exact destination mapping.

## Returns

Native loading metadata for the complete closure.
