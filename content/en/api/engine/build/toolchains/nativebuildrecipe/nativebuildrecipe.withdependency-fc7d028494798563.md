---
uid: api.fc7d0284947985636251cf02859187e592cd09d514648a24cdb7ef28818b71d6
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildRecipe.WithDependency(Inno.Build.Toolchains.NativeBuildInput,System.String)"
source: xml
reviewed: 8a6264ec4f08b9f0aca5ddb8f4d274b6963100cb7b3ba2817472edc1aa826582
title: "NativeBuildRecipe.WithDependency"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Adds one explicitly selected published dependency while preserving the recipe's frozen execution tools.

**Parameter `input`:** The dependency file whose bytes participate in compilation.

**Parameter `fingerprint`:** The immutable dependency artifact identity selected by the product.

**Returns:** A new declaration with the dependency input and identity; this recipe is unchanged.

**Exception `T:System.ArgumentException`:** The dependency identity is empty.

**Exception `T:System.ArgumentNullException`:** The input is null.
