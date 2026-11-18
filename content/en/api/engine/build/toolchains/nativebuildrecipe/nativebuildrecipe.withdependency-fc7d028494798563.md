---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fc7d0284947985636251cf02859187e592cd09d514648a24cdb7ef28818b71d6
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildRecipe.WithDependency(Inno.Build.Toolchains.NativeBuildInput,System.String)
title: NativeBuildRecipe.WithDependency
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 71b08c2b7bbe7477f1db66b107a31733479d2de6be7073e36e9ced50c8ad6720
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `input`:** The dependency file whose bytes participate in compilation.

**Parameter `fingerprint`:** The immutable dependency artifact identity selected by the product.

## Returns

A new declaration with the dependency input and identity; this recipe is unchanged.

## Exceptions

**Exception `T:System.ArgumentException`:** The dependency identity is empty.

**Exception `T:System.ArgumentNullException`:** The input is null.
