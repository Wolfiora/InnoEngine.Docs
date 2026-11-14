---
uid: api.09694a67eed8474cb1241e895227ca59f822209bda6334c9616082c727e9c8d5
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingGenerationRequest.#ctor(System.Collections.Generic.IEnumerable{Inno.Build.Toolchains.NativeComponentDescriptor},System.String,Inno.Build.Toolchains.NativeBindingOutputMode,System.Boolean,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions})"
source: xml
reviewed: e6f8c54cf061ce8ec3ffa2323d7f56e9db898a317b30b4109ddefa0ae2d96883
title: "NativeBindingGenerationRequest.Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Captures explicit owners and a target without discovering components or parsing a build project.

## Parameters

**Parameter `components`:** The component owners, each declaring one binding definition.

**Parameter `targetId`:** The target identity selecting a declared configuration; host output uses the host definition.

**Parameter `outputMode`:** Whether to write authored host sources or isolated target artifacts.

**Parameter `checkOnly`:** Whether to compare complete output without publishing a candidate.

**Parameter `expectedFingerprints`:** Optional expected identities indexed by Native project; mismatches reject the request.

**Parameter `componentOptions`:** Explicit component configurations keyed by native owner project, or null for component defaults.

## Exceptions

**Exception `T:System.ArgumentException`:** A target, owner, output mode or expected identity is invalid or duplicated.
