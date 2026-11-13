---
uid: api.fc7d0284947985636251cf02859187e592cd09d514648a24cdb7ef28818b71d6
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildRecipe.WithDependency(Inno.Build.Toolchains.NativeBuildInput,System.String)"
source: xml
reviewed: 7a338eb0aea8eadfda230b734b971f73b0719e1e1cc8f8ea3f813c694419bc2e
title: "WithDependency"
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
