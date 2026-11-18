---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a77397cfd37d1213309c6b5e500cb44d70b62a59c32536dff70494174b20e6a8
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeToolchainPreparation.Freeze(System.String,Inno.Build.Toolchains.BuildHostDescriptor,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},Inno.Build.Toolchains.NativeLinkPlan,System.Boolean,Inno.Build.Toolchains.NativeCompilerInputs)
title: NativeToolchainPreparation.Freeze
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 3783fab8f55b81b9bd3aa978808281905e3a24b63c13a7b9e99c2348349fa2d3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targetId`:** The explicit requested target.

**Parameter `host`:** The declared tool execution host.

**Parameter `tools`:** Selected executable paths.

**Parameter `environment`:** Isolated child environment.

**Parameter `inputs`:** Selected compiler and SDK inputs.

**Parameter `cmakeArguments`:** Ordered target configuration arguments.

**Parameter `multiConfiguration`:** Whether configuration is chosen during build.

**Parameter `linkPlan`:** The sole source of target library formats and linker capabilities.

**Parameter `compilerInputs`:** The selected SDK parser inputs, or null for a selection without parsing capability.

## Returns

An immutable selection with validated physical tool and SDK inputs.

## Exceptions

**Exception `T:System.IO.FileNotFoundException`:** A selected SDK input or executable is absent.
