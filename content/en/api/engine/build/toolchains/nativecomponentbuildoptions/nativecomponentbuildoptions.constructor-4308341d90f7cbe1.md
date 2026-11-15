---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4308341d90f7cbe13c882d0ab06b6bda88637de276b6e458ad9a9f35852f8d7e
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeComponentBuildOptions.#ctor(Inno.Build.Toolchains.NativeLibraryKind,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.String,System.Collections.Generic.IEnumerable{System.String},Inno.Build.Toolchains.NativeLinkPlan)
title: NativeComponentBuildOptions.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 2df3f10c01280fcea8b04818a8e9399ad45e42ccb99c682692489344a263dad6

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `libraryKind`:** The explicitly requested linkage; a recipe must support it before execution starts.

**Parameter `cmakeArguments`:** Ordered, unique CMake definitions belonging to this component, excluding SDK and linkage selection.

**Parameter `inputPaths`:** Portable checkout-relative configuration files included in content hashing and stability checks.

**Parameter `linkPlan`:** Component-specific platform link settings, or null for the selected SDK plan.

**Parameter `bindingLibraryName`:** The explicit native import identity, or null to retain the component identity.

**Parameter `bindingIncludeDirectories`:** Additional checkout-relative binding headers owned by an integration.

## Exceptions

**Exception `T:System.ArgumentException`:** Linkage is invalid, definitions are ambiguous or override SDK selection, or an input escapes the checkout.
