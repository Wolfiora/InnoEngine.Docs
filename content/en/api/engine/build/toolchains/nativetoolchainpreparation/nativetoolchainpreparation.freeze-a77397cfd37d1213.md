---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a77397cfd37d1213309c6b5e500cb44d70b62a59c32536dff70494174b20e6a8
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeToolchainPreparation.Freeze(System.String,Inno.Build.Toolchains.BuildHostDescriptor,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},Inno.Build.Toolchains.NativeLinkPlan,System.Boolean,Inno.Build.Toolchains.NativeCompilerInputs)
title: NativeToolchainPreparation.Freeze
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: cbf4c0a60dd064b7057170a850f85eeb8c1a8fe4885c5360d92265f5d86c952d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targetID`:** The explicit requested target.

**Parameter `host`:** The declared tool execution host.

**Parameter `tools`:** Selected executable paths.

**Parameter `environment`:** Isolated child environment.

**Parameter `inputs`:** Selected compiler and SDK inputs.

**Parameter `cmakeArguments`:** Ordered target configuration arguments.

**Parameter `linkPlan`:** The sole source of target library formats and linker capabilities.

**Parameter `multiConfiguration`:** Whether configuration is chosen during build.

**Parameter `compilerInputs`:** The selected SDK parser inputs, or null for a selection without parsing capability.

## Returns

An immutable selection with validated physical tool and SDK inputs.

## Exceptions

**Exception `T:System.IO.FileNotFoundException`:** A selected SDK input or executable is absent.

**Exception `T:System.IO.IOException`:** A selected CMake executable alias cannot be resolved to its installation.
