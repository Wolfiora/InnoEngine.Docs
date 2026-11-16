---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7448410561954a95744f72caeb5aff80870e3bec7741d892ec1dc542fdf2a9a2
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Build.Composition.GameBuildContribution},System.Collections.Generic.IReadOnlyList{Inno.Build.Managed.IManagedDeploymentCompiler},System.Collections.Generic.IReadOnlyList{Inno.Build.Composition.NativeToolchainContribution})
title: BuildDistribution.Constructor
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
reviewed: 751d5d1fd096c21a08855ec2eca5bddc46e02351e0efe007ccaec5c4feb7e810
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `games`:** Complete target contributions with explicitly bound factories, sources and SDK providers.

**Parameter `managedCompilers`:** The deployment implementations owned by this composition.

**Parameter `nativeOnlyContributions`:** Additional implemented SDK capabilities that do not register game publication targets.

## Exceptions

**Exception `T:System.ArgumentNullException`:** A required collection is null.

**Exception `T:System.ArgumentException`:** Contributions are empty, null, duplicated, or unassigned.
