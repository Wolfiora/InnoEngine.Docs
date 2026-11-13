---
uid: api.4308341d90f7cbe13c882d0ab06b6bda88637de276b6e458ad9a9f35852f8d7e
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeComponentBuildOptions.#ctor(Inno.Build.Toolchains.NativeLibraryKind,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.String,System.Collections.Generic.IEnumerable{System.String},Inno.Build.Toolchains.NativeLinkPlan)"
source: xml
reviewed: ea3679262c6ed813cc7692f51c0fcb9fd8ca5885bd002f12ea9c082e0eb8d7f0
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Captures component configuration without selecting an SDK or starting a build.

**Parameter `libraryKind`:** The explicitly requested linkage; a recipe must support it before execution starts.

**Parameter `cmakeArguments`:** Ordered, unique CMake definitions belonging to this component, excluding SDK and linkage selection.

**Parameter `inputPaths`:** Portable checkout-relative configuration files included in content hashing and stability checks.

**Parameter `linkPlan`:** Component-specific platform link settings, or null for the selected SDK plan.

**Parameter `bindingLibraryName`:** The explicit native import identity, or null to retain the component identity.

**Parameter `bindingIncludeDirectories`:** Additional checkout-relative binding headers owned by an integration.

**Exception `T:System.ArgumentException`:** Linkage is invalid, definitions are ambiguous or override SDK selection, or an input escapes the checkout.
