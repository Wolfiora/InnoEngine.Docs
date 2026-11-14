---
uid: api.40398ccdbde8d2286ebe8c5c18a645980f16972a68a70dbab24d2c21b632b34b
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingSourceRoot.#ctor(System.String,System.String,System.Boolean,System.Boolean)"
source: xml
reviewed: 959c5b10e86356797affedd4604a934dd3fa0ad091bf1eddf57707e5635cf03b
title: "NativeBindingSourceRoot.Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Identifies one component-local root without exposing a generator-specific contract.

## Parameters

**Parameter `id`:** An ordinal identity scoped to this component's selected generation.

**Parameter `directory`:** The checkout-relative or absolute external location; empty for generated output.

**Parameter `generated`:** Whether this root denotes the selected native output directory.

**Parameter `frozen`:** Whether source files must be copied before compilation.
