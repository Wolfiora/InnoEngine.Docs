---
uid: api.a980d4e9b09777db249a0612acae5e3a46f8aad5f87e8907a2a596701e60070f
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeToolchainSelection.#ctor(System.String,Inno.Build.Toolchains.BuildHostDescriptor,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},Inno.Build.Toolchains.NativeLinkPlan,System.Boolean,Inno.Build.Toolchains.NativeCompilerInputs)"
source: xml
reviewed: cc396455a395112f1513a934994d15053e03fcb9208a40209b394b2a2dbd477c
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Captures an immutable, explicit compiler and SDK selection supplied by a platform provider.

**Parameter `targetId`:** The exact native target identity.

**Parameter `host`:** The machine on which the selected tools execute.

**Parameter `tools`:** Absolute executable paths indexed by explicit command names.

**Parameter `environment`:** Frozen SDK values applied to owned tools and in-process binding configuration without changing process state.

**Parameter `inputPaths`:** Compiler, SDK and tool files participating in product identity.

**Parameter `cmakeArguments`:** Ordered configuration arguments pinning compiler, generator and SDK.

**Parameter `multiConfiguration`:** Whether configuration is selected during build rather than configure.

**Parameter `linkPlan`:** The sole source of target library formats and linker capabilities.

**Parameter `compilerInputs`:** Explicit SDK parser inputs, or null when no native parser is provided.

**Exception `T:System.ArgumentException`:** The selection is incomplete or has unassigned target facts.

**Exception `T:System.ArgumentNullException`:** A required descriptor or collection is null.

**Exception `T:System.IO.FileNotFoundException`:** A selected executable or SDK input is unavailable before preparation begins.
